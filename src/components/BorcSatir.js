import React from "react";
import axios from 'axios'
import qs from 'qs'
import { trackPromise } from "react-promise-tracker";


const BorcSatir = (props) => {
    const deleteSubmitHandler =(e)=>{
        e.preventDefault()
        const apiUrl = "https://borc.cagataykaban.com/"
        trackPromise(
          axios({
            method: "delete",
            url: apiUrl + "api/Borclar/" + props.id,
            headers: {
              Authorization: "Bearer " + props.token,
            }
          })
            .then((response) => {
              props.setBorclar(props.borclar.filter((borc)=>borc.Id!==response.data.Id))
            })
            .catch((error) => {
            })
        );
      };
  return (
    <tr key={props.borc.id}>
      <td>{props.borc.Taraf}</td>
      <td
        className="borc-miktar"
        style={props.borc.BorcluMuyum ? { color: "red" } : { color: "green" }}
      >
        {props.borc.BorcMiktar.toFixed(2)}₺
      </td>
      <td>{props.borc.SonOdemeTarihi.substr(0, 10)}</td>
      <td className="d-flex align-items-baseline">
        <div className="custom-control custom-switch">
          <input
            checked={props.borc.BorcKapandiMi ? "true" : false}
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
          />
          <label className="custom-control-label" htmlFor="customSwitch1"></label>
        </div>
        <button onClick={deleteSubmitHandler} style={{ color: "red" }} className="fas fa-trash"></button>
      </td>
    </tr>
  );
};

export default BorcSatir;
