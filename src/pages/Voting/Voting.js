import React, {useEffect} from "react";
import {useVotes} from "../../components/VoteContexts";
import Hilda from "../../assets/images/hilda.jpeg";
import Segun from "../../assets/images/segun.jpeg";
import Mike from "../../assets/images/mike.jpeg";
import Lola from "../../assets/images/lola.jpeg";
import Chi from "../../assets/images/chi.jpeg";
import Dami from "../../assets/images/dami.jpeg";
import Logo from "../../assets/images/logo2.png";
import {ContestChart} from "../../components/ContestChart/ContestChart";
import {useApiVotes} from "../../services/VoteApiContext";
import {Link} from "react-router-dom";
import {MdRefresh} from "react-icons/md";

export const Voting = () => {
    const { votes,labels,contestants, resetVotes } = useApiVotes(); // Use the votes and increment

    const sortedData = [...votes]
        .map((vote, index) => ({vote, label: labels[index]}))
        .sort((a, b) => b.vote - a.vote);

    const sortedVotes = sortedData.map((item) => item.vote);
    const sortedLabels = sortedData.map((item) => item.label);
    const handleRestoreDefault = () => {
        resetVotes(); // Call the reset function from the context to restore default votes
    };
    return (
        <div>
            <center>
                {" "}
                <h1>Live Vote Count <span onClick={handleRestoreDefault} className="btn btn-outline-info"><MdRefresh/></span></h1>
            </center>

            <div
                className="col-md-12 offset-md- d-md-flex "
                style={{marginTop: "80px"}}
            >
                <div className="col-md-4 contestants">
                    <div className="col-md-12">
                        {contestants?.map((contestant,index)=><>
                        <div key={index} className="d-flex">
                            {" "}
                            <Link to={contestant?.dp} target={'_blank'}><img src={contestant?.dp}/></Link>
                            <h3>
                                {contestant?.name}: <span>{contestant?.votes}</span>
                                <br/><small className='text-muted'>Reg ID: <strong>{contestant?.reference}</strong></small>
                            </h3>
                        </div>
                        </>)}
                    </div>
                </div>
                <div className="chart-container col-md-8" style={{marginTop: "40px"}}>
                    <ContestChart labels={sortedLabels} dataset={sortedVotes}/>
                </div>
            </div>
        </div>
    );
};
