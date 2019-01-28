import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
  render() {
    const userList = this.props.users.map((user, i) => (
      <li key={i}>{user.username}</li>
    ));
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>{userList}</ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users, numberOfUsers: state.users.length };
};
export default connect(mapStateToProps)(Users);
