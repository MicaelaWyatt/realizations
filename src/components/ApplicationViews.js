import React from "react"
import { Route } from "react-router-dom"
import { HomeView } from "./home/HomeView"
import { Portfolio } from "./portfolio/Portfolio"
import { CheckInAddForm } from "./portfolio/CheckInAddForm"
import { SelfGratitudeAddForm } from "./portfolio/SelfGratitudeForm"


export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <HomeView />
      </Route>

      <Route exact path="/portfolio">
        < Portfolio />
      </Route>

      <Route exact path="/portfolio/create">
          <CheckInAddForm/>
      </Route>

      <Route exact path="/portfolio/create2">
          <SelfGratitudeAddForm/>
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
