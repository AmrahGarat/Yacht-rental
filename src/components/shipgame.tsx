import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const ShipGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const shipWidth = 50;
  const shipHeight = 80;
  const shipSpeed = 5;

  // Game State
  const [shipX, setShipX] = useState(150);
  const [shipY, setShipY] = useState(400);

  // Obstacles
  const [obstacles, setObstacles] = useState<any[]>([]);
  const [obstacleSpeed, setObstacleSpeed] = useState(2);

  // Start Game
  const startGame = () => {
    setIsGameOver(false);
    setScore(0);
    setShipX(150);
    setShipY(400);
    setObstacles([]);
    setIsGameStarted(true);
  };

  // Game Loop
  const gameLoop = () => {
    if (!isGameStarted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      // Draw ship
      ctx.fillStyle = "#00BFFF";
      ctx.fillRect(shipX, shipY, shipWidth, shipHeight);

      // Move obstacles
      const newObstacles = obstacles.map((obs: any) => ({
        ...obs,
        y: obs.y + obstacleSpeed,
      }));

      // Remove obstacles that are off the screen
      const filteredObstacles = newObstacles.filter(
        (obs: any) => obs.y < canvas.height
      );

      setObstacles(filteredObstacles);

      // Draw obstacles
      ctx.fillStyle = "gray";
      filteredObstacles.forEach((obs: any) => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      });

      // Check for collisions
      filteredObstacles.forEach((obs: any) => {
        if (
          shipX < obs.x + obs.width &&
          shipX + shipWidth > obs.x &&
          shipY < obs.y + obs.height &&
          shipY + shipHeight > obs.y
        ) {
          setIsGameOver(true);
          setIsGameStarted(false);
        }
      });

      // Increase score over time
      if (!isGameOver) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  // Handle ship movement (keyboard controls)
  const moveShip = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" && shipX > 0) {
      setShipX((prevX) => prevX - shipSpeed);
    } else if (e.key === "ArrowRight" && shipX + shipWidth < 400) {
      setShipX((prevX) => prevX + shipSpeed);
    }
  };

  // Generate new obstacles at random intervals
  const generateObstacle = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = Math.random() * (canvas.width / 2) + 30;
    const x = Math.random() * (canvas.width - width);
    const height = Math.random() * 30 + 30;

    setObstacles((prevObstacles) => [
      ...prevObstacles,
      { x, y: -height, width, height },
    ]);
  };

  useEffect(() => {
    const interval = setInterval(gameLoop, 1000 / 60); // 60 FPS
    const obstacleInterval = setInterval(generateObstacle, 2000); // New obstacle every 2 seconds

    window.addEventListener("keydown", moveShip);

    return () => {
      clearInterval(interval);
      clearInterval(obstacleInterval);
      window.removeEventListener("keydown", moveShip);
    };
  }, [obstacles, shipX, shipY, isGameStarted]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Ship Dodge Game</h2>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={400}
          height={500}
          className="border border-gray-600 bg-blue-100"
        ></canvas>
        {isGameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white">
            <p className="text-xl">Game Over! Score: {score}</p>
          </div>
        )}
      </div>
      <p>Score: {score}</p>
      <div>
        {isGameOver || !isGameStarted ? (
          <Button
            onClick={startGame}
            className="w-full py-2 bg-blue-500 text-white"
          >
            Start New Game
          </Button>
        ) : (
          <Button
            onClick={() => setIsGameStarted(false)}
            className="w-full py-2 bg-red-500 text-white"
          >
            Pause Game
          </Button>
        )}
      </div>
    </div>
  );
};

export default ShipGame;
