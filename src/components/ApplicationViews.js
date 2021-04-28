import React from "react"
import { Route, Router } from "react-router-dom"
import { HomeView } from "./home/HomeView"


export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <HomeView />
      </Route>

      <Route path="/portfolio">
        
      </Route>

      <Route path="/goals">

      </Route>
      <Route path="/forgiveness">

      </Route>
      <Route path="/community">
          
      </Route>
    </>
  )
}
