import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const BlogPage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then( response => response.json() )
            .then( json => setPosts(json) )
    }, [])

    return (
        <div>
            {posts.map( post => (
                <div key={post.id}>
                    <NavLink to={`/posts/${post.userId}`}><p>{post.title}</p></NavLink>
                </div>
            ))}
        </div>
    );
};

export default BlogPage;