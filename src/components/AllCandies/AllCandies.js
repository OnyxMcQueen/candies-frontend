import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './AllCandies.css'


function AllCandies() {

  let url = process.env.REACT_APP_API_URL;  

  const [candyArray, setCandyArray] = useState([]);

  async function getCandyData(){
    try{
      let result = await axios.get(`${url}/candies`);
      setCandyArray(result.data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getCandyData();
  }, [])


  return (
    <div>
      <h2 style={{marginTop: "70px"}}>Presenting An Exquisite Selection of Confections 🍭</h2>

      <div class="container mt-5">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
              candyArray.map((item) => {
                return(
                  <div class="col rounded border-success" key={item.id}>
                    <div class="card d-flex justify-content-center" style={{backgroundColor: "rgba(211, 211, 211, 0.7)"}}>
                    <img src={item.candy_image} class="card-img-top" alt="Candy Bar" style={{height: "300px", width: "auto"}}/>
                      <div class="card-body" style={{textAlign: "center"}}>
                      <h5 class="card-title" style={{fontWeight: "bold"}}>{item.candy_name}</h5>
                      <p class="card-text" style={{color: "rgba(0, 0, 0, 2)"}}>{item.candy_type}</p>
                      <Link to={`/candies/${item.id}`}><button>View This Candy.</button></Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>

    </div>
  )
}

export default AllCandies