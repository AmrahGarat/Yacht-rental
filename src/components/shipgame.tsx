import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import yachtImage from "@/assets/icons/yacht.png";
import iceberg1 from "@/assets/icons/iceberg.png";
import iceberg2 from "@/assets/icons/iceberg-2.png";
import iceberg3 from "@/assets/icons/iceberg-3.png";

const OceanGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const animationFrameRef = useRef<number>(0);
  const lastObstacleTimeRef = useRef<number>(0);

  // Game constants - SMALLER SIZES
  const SHIP_WIDTH = 50; // Reduced from 80
  const SHIP_HEIGHT = 60; // Reduced from 100
  const SHIP_SPEED = 8;
  const BASE_OBSTACLE_SPEED = 2;
  const CANVAS_WIDTH = 400;
  const CANVAS_HEIGHT = 500;

  // Game state
  const [shipX, setShipX] = useState(CANVAS_WIDTH / 2 - SHIP_WIDTH / 2);
  const [shipY, setShipY] = useState(CANVAS_HEIGHT - SHIP_HEIGHT - 20);
  const [obstacles, setObstacles] = useState<
    Array<{
      x: number;
      y: number;
      width: number;
      height: number;
      type: number;
    }>
  >([]);
  const [obstacleSpeed, setObstacleSpeed] = useState(BASE_OBSTACLE_SPEED);

  // Game images
  const shipImageRef = useRef<HTMLImageElement | null>(null);
  const obstacleImagesRef = useRef<HTMLImageElement[]>([]);

  // Load assets
  useEffect(() => {
    // Load yacht image
    const shipImg = new Image();
    shipImg.src = yachtImage;
    shipImageRef.current = shipImg;

    // Load iceberg images
    const icebergImages = [iceberg1, iceberg2, iceberg3];
    const loadedImages = icebergImages.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    obstacleImagesRef.current = loadedImages;
  }, []);

  // Start Game
  const startGame = useCallback(() => {
    setIsGameOver(false);
    setScore(0);
    setShipX(CANVAS_WIDTH / 2 - SHIP_WIDTH / 2);
    setShipY(CANVAS_HEIGHT - SHIP_HEIGHT - 20);
    setObstacles([]);
    setObstacleSpeed(BASE_OBSTACLE_SPEED);
    setIsGameStarted(true);
    setIsPaused(false);
    lastObstacleTimeRef.current = 0;
  }, []);

  // Draw ocean waves
  const drawWaves = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#0066cc";
    ctx.beginPath();
    ctx.moveTo(0, CANVAS_HEIGHT);

    // Draw wavy ocean surface
    for (let x = 0; x <= CANVAS_WIDTH; x += 20) {
      const y = CANVAS_HEIGHT - 20 + Math.sin(x / 30 + Date.now() / 1000) * 5;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.closePath();
    ctx.fill();

    // Add wave highlights
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x <= CANVAS_WIDTH; x += 40) {
      const y = CANVAS_HEIGHT - 15 + Math.sin(x / 25 + Date.now() / 800) * 4;
      ctx.moveTo(x, y);
      ctx.lineTo(x + 20, y + 2);
    }
    ctx.stroke();
  };

  // Game Loop
  const gameLoop = useCallback(
    (timestamp: number) => {
      if (!isGameStarted || isPaused) {
        animationFrameRef.current = requestAnimationFrame(gameLoop);
        return;
      }

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Clear canvas with sky gradient
      const skyGradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
      skyGradient.addColorStop(0, "#87CEEB");
      skyGradient.addColorStop(1, "#1E90FF");
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ocean
      drawWaves(ctx);

      // Draw ship
      if (shipImageRef.current?.complete) {
        ctx.drawImage(
          shipImageRef.current,
          shipX,
          shipY,
          SHIP_WIDTH,
          SHIP_HEIGHT
        );
      } else {
        // Fallback: simple boat shape
        ctx.fillStyle = "#006600";
        ctx.beginPath();
        ctx.moveTo(shipX + SHIP_WIDTH / 2, shipY);
        ctx.lineTo(shipX, shipY + SHIP_HEIGHT);
        ctx.lineTo(shipX + SHIP_WIDTH, shipY + SHIP_HEIGHT);
        ctx.closePath();
        ctx.fill();
      }

      // Move obstacles (icebergs)
      const newObstacles = obstacles.map((obs) => ({
        ...obs,
        y: obs.y + obstacleSpeed,
      }));

      // Remove obstacles that are off the screen
      const filteredObstacles = newObstacles.filter(
        (obs) => obs.y < canvas.height
      );
      setObstacles(filteredObstacles);

      // Draw obstacles - SMALLER ICEBERGS
      filteredObstacles.forEach((obs) => {
        const img =
          obstacleImagesRef.current[
            obs.type % obstacleImagesRef.current.length
          ];
        if (img?.complete) {
          // Maintain aspect ratio but make icebergs smaller
          const aspectRatio = img.width / img.height;
          const drawWidth = Math.min(obs.width, 50); // Max width 50px
          const drawHeight = drawWidth / aspectRatio;
          ctx.drawImage(img, obs.x, obs.y, drawWidth, drawHeight);
        } else {
          // Fallback: simple iceberg shape
          ctx.fillStyle = "#d1e8ff";
          ctx.beginPath();
          ctx.moveTo(obs.x + obs.width / 2, obs.y);
          ctx.lineTo(obs.x, obs.y + obs.height);
          ctx.lineTo(obs.x + obs.width, obs.y + obs.height);
          ctx.closePath();
          ctx.fill();
        }
      });

      // Check for collisions
      filteredObstacles.forEach((obs) => {
        const img =
          obstacleImagesRef.current[
            obs.type % obstacleImagesRef.current.length
          ];
        const obsWidth = img?.complete ? Math.min(obs.width, 50) : obs.width;
        const obsHeight = img?.complete
          ? obsWidth / (img.width / img.height)
          : obs.height;

        if (
          shipX < obs.x + obsWidth &&
          shipX + SHIP_WIDTH > obs.x &&
          shipY < obs.y + obsHeight &&
          shipY + SHIP_HEIGHT > obs.y
        ) {
          setIsGameOver(true);
          setIsGameStarted(false);
          if (score > highScore) {
            setHighScore(score);
          }
        }
      });

      // Generate new icebergs - SMALLER AND MORE FREQUENT
      if (
        timestamp - lastObstacleTimeRef.current >
        1200 - Math.min(score * 4, 300)
      ) {
        const width = Math.random() * 30 + 30; // Smaller range: 30-60px
        const x = Math.random() * (canvas.width - width);
        const type = Math.floor(Math.random() * 3);

        setObstacles((prev) => [
          ...prev,
          { x, y: -60, width, height: 60, type }, // Smaller initial height
        ]);
        lastObstacleTimeRef.current = timestamp;
      }

      // Slightly slower difficulty increase
      setObstacleSpeed(BASE_OBSTACLE_SPEED + Math.floor(score / 800));

      // Increase score over time
      if (!isGameOver) {
        setScore((prev) => prev + 1);
      }

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    },
    [
      isGameStarted,
      isPaused,
      obstacles,
      shipX,
      shipY,
      score,
      highScore,
      obstacleSpeed,
    ]
  );

  // Handle ship movement
  const moveShip = useCallback(
    (e: KeyboardEvent) => {
      if (!isGameStarted || isPaused) return;

      switch (e.key) {
        case "ArrowLeft":
          setShipX((prev) => Math.max(0, prev - SHIP_SPEED));
          break;
        case "ArrowRight":
          setShipX((prev) =>
            Math.min(CANVAS_WIDTH - SHIP_WIDTH, prev + SHIP_SPEED)
          );
          break;
        default:
          break;
      }
    },
    [isGameStarted, isPaused]
  );

  // Touch controls for mobile
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isGameStarted || isPaused || !canvasRef.current) return;

      const touch = e.touches[0];
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const touchX = touch.clientX - canvasRect.left;

      setShipX(
        Math.max(
          0,
          Math.min(CANVAS_WIDTH - SHIP_WIDTH, touchX - SHIP_WIDTH / 2)
        )
      );
    },
    [isGameStarted, isPaused]
  );

  // Initialize game
  useEffect(() => {
    window.addEventListener("keydown", moveShip);
    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener("keydown", moveShip);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [moveShip, gameLoop]);

  return (
    <div className="flex flex-col items-center space-y-4 p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-blue-700">Ocean Voyage</h2>

      <div className="relative w-full">
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="border-2 border-blue-500 rounded-lg shadow-lg w-full"
          onTouchMove={handleTouchMove}
        />

        {!isGameStarted && (
          <div className="absolute inset-0 bg-blue-900 bg-opacity-80 flex flex-col justify-center items-center text-white p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              {isGameOver ? `Shipwrecked! Score: ${score}` : "Ocean Voyage"}
            </h3>
            <p className="mb-2 text-blue-200">High Score: {highScore}</p>
            <p className="text-sm mb-6 text-center">
              Steer your yacht with arrow keys or touch to avoid icebergs
            </p>
            <Button
              onClick={startGame}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-lg font-semibold"
            >
              {isGameOver ? "Sail Again" : "Set Sail"}
            </Button>
          </div>
        )}

        {isPaused && (
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex justify-center items-center text-white">
            <p className="text-xl font-bold">Voyage Paused</p>
          </div>
        )}
      </div>

      <div className="flex justify-between w-full">
        <div className="bg-blue-800 px-4 py-2 rounded-lg">
          <p className="font-semibold text-blue-100">
            Score: <span className="text-white">{score}</span>
          </p>
        </div>
        <div className="bg-blue-900 px-4 py-2 rounded-lg">
          <p className="font-semibold text-blue-100">
            High Score: <span className="text-white">{highScore}</span>
          </p>
        </div>
      </div>

      {isGameStarted && !isGameOver && (
        <div className="flex space-x-2 w-full">
          <Button
            onClick={() => setIsPaused(!isPaused)}
            className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-semibold"
          >
            {isPaused ? "Resume" : "Pause"}
          </Button>
          <Button
            onClick={() => {
              setIsGameStarted(false);
              setIsGameOver(true);
              if (score > highScore) {
                setHighScore(score);
              }
            }}
            className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-lg font-semibold"
          >
            End Voyage
          </Button>
        </div>
      )}
    </div>
  );
};

export default OceanGame;
