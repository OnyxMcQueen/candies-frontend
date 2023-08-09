import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import './NewCandyForm.css';

function NewCandyForm() {
    let url = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const [newCandy, setNewCandy] = useState({
        candy_name: "",
        price: "",
        rating: "",
        is_favorite: false,
        candy_image: "",
        candy_type: "",
        candy_description: ""
    });

    function handleChange(e){
        setNewCandy({
            ...newCandy,
            [e.target.id]: e.target.value
        })
    }

    function handleCheckboxChange(){
        setNewCandy({
            ...newCandy,
            is_favorite: !newCandy.is_favorite
        })
    }

    function handleSelectChange(e){
        const selectedValue = e.target.value;

        setNewCandy({
            ...newCandy,
            candy_type: selectedValue
        })
    }  

    function convertToNumber(){
        let convertedPrice = Number(newCandy.price);
        let convertedRating = Number(newCandy.rating);

        setNewCandy({
            ...newCandy,
            price: convertedPrice,
            rating: convertedRating,
        })
    }

    async function handleSubmit(e){
        convertToNumber();
        e.preventDefault();

        try{
            let result = await axios.post(`${url}/candies`, newCandy);
            alert("You've created your candy! 🎉 We're redirecting you back to the list of candies.");
            navigate('/candies');
        }
        catch(e){
            console.log(e)
        }
    }

  return (
    <div className='form-container'>
        <h2>Create a New Candy! 🍫</h2>

        <form className='form' onSubmit={handleSubmit}>

            <div className='form-group mx-5'>
                <label htmlFor='candy_name'>Name of Candy</label>
                <input required type='text' className='form-control' id='candy_name' value={newCandy.candy_name} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='price'>Price</label>
                <br />
                <span className='small'>(Please provide a whole number)</span>
                <input required type='text' className='form-control' id='price' value={newCandy.price} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='rating'>Rating</label>
                <br />
                <span className='small'>Give the candy a rating out of 10</span>
                <input required type='text' min={0} max={10} className='form-control' id='rating' value={newCandy.rating} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='is_favorite'>Is this a favorite candy?</label>
                <input type='checkbox' id='is_favorite' checked={newCandy.is_favorite} onChange={handleCheckboxChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='candy_image'>Candy Image</label>
                <br />
                <span className='small'>Provide an image URL link starting with either http or https</span>
                <input required type='text' className='form-control' id='candy_image' value={newCandy.candy_image} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='candy_type'>Candy type</label>
                <br />
                <select className='form-control' id='candy_type' value={newCandy.candy_type} onChange={handleSelectChange}>
                    <option value="">Select a candy type</option>
                    <option value="Hard Candy">Hard Candy</option>
                    <option value="Soft Candy">Soft Candy</option>
                    <option value="Chocolate">Chocolate</option>
                </select>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='candy_description'>Candy Description</label>
                <input required type='text' className='form-control' id='candy_description' value={newCandy.candy_description} onChange={handleChange}/>
            </div>

            <button type='submit' className='button-form'>Submit</button>

        </form>
    </div>
  )
}

export default NewCandyForm