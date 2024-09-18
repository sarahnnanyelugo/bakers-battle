import React from "react";
import Checkmark from "../../components/Checkmark/Checkmark";
import "./sucess-page.scss";
import {Link} from "react-router-dom";
export const SuccessPage = () => {
    const success_data = JSON.parse(localStorage.getItem('success_data'))||null;

    if(!success_data)
        return (<div className="success-page-div col-md-4 offset-md-4">
            <center>
                <div className="col-md-12 p-5">
                    <h5>Payment UnSuccessful!</h5>
                    <p className={'text-danger'}>Payment check indicates that this payment was not successful </p>
                    <p>If you were charged, kindly contact your bank for rectification and possible reversal</p>
                    <p>For further assistance, <Link className={'btn text-info'} to={'/contact'}>contact admin</Link></p>
                </div>
            </center>
        </div>)
  return (
    <div className="success-page-div col-md-4 offset-md-4">
      <center>
        <h5>Payment Successful!</h5>
        <Checkmark />
        <p>Payment of NGN{success_data.data.amount} was confirmed! </p>
          <Link to={'/'} className={'btn text-success'}>Return Home</Link>
      </center>
    </div>
  );
};
