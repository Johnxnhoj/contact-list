import React from "react"
import Users from "./Users"
import "./main.css"
import { Link } from "react-router-dom"

function Single(props) {
  const id = props.match.params.id

  const Single = Users.find(Single => Single.id === Number(id))

  return (
    <div id="Container">
      <div className="green-box">
        <Link className="link-a" to="/">
          &larr;
        </Link>
        <div>
          <img className="pict2" src={Single.picture.large} alt=""></img>
        </div>
      </div>

      <div className="name">
        {Single.name.title}. {Single.name.first} {Single.name.last}
      </div>
      <div className="email">{Single.email}</div>
      <div className="cell">{Single.cell}</div>
      <div className="loc">
        {Single.location.state}, {Single.nat}
      </div>
    </div>
  )
}
export default Single
