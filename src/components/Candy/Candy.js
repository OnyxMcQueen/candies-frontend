import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../common/Spinner/Spinner';

import './Candy.css';

function Candy() {
    const url = process.env.REACT_APP_API_URL;
    const { id } = useParams();

    const navigate = useNavigate();

    const [candy, setCandy] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function getCandyById(){
        setIsLoading(true);
        try{
            let result = await axios.get(`${url}/candies/${id}`);
            console.log(result.data);
            setCandy(result.data);
            setIsLoading(false);
        }
        catch(e){
            console.log(e)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCandyById();
    }, []);

    async function handleDelete(){
        try{
            let result = await axios.delete(`${url}/candies/${id}`);
            alert("This candy has been deleted 🚮")
            navigate('/candies')
        }
        catch(e){
            console.log(e)
        }
    }


  return (
    <>
        {
            isLoading ? (<LoadingSpinner />) : (
                <div className='candy-container'>
                    {
                        candy && (
                                <>
                                <img className='candy-image' src={candy.candy_image} alt='Candy Bar'/>
                
                                <div className='candy-body'>
                                    <h2>{candy.candy_name}</h2>
                                    <span style={{color: "#F5F5F5"}}>${candy.price}</span>
                                    <p style={{fontWeight: "bold"}}>"-{candy.candy_description}"</p>
                                    <p>Enjoy this candy? {candy.is_favorite ? ("😋") : ("🫤")}</p>
                                    <p>Rating: {candy.rating}/10</p>
                                    <button style={{margin: "3px"}} onClick={() => navigate(`/candies`)}>Go Back.</button>
                                    <button style={{margin: "3px"}} onClick={() => navigate(`/candies/edit/${id}`)}>Edit</button>
                                    <button style={{margin: "3px"}} onClick={handleDelete}><span style={{color: "red"}}>Delete</span></button>
                                </div>
                                </>
                            )
                        
                    }
        
                </div>
            )
        }
    </>
  )
}

export default Candy
