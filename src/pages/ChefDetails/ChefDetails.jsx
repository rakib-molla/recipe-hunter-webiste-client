import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { HeartIcon } from '@heroicons/react/24/solid'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefDetails = () => {
    const notify = () => toast("add to favorite ");
    const { id } = useParams();
    const ChefDetails = useLoaderData();

    const [like, setLike] = useState(false);
    const likeBtn = () => {
        setLike(true)
    }

    return (
        <div className='bg-gray-100'>
            <h1 className='text-center py-10 text-yellow-500 font-bold text-5xl'>Welcome To The Chef Recipe Details Page</h1>
            < div className="card w-auto bg-gray-100 shadow-xl" >
                <figure><img src={ChefDetails.photo} alt="photo" /></figure>
                <div className="card-body mx-80">
                    <h2 className="card-title font-bold">Name: {ChefDetails.name}</h2>
                    <p> <span className='font-bold'> Experience </span> {ChefDetails.experience} </p>
                    <p>Name Of Recipes: <span className='text-red-400'>{ChefDetails.recipe_name}</span></p>

                    <div className='flex justify-start items-center'>
                        <span className='me-2 font-bold'>Add Favorite:  </span>
                        <span onClick={notify} className='justify-start'>
                            <HeartIcon onClick={likeBtn} className={`h-6 w-6  ${like ? 'text-red-500' : 'text-black'}`} />
                            <ToastContainer />
                             </span>
                    </div>
                    <div className='flex justify-start items-center'>
                        <span className='me-2 font-bold'>Rating:  </span>
                        <Rating className='justify-start' style={{ maxWidth: 150 }} value={ChefDetails.rating} readOnly /> {ChefDetails.rating}
                    </div>
                    <p> <span className='font-bold'> Description:</span> {ChefDetails.description}  </p>
                    <p> <span className='font-bold'>Cooking Method: </span> {ChefDetails.cooking_method}  </p>
                    <p> <span className='font-bold'>Recipe Items Number: </span> {ChefDetails.number_of_recipe}  </p>
                    <p> <span className='font-bold'>Total Likes:  </span>{ChefDetails.likes}  </p>

                    <div className="flex card-actions justify-start">

                        <Link className='py-4 px-5 bg-pink-500 rounded-xl font-bold text-white' to="/"> Back to Home </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChefDetails;