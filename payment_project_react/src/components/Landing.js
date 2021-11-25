import React, { useState } from 'react'
import PopUp from './PopUp';
import { Link } from 'react-router-dom';

function Landing() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div class="root">
            <div className="row">
                <div className="card col-md-7 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-3">
                                <label className="form-label">Date</label>
                                <input
                                    type="date"
                                    placeholder="Enter the date"
                                    name="date"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">User Account Number</label>
                                <input
                                    type="number"
                                    placeholder="Account number"
                                    name="User Account Number"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Account Holder Name</label>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Balance</label>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Overdraft</label>
                            </div>
                            <div>
                                <button type="button" class="btn btn-dark" onClick={togglePopup}>Continue</button>
                                {isOpen && <PopUp
                                    content={<>
                                        <b style={{ marginLeft: "5rem" }}>Verify the account number</b><br />
                                        <Link to="/transaction" className="btn btn-dark" style={{ marginTop: "2rem", marginLeft: "9rem" }}> Continue </Link>
                                    </>}
                                    handleClose={togglePopup}
                                />}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing
