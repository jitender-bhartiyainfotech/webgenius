// import logo from './logo.svg';
import './App.css';
// import Testing from './Components/Testing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.js'
import Blog from './Components/Blogs/Blog.js';
import SinglePost from './Components/SinglePost/SinglePost.js';
import SingleCategory from './Components/Blogs/SingleCategory.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/category/:id" element={<SingleCategory />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
