import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  display = () =>{
    return this.props.users.map(user=>{
      return <li>Name: {user.username} hometown:{user.hometown}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.display()}
        </ul>
        Total users: {this.props.userCount}
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) =>{
  return ({
    users: state.users,
    userCount: state.users.length
  })
}

export default connect(mapStateToProps)(Users)
