import css from "./ImageCard.module.css";

const ImageCard = ({ title, url, likes, openModal, setCurrentImage }) => {
  const handleClick = () => {
    setCurrentImage({ url: url.full, alt: title });
    openModal();
  };

  return (
    <div onClick={handleClick} className={css.wrapper}>
      <img className={css.imageCard} src={url.small} alt={title} />
      <div className={css.descriptionWrapper}>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
