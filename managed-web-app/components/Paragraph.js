import "./Paragraph.css";

export default function Paragraph(props) {
  const p = document.createElement("p");
  const { innerHTML, attributes } = props; // destructuring object assignment
  for (let attribute of attributes) {
    p.setAttribute(attribute.name, attribute.value);
  }
  p.innerHTML = innerHTML;
  return p;
}
