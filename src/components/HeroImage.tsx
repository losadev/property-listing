import '../styles/HeroImage.css';
import FilterBar from './FilterBar';

const HeroImage = () => {
  return (
    <div className="container-hero-image">
        <h1>Peace, nature, dream</h1>
        <p>Find and book a great experience</p>
        <FilterBar />
    </div>
  );
}

export default HeroImage;