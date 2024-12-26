import { ChangeEvent } from 'react';
import '../styles/Slider.css';

interface Props {
    handleChangeSuperhost: (event:ChangeEvent<HTMLInputElement>)=>void;
}

const Slider = ({handleChangeSuperhost}:Props) => {
  return (
    <>
    <label className="switch">
        <input type="checkbox" onChange={handleChangeSuperhost}/>
        <span className="slider round"></span>
    </label>
    </>
  )
}

export default Slider;