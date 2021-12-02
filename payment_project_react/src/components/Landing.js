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
    console.log(amount)
    if(balance<e.target.value*1.0025){
        if(overdraft==="yes"|| overdraft==="Yes"|| overdraft==="YES"){
            setTransferFee(e.target.value*0.0025)
            setClearBalance(balance-(e.target.value*1.0025))
            document.getElementById("funds").innerHTML = "";

        }
        else{
            console.log("no funds")
            setTransferFee("")
            setClearBalance("")
            document.getElementById("funds").innerHTML = "no funds!!!!!!!!!";
        }

    }
    else{
        document.getElementById("funds").innerHTML = "";
        setTransferFee(e.target.value*0.0025)
        setClearBalance(balance-e.target.value*1.0025)

    }
}

const onchnagetransfertype =(e)=>{
 let text=e.target.value
 console.log(text)
if(accountholdername.search("HDFC BANK")>-1)
{
    setTransferType(text)
    console.log(transfertype)

if(text==="customertransfer")
{
    document.getElementById("type").innerHTML = "Invalid type";

}
else{

document.getElementById("type").innerHTML = "";

}
}
else
{
    setTransferType(text)
if(text==="Banktransfer")
{

document.getElementById("type").innerHTML = "Invalid type"

}
else{
    document.getElementById("type").innerHTML = "";
}
}
}



const updateDatabase =(e)=>{
    setIsOpen(!isOpen);
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
    let sdnperson = e.target.value
    console.log(sdnperson)
    fetch(raw).then(r=>r.text()).then(text=>{
        setName(sdnperson)
        console.log(name)
        // console.log(name)
        if(text.search(name)>-1){
            console.log("success")
            document.getElementById("sdnlist").innerHTML = "Reciever is in sdnlist";
        }
        else{
            console.log("sorry")
            document.getElementById("sdnlist").innerHTML = "";

        }
    });


   
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
                                    type="text"
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
                                <p id="sdnlist" style={{color:"red"}}></p>
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
                                    type="text"
                                    placeholder="Reciever Account Number"
                                    name="Reciever Account Number"
                                    className="form-control"
                                    
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Transfer Type</label>
                                <p id="type" style={{color:"red"}}></p>
                                <select id="transfer type" className="form-control"placeholder="transfer type"
                                 onChange={onchnagetransfertype}>
                                     <option value="">Transfer type</option>
                                    <option value="customertransfer">customertransfer</option>
                                    <option value="Banktransfer">Banktransfer</option>
                                </select>
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
                                    type="text"
                                    placeholder="Amount"
                                    name="Amount"
                                    className="form-control"
                                    onChange={handleAmount}
                                />
                                <p id="funds" style={{color:"red"}}></p>
                            </div>

                            <div className="form-group mb-3">
                                <label className="form-label">Transfer fee</label>
                                <p>{transferfee}</p>
                            </div>
                            
                            <div className="form-group mb-3">
                                <label className="form-label">Clear Balance</label>
                                <p>{clearbalance}</p>
                            </div>
                            {/* <button type="button" className="btn btn-dark" onClick={checkData}>Check</button> */}
                            {/* <button className="btn btn-dark" onClick={updateDatabase}>Update</button> */}

                            <div>
                                <button type="button" className="btn btn-dark" onClick={updateDatabase} style={{ marginBottom: "5rem" }}>Transfer</button>
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
