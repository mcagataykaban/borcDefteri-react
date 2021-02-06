import React from "react";
import "../pages/HomePage.css";
import BorcSatir from "../components/BorcSatir";
const Borclar = (props) => {
  return (
    <div className="jumbotron mobil-p-0">
      <div className="card">
        <table className="table" id="tblBorclar">
          <thead className="card-header">
            <tr>
              <th>Taraf</th>
              <th className="borc-miktar">Miktar (₺)</th>
              <th>Son Ödeme</th>
              <th>Durum</th>
            </tr>
          </thead>
          <tbody>
            {props.borclar.map((borc) => {
              return (
                <BorcSatir
                key={borc.id}
                  borclar={props.borclar}
                  setBorclar={props.setBorclar}
                  token={props.token}
                  borc={borc}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Borclar;
