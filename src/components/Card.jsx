/* eslint-disable react/prop-types */
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="image" />
      <div className="name">{props.name}</div>
      <div className="pets">{props.pets}</div>
      <a href={props.website}>
        <button className="button">Visit Website</button>
      </a>
    </div>
  );
};

export default Card;
