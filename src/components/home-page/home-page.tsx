import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { initialCards } from "../../utils/constant";
import { HomepageUI } from "../ui";

export const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = (id: string) => {
    navigate(`/photo/${id}`, { state: { background: location } });
  };

  return <HomepageUI cards={initialCards} onCardClick={handleCardClick} />;
};
