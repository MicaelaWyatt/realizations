import React from "react"
import { Route } from "react-router-dom"
import { HomeView } from "./home/HomeView"
import { Portfolio } from "./portfolio/Portfolio"
import { InfoPortfolioModal} from "./modal/Modals"
import { CheckInAddForm } from "./portfolio/CheckInAddForm"
import { CheckInEditForm } from "./portfolio/CheckInEdit"
import { SelfGratitudeAddForm } from "./portfolio/SelfGratitudeForm"
import { SelfGratitudeEditForm } from "./portfolio/SelfGratitudeEdit"
import { ForgivenessList } from "./forgiveness/ForgivenessList"
import { ForgivenessAddForm } from "./forgiveness/ForgivenessAddForm"
import { ForgivenessEditForm } from "./forgiveness/ForgivenessEditForm"
import { CommunityList } from "./community/ComunityPage"
import { RecommenedAddForm } from "./community/CommunityAdd"
import { RecommendEditForm } from "./community/CommunityEditForm"
import { GoalsAddForm } from "./goals/GoalsAddForm"
import { GoalsList } from "./goals/GoalsList"
import { GoalEditForm } from "./goals/GoalsEditForm"


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

      <Route exact path="/portfolio/selfGratitude/:gratitudeId(\d+)/edit">
          <SelfGratitudeEditForm/>
      </Route>

      <Route exact path="/goals">
        <GoalsList/>
      </Route>

      <Route exact path="/goals/create">
          <GoalsAddForm/>
      </Route>

      <Route exact path="/goals/:goalId(\d+)/edit">
          <GoalEditForm/>
      </Route>

      <Route exact path="/forgiveness">
          <ForgivenessList/>
      </Route>

      <Route exact path="/forgiveness/create">
          <ForgivenessAddForm/>
      </Route>

      <Route exact path="/forgiveness/:forgivenessId(\d+)/edit">
          <ForgivenessEditForm/>
      </Route>

      <Route exact path="/community">
          <CommunityList/>
      </Route>

      <Route exact path="/community/create">
          <RecommenedAddForm/>
      </Route>

      <Route exact path="/community/:recommendationId(\d+)/edit">
          <RecommendEditForm/>
      </Route>
    </>
  )
}
