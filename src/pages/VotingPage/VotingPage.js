import React, {useContext, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ContestChart } from "../../components/ContestChart/ContestChart";
import Hilda from "../../assets/images/hilda.jpeg";
import Segun from "../../assets/images/segun.jpeg";
import Mike from "../../assets/images/mike.jpeg";
import Lola from "../../assets/images/lola.jpeg";
import Chi from "../../assets/images/chi.jpeg";
import Dami from "../../assets/images/dami.jpeg";
import Logo from "../../assets/images/logo2.png";
import { useVotes } from "../../components/VoteContexts";
import { MdHowToVote, MdSettings,MdOutlineLogout, MdCountertops, MdRefresh } from "react-icons/md";

import "./voting-page.scss";
import { Link } from "react-router-dom";
import { PaymentPage } from "../PaymentPage/PaymentPage";
import { RechargePage } from "../../components/RechargePage/RechargePage";
import {useApiVotes} from "../../services/VoteApiContext";
import {formatCurrency, GetPubConfig, GetVoter} from "../../utils/utils";
import moment from "moment";
import {AuthUserContext} from "../../services/AuthUserContext";

function VotingPage() {
  const [lgShow, setLgShow] = useState(false);
  const { votes,labels,contestants, incrementVote, resetVotes } = useApiVotes(); // Use the votes and increment
  const [config, setConfig] = useState(null)
  const {authVoter, setAuthVoter} = useContext(AuthUserContext);
  const [calling,setCalling]=useState(false)
  const sortedData = [...votes]
      .map((vote, index) => ({ vote, label: labels[index] }))
      .sort((a, b) => b.vote - a.vote);

  const sortedVotes = sortedData.map((item) => item.vote);
  const sortedLabels = sortedData.map((item) => item.label);
  const handleRestoreDefault = () => {
    setCalling(true)
    resetVotes(); // Call the reset function from the context to restore default votes
    fetchVoter().then(()=>{});
    setTimeout(()=>{
      setCalling(false)
    },1000)
  };
  const fetchConfig = async () => {
    const conf = await GetPubConfig(); // Await the result
    if (conf) {
      setConfig(conf);
    }
  };
  const fetchVoter = async () => {
    const token = localStorage.getItem('token')
    const voter = await GetVoter(); // Await the result
    if (voter) {
      setAuthVoter({
        token:token,
        user:voter,
      })
    }
  };
  useEffect(() => {
    fetchConfig().then(r => {
    });
    fetchVoter().then(r => {
    }); // Call the function to fetch the config
  }, []);

  useEffect(() => {
    fetchVoter().then(r => {
    }); // Call the function to fetch the config
  }, [contestants]);
  return (
    <>
      {" "}
      <center>
        {" "}
        <Link to={"/"}>
          <img className="col-md-1 col-8" src={Logo} alt="Scholar" />
        </Link>
      </center>
      <center>
        {" "}
        <h6>
          Welcome to Baker's Battle voting page where you vote your favourite
          participant to stardom.
        </h6>
        <h6>Before you proceed, kindly note the following details:</h6>
      </center>
      <ul className="col-md-10 offset-md-1">
        <li>One vote costs <strong>{formatCurrency(config?.price_per_vote)}</strong></li>
        <li>You are at liberty to vote as many times as you want</li>
        <li>Voting begins at {moment(config?.voting_starts).format('Do MMMM, YYYY')||'...'} and ends at {moment(config?.voting_ends).format('Do MMMM, YYYY')||'...'}</li>
        <li>
          You must recharge your wallet to vote. Minimum wallet recharge is <strong>{formatCurrency(config?.minimum_wallet_recharge||500)}</strong>
        </li>
      </ul>
      <div className="row">
        <div className="col-md-12 text-center">
          {!config?.voting_status?<>
            <h3 className="alert alert-danger d-md-flex justify-content-md-between">Voting Is Currently Inactive
              <span className='btn-group'><RechargePage />
                {calling ? <span className="btn"><div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div></span>:<span onClick={handleRestoreDefault} className="btn btn-outline-info"><MdRefresh/></span>}
              </span>
            </h3>
          </>:<>
            {contestants?.length?<h4 className="alert alert-info d-md-flex justify-content-md-between"><span>Active Contestants</span>
                  <span className='btn-group'><RechargePage />
                    {calling ? <span className="btn"><div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div></span>:<span onClick={handleRestoreDefault} className="btn btn-outline-info"><MdRefresh/></span>}
                  </span>

            </h4>
                :
                <h3 className="alert alert-warning d-md-flex justify-content-md-between">No Contestant in current Stage
                  <span className='btn-group'>
                    <RechargePage />
                    {calling ? <span className="btn"><div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div></span>:<span onClick={handleRestoreDefault} className="btn btn-outline-info"><MdRefresh/></span>}
                  </span>

                </h3>
            }
          </>}

        </div>
      </div>
      <div
        className="col-md-10 offset-md-1 d-md-flex"
        style={{ marginTop: "0px" }}
      >
        <div className="col-md-4 contestants">
          {contestants?.length?<div className="col-md-12">
            {contestants?.map((contestant, index) => (<>
              <div key={index} className="d-flex">
                {" "}
                <Link to={contestant?.dp} target={'_blank'}><img src={contestant?.dp}/></Link>
                <div>
                  <button
                      className="button-57"
                      role="button"
                      onClick={() => incrementVote(contestant?.id)}
                      style={{flex: "1"}}
                  >
                    <span className="text"> {contestant?.name}: <strong>{contestant?.votes}</strong></span>
                    <span>VOTE ({formatCurrency(config?.price_per_vote || 50)})</span>
                  </button>
                </div>
              </div>
            </>))}
          </div>: <></>
          }
        </div>
        <div className="chart-container col-md-8" >

          {contestants?.length>0 && <ContestChart labels={sortedLabels} dataset={sortedVotes} />}
        </div>
      </div>
    </>
  );
}

export default VotingPage;
