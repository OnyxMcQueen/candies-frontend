import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import './EditCandy.css'

function EditCandy() {
    let url = process.env.REACT_APP_API_URL;

    const { id } = useParams();
    const navigate = useNavigate();

    const [selectedCandy, setSelectedCandy] = useState({
        candy_name: "",
        price: "",
        rating: "",
        is_favorite: false,
        candy_image: "",
        candy_type: "",
        candy_description: ""
    });

    async function fetchCandyData(){
        try{
            let result =  await axios.get(`${url}/candies/${id}`);
            setSelectedCandy(result.data);
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchCandyData();
    }, []);


    function handleChange(e){
        setSelectedCandy({
            ...selectedCandy,
            [e.target.id]: e.target.value
        })
    }


    function handleCheckboxChange(){
        setSelectedCandy({
            ...selectedCandy,
            is_favorite: !selectedCandy.is_favorite
        })
    }


    function handleSelectChange(e){
        const selectedValue = e.target.value;

        setSelectedCandy({
            ...selectedCandy,
            candy_type: selectedValue
        })
    }

    function convertToNumber(){
        let convertedPrice = Number(selectedCandy.price);
        let convertedRating = Number(selectedCandy.rating);

        setSelectedCandy({
            ...selectedCandy,
            price: convertedPrice,
            rating: convertedRating,
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        convertToNumber();

        try{
            let result = await axios.put(`${url}/candies/${id}`, selectedCandy);
            alert("You've successfully updated this candy! 😱");
            navigate(`/candies/${id}`);
        }
        catch(e){
            console.log(e)
        }
    }





  return (
    <div className='form-container2'>
        <h2>Edit this Candy 🍬</h2>


        <form className='form' onSubmit={handleSubmit}>

            <div className='form-group mx-5'>
                <label htmlFor='candy_name'>Name of Candy</label>
                <input required type='text' className='form-control' id='candy_name' value={selectedCandy.candy_name} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='price'>Price</label>
                <br />
                <span className='small'>(Please provide a whole number)</span>
                <input required type='text' className='form-control' id='price' value={selectedCandy.price} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='rating'>Rating</label>
                <br />
                <span className='small'>Give the candy a rating out of 10</span>
                <input required type='text' min={0} max={10} className='form-control' id='rating' value={selectedCandy.rating} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='is_favorite'>Is this a favorite candy?</label>
                <input type='checkbox' id='is_favorite' checked={selectedCandy.is_favorite} onChange={handleCheckboxChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='candy_image'>Candy Image</label>
                <br />
                <span className='small'>Provide an image URL link starting with either http or https</span>
                <input required type='text' className='form-control' id='candy_image' value={selectedCandy.candy_image} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='candy_type'>Candy type</label>
                <br />
                <select className='form-control' id='candy_type' value={selectedCandy.candy_type} onChange={handleSelectChange}>
                    <option value="">Select a candy type</option>
                    <option value="Hard Candy">Hard Candy</option>
                    <option value="Soft Candy">Soft Candy</option>
                    <option value="Chocolate">Chocolate</option>
                </select>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='candy_description'>Candy Description</label>
                <input required type='text' className='form-control' id='candy_description' value={selectedCandy.candy_description} onChange={handleChange}/>
            </div>

            <button type='submit' className='button-form'>Submit</button>

        </form>

    </div>
  )
}

export default EditCandy