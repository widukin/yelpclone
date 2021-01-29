import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Api from "../api";

const SearchBar = () => {
  const [tags, setTags] = useState([]);
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState({tag: "", city: ""});
  /* const history = useHistory(); */

  useEffect(() => {
    Api.getTags("")
      .then((res) => {
        setTags(res);
      })
  }, []);
  useEffect(() => {
    Api.getCities("")
      .then((res) => {
        setCities(res);
      })
  }, []);

  //TODO: trim user input

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
/*     if(value.tag && value.city) {
      history.push("/tag=" + value.tag + "&city=" + value.city)
    } else if (value.tag) {
      history.push("/tag=" + value.tag)
    } else if (value.city) {
      history.push("/city=" + value.city)
    } else {
      history.push("/");
    } */
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
        list="tags"
        value={value.tag}
        onChange={(e) => setValue({tag: e.target.value, city: value.city})}
      />
      <datalist id="tags">
        {
          tags.map(tag => {
            return(
              <option key={tag._id}>{tag.name}</option>
            );
          })
        }
      </datalist>
      <input
        placeholder="City"
        className="searchbar-input"
        id="city"
        list="cities"
        value={value.city}
        onChange={(e) => setValue({tag: value.tag, city: e.target.value})}
      />
      <datalist id="cities">
        {
          cities.map(city => {
            return(
              <option key={city._id}>{city.name}</option>
            );
          })
        }
      </datalist>
      <input className="searchbar-search" type="submit" />
    </form>
  </div>);
};
export default SearchBar;
