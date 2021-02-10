import './App.css';
import React, { Component } from 'react';
import Main from './components/Main';
import Enter from './components/Enter';
import Selector from './components/Selector';
import Settings from './components/Settings';
import Username from './components/Username';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state={
      mode:'welcome',
      selected_content_id:2,
      welcome:{title:"Welcome", desc:'Hello, React!'},
      subject:{title:"WEB", sub:"World Wide Web"}, 
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information.'},
        {id:2, title:'CSS', desc:'CSS is for design.'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive.'}
      ], 
    }
  }
  
  render() {
    
    return (
      <Main></Main>
    );
  }
}

export default App;
