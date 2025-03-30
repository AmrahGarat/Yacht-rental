// src/components/ui/card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="bg-white shadow-lg rounded-lg p-4">{children}</div>;
};

export const CardContent = ({ children }: CardProps) => {
  return <div className="p-4">{children}</div>;
};
