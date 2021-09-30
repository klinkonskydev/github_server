import { useState } from 'react';
import { Link } from 'react-router-dom'; 

import axios from 'axios';
import './style.scss';

export function Main(){

  const [ peoples, setPeoples ] = useState([])
  const [ user, setUser ] = useState('');

  const handleFormulary = (e) => {
    e.preventDefault();

    searchPeople(user)
  };

  async function searchPeople(user){
    try {
      const { data } = await axios(`https://api.github.com/users/${user.trim()}`);
      
      setUser('')
      setPeoples([...peoples, data])

    } catch (error) {
      return
    } 
  };

  return (
    <>
      <section>
        <div>
          <h1>Explore repositórios do Github.</h1>
        </div>

        <form onSubmit={handleFormulary}>
          <input
            id="search"
            type="text"
            name="search"
            value={user}
            placeholder="Digite aqui"
            required
            autoComplete="off"
            onChange={ text => setUser( text.target.value ) }
          />
          <button type="submit" onSubmit={handleFormulary}>Pesquisar</button>
        </form>
      </section>

      {peoples.map( (user) => {
        return (
          <div className="card-container" key={Math.random()} >
            <Link
              to={`/profile/${user.login}`}
              className="card" 
            >
              <div className="user">
                <figure>
                <img src={user.avatar_url} alt="" />
                </figure>
              
                <div>
                  <h6 style={{transition: '.15s ease-in-out'}}>{user.login}</h6>
                  <p style={{transition: '.15s ease-in-out'}}>Descrição da repo</p>
                </div>
              </div>
              
              <div>
                <div className="arrow" style={{transition: '.15s ease-in-out'}}></div>
              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}