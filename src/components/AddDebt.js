import React, {useState} from 'react'
import axios from 'axios'
import qs from 'qs'
import { trackPromise } from "react-promise-tracker";
import Loading from './Loading';




const AddDebt = (props) => {
  
  const isimHandler = (e)=> {
    props.setTaraf(e.target.value)
  }
  const miktarHandler = (e) => {
    props.setBorcMiktar(e.target.value)
  }
  const dateHandler = (e) => {
    props.setOdemeTarihi({date: e.target.value})
  }
  const borclumuyumHandler = () => {
    props.setBorcluMuyum(!props.borcluMuyum)
  }
  const resetForm = () => {
    document.getElementById('frmBorcEkle').reset();
  }
  const submitFormHandler = (e) => {
    e.preventDefault();
        var apiUrl = "https://borc.cagataykaban.com/";
        trackPromise(
        axios({
          method: "post",
          url: apiUrl + "api/Borclar/Ekle",
          data: qs.stringify({
            Taraf: props.taraf,
            BorcMiktar: props.borcMiktar,
            BorcluMuyum: props.borcluMuyum,
            SonOdemeTarihi: props.odemeTarihi.date
          }),
          headers: {
            Authorization: "Bearer " + props.token,
          },
        }).then((response)=> {
          console.log(response.data);
          console.log('eklendi');
          props.setTaraf("")
          props.setBorclar([...props.borclar,response.data])
          resetForm()
        }).catch((error) => {
          console.log(error);
        }));
  }
        
    return (
        <div className="jumbotron">
            <h3 className="mb-2">Borç Girişi</h3>
            <Loading />
            <form id="frmBorcEkle" onSubmit={submitFormHandler}>
                        <div className="form-group">
                          <input value={props.taraf} onChange={isimHandler} required className="form-control" placeholder="İsim" />
                        </div>
                        <div className="form-group">
                          <input onChange={miktarHandler} step="any" required type="number" className="form-control" placeholder="Miktar" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="SonOdemeTarihi">Son Odeme Tarihi</label>
                          <input onChange={dateHandler} className="form-control" type="date"  />
                        </div>
                        <div className="form-check form-group">
                          <input onChange={borclumuyumHandler} className="form-check-input" type="checkbox"/>Borçlumuyum
                        </div>
                        <button type="submit" className="btn btn-success w-100">Kaydet</button>
            </form>
        </div>
    )
}

export default AddDebt
