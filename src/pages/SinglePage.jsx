import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const SinglePage = () => {

    const {id} = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then( response => response.json() )
            .then( json => setUser(json) )
    }, []);

    console.log(user)

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default SinglePage;