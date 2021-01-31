import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Api from "../api";

const SearchBar = () => {
  const [tags, setTags] = useState([{_id: "", name: ""}]);
  const [cities, setCities] = useState([{_id: "", name: ""}]);
  const [value, setValue] = useState({tagName: "", cityName: ""});
  const history = useHistory();

  /* Get List of all Tags */
  useEffect(() => {
    Api.getTags("")
      .then((res) => {
        setTags(res);
      })
  }, []);
  /* Get List of all Cities */
  useEffect(() => {
    Api.getCities("")
      .then((res) => {
        setCities(res);
      })
  }, []);

  //TODO: trim user input

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentTag = {_id: "", name: ""};
    let currentCity = {_id: "", name: ""};

    // finds the current Tag and City object if available
    value.tagName ? currentTag = (tags.find(tag => tag.name === value.tagName)) : console.log("no tag");
    value.cityName ? currentCity = (cities.find(city => city.name === value.cityName)) : console.log("no city");

    // adjusts URL if tag and city, both, only one or non is choosen
    if(value.tagName && value.cityName) {
      history.push("/tags/" + currentTag._id + "/cities/" + currentCity._id)
    } else if (value.tagName) {
      history.push("/tags/" + currentTag._id)
    } else if (value.cityName) {
      history.push("/cities/" + currentCity._id)
    } else {
      history.push("/");
    }
    setValue({tagName: "", cityName: ""});
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
        value={value.tagName}
        onChange={(e) => setValue({tagName: e.target.value, cityName: value.cityName})}
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
        value={value.cityName}
        onChange={(e) => setValue({tagName: value.tagName, cityName: e.target.value})}
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
