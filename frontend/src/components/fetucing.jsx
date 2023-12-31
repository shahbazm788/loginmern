import React,{useEffect} from 'react'

const Fetcing = () => {




  useEffect(  () => {
    fetch("http://localhost:5000/posts").then( (res) => {
      return res.json();
    }).then( (mydata) => {
      return console.log(mydata)
    });

  },[]);
  return (
    <div>fetching</div>
  )
}

export default Fetcing;
