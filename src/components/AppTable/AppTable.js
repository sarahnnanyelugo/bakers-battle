import React, {useState, useLocation, useEffect, useContext} from "react";
import Table from "react-bootstrap/Table";
import {Link, useNavigate} from "react-router-dom";
import {ContestantsProfile} from "../ContestantsProfile/ContestantsProfile";
import "./schools-table.scss";
import {AuthUserContext} from "../../services/AuthUserContext";
import axios from "axios";
import moment from 'moment';

const AppTable = ({callback}) => {
    const navigate = useNavigate();
    const {authAdmin, setAuthAdmin} = useContext(AuthUserContext);
    const [data,setData]=useState(null);
    const [page,setPage]=useState(1);
    const [perPage,setPerPage]=useState(10);
    const [searchText,setSearchText]=useState("");
    const fetchTable = async () => {
        try {
            const baseUrl = process.env.REACT_APP_API_BASE_URL;
            let payload={page:page,per_page:perPage};
            if(searchText)
                payload.search=searchText;
            const response = await axios.post(`${baseUrl}/api/admin/contestants/list`, payload, {
                headers: {
                    Authorization: `Bearer ${authAdmin.token}`, // Using token from authAdmin
                },
            });

            // console.log('API Response:', response.data); // Log the response
            setData(response.data);
        } catch (error) {
            console.error("Error fetching summary data:", error);
            if (error.response && error.response.status === 401) {
                setAuthAdmin(null);
                localStorage.removeItem('authAdmin');
                navigate('/admin');
            }
        }
    };

    useEffect(() => {
        if (!authAdmin || !authAdmin.token) {
            navigate('/admin');
        } else {
            // Implement API call for the summary data
            fetchTable().then(r =>{} ); // Call the function to fetch data
        }
    }, [authAdmin, navigate, setAuthAdmin,page,perPage,searchText]);


    const handlePageShift=(dir)=>{
        const currPage=data?.current_page;
        setPage(currPage + parseInt(dir));
    }
    return (
        <div>
            <div className="d-flex tabled-data">
                {" "}
                <h5 style={{flexGrow: 1}}>Contestants</h5>
                <div>
                    {" "}
                    {/*<button onClick={handleToggleDisplay} className="dashboard-btn">*/}
                    {/*    {isShowingAll ? "See less" : "See all"}*/}
                    {/*</button>*/}
                    <div className="d-md-flex justify-content-md-between align-items-md-center">
                        <div className="input-group">
                            <span className="input-group-text">Per Page</span>
                            <input type="number" onChange={(e)=>{setPerPage(e.target.value);setPage(1)}} value={perPage} className="form-control" min={10} step={10} max={1000}/>

                            <span className="input-group-text">Search</span>
                            <input type="text"  onChange={(e)=>{setSearchText(e.target.value);setPage(1)}} value={searchText} className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>

            {data ? (
                <Table striped bordered hover className="school-table" responsive>
                    <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Reg ID</th>
                        <th>Reg Date</th>
                        <th>PaymentStatus</th>
                        <th>ApplicationStatus</th>
                        <th>Stage</th>
                        <th>PhoneNum</th>
                        <th>Gender</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.data.map((item,index) => (
                        <tr key={item.id}>
                            <td>{index +1}</td>
                            <td className="">
                                <div className="d-flex">
                                    <img
                                        src={item.dp}
                                        height="20px"
                                        width="20px"
                                        style={{borderRadius: "100%", marginRight: "10px"}}
                                    />
                                    {item.name}
                                </div>
                            </td>
                            <td>{item.reference}</td>
                            <td>{moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}</td> {/* Format date */}
                            <td>
                                <div>
                                    <button
                                        className="table-btn"
                                        style={{
                                            background: item.status=='success'?"#ECFDF3":(item.status==null?"#e8c59f":"#f4bcbc"),
                                            color: item.status=='success'?"#027A48":(item.status==null?"#ba6204":"#900d0d"),
                                            padding: "0px 25px",
                                            width: "fit-content",
                                            height: "25px",
                                        }}
                                    >
                                        {(item.status=='success'?'paid':(item.status||'pending')).toUpperCase()}
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <button
                                        className="table-btn"
                                        style={{
                                            background: item.approval_status=='approved'?"#ECFDF3":(item.approval_status=='declined'?"#f4bcbc":"#e8c59f"),
                                            color: item.approval_status=='approved'?"#027A48":(item.approval_status=='declined'?"#900d0d":"#ba6204"),
                                            padding: "0px 25px",
                                            width: "fit-content",
                                            height: "25px",
                                        }}
                                    >
                                        {item.approval_status.toUpperCase()}
                                    </button>
                                </div>
                            </td>
                            <td><span className={`btn btn-sm ${item.nomination?.stage_name?'btn-outline-success':'text-danger'}`}>{!item.nomination?'None':item.nomination.stage_name}</span></td>
                            <td>{item.phone}</td>
                            <td>{item.gender}</td>
                            <td className="edit">
                                <ContestantsProfile profile={item} callbackParent={callback} callback={fetchTable}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            ) : (
                <p>Loading...</p>
            )}
            <div className="d-flex">
                <p style={{flexGrow: 1, fontSize:"10px"}}>Entry {data?.from} to {data?.to} of {data?.total} Result{data?.total>1?'s':''}</p>
                <div className="d-flex">
                    <div>
                        {" "}
                        <button onClick={()=>handlePageShift(-1)} disabled={!data?.prev_page_url} className="dashboard-btn" style={{marginRight: "10px"}}>
                            Previous
                        </button>
                    </div>
                    <div>
                        {" "}
                        <button onClick={()=>handlePageShift(1)} disabled={!data?.next_page_url} className="dashboard-btn">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppTable;
