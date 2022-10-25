const parseImageToDataUrl = (image) => {
  return `data:${image.mimeType};base64,${image.b64Content}`;
};

export default parseImageToDataUrl;
