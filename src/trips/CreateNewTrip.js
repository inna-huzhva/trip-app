import { useState } from 'react';
import cities from "./cities.json";
import "./createNewTrip.css";

function CreateNewTrip({ closeModal, addTrip }) {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <span>Create trip</span>
          <button onClick={closeModal}> X </button>
        </div>
        <div className="modal-body">
          <div className="input-container">
            <label htmlFor="cities"><span className="asterisk">*</span> City<br /></label>
            <input 
              list="cities"
              placeholder="Please select a city"
              value={city}
              onChange={e => setCity(e.target.value)}
              required
            />
            <datalist id="cities">
              {cities.map(city => (
                <option value={city.name} key={city.name}></option>
              ))}
            </datalist>
          </div>
          <div className="input-container">
            <label htmlFor="start"><span className="asterisk">*</span> Start date<br /></label>
            <input 
              type="date"
              id="start"
              value={ startDate }
              onChange={e => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="finish"><span className="asterisk">*</span> End date<br /></label>
            <input 
              type="date"
              id="finish"
              value={ endDate }
              onChange={e => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="cancel-btn" onClick={closeModal}>Cancel</button>
          <button className="save-btn" onClick={() => {
            const imgURL = cities.find(c => c.name === city).img;
            addTrip({city, startDate, endDate, imgURL});
            closeModal();
          }}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default CreateNewTrip;
