import { useLocalStorage } from './useLocalStorage';
import AddNewTrip from './AddNewTrip';
import AppName from './AppName';
import ListOfTrips from './ListOfTrips';
import SearchField from './SearchField';
import WeatherForecast from './WeatherForecast';
import WeekForecast from './WeekForecast';
import { useState } from 'react';

function App() {
  const [trips, setTrips] = useLocalStorage("trips", [
    {city: "Berlin", startDate: "2024-05-05", endDate: "2024-05-15", imgURL: "./city-images/berlin.jpeg"}
  ]);
  const [selectedTrip, setSelectedTrip] = useState(trips[0]);
  const [searchQuery, setSearchQuery] = useState("");

  function addTrip(newTrip) {
    setTrips([...trips, newTrip]);
  }

  const foundTrips = trips.filter(trip => trip.city.includes(searchQuery));

  return (
    <div className="App">
      <div className='main-page'>
        <div className="main-content">
          <AppName />
          <SearchField searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ListOfTrips trips={foundTrips} selectedTrip={selectedTrip} setSelectedTrip={setSelectedTrip} />
          <WeekForecast trip={selectedTrip} />
        </div>
        <AddNewTrip addTrip={addTrip} />
        <WeatherForecast trip={selectedTrip} />
      </div>
    </div>
  );
}

export default App;
