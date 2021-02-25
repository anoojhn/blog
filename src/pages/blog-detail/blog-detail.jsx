import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import Header from '../../components/header/header';

const BlogDetail = () => {
    const { id } = useParams('/blog-details/:id');
    const [blog, setBlog] = useState(); //state initialize const [a, setA] = useState();
    useEffect(() => {
        axios.get(`https://603545c26496b9001749eb6c.mockapi.io/blog-app/blogs/${id}`)
        .then(response => {
          const blogData = response.data;
          setBlog(blogData);
        })
    }, []);    
    return (
        <div>
          <Header />
        {blog && (<div className="blog-detail-main-wrapper">
            <div className="blog-detail-title-wrapper">{blog.title}</div> 
            <div className="blog-detail-description">{blog.description}</div>           
            <div className="blog-detail-author-wrapper">
            <div className="blog-detail-author-image">
                        <img src={blog.author.image}
                        width={50}
                        height={50}
                        style={{ borderRadius: '50%' }}
                        alt="author-image"/>

                        </div>
                  <div className="blog-detail-author-wrapper2">
                    <div className="blog-detail-author-name">{blog.author.name}</div>
                    <div className="blog-detail-date">{blog.date}</div>
                  </div> 
            </div>
             
            <div className="blog-detail-cover">
                <img src={blog.cover}
                width={600}
                height={400} alt="blog-detail-cover"/></div>       
                <div className="blog-detail-content">{blog.content}</div> 
        </div>)}
        </div>
    )
}

export default BlogDetail;