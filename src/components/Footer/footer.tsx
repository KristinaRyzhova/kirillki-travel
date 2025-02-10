import React from "react";
import { FooterUI } from "../ui";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const isNewYearPolicy = year > 2025;

  return <FooterUI year={year} isNewYearPolicy={isNewYearPolicy} />;
};
