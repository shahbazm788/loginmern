import { useState,useEffect } from 'react';
import './App.css';
import React from 'react'
import Hero from './components/hero';
import Posts from './components/posts';
import Post from './components/post';
import Fetcing from './components/fetucing'
import axios from 'axios';

import { useLocation } from 'react-router-dom';


function App() {

  const [data,setData] = useState();

  // const location = useLocation();

  // function getData(){

  // }

  // useEffect(  () => {
  //   fetch("http://localhost:3001/students").then( (res) => {
  //     return res.json();
  //   }).then( (mydata) => {
  //     return setData(mydata);
  //   });
  //
  // },[]);

  useEffect(  () => {
    // fetch("/posts",{
    //   method:'GET'
    // }).then( (res) => {
    //   return res.json();
    // }).then( (mydata) => {
    //   return console.log(mydata)
    // });
    //axios.get('http://localhost:5000/posts').then(res => console.log(res))
    // axios.get('/posts').then((res) => {
    //   console.log(res)
    // })
  //  console.log(window.history)
  // console.log(location)

  },[]);

  return (
    <>
    <Hero />
    <Posts />
    
    </>
  );
}

export default App;
