import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FeatureImage from '../Blogs/FeatureImage';

function SinglePost() {

const { id } = useParams();

const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [date, setDate] = useState('');
const [content, setContent] = useState('');
const [categories, setCategories] = useState([]);
const [relatedPosts, setRelatedPosts] = useState('');
const [featuredImage, setFeaturedImage] = useState('');


const post = {
    title: 'How to Build a Responsive Single Post Page',
    author: 'Author Name',
    date: 'December 31, 2025',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at dolor sit amet mauris convallis luctus. 
      Nulla facilisi. Fusce ac tristique lacus, eget aliquet nulla. Suspendisse potenti.
    `,
    categories: ['WebDevelopment', 'ReactJS', 'TailwindCSS'],
    relatedPosts: [
      { id: 1, title: 'Post Title 1', excerpt: 'A short excerpt or description of the related post goes here...' },
      { id: 2, title: 'Post Title 2', excerpt: 'A short excerpt or description of the related post goes here...' },
      { id: 3, title: 'Post Title 3', excerpt: 'A short excerpt or description of the related post goes here...' },
    ],
  };

  useEffect(() => {
    // console.log(id);
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`).then((res) => {
        console.log(res.data.title.rendered);
        setTitle(res.data.title.rendered);
        setAuthor(res.data.author_name);
        setDate(res.data.date);
        setContent(res.data.content.rendered);
        setCategories(res.data.categories);
        setFeaturedImage(res.data.featured_media);
        console.log(res.data);
        // setPosts(res.data)
        // console.log(posts)
    })

  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <>
    <Header />
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <ol className="list-reset flex text-gray-500">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          </li>
          <span className="mx-2">/</span>
          <li>
            <Link to="/posts" className="text-blue-600 hover:underline">Blogs</Link>
          </li>
          <span className="mx-2">/</span>
          <li className="text-gray-700">Single Post</li>
        </ol>
      </nav>

      {/* Post Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {title}
        </h1>
        <div className='my-3'>
        {featuredImage > 0 && <FeatureImage id={featuredImage} />}
        </div>
        <div className="flex items-center space-x-4 text-gray-500 text-sm">
          <span>By <span className="text-gray-800 font-medium capitalize">{author}</span></span>
          <span>•</span>
          <span>{formatDate(date)}</span>
        </div>
      </header>

      {/* Categories */}
      <div className="mb-6">
        {categories.map((cat) => {
            return (
                <span
                    key={cat.id}
                    className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mr-2"
                >
                    <Link to={`/category/${cat.id}`}>#{cat.name}</Link>
                    
                </span>
            )
        })}
        
      </div>

      {/* Post Content */}
      <article className="prose prose-blue lg:prose-lg max-w-none">
        <p dangerouslySetInnerHTML={{ __html: content }} />
        {/* <div dangerouslySetInnerHTML={{ __html: postContent }} /> */}
        
      </article>

      {/* Related Posts */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {post.relatedPosts.map((relatedPost) => (
            <div
              key={relatedPost.id}
              className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{relatedPost.title}</h3>
              <p className="text-sm text-gray-600">{relatedPost.excerpt}</p>
              <Link
                to={`/blog/${relatedPost.id}`}
                className="inline-block mt-4 text-blue-600 hover:underline text-sm"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}

export default SinglePost