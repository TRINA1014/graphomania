
import React from "react";
import { useNavigate } from "react-router-dom";
//STEP1 FOR BINDING DATA
import { useState } from "react";

function Adminlogin() {
    //STEP2 -- CREATE VARIABLE
    const [adminid, setAdminId] = useState("");
    const [adminpass, setAdminPass] = useState("");
    const [msg, setMsg] = useState("");
    const navigate =useNavigate()
    //STEP 5
    const executeSubmit =(evt) =>{
        evt.preventDefault();
        console.log(`ADMIN USER ID: ${adminid}`);
        console.log(`PASS : ${adminpass}`);

        if(adminid === 'admin' && adminpass === 'pass')
        {
          console.log('VALID')  
          navigate ("/adminafterlogin");
        }
        else
        {
            setMsg('INVALID UID OR PASSWORD')
            setAdminId('')
            setAdminPass('')
        }

    }

    return(
        <div>
            <h3 style ={{ color : 'blue'}}>ADMIN LOGIN</h3>
            <h4 style ={{ color : 'red'}}>{msg}</h4>
            {/*STEP 4  after clicking submit*/}
            <form onSubmit={executeSubmit}>
                { /*STEP 3 ADD VALUE={} & onCHANGE={} */}
                <input type='text' value={adminid}
                onChange ={(e) => setAdminId(e.target.value)}
                placeholder="Enter USER ID"></input>
                <br/><br/>
                <input type='password' value={adminpass} 
                onChange ={(e) => setAdminPass(e.target.value)}
                placeholder="Enter PASSWORD"></input>
                <br/><br/>
                <input type='submit' />
            </form>
        </div>
    )
}

//STEP3 -- EXPORT IT TO USE IT
export default Adminlogin