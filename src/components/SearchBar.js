import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState({tag: "", city: ""});
  const history = useHistory();


  return (    
  <div className="searchbar">
    <form
      className="searchbar-form"
      onSubmit={(e) => {
        e.preventDefault();
        value 
        ? history.push("/tag=" + value.tag) : history.push("/");
        setValue({tag: "", city: ""});
      }}
      onReset={() => setValue("")}
    >
      <input
        placeholder="Tag"
        className="searchbar-input"
        id="tag"
        value={value.tag}
        onChange={(e) => setValue({tag: e.target.value.tag, city: value.city})}
      />
      <input
        placeholder="City"
        className="searchbar-input"
        id="city"
        value={value.city}
        onChange={(e) => setValue({tag: value.tag, city: e.target.value.city})}
      />
      <input className="searchbar-search" type="submit" />
    </form>
  </div>);
};
export default SearchBar;
