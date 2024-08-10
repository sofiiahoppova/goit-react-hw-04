import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const SearchBar = ({ handleSubmit }) => {
  return (
    <header className={css.wrapper}>
      <form
        onSubmit={(e) => {
          e.target.elements.searchingValue.value.trim() && handleSubmit();
        }}
      >
        <div className={css.formWrapper}>
          <button type="submit" className={css.searchBtn}>
            <IoIosSearch />
          </button>
          <input
            className={css.textInput}
            type="text"
            autocomplete="off"
            autofocus
            name="searchingValue"
            placeholder="Search photos and images"
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
