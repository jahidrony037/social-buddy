import React from 'react';
import { useNavigate } from 'react-router-dom';
import './post.css';

const Post = (props) => {
    const { id, title, body } = props.post;
    const navigate = useNavigate();
    return (
        <div className='post-body'>
            <h4>id: {id} <strong>{title}</strong></h4>
            <p>{body}</p>
            <button onClick={() => navigate(`/posts/${id}`)}>explore more</button>
        </div>
    );
};

export default Post;