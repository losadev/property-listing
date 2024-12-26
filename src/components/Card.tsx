import { ReactNode } from "react";
import HomeDuotone from "./HomeDuotone";
import Starfill from "./Starfill";
import UserDuotone from "./UserDuotone";
import '../styles/Card.css';
import SuperhostTag from "./Superhost";

interface Props {
  superhost: ReactNode
  image: string
  title: string
  description: string
  people: number
  bedroom: number
  price: number
  rating: number
}

const Card = ({superhost, image, title, description, people, bedroom, price, rating}:Props) => {
  return (
    <div className="container-card">
      <div className="container-img">
        {superhost ? <SuperhostTag />:''}
        <img src={image} alt="House image" />
      </div>
      <div className="container-card-info">
        <h4>{title}</h4>
        <p>
          {description}
        </p>
        <div className="container-capacity">
          <span><HomeDuotone /> {bedroom} bedroom</span>
          <span><UserDuotone /> {people} guests</span>
        </div>
        <div className="container-price-rating">
          <span><span id="price">${price}</span>/night</span>
          <span id="star-rating"><Starfill height={30} width={30}/>{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;