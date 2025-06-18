// components/Image.jsx
const Image = ({ src, alt, width, height, className }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
  />
);

export default Image;
