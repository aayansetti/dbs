import React, { useState } from 'react';
import PopUp from './PopUp';
// import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datetime' ;
import axios from 'axios';
// import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

import raw from './sdnlist.txt';

function Landing() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
       
    // const [customer,setCustomers]=useState([]);
    const [bankname,setBankName]=useState("");
    const [transferfee,setTransferFee]=useState("");
    const [amount,setAmount]=useState("");
    const [clearbalance,setClearBalance]=useState("");
    const [customerid,setCustomerId]=useState("");
    const [accountholdername,setAccountHolderName]=useState("");
    const [balance,setBalance]=useState("");
    const [overdraft,setOverdraft]=useState("");
    const [transfertype,setTransferType]=useState()
    
const handleChange = (e) =>{
    console.log(e.target.name)
    if(e.target.name === "customerid"){
        setCustomerId(e.target.value);
        axios.get( "http://localhost:8094/api/v1/customer/" + e.target.value)
        .then(response => {
            console.log(response.data)
            setAccountHolderName(response.data.accountholdername)
            setBalance(response.data.balance)
            setOverdraft(response.data.overdraft)
        })
        .catch(error => {
            console.log(error)
        })
        
    }
    
}
const handleBank = (e) =>{
    console.log(e.target.name)
    if(e.target.name === "bic"){
        axios.get( "http://localhost:8094/api/v1/bank/" + e.target.value)
        .then(response => {
            console.log(response.data)
           setBankName(response.data.bankname)
        })
        .catch(error => {
            console.log(error)
        })
        
    }
}
const handleAmount=(e) =>{
    setAmount(e.target.value)
}

const checkData =(e) =>{
    setTransferFee(amount*0.0025)
    const Amount=parseFloat(amount)+parseFloat(transferfee)

    if(parseFloat(amount)>=parseFloat(balance)){
        
        if(overdraft==="yes"|| overdraft==="Yes"|| overdraft==="YES"){
            setClearBalance(parseFloat(balance)-parseFloat(Amount))
        }
        else{
            console.log("no funds")
            alert("No Required Funds")
        }
    }
    else{

        // const Amount = parseFloat(amount)+parseFloat(transferfee)
        console.log(amount)
        setClearBalance(parseFloat(balance)-parseFloat(Amount))
    }

    fetch(raw).then(r=>r.text()).then(text=>{
        console.log(name)
        if(text.search(name)>-1){
            console.log("success")
            alert("reciever is in sdnlist:")
        }
        else{
            console.log("sorry")
        }
    });

if(accountholdername.search("HDFC BANK")>-1)
// //|| accountHolderName==="HDFCBANKC1A" || accountHolderName==="HDFCBANKH0A" )
{
console.log("good")
if(transfertype==="customertransfer")
{
alert("cant send")
}
else{
console.log("send")
}
}
else
{
if(transfertype==="Banktransfer")
{
alert("cannot tranfer to bank")
}
else{
console.log("success send")
}
}




}
const updateDatabase =(e)=>{
    e.preventDefault();
    const balance=clearbalance
    console.log(clearbalance)
    console.log(balance)

    const cust = { accountholdername, balance , overdraft }
    if(1){
        axios.put("http://localhost:8094/api/v1/customer/"+ customerid,cust)
        .then(response => {
            console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    

}
// const yesterday =moment().
const customdates =  current =>{
    return current.day()!== 0 && current.day()!== 6;
}
const [name,setName] = useState("")
const checksdnlist =(e)=>{
    setName(e.target.value)
    // fetch(raw).then(r=>r.text()).then(text=>{
    //     console.log(e.target.value)
    //     if(text.search(e.target.value)){
    //         console.log("success")
    //     }
    //     else{
    //         console.log("sorry")
    //     }
    // });
}




    return (
        <div className="root">
            <div className="row">
                <div className="card col-md-7 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-3">
                                <label className="form-label">Date</label>
                                {/* <input
                                    type="date"
                                    placeholder="Enter the date"
                                    name="date"
                                    className="form-control"
                                /> */}
                                <DatePicker
                        
                                timeFormat={false}
                                isValidDate={customdates}
                                // disabledDays={[new],{[daysOfWeek:[0,6]}}
                                />

                                </div>
                            <div className="form-group mb-3">
                                <label className="form-label">AccountNumber</label>
                                <input
                                    type="number"
                                    placeholder="Account number"
                                    name="customerid"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Account Holder Name</label>
                                <p>{accountholdername}</p>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Balance</label>
                                <p>{balance}</p>

                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Overdraft</label>
                                <p>{overdraft}</p>
                            </div>

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
                                    onChange={checksdnlist}
                                    
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
                                <input className="form-control" list="transfer type" id="transfertype"
                                    placeholder="Transfer type" 
                                    onChange={(e)=>setTransferType(e.target.value)}/>
                                <datalist id="transfer type">
                                    <option value="customertransfer" />
                                    <option value="Banktransfer" />
                                </datalist>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Message</label>
                                <input className="form-control" placeholder="message" list="Message" />

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

                            <div className="form-group mb-3">
                                <label className="form-label">Transfer fee</label>
                                <p>{transferfee}</p>
                            </div>
                            
                            <div className="form-group mb-3">
                                <label className="form-label">Clear Balance</label>
                                <p>{clearbalance}</p>
                            </div>
                            <button type="button" className="btn btn-dark" onClick={checkData}>Check</button>
                            <button className="btn btn-dark" onClick={updateDatabase}>Update</button>

                            <div>
                                <button type="button" className="btn btn-dark" onClick={togglePopup} style={{ marginBottom: "5rem" }}>Transfer</button>
                                {isOpen && <PopUp
                                    content={<>
                                        <b style={{ marginLeft: "5rem" }}>Transfer Successful</b><br />
                                        <button className="btn btn-dark">ok</button>
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
