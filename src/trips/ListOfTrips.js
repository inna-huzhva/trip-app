import "./listOfTrips.css";

function ListOfTrips({trips, selectedTrip, setSelectedTrip}) {
  return (
    <div className="list-of-trips-container">
      {trips.map(trip => {
        const classes = selectedTrip == trip ? "trip-card selected" : "trip-card";
        return (
          <div className={classes} key={trip.city} onClick={() => setSelectedTrip(trip)}>
            <div className="background-image" style={{
              backgroundImage: `url(${trip.imgURL})`
            }}></div>
            <div className="trip-card-name">{trip.city}</div>
            <div className="trip-card-date">{trip.startDate} - {trip.endDate}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ListOfTrips;
