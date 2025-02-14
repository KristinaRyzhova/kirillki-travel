import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home } from "../../pages/home";
import { About } from "../../pages/about";
import { Modal } from "../modal/modal";
import { PhotoPage } from "../../pages/photo-page";
import { TextsPage } from "../../pages/texts-page";
import { HomePagePhotoGallery } from "../home-page-gallery";

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundLocation = location.state?.background;

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/texts" element={<TextsPage />} />
        <Route path="/photo/:id" element={<HomePagePhotoGallery />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route
            path="/photo/:id"
            element={
              <Modal onClose={closeModal}>
                <HomePagePhotoGallery />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};
