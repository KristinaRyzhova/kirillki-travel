import React from "react";
import { useParams } from "react-router-dom";
import { initialCards } from "../../utils/constant";
import { PhotoDetailsByIdUI } from "../ui";

export const PhotoDetailsById: React.FC = () => {
  const { id } = useParams();
  const card = initialCards.find((card) => card.id === id);

  if (!card) {
    return <p>Фото не найдено</p>;
  }

  return <PhotoDetailsByIdUI link={card.link} name={card.name} />;
};
