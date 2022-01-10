import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostDetail.css';

const PostDetail = () => {
    const { postID } = useParams();
    const [postDetail, setPostDetail] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, [postID])
    // console.log(postDetail);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [postID])
    const { id, title, body } = postDetail;
    return (
        <div>
            <h3>Post Details {postID}</h3>
            <h5>ID: {id} <strong>{title}</strong></h5>
            <p>{body}</p>
            <p>Number of comments :{comments.length}</p>
            {
                comments.map(comment => <Comment comment={comment} />)
            }

        </div>
    );
};

export default PostDetail;