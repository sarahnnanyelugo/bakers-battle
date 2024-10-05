import React, {useContext, useEffect, useState} from "react";
import Switch from "../../assets/images/paystack.png";
import Modal from "react-bootstrap/Modal";

import {formatCurrency, GetAdminConfig, GetPubConfig} from "../../utils/utils";
import {AuthUserContext} from "../../services/AuthUserContext";
import Swal from "sweetalert2";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const RechargePage = () => {
    const [lgShow, setLgShow] = useState(false);
    const [config, setConfig] = useState(null)
    const {authVoter, setAuthVoter} = useContext(AuthUserContext);
    const [login, setLogin] = useState(false)
    const [formData, setFormData] = useState({
        amount: config?.minimum_wallet_recharge,
        name: authVoter?.user?.name || "",
        email: authVoter?.user?.email || "",
        phone: authVoter?.user?.phone || "",
        handle: authVoter?.user?.handle || "",
        password: "",
        password_confirmation: "",
        qty: (parseFloat(config?.minimum_wallet_recharge) || 500) / (Math.max(parseFloat(config?.price_per_vote), 1)),
    });
    useEffect(() => {
        const fetchConfig = async () => {
            const conf = await GetPubConfig(); // Await the result
            if (conf) {
                setConfig(conf);
            }
        };
        if (lgShow)
            fetchConfig().then(r => {
            }); // Call the function to fetch the config
    }, [lgShow]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            qty: formData.amount / (Math.max(config?.price_per_vote, 1)),
        }));
    }, [formData.amount])
    useEffect(() => {
        const amt = config?.minimum_wallet_recharge;
        const qty = amt / (Math.max(config?.price_per_vote, 1));
        setFormData((prev) => ({
            ...prev,
            amount: amt,
            qty: qty,
        }));
    }, [config])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Access the base URL from the environment variable
        try {
            const response = await axios.post(`${baseUrl}/api/voter-wallet-new`, formData);
            if (response.data.success) {
                const {voter, token, pk, transaction} = response.data;

                // Save to localStorage
                localStorage.setItem('voter', JSON.stringify(voter));
                localStorage.setItem('transaction', JSON.stringify(transaction));
                localStorage.setItem('token', token);
                localStorage.setItem('pk', pk);

                setTimeout(() => {
                    window.location.href = "/payment-wallet";  // Redirect to /payment
                }, 200)
                // Swal.fire({
                //     title: 'Success!',
                //     text: response.data.message,
                //     icon: 'success',
                //     confirmButtonText: 'OK'
                // }).then(() => {
                //     window.location.href = "/payment-wallet";  // Redirect to /payment
                // });
            }
        } catch (error) {
            if (error.response && error.response.data) {
                // setErrors(error.response.data.errors); // Handle validation errors
                Swal.fire({
                    title: 'Error!',
                    html: '<p>Wallet credit initialisation failed. Please check your inputs.</p><p>' + error.response.data?.message || error.response?.message + '</p>',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    };


    return (
        <>
            {authVoter?.token ?
                <button className="btn btn-info" onClick={() => setLgShow(true)}>Wallet
                    Balance: {formatCurrency(authVoter?.user?.balance || 0)}</button>
                : <button className="btn btn-outline-danger" onClick={() => setLgShow(true)}> Recharge Wallet</button>}

            <Modal
                size="md"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h5>Recharge your Wallet</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        {" "}
                        <center>
                            <div className=" payment-form">
                                <div className="payment-form">
                                    <h6>Amount <span className="text-danger">*</span></h6>
                                    <input onChange={handleChange} required min={config?.minimum_wallet_recharge}
                                           value={formData.amount} name='amount' step={config?.price_per_vote}
                                           placeholder="min of 500" type="number"/>
                                    <small
                                        className={`${formData.amount >= parseFloat(config?.minimum_wallet_recharge) ? '' : 'text-danger'}`}>Note:
                                        Minimum to purchase is {formatCurrency(config?.minimum_wallet_recharge)}</small>
                                    <h6>Qty</h6>
                                    <input type="number" readOnly value={formData.qty}/>
                                    <small>Note: 1 unit is {formatCurrency(config?.price_per_vote)}</small>
                                    {!authVoter?.user && <>
                                        <h5 className="text-muted mt-4">Currently on Guest mode</h5>
                                        <span className="btn btn-sm btn-outline-info" onClick={() => setLogin(!login)}>Login Instead</span>
                                        {!login && <>
                                            <h6>Name <span className="text-danger">*</span></h6>
                                            <input type="text" onChange={handleChange} name='name' value={formData.name}
                                                   placeholder="Enter your name"/>
                                            <h6>Phone</h6>
                                            <input type="text" onChange={handleChange} name='phone'
                                                   value={formData.phone}
                                                   placeholder="Enter your Phone"/>
                                            <small>(Optional) We can use this to contact you</small>
                                            <h6>Social Media Link</h6>
                                            <input type="text" onChange={handleChange} name='handle'
                                                   value={formData.handle}
                                                   placeholder="E.g: @username"/>
                                            <small>(Optional) Your contestant will be able to reach back</small>
                                        </>}
                                        <h6>Email <span className="text-danger">*</span></h6>
                                        <input type="email" onChange={handleChange} name='email' value={formData.email}
                                               placeholder="Enter your email"/>
                                        <h6>Password <span className="text-danger">*</span></h6>
                                        <input type="password" onChange={handleChange} name='password'
                                               value={formData.password} placeholder="*********"/>
                                        {!login && <>
                                            <h6>Confirm Password <span className="text-danger">*</span></h6>
                                            <input type="password" onChange={handleChange} name='password_confirmation'
                                                   value={formData.password_confirmation} placeholder="*********"/>
                                        </>}
                                    </>}


                                </div>
                                {/*<h4>Payment Method</h4>*/}
                                {/*<div className="">*/}
                                {/*    <img src={Switch} width="100%" alt="payment logo"/>*/}
                                {/*</div>*/}
                                <center>
                                    <button onClick={handleSubmit}>Buy Voucher</button>
                                </center>
                            </div>
                        </center>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
