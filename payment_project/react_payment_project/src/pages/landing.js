import React from "react";

class Landing extends React.Component{
    render(){
        return(
        <div>
            
            <header>

<div class="logo">
    <h1>
        <i class="fas fa-piggy-bank"></i>
    </h1>
    <h2>E-pay</h2>
</div>
<p class="date" id="date"></p>
<script>
    n= new Date();
    y= n.getFullYear();
    m= n.getMonth();
    d= n.getDate();

    document.getElementById("date").innerHTML= m+1 + "/" + d + "/" +y;
</script>
</header>

<div class = "user">
<h1>Enter User Details</h1>
<form action="">

<br/><label className="input">select the date<br/><input className ="inputbox" type="date" placeholder="enter the date" /></label><br />

        <br/><label className="input">User Account number<br /><input className ="inputbox" type="number" placeholder="Account number" /></label><br/>

        <input type="Submit" value="Submit"></input>

</form>
        






</div>
<h1 class="usermargin">
Account holder name:<br/>
balance amout:<br/>
over draft:

<form action="benificiary.html">
<input type="Submit" value="Continue" />
</form><br/>
</h1>

<div class="user">
        <h1>Enter Reciever Details</h1>

       <form action=""> 
        <label>Bic<br/> <input class ="inputbox" type="text" placeholder="bic" /></label><br/>

        <br/><label>Benificiary Name<br/> <input class ="inputbox" type="text" placeholder="Reciever Name" /></label><br/>

        <br/><label>Benificiary Account number<br/> <input class ="inputbox" type="number" placeholder="Reciever Account number" /></label><br/>
            
             <input type="Submit" value="Submit"/>
            

        </form>
    </div>


    <div class = "user">
      
           <form action=""> 
            <label>transfer Type<br/> <input class="inputbox" placeholder="type" list="transfer type"/></label>
                <datalist id="transfer type">
                    <option value = "customer transfer"/>
                    <option value = "Bank transfer"/>
                </datalist>
                <br/>
        
                <br/><label>Message<br/>  <input class="inputbox" placeholder ="message" list="Message"/></label>
                <datalist id="Message">
                       
                    <option value = "CHQB"/>
                    <option value = "CORT"/>
                    <option value = "HOLD"/>
                    <option value = "INTC"/>
                    <option value = "PHOB"/>
                    <option value = "PHOI"/>
                    <option value = "PHON"/>            
                    <option value = "REPA"/>
                    <option value = "SDVA"/>
                
                    </datalist>
                <br/>
        
                <br/><label>Amount<br/> <input class ="inputbox" type="number" placeholder="Enter amount" /></label><br/>
        
                <br/><label>Transfer fee<br/></label>
                <button onclick="myfunction()"class="transfer">Transfer</button>
                <script>
                    function myfunction () {
                        alert("successful")
                        
    }
                    
                </script>
        
        
            </form>
            
           
            
        </div>








        </div>
        );
    }

}
export default Landing;