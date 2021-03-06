import axios from "axios";

/* const restaurants = [
  {
    id_: "1",
    name: "restaurant 1",
    img: "https://picsum.photos/500/600",
    city_id: 1,
    city_name: "Berlin",
    comments: [
      {
        comment_id: 1,
        text: "Comment 1",
        date: Date.now,
      },
      {
        comment_id: 2,
        text: "Comment 2",
        date: Date.now,
      },
      {
        comment_id: 3,
        text: "Comment 3",
        date: Date.now,
      },
    ],
    tags: [{ tag_id: 1, name: "beautiful" }],
  },
  {
    id_: "2",
    name: "restaurant 2",
    img: "https://picsum.photos/400/600",
    city_id: 2,
    city_name: "Hamburg",
    comments: [{ comment_id: 4, text: "Comment 1", date: Date.now }],
    tags: [{ tag_id: 2, name: "fresh" }],
  },
  {
    id_: "3",
    name: "restaurant 3",
    img: "https://picsum.photos/600/600",
    city_id: 1,
    city_name: "Berlin",
    comments: [{ comment_id: 5, text: "Comment 1", date: Date.now }],
    tags: [{ tag_id: 1, name: "beautiful" }],
  },
  {
    id_: "4",
    name: "restaurant 4",
    img: "https://picsum.photos/400/600",
    city_id: 2,
    city_name: "Hamburg",
    comments: [{ comment_id: 6, text: "Comment 1", date: Date.now }],
    tags: [{ tag_id: 2, name: "fresh" }],
  },
  {
    id_: "5",
    name: "restaurant 5",
    img: "https://picsum.photos/400/600",
    city_id: 2,
    city_name: "Hamburg",
    comments: [{ comment_id: 1, text: "Comment 1", date: Date.now }],
    tags: [{ tag_id: 1, name: "fresh" }],
  },
  {
    id_: "6",
    name: "restaurant 6",
    img: "https://picsum.photos/400/600",
    city_id: 2,
    city_name: "Berlin",
    comments: [{ comment_id: 1, text: "Comment 1", date: Date.now }],
    tags: [{ tag_id: 2, name: "fresh" }],
  },
];
const tags = [
  { tag_id: 1, name: "beautiful" },
  { tag_id: 2, name: "fresh" },
];
const cities = [
  { city_id: 1, city_name: "Berlin" },
  { city_id: 2, city_name: "Hamburg" },
]; */
/*const appendCity = async (restaurant) => {
  const city = await axios.get(`${endpoint}cities/${restaurant.cityId}`);
  restaurant.city_name = city.name;
  return restaurant;
};
const appendTag = async (restaurant) => {
  const tag = await axios.get(`${endpoint}tags/${restaurant.tagId}`);
  restaurant.tag_name = tag.name;
  return restaurant;
};*/


const endpoint = "https://restaurants-api-group1.herokuapp.com/";
const Api = {
  getAllRestaurants: async () => {
    try {
      const response = await axios.get(`${endpoint}restaurants`);
      if (response.data.data) {
        return response.data.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getRestaurantById: async (id) => {
    try {
      const response = await axios.get(`${endpoint}restaurants/${id}`);
      if (response.data.data) {
        return response.data.data;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  // unfortunatly needed api endpoint were never provided
  // getRestaurantsFiltered: async (tag, city) => restaurants.slice(0, 3),
  getTags: async (tag) => {
    try {
      const response = await axios.get(`${endpoint}tags/${tag}`);
      if (response.data.data) {
        return response.data.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getCities: async (cities) => {
    try {
      const response = await axios.get(`${endpoint}cities/${cities}`);
      if (response.data.data) {
        return response.data.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};
export default Api;
