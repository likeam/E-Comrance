import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';


function layout({children}) {
  return (
    <div>
        <Navbar />
        <div className='content'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default layout;