import React, { useState, useEffect } from 'react';
import Usernav from './Usernav';
import axios from 'axios';


function Userdashboard() {
  const [data, setData] = useState([]);

  const fetchData =  () => {
      axios.get("http://localhost:4000/api/movies").then((response)=>{
       console.log(response.data)
        setData(response.data)

      })

  };
  useEffect(()=>{
    fetchData()
  },[])
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div style={{ backgroundImage: "url(https://i.pinimg.com/736x/c5/9f/92/c59f926ba4076b2b549525661de57643.jpg)", height: "100vh", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
      <Usernav />
      <div className="container" style={{marginTop:"5%"}}>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12">

            <div className="row g-3">
           {data.map(
            (value,index)=>{
             return    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
             <div className="card mb-4" style={{ maxWidth: "70%" ,maxHeight:"150%"}}>
               <div className="row g-0">
                 <div className="col-md-4">
                   <img src={value.image} className="img-fluid " alt="..." style={{height:"100%"}}/>
                 </div>
                 <div className="col-md-8">
                   <div className="card-body">
                     <h5 className="card-title">{value.movieName}</h5>
                     <p className="card-text">Category:{value.category}</p>
                     <p className="card-text">Languages:{value.languages}</p>
                     <p className="card-text">Languages:{value._id}</p>
                     
                   </div>
                   <button className="btn btn-dark"style={{marginLeft:"20px"}}>More</button>
                   <button className="btn btn-dark" style={{marginLeft:"20px"}}>Book</button>
                 </div>
               </div>
             </div>
           </div>
            }
           )}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-spacer" style={{ marginTop: "15%" }}>
        <footer className="bg-dark text-light mt-3 py-2 text-center" style={{ position: "absolute", marginTop: "20%", width: "100%" }}>
          &copy; Atropia
        </footer>
      </div>
    </div>
  );
}

export default Userdashboard;