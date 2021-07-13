
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const [renderFooter, setRenderFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname !== '/login') {
      setRenderFooter(true);
    } else {
      setRenderFooter(false);
    }

  }, [location])

  if(!renderFooter) {
    return null;
  } 

  return (
    <div className="footer">
      
    </div>
  )
}
