import './App.css';
import Postview from './components/PostView';
import Landing from './components/LandingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route path='/post' component={Postview}></Route>
      </Switch>
    </BrowserRouter>
    
  )
}

export default App;
