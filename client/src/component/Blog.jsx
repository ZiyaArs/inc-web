import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BlogCard from './BlogCard';
import { Row, Col } from 'react-bootstrap';
import Anket from './Anket';
import Btn from './Btn';

import './Css/Blog.css';

function Blog() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/post').then(res => {
            setPosts(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);
    var show = false;
    if (posts.length > 3) {
        show = true;
    } else {
        show = false;
    }


    return (
        <div>
            <div className='contain'>
                <div className="main">
                    <h1 className='blgTitle'>Blog</h1>
                    <Row>
                        <Col>
                            <div className='wrapper'>
                                {posts.map(post => <BlogCard key={post._id} id={'blog/' + post._id} img={post.images.destination + post.images.filename} title={post.name} blogContainer={post.description} />)}
                                <div className="morebtn">
                                    {show ? <Btn name='Daha fazla' /> : ''}
                                </div>
                            </div>
                        </Col>
                        <Col lg='3'>
                            <Anket />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Blog