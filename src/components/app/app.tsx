import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { PhotoDetailsById } from "../photo-details-by-id/photo-details-by-id";
import { Modal } from "../modal/modal";
import { PhotoPage } from "../../pages/PhotoPage";
import { TextsPage } from "../../pages/TextsPage";

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
        <Route path="/photo/:id" element={<PhotoDetailsById />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route
            path="/photo/:id"
            element={
              <Modal onClose={closeModal}>
                <PhotoDetailsById />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};