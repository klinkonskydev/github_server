import './default.scss';
import { Home } from './pages/Home';
import { User } from './pages/user';

import { BrowserRouter, Route } from 'react-router-dom'

export function App(){
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/profile/:user" exact component={User} />
    </BrowserRouter>
  )
}