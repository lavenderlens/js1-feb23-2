import "./Image.css"; // styles may travel with the component this way

export default function Image(props) {
  const img = document.createElement("img");
  const { attributes } = props; // img is self-closing, no innerHTML
  for (let prop of attributes) {
    img.setAttribute(prop.name, prop.value);
  }
  return img;
}
