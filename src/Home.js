import React from 'react';
import './styles/home.css';
import {AiOutlineSearch} from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import {IconContext} from 'react-icons' 
function Home() {
  return(
    <div className='loginContainer'>
    <header className='header'>
     <div className='homeName'>
      <h1 className='headText'>Teamwork</h1>
     </div>
     <div className='searchBar'>

       <IconContext.Provider value={{ className:'searchIcon' }}>
         <AiOutlineSearch/>
       </IconContext.Provider>

       <input placeholder='search' className='searchInput'/>
     </div>
     <div className='tabs'>
       <h1>Home</h1>
       <h1>Colleagues</h1>
       <h1>Announcements</h1>
     </div>
     <div className='bellHolder'>
     <IconContext.Provider value={{ className:'bellIcon' }}>
         <BiBell/>
       </IconContext.Provider>
       <div className='notificationCircle'>

       </div>
     </div>
  <div className='ppHolder'>

  </div>

    </header>
    </div>
  );
}

export default Home;
