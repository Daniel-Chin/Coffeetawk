import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import chainedClasses from './class_chaining';
import login from './login';
import collect from './collect';

class App extends Component {
  constructor (props) {
      super(props);
      this.state = {
          page: login,  // To store which page we are on. 
      };
  }

  render () {
    return (    // App = Header + Body
      <div className="bg-dark text-white padding-1 app">
        <Head page={this.state.page} />
        <this.state.page.body nextPage={this.nextPage.bind(this)} />
      </div>
    );
  }

  nextPage () {
    // Child components call this func to let app proceed to the next page
    this.setState({page: collect});
  }
}

const Head = (props) => {   // The header of each page
    if (props.page.title === null) return null;
    return (
        <div className={chainedClasses.head}>
            {props.page.title}
        </div>
    )
};

export default App;
