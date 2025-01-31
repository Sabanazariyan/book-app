import { IoSearchOutline } from "react-icons/io5";

import styles from "./SearchBox.module.css"

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(event) =>
          setSearch(event.target.value.toLocaleLowerCase().trim())
        }
      />
      <button onClick={searchHandler}>
        <IoSearchOutline />
      </button>
    </div>
  );
}

export default SearchBox;
