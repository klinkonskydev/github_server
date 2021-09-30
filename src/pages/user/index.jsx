import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom'; 
import { Header } from "../header";
import axios from "axios";

import './style.scss'

export function User(){
  const { user } = useParams();

  /* GET USER */
  const [ profile, setProfile ] = useState({});
  useEffect(() => {
    async function handlePeopleInfo(){
      try {
        const { data } = await axios(`https://api.github.com/users/${user.trim()}`);
  
        setProfile(data);
      } catch (error) {
        return
      } 
    };

    handlePeopleInfo()
  }, [ user ])

  /* GET USER SUBSCRIBED */
  const [ subscribe, setSubscribe ] = useState([]);
  useEffect(() => {

    async function handleUserSubscribed(){
      try {
        const { data } = await axios(`https://api.github.com/users/${user.trim()}/subscriptions`);
  
        setSubscribe(data)
      } catch (error) {
        return
      } 
    };
    
    handleUserSubscribed()
  }, [ user ])

  return (
    <>
      <Header>
        <Link to="/">
          <div className="arrow"></div>
          voltar
        </Link>
      </Header>

      <section>
        <div className="user_container">
          <img src={profile.avatar_url} alt="User" />

          <div>
            <h1>{profile.login + '/repo'}</h1>
            <p>{profile.bio}</p>
          </div>

        </div>

        <div className="user_properts">
          <div>
            <h3>{profile.followers}</h3>
            <h3>followers</h3>
          </div>

          <div>
            <h3>{profile.following}</h3>
            <h3>following</h3>
          </div>

          <div>
            <h3>{profile.public_repos}</h3>
            <h3>Issues abertas</h3>
          </div>
        </div>
      </section>
       
     {subscribe.map( (subscribe) => {
        return (
          <div className="card-container" key={profile.id + Math.random()} >
            <a
              href={subscribe.html_url}
              target="_blank"
              rel="noreferrer"
              className="card" 
            >
              <div className="user">
                <figure>
                  <img src={subscribe.avatar_url} alt="" />
                </figure>
              
                <div>
                  <h6 style={{transition: '.15s ease-in-out'}}>{subscribe.name}</h6>
                  <p style={{transition: '.15s ease-in-out'}}>{subscribe.description ?? 'descrição vazia' }</p>
                </div>
              </div>
              
              <div>
                <div className="arrow" style={{transition: '.15s ease-in-out'}}></div>
              </div>
            </a>
          </div>
        )
      })}
    </>
  )
}