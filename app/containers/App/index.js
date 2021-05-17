import React from "react"
import { Switch, Route } from "react-router-dom"
import ThemeWrapper from "./ThemeWrapper"
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true
import Corporate from '../Templates/Corporate';
import  HomePage from '../LandingPage/HomePage';

function App() {
  return (
    <ThemeWrapper>
      <Corporate>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Corporate>
    </ThemeWrapper>
  )
}

export default App
