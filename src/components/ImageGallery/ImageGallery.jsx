import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal, setCurrentImage }) => {
  return (
    <ul className={css.list}>
      {images.map((card) => (
        <li className={css.listItem} key={card.id}>
          <ImageCard
            openModal={openModal}
            setCurrentImage={setCurrentImage}
            title={card.alt_description}
            url={card.urls}
            likes={card.likes}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
