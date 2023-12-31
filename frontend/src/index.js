import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header'
import Service from './components/sevices'
import About from './components/about'
import AllPosts from './allposts';
import Post from './components/post';
import Footer from './components/footer';
import Registor from "./components/registor";
import Chat from './components/Chat.jsx'
import Login from './components/login.jsx';
ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<App />} />
         <Route path="/service" element={<Service />} />
         {/* <Route path="/header" element={<Header />} /> */}

         <Route path="/about" element={<About />} />
         <Route path="/allposts" element={<AllPosts />} />
         <Route path="/post" element={<Post />} />
         <Route path="/registor" element={<Registor />} />
         <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
      {/* <Chat /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
