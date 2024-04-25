import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='w-48'>
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Movies</li>
            <li>Games</li>
            <li>Sports</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Movies</li>
            <li>Games</li>
            <li>Sports</li>
        </ul>
    </div>
  )
}

export default Sidebar;