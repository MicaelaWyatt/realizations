import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { userStorageKey } from "./auth/authSettings"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const Realizations = () => (
    <>
    <Route
      render={() => {
        if (sessionStorage.getItem(userStorageKey)) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)