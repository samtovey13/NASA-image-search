import axios from 'axios';

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        if (response.status === 200 ){
          const imageResults = response.data.collection.items;
          const filteredImages = imageResults.filter(image => image.data[0].media_type === "image");
          const images = filteredImages.map(image => image.links[0].href);
          return images;
        } else if (response.status === 404) {
          return [404];
        } else if (response.status === 500) {
          return [500];
        } else if (response.status === 400) {
          return [400];
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export default getImages;