import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Categories() {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/categories`).then((res) => {
            // setCatName(res.data.name)
            console.log(res.data)
            setCats(res.data);
        });
    }, []);
  return (
    <>
        <Header />

        <div className='container mx-auto px-4 py-8'>
            <nav className="text-sm mb-6">
                <ol className="list-reset flex text-gray-500">
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                    </li>
                    <span className="mx-2">/ Categories</span>
                </ol>
            </nav>

            <div class="md:grid grid-cols-3 gap-4 ">
                {cats.map((catt) => {
                    return (
                        <div class="bg-gray-200 p-4 text-center shadow-xl border my-3 my-10">
                            <img src="https://webgeniusitsolutions.com/wp-content/uploads/2024/11/Content-marketing.jpg" alt="18227" />
                            <a href="/posts/18223" data-discover="true">
                                <h3 class="text-4l font-extrabold text-left dark:text-white">
                                    {catt.name}
                                </h3>
                            </a>
                            <p class="text-left">
                                {catt.description}
                            </p>
                            <div class="text-left my-4">
                                <a class="bg-black text-white  py-2 px-4 rounded hover:bg-slate-50 hover:text-black transition " href="/posts/18223" data-discover="true">
                                    Read More
                                </a>
                            </div>
                        </div>
                    )
                })}
                
            </div>

            
        </div>
    </>
  )
}

export default Categories