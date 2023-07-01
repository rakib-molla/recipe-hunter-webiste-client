import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'

const Card = () => {
    const [chefDetails, setChefDetails] = useState([]);
    useEffect(() => {
        fetch('https://chef-resturent-server-a10.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefDetails(data))
    }, [])
    // const [like, setLike] = useState(false);
    // const likeBtn =()=>{
    //     setLike(true)
        
    // }
    return (
        <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2'>
            {
                chefDetails && chefDetails.map(chef => {
                        return <>
                             
                            < div className = "card w-auto bg-gray-100 shadow-xl" >
                                <figure><img src={chef.photo} alt="photo" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: { chef.name}</h2>
                                    <p>Experience: {chef.experience} </p>
                                    <p>Number Of Recipes: <span className='text-red-400'>{chef.recipe_name}</span></p>
                                    <div className='flex '>
                                    <span className='me-3'>Total Like: {chef.likes} </span>
                                    {/* <span><HeartIcon onClick={likeBtn} className={`h-6 w-6  ${like ? 'text-red-500': 'text-black'}`} /> </span> */}
                                    </div>
                                    {/* <p>Rating: {chef.rating}<StarIcon className='h-6 w-6'/> </p> */}

                                    <div className="flex card-actions justify-end">
                                        
                                        <Link className='btn btn-primary' to={`/chefDetails/${chef.id}`}>View Recipes</Link>
                                    </div>
                                </div>
                            </div> 
                            
                        </>
                })
            }
        </div >
    );
};

export default Card;