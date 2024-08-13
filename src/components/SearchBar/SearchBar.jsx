import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userValue = e.target.elements.searchingValue.value.trim();
    if (userValue === "") {
      toast.error("Enter a valid value!", {
        duration: 4000,
        position: "top-right",
      });
    } else onSubmit(userValue);
  };

  return (
    <header className={css.wrapper}>
      <form onSubmit={handleSubmit}>
        <Toaster />
        <div className={css.formWrapper}>
          <button type="submit" className={css.searchBtn}>
            <IoIosSearch />
          </button>
          <input
            className={css.textInput}
            type="text"
            name="searchingValue"
            placeholder="Search photos and images"
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
