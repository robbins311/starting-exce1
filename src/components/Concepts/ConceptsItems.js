import "./ConceptsItems.css";

const ConceptsItems = (props) => {
  console.log(props);
  return (
    <div>
      {props.lists.items.map((con, idx) => {
        return (
          <li className="concept" key={idx}>
            <img src={con.image} alt={con.title} />
            <h2>{con.title}</h2>
            <p>{con.description}</p>
          </li>
        );
      })}
    </div>
  );
};

export default ConceptsItems;
