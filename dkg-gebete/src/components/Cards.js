import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Auswahl an Gebeten</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <CardItem
            src="images/pray-child.jpg"
            text="Gebete während des Gottesdienst"
            path="/grundgebete"
          />
          <CardItem
            src="images/rosary.jpg"
            text="Rosenkranzgebete"
            path="/rosenkranz"
          />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
