import { useState } from "react";
import css from "./SearchMovie.module.css";

  export const SearchMovie = ({ handleSubmit }) => {
    const [search, setSearch] = useState("");

    const onSubmit = (e) => {
      e.preventDefault();
      handleSubmit(search.trim());
      e.target.reset();
    };
    return (
      <form
        className={css.form}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          autoComplete="off"
          name="query"
          value={search}
          placeholder="Search images and photos"
          onChange={({ target: { value } }) => setSearch(value)}
        />
        <button type="submit">Search</button>
      </form>
    );
  };

  return {};
};
