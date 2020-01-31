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
      postId: 0,
      message : 'Tesla modleXTesla modleXTesla modleXTesla modleXTesla modleXTesla modleXTesla modleXTesla modleXTesla modleXTesla modleX',
      time : 1580435627922,
      likeCount: 0,
      commentStauts: false,
      comment : [{
        time : 1580436627922,
        userId : 0,
        commentId : 0,
        commentMessage :'你的头像很好看',
        commentLikeCount : 0,
        replayStauts: false,
        replay: [
          {
            userId : 0,
            time : 1580437627922,
            replayMessage: "是的很好看",
            likeCount: 0,
          },
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "很好看很好",
            likeCount: 0,
          },
        ]
      },
      {
        time : 1580435527922,
        userId : 1,
        commentId : 1,
        commentMessage :'世界',
        commentLikeCount : 0,
        replayStauts: false,
        replay: [
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "是的很好看",
            likeCount: 0,
          },
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "很好看很好",
            likeCount: 0,
          },
        ]
      },
      {
        time : 1580438627922,
        userId : 2,
        commentId : 2,
        commentMessage :'我是休闲鞋',
        commentLikeCount : 0,
        replayStauts: false,
        replay: [
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "是的很好看",
            likeCount: 0,
          },
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "很好看很好",
            likeCount: 0,
          },
        ]
      }
      ]
    },


    {
      userId : 1,
      postId: 1,
      message : 'Tesla modleY',
      time : 1580438627922,
      likeCount: 0,
      commentStauts: false,
      comment : [{
        time : '12:10',
        userId : 0,
        commentId : 0,
        commentMessage :'你的头像很好看',
        commentLikeCount : 0,
        replayStauts: false,
        replay: [
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "是的很好看",
            likeCount: 0,
          },
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "很好看很好",
            likeCount: 0,
          },
        ]
      },
      {
        time : 1580438627922,
        userId : 1,
        commentId : 1,
        commentMessage :'世界',
        commentLikeCount : 0,
        replayStauts: false,
        replay: [
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "是的很好看",
            likeCount: 0,
          },
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "很好看很好",
            likeCount: 0,
          },
        ]
        
      },
      {
        time : 1580438627922,
        userId : 2,
        commentId : 2,
        commentMessage :'我是休闲鞋',
        commentLikeCount : 0,
        replayStauts: false,
        replay: [
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "是的很好看",
            likeCount: 0,
          },
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "很好看很好",
            likeCount: 0,
          },
        ]
      }
      ]
    },


    {
      userId : 2,
      postId: 3,
      message : 'Tesla modleW',
      time : 1540433627922,
      likeCount: 0,
      commentStauts: false,
      comment : [{
        time : 1580438627922,
        userId : 0,
        commentId : 0,
        commentMessage :'你的头像很好看',
        commentLikeCount : 0,
        replayStauts: false,
        replay: [
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "是的很好看",
            likeCount: 0,
          },
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "很好看很好",
            likeCount: 0,
          },
        ]
      },
      {
        time : 1580438627922,
        userId : 1,
        commentId : 1,
        commentMessage :'世界',
        commentLikeCount : 0,
        replayStauts: false,
        replay: [
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "是的很好看",
            likeCount: 0,
          },
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "很好看很好",
            likeCount: 0,
          },
        ]
        
      },
      {
        time : 1580438627922,
        userId : 2,
        commentId : 2,
        commentMessage :'我是休闲鞋',
        commentLikeCount : 0,
        replayStauts: false,
        replay: [
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "是的很好看",
            likeCount: 0,
          },
          {
            userId : 0,
            time : 1580438627922,
            replayMessage: "很好看很好",
            likeCount: 0,
          },
        ]
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
      postId : posts.length,
      message : message,
      time : new Date().getTime(),
      likeCount: 0,
      commentStauts: false,
      comment : []
    }
    setPosts([newPost, ...posts])
  }

  const createReplay = (Id, replayMessage, index , i) => {
    const newReplay = {
      userId : Id,
      time : new Date().getTime(),
      replayMessage: replayMessage,
      likeCount: 0,
    }

    const newPosts = posts.map((ele, x) => { 
      if (x === index) {
        ele.comment.map((comment,j)=>{
          if (j === i ){
            comment.replay.push(newReplay);
          }
          return comment;
        }) 
      }
      return ele;
    });
    setPosts(newPosts); 
  }



  const createComment = (id, message,index) => {
    const newComment = {
      time : new Date().getTime(),
      userId : id,
      commentId : posts[index].comment.length,
      commentMessage : message,
      commentLikeCount : 0,
      replayStauts: false,
      replay:[]
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
    setPosts(allNewPosts);
  }
  

  const [id, setId] = useState('')

  const getUserId = (e) => {
    console.log(e.target.value);
    setId(e.target.value) 
  }

  const changeCommentStatus = (index) => {
    const allNewPosts = posts.map((element, i) => {
      if (index === i) {
        if (element.commentStauts) {
          element.commentStauts = false;
        } else {
          element.commentStauts = true;
        }
      } 
      return element;
    })
    setPosts(allNewPosts);
  }

  // Replay
  const changeReplayStatus = (index,x) => {
    const allNewPosts = posts.map((ele,i) => {//post
      if (i===index) {
        ele.comment.map((element, j) => { //comment
          if (x === j) {
            if (element.replayStauts) {
              element.replayStauts = false;
            } else {
              element.replayStauts = true;
            }
          } 
          return element;
        });
      }
      return ele;
    })
    setPosts(allNewPosts);
  }


  return (
    <div className="App">
      <Users users = {users} createUser = {createUser}/> 
      <CreatePosts createPost = {createPost} users = {users}/>
      <select className = "fliter" onChange = {getUserId}>
        <option value = ''>Filter By:</option>
        {users.map((ele, index) => <option value = {ele.userId} key = {index} >{ele.userName}</option>
        )}
      </select>

      <Posts
        createReplay = {createReplay}
        changeReplayStatus ={changeReplayStatus} 
        changeCommentStatus = {changeCommentStatus} 
        setCommentLikeCount = {setCommentLikeCount} 
        createComment = {createComment} 
        selecedUserId = {id} 
        setLikeCount = {setLikeCount} 
        users = {users} posts = {posts}
      />
    </div>
  );
}

export default App;
