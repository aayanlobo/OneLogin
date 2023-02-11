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

async function submitPswd(){

}

function Render({ans, onSelect, pswd}){
  return (
    <>
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
    {ans?.map((e, idx)=>{
    return (
      <img src={e.urls.thumb} width={"100em"} height={"100em"} alt="tp" key={e.id} style={{border : pswd.some((v)=>{return (v.id===ans[idx].id)}) ? "solid red" : undefined}} onClick={()=>{
        onSelect((v)=>{return [...v, ans[idx]]});
      }}></img>
    );
  })}
  </div>  
  </>
  )
}

function App() {
  const [fname,setFname]=useState(true);
  const [ans, setAns]=useState([]);
  const [pswd, setPswd]=useState("");
  const [usr, setUsr]=useState("");
  async function handler(e){
    setAns(await search(e.target.value));
  }

  function mkc(e){
    console.log('bkc');
    setFname(!fname);
    setUsr(e.target.value);
  }
    console.log(pswd);
    return (
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
              <MDBCardBody className={`p-5 ${fname ? "d-flex" :" d-none"} d-flex flex-column align-items-center mx-auto w-100`}>
                <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                <p className="text-white-50 mb-5"></p>

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='text' size="lg"/>

              <button onClick={(e)=>{mkc(e)}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '12em', height: '3.2em'}}>Create Password</button>
              </MDBCardBody>
              <MDBCardBody className={`${fname ? "d-none" : "d-grid"} bg-dark text-white my-5 mx-auto`}>
                <h2 className="fw-bold mb-2">Create Password</h2>
                <div className='d-flex align-content-center justify-content-center align-items-center justify-items-center'>
                  <input style={{height: '1.8em', width: '15em', border: 'none', borderRadius: '10px'}} onChange={(e)=>{handler(e);}} type="text" placeholder='query'/>
                  <button onClick={()=>{submitPswd("car");}} className='m-3 mkc' style={{color: 'white' , backgroundColor: 'black', borderRadius: '8px', width: '6em', height: '2em'}}>Create!</button>
                </div>
                <div className="container d-grid" id="cnt">
                  <Render ans={ans} onSelect={setPswd} pswd={pswd}></Render>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
}
export default App;