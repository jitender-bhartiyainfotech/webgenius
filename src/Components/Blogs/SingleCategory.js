import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../Header';
import FeatureImage from './FeatureImage';
import axios from 'axios';
import { useEffect, useState } from 'react';

function SingleCategory() {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [catName, setCatName] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/categories/${id}`).then((res) => {
            setCatName(res.data.name)
        });

        axios.get(`${process.env.REACT_APP_API_URL}/posts?categories=${id}`).then((res) => {
            setPosts(res.data)
        });
    }, []);

   

    return (
        <>  
            {/* {console.log(posts)} */}
            <Header />
            
            <div className='container mx-auto px-4 py-8'>
                {/* <h2 className='text-3xl md:text-3xl font-bold text-left'>Category : { catName }</h2> */}
                <nav className="text-sm mb-6">
                    <ol className="list-reset flex text-gray-500">
                        <li>
                        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                        </li>
                        <span className="mx-2">/</span>
                        <li>
                        <Link to="/categories" className="text-blue-600 hover:underline">Categories</Link>
                        </li>
                        <span className="mx-2">/ { catName }</span>
                        
                    </ol>
                </nav>

                <div className="container mx-auto p-4">
                    <div className="md:grid grid-cols-3 gap-4 ">
                    {posts.map((pst) => {
                        return (
                            <>
                                <div key={pst.id} className='bg-gray-200 p-4 text-center shadow-xl border my-3 my-10'>
                                    {pst.featured_media > 0 && <FeatureImage id={pst.featured_media} />}
                                    <Link to={`/posts/${pst.id}`}>
                                        <h3 dangerouslySetInnerHTML={{__html: pst.title.rendered}} className='text-4l font-extrabold text-left dark:text-white'></h3>
                                    </Link>
                                    <p dangerouslySetInnerHTML={{__html: pst.excerpt.rendered}} className='text-left'></p>
                                    <div className='text-left my-4'>
                                    <Link
                                        to={`/posts/${pst.id}`}
                                        className="bg-black text-white  py-2 px-4 rounded hover:bg-slate-50 hover:text-black transition "
                                        >
                                        Read More
                                    </Link>
                                    </div>
                                    
                                </div>
                            </>
                        )
                    })}
                        {/* <div class="bg-gray-200 p-4 text-center">Item 1</div>
                        <div class="bg-gray-200 p-4 text-center">Item 2</div>
                        <div class="bg-gray-200 p-4 text-center">Item 3</div>
                        <div class="bg-gray-200 p-4 text-center">Item 4</div>
                        <div class="bg-gray-200 p-4 text-center">Item 5</div>
                        <div class="bg-gray-200 p-4 text-center">Item 6</div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCategory