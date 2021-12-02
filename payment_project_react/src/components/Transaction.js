import axios from 'axios';
import React, { useState} from 'react'
import { Link} from 'react-router-dom';
import PopUp from './PopUp';
// import props from 'prop-types';

function Transaction() {
    console.log("transaction")
   
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const [bankname,setBankName]=useState("");
    const [transferfee,setTransferFee]=useState("");
const handleBank = (e) =>{
    console.log(e.target.name)
    if(e.target.name === "bic"){
        // setCustomerId(e.target.value);
        axios.get( "http://localhost:8094/api/v1/bank/" + e.target.value)
        .then(response => {
            // console.log(response.data)
           setBankName(response.data.bankname)
        })
        
    }
}

// const{customerid}= useLocation();
// useEffect(() => {
//     console.log(customerid);
// }, [])
const handleAmount =(e) =>{
    if(e.target.name === "Amount"){
        setTransferFee(e.target.value*(0.0025))
        // axios.post("http://localhost:8094/api/v1/customer/"+ customerid)

    }
}
const About =(props)=>{
    console.log("about",props.location.aboutProps)
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
                                    onChange={handleBank}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Benificiary Bank Name</label>
                                <p>{bankname}</p>
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
                                    onChange={handleAmount}
                                />
                            </div>
                            <button onClick={About}>hello</button>
                            <div className="form-group mb-3">
                                <label className="form-label">Transfer fee</label>
                                <p>{transferfee}</p>
                            </div>
                        
                            <div className="form-group mb-3">
                                <label className="form-label">Clear Balance</label>
                                
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
