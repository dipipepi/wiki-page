import React from 'react';
import Header from "../Header/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ItemsPage from "../ItemsPage/ItemsPage";
import ItemPage from "../ItemPage/ItemPage";
import './App.css';
import ItemDetails from "../ItemDetails/ItemDetails";

class App extends React.Component{
  render() {
    return (
        <div className="app">
          <Router>
            <Header/>
            <div className='content-wrapper'>
                <Route exact path='/' render={() => <h1>Welcome to main page</h1>}/>
                <Route exact path='/persons/' component={ItemsPage}/>
                <Route exact path='/persons/:id' render={(props) => <ItemDetails {...props}/>}/>

                <Route exact path='/quests/' render={() => <h1>Welcome to quest page</h1>}/>
                <Route exact path='/regions/' render={() => <h1>Welcome to regions page</h1>}/>
                <Route exact path='/cities/' render={() => <h1>Welcome to cities page</h1>}/>
                <Route exact path='/items/' render={() => <h1>Welcome to items page</h1>}/>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;