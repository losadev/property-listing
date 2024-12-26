import '../styles/HeroImage.css';
import Slider from './Slider';

const FilterBar = () => {
  return (
    <div className="container-filter-bar">
      <div className="countries">
        <button>All stays</button>
        <button>Norway</button>
        <button>Finland</button>
        <button>Switzerland</button>
      </div>
      <div className="container-superhost-type">
        <div className="container-superhost">
          <Slider />
          <p>Superhost</p>
        </div>
        <select name="" id="">
          <option value="default">
              <div className="select-default">
                <p>Property type</p> 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" fill="#4A5567"/>
                <path d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z" fill="#7E869E" fill-opacity="0.25"/>
                </svg>
              </div> 
          </option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;