import React from 'react';
import ReactDOM from 'react-dom/client';

import { NavBar } from './components/NavBar';
import { Me } from './components/Me';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import './static/css/index.css';


const portafolio = (
  <>
    <NavBar/>
    <Me/>
    <Projects/>
    <Footer/>
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(portafolio, root);

