import React from 'react';
import { useDarkMode } from './useDarkMode';

const DarkModeButton = props => {
  // console.log(props);
  const [darkMode, setSomeValue] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setSomeValue(!darkMode);
    console.log('dark')
  };

  return (
    <div className='darkMode'>
    	<button onClick={toggleMode}>Dark Mode</button>
    </div>
  )
};

export default DarkModeButton; 