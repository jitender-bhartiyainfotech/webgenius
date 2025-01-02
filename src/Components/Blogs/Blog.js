import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import FeatureImage from './FeatureImage';
import Header from '../Header';
import { Link } from 'react-router-dom';

function Blog() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // console.log("Afafaf");
        // axios.get('http://localhost/headless/wp-json/wp/v2/posts').then((res) => {
        axios.get(`${process.env.REACT_APP_API_URL}/posts`).then((res) => {
            // console.log(res.data);
            setPosts(res.data)
            // console.log(posts)
        })

    }, []);

   

    return (
        <>  
            {/* {console.log(posts)} */}
            <Header />
            
            {/* Breadcrumb */}
            

            <div className="container mx-auto p-4">
                <nav className="text-sm mb-6">
                    <ol className="list-reset flex text-gray-500">
                        <li>
                        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                        </li>
                        <span className="mx-2">/ Blogs</span>
                    </ol>
                </nav>
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

            
            
        </>
    )
}

export default Blog