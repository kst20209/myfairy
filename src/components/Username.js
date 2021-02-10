import React, { Component } from 'react';

class Username extends Component {
    render(){
      return (
        <div>
          <h2>사용자의 이름을 입력하세요.</h2>
          <form action="/username" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(e.target.username.value);
            }.bind(this)}>
            <p>
            <input
              type="text"
              name="username"
              placeholder="username"
            ></input>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </div>
      );
    }
  }

  export default Username
