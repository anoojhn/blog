import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';

const BlogCard = (props) => {
    const history = useHistory();
    return (
        <div className="blog-card-wrapper">
            <div className="blog-card-details">
                <div className="blog-author-wrapper">
                    <div className="blog-author-image">
                        <img src={props.blog.author.image}
                        width={30}
                        height={30}
                        style={{ borderRadius: '4px' }}
                        alt="author-image"/>
                        </div>
                    <div className="blog-author-name">{props.blog.author.name}</div>
                </div>                
                <div className="blog-title">{props.blog.title}</div>
                <div className="blog-description">{props.blog.description}</div>                
                <div className="blog-date">{props.blog.date}</div>
                </div>            
            <div className="blog-card-image">
                <img src={props.blog.cover}
                width={172}
                height={129} alt="blog-cover"/></div>
                <div className="bttn">
                <button className="btn btn-default" onClick={(event) => {
                    history.push(`/blog-edit/${props.blog.id}`);
                    event.stopPropagation();
                }}>
                    <img src="https://img.icons8.com/carbon-copy/2x/create-new.png"
                    width={20} height={20} alt="edit-button"/></button>
                    <button className="btn btn-default" 
                    onClick={(event) => {
                        props.deleteBlog(props.blog);
                        event.stopPropagation();
                    }}>
                        <img src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"
                        width={16} height={16}  alt="edit-button"/></button>
                </div>
        </div>
    )
};

export default BlogCard;