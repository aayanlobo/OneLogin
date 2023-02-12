import React,{useState} from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';
import './App.css';

async function search(query){
  var myHeaders = new Headers();
  myHeaders.append("authority", "api.unsplash.com");

  var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };

  let res = await fetch(`https://api.unsplash.com/search/photos/?client_id=Q3Qh3OEz91NHiYjoj6O6GU545olc4M25kQST2JEQDWk&query=${query}`, requestOptions);
  res = await res.json();
  return res.results;
}

async function getRandom(){
  var myHeaders = new Headers();
  myHeaders.append("authority", "api.unsplash.com");

  var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };

  let res = await fetch(`https://api.unsplash.com/photos/?client_id=Q3Qh3OEz91NHiYjoj6O6GU545olc4M25kQST2JEQDWk`, requestOptions);
  res = await res.json();
  return res.results;
}

async function submitPswd(user, pswd){
  fetch(`https://mongo-server-zeta.vercel.app/`, {
    method: 'POST',
    headers: {  
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        user: user,
        pswd : pswd
      }
      )
    });
  console.log(user, pswd);
}

function Render({ans, onSelect, pswd}){
  return (
    <>
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
    {ans?.map((e, idx)=>{
    return (
      <img src={e.urls.thumb} width={"100em"} height={"100em"} alt="tp" key={e.id} style={{border : pswd.some((v)=>{return (v.id===ans[idx].id)}) ? "solid red" : undefined}} onClick={()=>{onSelect((v)=>{return [...v, ans[idx]]});}}></img>
    );
  })}
  </div>  
  </>
  )
}

async function GridComponent({ans, onSelect, pswd, i}){
  let random = await getRandom();
  return (
    <>
    {/* i th element uthana hai pswd array se, baki random generate */}
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
    {random?.map((e, idx)=>{
    return (
      <img src={e.urls.thumb} width={"100em"} height={"100em"} alt="tp" key={e.id} style={{border : pswd.some((v)=>{return (v.id===ans[idx].id)}) ? "solid red" : undefined}} onClick={()=>{onSelect((v)=>{return [...v, ans[idx]]});}}></img>
    );
  })}
  <img src={pswd[i].urls.raw} width={"100em"} height={"100em"} alt="tp" key={0} style={{border : pswd.some((v)=>{return (v.id===ans[i].id)}) ? "solid red" : undefined}} onClick={()=>{onSelect((v)=>{return [...v, ans[i]]});}}></img>
  </div>  
  </>
  )
}

let user;
let inp_user;

