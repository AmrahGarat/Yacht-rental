import { useState, useEffect } from "react";

// Delayed Loading Spinner Component
const DelayedLoadingSpinner = ({ delay = 1000 }: { delay?: number }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, delay);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [delay]);

  if (!showSpinner) return null; // Don't render the spinner until the delay

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default DelayedLoadingSpinner;
