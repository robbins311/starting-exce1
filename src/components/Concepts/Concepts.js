import "./Concepts.css";
import ConceptsItems from "./ConceptsItems";
const Concepts = (props) => {
  // console.log(props);
  return (
    <div>
      <ul id="concepts">
        <ConceptsItems lists={props} />
      </ul>
    </div>
  );
};
export default Concepts;
