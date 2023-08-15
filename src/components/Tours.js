import React from "react";
import Card from "./Card";
const Tours = ({ tours, removeTour }) => {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Pranjal</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;/* To prevent from error we put key attribte in map function in component */
        })}
      </div>
    </div>
  );
};

export default Tours;

/* ...tour is spread operator */