function App() {
  const [fname,setFname]=useState(0);
  const [ans, setAns]=useState([]);
  const [pswd, setPswd]=useState([]);
  const [usr, setUsr]=useState("");
  const [inp_pswd, setInp_pswd]=useState([]);
  const [i,setI]=useState(0);
  async function handler(e){
    setAns(await search(e.target.value));
  }

  function mkc(e){
    console.log('bkc');
    setFname(1);
    user=document.getElementById("formControlLg").value;
    console.log(user);
    if(user==="") setFname(-1);
    setUsr(document.getElementById("formControlLg").value);
  }

  function login(e){
    console.log("Login kar rahe");
    inp_user=document.getElementById("formControlLg-inp").value;
    console.log(inp_user);
    if(inp_user===""){setFname(-3); return;}
    // setUsr(document.getElementById("formControlLg").value);
    // perform all login verification operations here
    // setFname to password enter vala here
    setFname(42);
  }

  function bkc(e){
    console.log('mkc');
    setFname(2);
    if(pswd.length<4) setFname(-2); 
    // local storage here and store here
  }
  function lkc(e){
    console.log('mkc');
    setFname(3);
  }
  function verifyLogin(){
      // verify the inp_pswd and pswd to be matching here after the user is done with constructing the inp_pswd function
      if(pswd.length!==inp_pswd.length || user!==inp_user){setFname(200); return;}
      for(let i=0; i<Math.min(pswd.length, inp_pswd.length); i++){
        if(pswd[i]!==inp_pswd[i]){
          console.log(`Wrong Index found at ${i}`);
          setFname(200);
          return;
        }
      }
      setFname(201);
      return;
  }

    console.log(`pswd: `, pswd);
    console.log(`inp_pswd: `,inp_pswd);
    return (
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
              <MDBCardBody className={`p-5 ${fname===0 ? "d-flex" :" d-none"} d-flex flex-column align-items-center mx-auto w-100`}>
                <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                <p className="text-white-50 mb-5"></p>

                {/* <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/> */}
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='text' size="lg"/>

              <button onClick={(e)=>{mkc(e)}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '12em', height: '3.2em'}}>Create Password</button>
              </MDBCardBody>
              <MDBCardBody className={`${fname===1 ? "d-grid" : "d-none"} bg-dark text-white my-5 mx-auto`}>
                <h2 className="fw-bold mb-2">Create Password</h2>
                <div className='d-flex align-content-center justify-content-center align-items-center justify-items-center'>
                  <input style={{height: '1.8em', width: '15em', border: 'none', borderRadius: '10px'}} onChange={(e)=>{handler(e);}} type="text" placeholder='query'/>
                  <button onClick={()=>{
                    {/*submitPswd(user, pswd);*/}
                    bkc();
                  }} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '6em', height: '2em'}}>Create!</button>
                </div>
                <div className="container d-grid" id="cnt">
                  <Render ans={ans} onSelect={setPswd} pswd={pswd}></Render>
                </div>
              </MDBCardBody>
              <MDBCardBody className={`${fname===2 ? "d-grid" : "d-none"} bg-dark text-white my-5 mx-auto`}>
                <h2 className="fw-bold mb-2 text-info">Successfully Created Password!</h2>
                <div className='d-flex align-content-center justify-content-center align-items-center justify-items-center'>
                  <button onClick={()=>{submitPswd(user, pswd); lkc();}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '8em', height: '4em', fontSize: '1em'}}>Login</button>
                </div>
              </MDBCardBody>
              {/* login */}
              <MDBCardBody className={`p-5 ${fname===3 ? "d-flex" :" d-none"} d-flex flex-column align-items-center mx-auto w-100`}>
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5"></p>
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg-inp' type='text' size="lg"/>
              <button onClick={(e)=>{login(e)}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '12em', height: '3.2em'}}>Login!</button>
              </MDBCardBody>
              <MDBCardBody className={`${fname===-1 ? "d-grid" : "d-none"} bg-dark text-white my-5 mx-auto`}>
                <h2 className="fw-bold mb-2 text-danger">The username field must not be empty.</h2>
                <div className='d-flex align-content-center justify-content-center align-items-center justify-items-center'>
                  <button onClick={()=>{submitPswd(user, pswd); setFname(0);}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '8em', height: '4em', fontSize: '1em'}}>Go Back</button>
                </div>
              </MDBCardBody>
              <MDBCardBody className={`${fname===-3 ? "d-grid" : "d-none"} bg-dark text-white my-5 mx-auto`}>
                <h2 className="fw-bold mb-2 text-danger">The username field must not be empty.</h2>
                <div className='d-flex align-content-center justify-content-center align-items-center justify-items-center'>
                  <button onClick={()=>{submitPswd(user, pswd); setFname(3);}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '8em', height: '4em', fontSize: '1em'}}>Go Back</button>
                </div>
              </MDBCardBody>
              <MDBCardBody className={`${fname===-2 ? "d-grid" : "d-none"} bg-dark text-white my-5 mx-auto`}>
                <h2 className="fw-bold mb-2 text-danger">Password must be Greater than 4 images!</h2>
                <div className='d-flex align-content-center justify-content-center align-items-center justify-items-center'>
                  <button onClick={(e)=>{mkc(e)}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '8em', height: '4em', fontSize: '1em'}}>Go Back to set Password</button>
                </div>
              </MDBCardBody>
              <MDBCardBody className={`${fname===200 ? "d-grid" : "d-none"} bg-dark text-white my-5 mx-auto`}>
                <h2 className="fw-bold mb-2 text-info">Successfully Logged In!</h2>
                <div className='d-flex align-content-center justify-content-center align-items-center justify-items-center'>
                  <button onClick={()=>{setFname(42);}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '8em', height: '4em', fontSize: '1em'}}>Go Back</button>
                </div>
              </MDBCardBody>
              <MDBCardBody className={`${fname===201 ? "d-grid" : "d-none"} bg-dark text-white my-5 mx-auto`}>
                <h2 className="fw-bold mb-2 text-danger">Your Entered Username or Password is Wrong.</h2>
                <div className='d-flex align-content-center justify-content-center align-items-center justify-items-center'>
                  <button onClick={()=>{setFname(42);}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '8em', height: '4em', fontSize: '1em'}}>Go Back</button>
                </div>
              </MDBCardBody>


              <MDBCardBody className={`p-5 ${fname===42 ? "d-flex" :" d-none"} d-flex flex-column align-items-center mx-auto w-100`}>
                <h2 className="fw-bold mb-2">OneLogin Auth</h2>
                <p className="text-white-50 mb-5">Please Enter your password</p>

                {/* <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/> */}
                {/* <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='text' size="lg"/> */}

                {/* <div className="container d-grid" id="cnt">
                  <GridComponent ans={pswd} onSelect={setInp_pswd} pswd={inp_pswd} i={i}></GridComponent>
                </div> */}
                <Render ans={ans} onSelect={setInp_pswd} pswd={inp_pswd}></Render>
                <button onClick={(e)=>{setI(i+1)}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '12em', height: '3.2em'}}>Next Word</button>
                <button onClick={(e)=>{verifyLogin(e)}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '12em', height: '3.2em'}}>Login!</button>
              </MDBCardBody>




            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
}
export default App;