import React from "react"
import { Route } from "react-router-dom"
import { HomeView } from "./home/HomeView"
import { Portfolio } from "./portfolio/Portfolio"
import { CheckInAddForm } from "./portfolio/CheckInAddForm"
import { CheckInEditForm } from "./portfolio/CheckInEdit"
import { SelfGratitudeAddForm } from "./portfolio/SelfGratitudeForm"
import { SelfGratitudeEditForm } from "./portfolio/SelfGratitudeEdit"


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

      <Route exact path="/portfolio/:checkInId(\d+)/edit">
          <CheckInEditForm/>
      </Route>

      <Route exact path="/portfolio/create2">
          <SelfGratitudeAddForm/>
      </Route>

      <Route exact path="/portfolio/:gratitudeId(\d+)/edit">
          <SelfGratitudeEditForm/>
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
