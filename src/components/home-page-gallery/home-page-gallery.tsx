import React from "react";
import { useParams } from "react-router-dom";
import { initialCards } from "../../utils/constant";
import { HomePagePhotoGalleryUI } from "../ui";

type HomePagePhotoGalleryProps = {
  onClose: () => void;
};

export const HomePagePhotoGallery: React.FC<HomePagePhotoGalleryProps> = ({
  onClose,
}) => {
  const { id } = useParams();
  const card = initialCards.find((card) => card.id === id);

  if (!card) {
    return <p>Фото не найдено</p>;
  }

  return (
    <HomePagePhotoGalleryUI link={card.link} name={card.name} onClose={onClose} />
  );
};
