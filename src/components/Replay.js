import React, { useState } from 'react';

function Replay (props) {

  const timeFun = (time)=> {

    let currentTime = new Date().getTime()
    let result = currentTime - time;
    console.log(result);
    if (result/6000 > 1440 ) { 
      return (new Date(time).toLocaleDateString() + "---" + new Date(time).toLocaleTimeString())
    } else if (result/6000 > 720 ) { 
      return 'yesterday'
    } else if (result/6000 > 600) {
      return '10h ago'
    } else if (result/6000 > 300) {
      return '5h ago'
    } else if (result/6000 > 240) {
      return '4h ago'
    } else if (result/6000 > 180) {
      return '3h ago'
    } else if (result/6000 > 120) {
      return '2h ago'
    } else if (result/6000 > 60) {
      return '1h ago'
    } else if (result/6000 > 5) {
      return '5m ago'
    } else if (result/6000 > 0) {
      return 'Just Now'
    }

  }

  return (
    <div className = 'replay'>
      <img src = { (props.users.filter(ele => ele.userId === parseInt(props.replay.userId)))[0].Avatar }/>
      <div>{ (props.users.filter(ele => ele.userId === parseInt(props.replay.userId)))[0].userName }·</div>
      <p>{props.replay.replayMessage}·</p>
      <div>{timeFun(props.replay.time)}</div>
    </div>
  )
}
export default Replay;
