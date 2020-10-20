

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'
import Menu from './templates/menu';
import Routes from './routes/routes'
import Footer from './templates/footer';




export default props => {

    return(
        <div className='container'>
            <Menu/>
             <Routes/>
             <Footer/>
        </div>


    )
}



