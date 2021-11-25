import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PopUp from './PopUp';

function Transaction() {
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
                                <label className="form-label">Bic</label>
                                <input
                                    type="text"
                                    placeholder="Enter bic code"
                                    name="bic"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Benificiary Name</label>
                                <input
                                    type="text"
                                    placeholder="Reciever Name"
                                    name="Reciever Name"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Benificiary Account Number</label>
                                <input
                                    type="number"
                                    placeholder="Reciever Account Number"
                                    name="Reciever Account Number"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Transfer Type</label>
                                <input class="form-control" list="transfer type" id="transfertype"
                                    placeholder="Transfer type" />
                                <datalist id="transfer type">
                                    <option value="customer transfer" />
                                    <option value="Bank transfer" />
                                </datalist>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Message</label>
                                <input class="form-control" placeholder="message" list="Message" />

                                <datalist id="Message">
                                    <option value="CHQB" />
                                    <option value="CORT" />
                                    <option value="HOLD" />
                                    <option value="INTC" />
                                    <option value="PHOB" />
                                    <option value="PHOI" />
                                    <option value="PHON" />
                                    <option value="REPA" />
                                    <option value="SDVA" />

                                </datalist>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Amount</label>
                                <input
                                    type="number"
                                    placeholder="Amount"
                                    name="Amount"
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label className="form-label">Transfer fee</label>
                                <input
                                    type="number"
                                    placeholder="Traansfer fee"
                                    name="Traansfer fee"
                                    className="form-control"
                                />
                            </div>
                            <div>
                                <button type="button" class="btn btn-dark" onClick={togglePopup} style={{ marginBottom: "5rem" }}>Transfer</button>
                                {isOpen && <PopUp
                                    content={<>
                                        <b style={{ marginLeft: "5rem" }}>Transfer Successful</b><br />
                                        <Link to="/" className="btn btn-dark" style={{ marginTop: "2rem", marginLeft: "9rem" }}> OK </Link>
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

export default Transaction
