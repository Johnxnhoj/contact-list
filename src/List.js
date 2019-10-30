import React from "react"
import Users from "./Users.json"
import { Link } from "react-router-dom"
import "./main.css"
const List = props => {
  return (
    <div id="Container">
      <header className="L-head">
        <h1 className="Peeps">My Peeps</h1>
      </header>
      <main>
        <div className="info-box">
          {Users.map(x => (
            <Link to={"/Single/" + x.id} key={x.id}>
              <div className="profile-click">
                <img className="pict" src={x.picture.thumbnail} alt="" />
                <div className="cl-na">
                  {x.name.first} {x.name.last}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
export default List
