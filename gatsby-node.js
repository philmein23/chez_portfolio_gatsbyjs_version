const fetch = require('node-fetch');
const cloudinary = require('./cloudinary.js');

async function getImages() {
  const options = {
    method: 'GET',
    mode: 'cors'
  };

  const imageData = await (await fetch(
    cloudinary.getImages('chez').URL,
    options
  )).json();
  return imageData;
}

function createImageNodeStructure(image) {
  return {
    image_id: image.public_id,
    id: image.public_id,
    parent: null,
    children: [],
    internal: {
      type: 'ImageField',
      contentDigest: JSON.stringify(image),
      mediaType: 'application/json'
    }
  }
}

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  const data = await getImages();

  data.resources.forEach(datum => createNode(createImageNodeStructure(datum)));
  return;
};