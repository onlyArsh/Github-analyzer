import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from "axios"
import Search from './components/users/Search';
import PropTypes from 'prop-types'

class App extends Component
{
  state = {
    users : [],
    loading : false,
    alert : ""
  };
  // async componentDidMount()
  // {
  //   //console.log("client id ="+process.env.REACT_APP_CLIENT_ID);
  //   this.setState({loading : true});

  //   const res = await axios
  //   .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

  //   this.setState({users : res.data,loading : false});
  //   // console.log(res.data);
  // }
  static propTypes = {
    searchUsers : PropTypes.func.isRequired
  };

  searchUsers = async text =>
  {
    this.setState({loading : true});

    const res = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    this.setState({users : res.data.items,loading : false});
  }

  clearUsers = () =>{
    this.setState({users : [],loading : false});
  }
  setAlert = (msg,type) =>{this.setState({alert: {msg : msg,type:type}})}
  render()
  {
    return(
      <div className="App">
        <Navbar
          icon = "fab fa-github"
          title = " Github Finder"
        />
        <div className="container">
          <Search 
            searchUsers = {this.searchUsers}
            clearUsers = {this.clearUsers}
            showClear = {this.state.users.length > 0 ? true : false}
            setAlert = {this.setAlert}
            />
          <Users
            loading = {this.state.loading}
            users = {this.state.users}
          />
        </div>
      </div>
    );
  }
}

export default App;
