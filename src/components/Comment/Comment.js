import React from 'react';
import './Comment.css';
const Comment = (props) => {
    const { name, email } = props.comment;
    return (
        <div className='comment-body'>
            <p>name: {name}</p>
            <strong>email: {email}</strong>

        </div>
    );
};

export default Comment;