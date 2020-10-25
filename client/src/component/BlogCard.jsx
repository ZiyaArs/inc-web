import React from 'react';
import './Css/BlogCard.css';
import Btn from './Btn';

function BlogCard(props) {
    var blogContainer = props.blogContainer;
    var out = blogContainer.slice(1, 200) + '...';
    return (
        <div className='blog'>
            <div className='imagePosition'>
                <img className='imageHolder' src={props.img} alt='blog_img' />
            </div>
            <div className='blogDivider'>
                <div className='blogContainer'>
                    <h1>{props.title}</h1>
                    <p>{out}</p>
                </div>
                <div className='read'>
                    <Btn pat={props.id} name='Devamını oku...' />
                </div>
            </div>
        </div>
    )
}

export default BlogCard