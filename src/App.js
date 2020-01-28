import React, { useState } from 'react';
import './App.css';
import CreatePosts from './components/CreatePosts.js'
import Timeline from './components/Timeline.js'
import Users from './components/Users.js'

function App() {

  const [users, setUsers] = useState([
    {
      userId : 0,
      userName : 'Jams',
      Avatar: 'http://placekitten.com/101/100',
    },
    {
      userId : 1,
      userName : 'Dragon',
      Avatar: 'http://placekitten.com/100/101',
    },
    {
      userId : 2,
      userName : 'Jess',
      Avatar: 'http://placekitten.com/99/100',
    }
  ])



  const [posts, setPosts] = useState([
    {
      userId : 0,
      message : 'Tesla modleX',
      time : '12:00',
      likeCount: 0
    },
    {
      userId : 1,
      message : 'Tesla modleY',
      time : '12:02',
      likeCount: 0
    },
    {
      userId : 2,
      message : 'Tesla modleZ',
      time : '12:03',
      likeCount: 0
    },
    {
      userId : 2,
      message : 'Tesla modleW',
      time : '12:04',
      likeCount: 0
    },

  ])

  const createUser = (userName, Avatar) => {
    const newUser = {
      userId : users.length,
      userName : userName,
      Avatar : Avatar
    };
    setUsers([...users, newUser])
  }

  const createPost = (Id, message) => {
    const newPost = {  
      userId : Id,
      message : message,
      time : new Date().toLocaleTimeString(),
      likeCount: 0
    }
    setPosts([...posts, newPost])
  }

  const setLikeCount = (name) => {
    const allNewPosts = posts.map((ele) => { 
      if (ele.time === name) {
        ele.likeCount++;
      }
      return ele;
    });
    setPosts(allNewPosts)
  }

  return (
    <div className="App">
      <Users users = {users} createUser = {createUser}/>
      <hr/>
      <CreatePosts createPost = {createPost} users = {users}/>
      <hr/>

      <select value = {users.userName}>
        <option >Filter By:</option>
        {users.map((ele, index) => <option key = {index} value = {ele.userName}>{ele.userName}</option>
        )}
      </select>

      <Timeline setLikeCount = {setLikeCount} users = {users} posts = {posts}/>
    </div>
  );
}

export default App;
