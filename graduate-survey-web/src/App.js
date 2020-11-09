import React, { Component } from "react"
import "bulma/css/bulma.min.css"
import { BrowserRouter } from "react-router-dom"

import Pages from "./pages"

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
        <BrowserRouter forceRefresh={true}>
          <Pages />
        </BrowserRouter>
    );
  }
}

export default App;
