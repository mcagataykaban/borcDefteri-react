import React, { useState, useEffect } from "react";
import AddDebt from "../components/AddDebt";
import logoborc from "../images/logoborc.png";
import "./HomePage.css";
import GenelDurum from "../components/GenelDurum";
import Borclar from "../components/Borclar";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const HomePage = (props) => {
  //Add Debt
  const [taraf, setTaraf] = useState("");
  const [borcMiktar, setBorcMiktar] = useState(0);
  const [odemeTarihi, setOdemeTarihi] = useState({});
  const [borcluMuyum, setBorcluMuyum] = useState(false);
  const [borclar, setBorclar] = useState([]);

  const exitHandler = () => {
    localStorage.removeItem("loginBorc_ck");
    sessionStorage.removeItem("loginBorc_ck");
    window.location.href = "/";
  };
  useEffect(() => {
    const deneme = () => {
      var apiUrl = "https://borc.cagataykaban.com/";
      trackPromise(
        axios({
          method: "get",
          url: apiUrl + "api/Borclar/Listele",
          headers: {
            Authorization: "Bearer " + props.token,
          },
        })
          .then((response) => {
            console.log(response.data);
            setBorclar(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
      );
    };
    deneme();
  }, []);

  return (
    <div className="container card p-0 mb-4">
      <div className="card-header d-flex align-items-center nav">
        <div className="mr-3 d-flex">
          <img src={logoborc} width="50" style={{height: 78}} alt="" />
          <h3 className="mb-0 mt-2 ml-2">Borç Defteri</h3>
        </div>
        <div className="d-flex">
          <h4 className="mb-0 mt-1">{props.userName}</h4>
          <button onClick={exitHandler} className="btn btn-danger ml-2">
            Çıkış Yap
          </button>
        </div>
      </div>
      <div className="row px-3">
        <div className="col-md-4 mt-4">
          <AddDebt
            borclar={borclar}
            setBorclar={setBorclar}
            taraf={taraf}
            borcMiktar={borcMiktar}
            odemeTarihi={odemeTarihi}
            borcluMuyum={borcluMuyum}
            setTaraf={setTaraf}
            setOdemeTarihi={setOdemeTarihi}
            setBorcluMuyum={setBorcluMuyum}
            setBorcMiktar={setBorcMiktar}
            token={props.token}
          />
        </div>
        <div className="col-md-8 mt-4">
          <Borclar
            borclar={borclar}
            setBorclar={setBorclar}
            token={props.token}
            borclar={borclar}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
