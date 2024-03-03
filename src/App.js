import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import SearchField from './trips/SearchField';
import AddNewTrip from './trips/AddNewTrip';
import ListOfTrips from './trips/ListOfTrips';
import WeatherForecast from './weather/WeatherForecast';
import WeekForecast from './weather/WeekForecast';

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
          <div className="app-name">Weather Forecast</div>
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
