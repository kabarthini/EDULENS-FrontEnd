import React, { useState} from 'react'

function Loginform() 
{
  const[userName,setUserName]= useState('');
  const[password,setPassword]= useState('');
  const[error,setError]=useState(false);
  const formHolder=(event)=>
  {
    event.preventDefault();
    if(userName!=="admin" && password!=="admin")
    {
      setError(true);
    } 
    if(userName && password)
    {
       const loginObj=
       {
          name:userName,
          pwd:password
       }
       console.log(loginObj);
       alert(JSON.stringify(loginObj));
    }
  }

  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHolder}>
    Username  :<input type="text" value={userName} placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/><br/>
    <div>
      {error && userName!=="admin"?
      <label style={{color:'red'}}>Username is Invalid</label>:""}
    </div>  
    Password  :<input type="Password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <div>
      {error && password!=="admin"?
      <label style={{color:'red'}}>Password is Invalid</label>:""}
    </div>  
    <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Loginform