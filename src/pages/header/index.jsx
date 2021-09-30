import { useState } from 'react';

import logo from '../../assets/logo.svg';
import moonIMG from '../../assets/moon.svg';
import sunIMG from '../../assets/sun.svg';

import './style.scss';

export function Header({children}){

  const [ mode, setMode ] = useState(moonIMG);

  const modeChange = [
    {
      darkMode: '#000',
      lightMode: '#fff',

      bodylight: '#f1f1f1',
      bodyDark: '#313131',
      shadow: '#E2E2E2'
    }
  ];


  
  const handleWithMode = (e) => {
    if(mode === moonIMG){
      setMode(sunIMG)

      document.documentElement.style.setProperty(
        "--body", modeChange.map( element => element.bodyDark = '#313131')
      )
      document.documentElement.style.setProperty(
        "--white", modeChange.map( element => element.lightMode = '#000')
      )

      document.documentElement.style.setProperty(
        "--black", modeChange.map( element => element.darkMode = '#fff')
      );

      document.documentElement.style.setProperty(
        "--shadow-light", modeChange.map( element => element.shadow = '#00000000')
      );
      
      localStorage.setItem('mode:', JSON.stringify(modeChange));

      localStorage.setItem('mode', sunIMG);
    } else
    {      
      setMode(moonIMG)

      document.documentElement.style.setProperty(
        "--body", modeChange.map( element => element.bodylight = '#f1f1f1')
      )
      document.documentElement.style.setProperty(
        "--white", modeChange.map( element => element.lightMode = '#fff')
      )

      document.documentElement.style.setProperty(
        "--black", modeChange.map( element => element.darkMode = '#000')
      );

      document.documentElement.style.setProperty(
        "--shadow-light", modeChange.map( element => element.shadow = '#E2E2E2')
      );

      localStorage.setItem('mode:', JSON.stringify(modeChange));

      localStorage.setItem('mode', moonIMG);
    }

  };

  return (
    <header>
      <div>
        <figure>
          <img src={logo} alt="github logo" />
        </figure>
      </div>

      <div className="back">
        {children}
      </div>

      <div className="mode">
        <img src={localStorage.getItem('mode') ?? mode } 
          alt="Lua" 
          height="35px"
          onClick={handleWithMode} 
        />
      </div>
    </header>
  );
}