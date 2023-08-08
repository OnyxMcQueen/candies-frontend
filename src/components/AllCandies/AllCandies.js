import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './AllCandies.css'


function AllCandies() {

  let url = process.env.REACT_APP_API_URL;  
  const navigate = useNavigate();

  const [candyArray, setCandyArray] = useState([]);
  const [candyToggle, setCandyToggle] = useState(false)

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


  useEffect(() => {
    if(candyArray.length !== 0){
      setCandyToggle(true);
    }
    else{
      setCandyToggle(false);
    }
  }, [candyArray]);


  return (
    <div>

      <h2 style={{marginTop: "70px", color: "black"}}>Presenting An Exquisite Selection of Confections 🍭</h2>

      {
        candyToggle ? (
          <div className="container mt-5 mb-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {
                candyArray.map((item) => {
                  return(
                    <div className="col rounded border-success" key={item.id}>
                      <div className="card d-flex justify-content-center" style={{backgroundColor: "rgba(211, 211, 211, 0.7)"}}>
                      <img src={item.candy_image} className="card-img-top" alt="Candy Bar" style={{height: "300px", width: "auto"}}/>
                        <div className="card-body" style={{textAlign: "center"}}>
                        <h5 className="card-title" style={{fontWeight: "bold"}}>{item.candy_name}</h5>
                        <p className="card-text" style={{color: "rgba(0, 0, 0, 2)"}}>{item.candy_type}</p>
                        <Link to={`/candies/${item.id}`}><button>View This Candy.</button></Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        ) : (
          <div className='container mt-5 mb-5'>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.2)", textAlign: "center", borderRadius: "7px"}}>
              <p style={{fontSize: "36px"}}>Uh Oh! It looks like you don't have any candies...Sweeten the collection! Add your favorite candies to the list and create a delectable assortment that will satisfy any craving</p>
              <button style={{margin: "10px"}} onClick={() => navigate(`/candies/new`)}>Add Some Candy!</button>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default AllCandies