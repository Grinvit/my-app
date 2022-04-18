import React from 'react' 
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
  return (
    <div>
      <div>
        <img src='https://ee2.pigugroup.eu/seo_descriptions/93f5755bf30da1b6fd9c304060924a89.jpg' />
      </div>
      <div >
        ava + description
      </div>
      <div>
        <MyPosts />
    </div>
    </div>)
}

export default Profile 