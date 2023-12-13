import React, {useEffect, useState} from 'react'
import "./App.css"
import {json, Link, NavLink, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={ <Layout/> }>
                    <Route index element={ <Home/> }/>
                    <Route path="about" element={ <AboutPage/> }/>
                    <Route path="posts" element={ <BlogPage/> }/>
                    <Route path="posts/:id" element={ <SinglePage/> }/>
                    <Route path="*" element={ <NotFoundPage/> }/>
                </Route>
            </Routes>
        </div>
    )
}

export default App