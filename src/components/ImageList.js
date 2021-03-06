import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ alt_description, id, urls }) => {
    return <img alt={alt_description} key={id} src={urls.regular} />;
  });
  // return (props.map(images => <div>{images}</div>));
  return <div>{images}</div>;
};

export default ImageList;
