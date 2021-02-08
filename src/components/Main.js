import React, { Component } from 'react';

class Main extends Component {
    render(){
      return (
        <div>
          <div>
            <a href="/planner" onClick={function(e){

            }.bind(this)}>Planner</a>
          </div>
          <div>
            <a href="/settings" onClick={function(e){

            }.bind(this)}>Setiings</a>
          </div>
          <div>
            Date
          </div>
          <div>
            Character
          </div>
        </div>
      );
    }
  }

  export default Main
