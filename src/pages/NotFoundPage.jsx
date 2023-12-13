import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            Not found <Link to={"/"}><div>Home</div></Link>
        </div>
    );
};

export default NotFoundPage;