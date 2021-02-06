import React from "react";
import BorcCard from './BorcCard'
import '../pages/HomePage.css'
const GenelDurum = () => {
  return (
    <div className="jumbotron">
        <h4>Genel Durum</h4>
      <p>Toplam durum : </p>
      <div className="d-flex borc-card-container">
        <BorcCard title="En yakın alınacak" />
        <BorcCard title="En yakın verilecek"/>
      </div>
    </div>
  );
};

export default GenelDurum;
