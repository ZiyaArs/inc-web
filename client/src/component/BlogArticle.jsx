import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';


import './Css/BlogArticle.css';

function BlogArticle({ match }) {

    const [post, setPost] = useState([]);
    var id = match.params.id;
    useEffect(() => {
        axios.get('/post/' + id).then(res => {
            console.log(res);
            setPost(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div >
            <div className="blogcontainer">
                {/* <img src={post.images} alt={post.name} /> */}
                <div className="articleWrapper">
                    <h2>{post.name}</h2>
                    {parse(String(post.postcontent))}
                </div>
            </div>
        </div>

    )
}

export default BlogArticle