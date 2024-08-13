import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    width: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, currentImage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <img
        className={css.photo}
        src={currentImage.url}
        alt={currentImage.alt}
      />
      <p className={css.descrription}>{currentImage.alt}</p>
    </Modal>
  );
};

export default ImageModal;
