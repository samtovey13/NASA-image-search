import axios from 'axios';

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((res) => {
        const imageResults = res.data.collection.items;
        const filteredImages = imageResults.filter(image => image.data[0].media_type === "image");
        const images = filteredImages.map(image => image.links[0].href)
        return images;
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export default getImages;