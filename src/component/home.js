import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      this.setState({
        userDetails: res.data,
      });
    });
  }
  userList() {
    return this.state.userDetails.map((item) => {
      return <li>{item.name}</li>;
    });
  }

  render() {
    var userExist = this.state.userDetails;
    return (
      <div>
        Home
        {userExist ? <ul>{this.userList()}</ul> : "no users exist"}
      </div>
    );
  }
}
export default Home;
