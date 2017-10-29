function CLOUDINARY(tagName = null) {
  return {
    CLOUDNAME: 'pnguyen23',
    CROP_TYPE: 'scale',
    URL: `https://res.cloudinary.com/pnguyen23/image/list/${tagName}.json`
  };
}

module.exports = {
  getImages: CLOUDINARY
}