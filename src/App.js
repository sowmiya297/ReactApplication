import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import AuthorPage from './Components/AuthorPage'
import CreatePostPage from './Components/CreatePostPage'
import store from './Redux/Store'
import {connect, Provider} from 'react-redux'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      {/* <HomePage></HomePage>  */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/AuthorPage" component={AuthorPage} />
      <Route exact path="/CreatePostPage" component={CreatePostPage} />
      
    </div>
    </Provider>
  );
}

export default App;
