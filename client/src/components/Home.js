import React from 'react';
import { Feed } from './Feed';
import { Sidebar } from './Sidebar';
import './Home.css'

export const Home = () => {
  return (
    <div className="home">
     
        
          <Feed />
        
      
          <Sidebar />
        
    </div>
  )
}