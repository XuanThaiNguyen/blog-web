import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
      <div className="user">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
        <div className="info">
          <span>Kuro</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt=""/>
          </Link>
          <img src={Delete} alt=""/>
        </div>
      </div>
      <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
      <p>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single