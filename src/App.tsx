import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import HeroImage from './components/HeroImage'
import { CardProps } from './types/card.types';
import FilterBar from './components/FilterBar';

function App() {
  const [data, setData] = useState<CardProps[] | null>([]);
  const [filter, setFilter] = useState<string[]>([]);

  useEffect(() => {
    
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json')
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.log(error)
    })

  }, []);

  const handleClickAll = () => {
    setFilter(['all']);
  }
  const handleClickNorway = () => {
    if(!filter.includes('Norway')) {
      if(filter.includes('all')) {
        setFilter(filter.filter(value => value != 'all'));
      }
      setFilter(prev => [...prev,'Norway']);
    }
    else {
      setFilter(filter.filter(value => value != 'Norway'));
    }
  }
  const handleClickFinland = () => {
    if(!filter.includes('Finland')) setFilter(prev => [...prev,'Finland']);
    else {
      setFilter(filter.filter(value => value != 'Finland'));
    }
  }
  const handleClickSwiss = () => {
    if(!filter.includes('Switzerland')) setFilter(prev => [...prev, 'Switzerland']);
     else {
      setFilter(filter.filter(value => value != 'Switzerland'));
    }
  }
  const handleChangeSuperhost = (event:ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked && !filter.includes('superhost')) setFilter(['superhost']);
    else setFilter(filter.filter(house => house !== 'all'));
  }
  const handleChangeRooms = (event:ChangeEvent<HTMLSelectElement>) => {
    const numRooms = event.target.value;
    if(numRooms === '1' && !filter.includes('1 rooms')) setFilter(['1 rooms']);
    if(numRooms === '2' && !filter.includes('2 rooms')) setFilter(['2 rooms']);
  }
  const filteredData = data?.filter(house => {
    if(filter.length < 1) setFilter(['all']);
    if(filter.includes('all')) return true;
    if(filter.includes(house.location)) return house;
    if(filter.includes('superhost')) return house.superhost;
    if(filter.includes('1 rooms')) return house.capacity.bedroom == 1;
    else if(filter.includes('2 rooms')) return house.capacity.bedroom == 2;
  })
  return (
    <>
     <HeroImage />
     <div className="container-xl">
      <h1>Over 200 stays</h1>
      <div className="container-cards">
        <FilterBar handleAll={handleClickAll} handleClickNorway={handleClickNorway} handleClickFinland={handleClickFinland} handleClickSwiss={handleClickSwiss} handleChangeSuperhost={handleChangeSuperhost} handleChangeRooms={handleChangeRooms}/>
        {filteredData ? filteredData.map((house, index) => (
          <Card bedroom={house.capacity.bedroom} description={house.description} image={house.image} people={house.capacity.people} price={house.price} rating={house.rating} title={house.title} superhost={house.superhost} key={index}/>
        )):'Error'}
      </div>
     </div>
    </>
  )
}

export default App
