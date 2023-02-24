export default function H1(props) {
  const h1 = document.createElement("h1");
  const { innerHTML, attributes } = props; // destructuring object assignment
  for (let attribute of attributes) {
    h1.setAttribute(attribute.name, attribute.value);
  }
  h1.innerHTML = innerHTML;
  return h1;
}
