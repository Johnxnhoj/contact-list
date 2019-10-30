import React from "react"
import Single from "./Single"
import List from "./List"
import "./main.css"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <nav>
        <Route exact path="/" component={List} />
        <Route path="/Single/:id" component={Single} />
      </nav>
    </Router>
  )
}

export default App
