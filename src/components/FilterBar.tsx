import { ChangeEvent, useState } from 'react';
import '../styles/FilterBar.css';
import Slider from './Slider';

interface Props {
  handleAll: ()=>void;
  handleClickNorway: ()=>void;
  handleClickFinland: ()=>void;
  handleClickSwiss: ()=>void;
  handleChangeSuperhost: (event:ChangeEvent<HTMLInputElement>)=>void;
  handleChangeRooms: (event:ChangeEvent<HTMLSelectElement>)=>void;
} 

const FilterBar = ({handleAll, handleClickNorway,handleChangeSuperhost, handleClickFinland, handleClickSwiss, handleChangeRooms}:Props) => {
  const [selectedButton, setSelectedButton] = useState<string[]>([]);

  const handleSelectedButton = (name: string) => {

    if(name === 'All') {
      setSelectedButton(selectedButton.filter(value => value === 'All'));
    }
    
    if(!selectedButton.includes(name)) {
      if(selectedButton.includes('All')) {
        const deleteBtnAll = selectedButton.filter(prev => prev != 'All');
        setSelectedButton(deleteBtnAll);
      }
      setSelectedButton(prev => [...prev, name]);
    }else {
      const deleteBtn = selectedButton.filter(prev => prev != name);
      setSelectedButton(deleteBtn)
    }
  }
  
  return (
    <div className="container-filter-bar">
      <div className="countries">
        <button onClick={() => {handleAll(); handleSelectedButton('All');}} style={{backgroundColor: selectedButton.includes('All') ? '#4A5567':'',borderRadius:'12px'}}>All stays</button>
        <button onClick={() => {handleClickNorway(); handleSelectedButton('Norway');}} style={{backgroundColor: selectedButton.includes('Norway') ? '#4A5567':'',borderRadius:'12px'}}>Norway</button>
        <button onClick={() => {handleClickFinland(); handleSelectedButton('Finland');}} style={{backgroundColor: selectedButton.includes('Finland') ? '#4A5567':'',borderRadius:'12px'}}>Finland</button>
        <button onClick={() => {handleClickSwiss(); handleSelectedButton('Switzerland');}} style={{backgroundColor: selectedButton.includes('Switzerland') ? '#4A5567':'',borderRadius:'12px'}}>Switzerland</button>
      </div>
      <div className="container-superhost-type">
        <div className="container-superhost">
          <Slider handleChangeSuperhost={handleChangeSuperhost}/>
          <p>Superhost</p>
        </div>
        <select name="property-type" onChange={handleChangeRooms}>
          <option value="" disabled selected>Property type</option>
          <option value="1">1 bedroom(s)</option>
          <option value="2">2 bedroom(s)</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;