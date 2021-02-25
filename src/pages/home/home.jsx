import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import BlogCard from '../../components/blog-card/blog-card';
import './styles.css';
import Header from '../../components/header/header';

const Home = () => {    
  const history = useHistory();
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    getAllBlogs();
}, []);

const getAllBlogs = () => {
    axios.get(`https://603545c26496b9001749eb6c.mockapi.io/blog-app/blogs`)
    .then((response) => {
      const blogList = response.data;
      setBlogs(blogList);
    })
}

const deleteBlog = (blog) => {
    axios.delete(`https://603545c26496b9001749eb6c.mockapi.io/blog-app/blogs/${blog.id}`)
    .then((response) => {
        getAllBlogs();
    })
};
    return (        
        <div className="home-main-wrapper">            
          <Header />
            <div className="home-banner-wrapper">
                <div className="home-banner-text">Explore new perspectives</div>
            </div>
            <div className="home-content-wrapper">
                {blogs && blogs.map((blog) => (<div key={blog.id} className="blog-card-container"
                onClick={() => history.push(`/blog-details/${blog.id}`)}>
                    <BlogCard blog={blog} deleteBlog={deleteBlog} />
                    </div>))}
            </div>
        </div>
        
    )
}

export default Home;