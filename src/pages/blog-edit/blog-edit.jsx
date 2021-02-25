import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import Header from '../../components/header/header';

const BlogEdit = () => {
    const history = useHistory();
    const { id } = useParams('/blog-edit/:id');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [authorImage, setAuthorImage] = useState('https://miro.medium.com/fit/c/72/72/1*1qRqwcXJ2tX-PjmlWmi0YA.jpeg');
    
    const [cover, setCover] = useState('https://miro.medium.com/max/3000/1*_wCaNRD3vzKFie3tCMU8CA.jpeg');
    useEffect(() => {
        if (id) {
        axios.get(`https://603545c26496b9001749eb6c.mockapi.io/blog-app/blogs/${id}`)
        .then(response => {
          const blogData = response.data;
          setTitle(blogData.title);
          setContent(blogData.content);
          
          setCover(blogData.cover);
          setAuthorName(blogData.author.name);          
          setAuthorImage(blogData.author.image);
          setDescription(blogData.description);
        })
    }
    }, []);

    const onSubmit = () => {
        const data = {
            title,
            description,
            content,
            cover, 
            author: {
                name: authorName,
                image: authorImage
            }
        }
        if (id) {
        axios.put(`https://603545c26496b9001749eb6c.mockapi.io/blog-app/blogs/${id}`, data)
        .then(response => {
          
            history.push(`/blog-details/${id}`);
        })
    } else {
        axios.post(`https://603545c26496b9001749eb6c.mockapi.io/blog-app/blogs`, data)
        .then(response => {
          const blogData = response.data;
          history.push(`/blog-details/${blogData.id}`);
        });
    }
    }
    
    const onChange = (value, type) => {
        if (type === 'title')
                {
                    setTitle(value); 
                }           
                else if (type === 'description'){
                setDescription(value);  
            }         
            else if (type === 'content'){
                setContent(value);   
            }         
            else if (type === 'author'){
                setAuthorName(value);
            }
        }
    return (
        <div>
            
          <Header />
        <p>Title</p>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => onChange(event.target.value, 'title')}
        />
                <p>Description</p>
        <input
        name="description"
        value={description}
        onChange={(event) => onChange(event.target.value, 'description')}
          type="text"
        />
        <p>Content</p>
        <textarea
        value={content}
        name="content"
          onChange={(event) => onChange(event.target.value, 'content')}
        rows={10}
          type="text"
        />
                <p>Your name</p>
        <input
        value={authorName}
        name="author"
          onChange={(event) => onChange(event.target.value, 'author')}
          type="text"
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
    )
}

export default BlogEdit;