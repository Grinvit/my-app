import React from 'react'
import s from './Post.module.css'


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://i.pinimg.com/236x/c6/06/ff/c606ffda54ed96cc6cff16fcfa2f7ca4.jpg' />
      {props.message}
      <div>
        <span>like {props.like}</span>
      </div>
    </div>)
}
      export default Post
     