import React, { useState } from 'react';
import './App.css';
import CreatePosts from './components/CreatePosts.js'
import Users from './components/Users.js'
import Posts from './components/Posts.js'

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
      message : 'Tesla modleXTesla modleXTesla modleXTesla modleXTesla modleXTesla modleXTesla modleXTesla modleXTesla modleXTesla modleX',
      time : '12:00',
      likeCount: 0,
      commentStauts: false,
      comment : [{
        time : '12:13',
        userId : 0,
        commentId : 0,
        commentMessage :'你的头像很好看',
        commentLikeCount : 0,
      },
      {
        time : '12:12',
        userId : 1,
        commentId : 1,
        commentMessage :'世界',
        commentLikeCount : 0,
      },
      {
        time : '12:11',
        userId : 2,
        commentId : 2,
        commentMessage :'我是休闲鞋',
        commentLikeCount : 0
      }
      ]
    },
    {
      userId : 0,
      message : 'Tesla modleY',
      time : '12:02',
      likeCount: 0,
      commentStauts: false,
      comment : [{
        time : '12:10',
        userId : 0,
        commentId : 0,
        commentMessage :'你的头像很好看',
        commentLikeCount : 0,
      },
      {
        time : '12:09',
        userId : 1,
        commentId : 1,
        commentMessage :'世界',
        commentLikeCount : 0,
        
      },
      {
        time : '12:08',
        userId : 2,
        commentId : 2,
        commentMessage :'我是休闲鞋',
        commentLikeCount : 0
      }
      ]
    },
    {
      userId : 2,
      message : 'Tesla modleW',
      time : '12:04',
      likeCount: 0,
      commentStauts: false,
      comment : [{
        time : '12:05',
        userId : 0,
        commentId : 0,
        commentMessage :'你的头像很好看',
        commentLikeCount : 0,
      },
      {
        time : '12:06',
        userId : 1,
        commentId : 1,
        commentMessage :'世界',
        commentLikeCount : 0,
        
      },
      {
        time : '12:07',
        userId : 2,
        commentId : 2,
        commentMessage :'我是休闲鞋',
        commentLikeCount : 0
      }
      ]
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
      likeCount: 0,
      commentStauts: false,
      comment : []
    }
    setPosts([newPost, ...posts])
  }

  const createComment = (id, message,index) => {
    const newComment = {
      time : new Date().toLocaleTimeString(),
      userId : id,
      commentId : posts[index].comment.length,
      commentMessage : message,
      commentLikeCount : 0,
    }

    const newPosts = posts.map((ele, i) => { 
      if (i === index) {
      ele.comment.push(newComment);
      }
    return ele;
    });
    setPosts(newPosts);  
  }

  const setLikeCount = (index) => {
    const allNewPosts = posts.map((ele, i) => { 
      if (i === index) {
        ele.likeCount++;
      }
      return ele;
    });
    setPosts(allNewPosts)
  }

  const setCommentLikeCount = (index,x) => {
    const allNewPosts = posts.map((ele,i) => {//post
      if (i===index) {
        ele.comment.forEach((element, j) => { //comment
          if (j === x) {
            element.commentLikeCount++;
          }
        });
      }
      ele.comment.sort((a,b)=>b.commentLikeCount-a.commentLikeCount)
      return ele;
    })
    setPosts(allNewPosts)
  }

  const [id, setId] = useState('')

  const getUserId = (e) => {
    console.log(e.target.value);
    setId(e.target.value) 
  }

  return (
    <div className="App">
      <Users users = {users} createUser = {createUser}/> 
      <CreatePosts createPost = {createPost} users = {users}/>
      <select  onChange = {getUserId}>
        <option value = ''>Filter By:</option>
        {users.map((ele, index) => <option value = {ele.userId} key = {index} >{ele.userName}</option>
        )}
      </select>

      <Posts setCommentLikeCount = {setCommentLikeCount} createComment = {createComment} selecedUserId = {id} setLikeCount = {setLikeCount} users = {users} posts = {posts}/>

    </div>
  );
}

export default App;
