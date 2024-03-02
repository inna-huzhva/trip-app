import { useState } from 'react';
import CreateNewTrip from './CreateNewTrip';
import "./styles/addNewTrip.css";

function AddNewTrip({addTrip}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="add-new-trip-container">
      <div className="add-button" onClick={() => {
          setOpenModal(true)
        }}
      >
        <div>+</div>
        <div>Add trip</div>
      </div>
      {openModal && <CreateNewTrip closeModal={() => setOpenModal(false)} addTrip={addTrip} />}
    </div>
  );
}

export default AddNewTrip;
