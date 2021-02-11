import React from "react";
import axios from 'axios'
import qs from 'qs'
import { trackPromise } from "react-promise-tracker";

// type: "delete",
//     url: apiUrl + "api/Borclar/Sil/" + borcId,
//     headers: getAuthHeaders(),


  // var apiUrl = "https://borc.cagataykaban.com/";
  // trackPromise(
  // axios({
  //   method: "post",
  //   url: apiUrl + "api/Borclar/Sil/" + props.id,
  //   headers: {
  //     "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //   },
  // })
  //   .then((response) => {
  //       console.log('oldu silme ');
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  //   )
    


const BorcSatir = (props) => {
    const deleteSubmitHandler =()=>{
      var apiUrl = "https://borc.cagataykaban.com/";
      trackPromise(
      axios({
        method: "delete",
        url: apiUrl + "api/Borclar/Sil/" + props.borc.Id,
        headers: {
          Authorization: "Bearer " + props.token,
        },
      })
        .then((response) => {
           props.setBorclar(props.borclar.filter((borc)=>borc.Id!==props.borc.Id))
            console.log('oldu silme ');
        })
        .catch((error) => {
          console.log(error);
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
        
        <i onClick={deleteSubmitHandler} style={{ color: "red" }} className="fas fa-trash"></i>
      </td>
    </tr>
  );
};

export default BorcSatir;
