import React from "react"
import { Route, Router } from "react-router-dom"
import { HomeView } from "./home/HomeView"
import { Portfolio } from "./portfolio/Portfolio"


export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <HomeView />
      </Route>

      <Route path="/portfolio">
        < Portfolio />
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
