const PreviewImage = ({ src, width, height }) => (
  <img src={`/img/svg/${src}`} alt={src} with={width} height={height} style={{width: "90%", height: "90%"}} />
);

export default PreviewImage;
