import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState({tag: "", city: ""});
  const history = useHistory();

  //TODO: trim user input

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    if(value.tag && value.city) {
      history.push("/tag=" + value.tag + "&city=" + value.city)
    } else if (value.tag) {
      history.push("/city=" + value.city)
    } else if (value.city) {
      history.push("/tag=" + value.tag)
    } else {
      history.push("/");
    }
    setValue({tag: "", city: ""});
  };

  return (    
  <div className="searchbar">
    <form
      className="searchbar-form"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Tag"
        className="searchbar-input"
        id="tag"
        value={value.tag}
        onChange={(e) => setValue({tag: e.target.value, city: value.city})}
      />
      <input
        placeholder="City"
        className="searchbar-input"
        id="city"
        value={value.city}
        onChange={(e) => setValue({tag: value.tag, city: e.target.value})}
      />
      <input className="searchbar-search" type="submit" />
    </form>
  </div>);
};
export default SearchBar;
