import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import { startChecking } from "../actions/auth"
import { HomeScreen } from "../pages/HomeScreen"
import { AuthRouter } from "./AuthRouter"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  const dispatch = useDispatch()
  const { checking, uid } = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  if (checking) {
    return <h5>checking token...</h5>
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/auth"
          component={AuthRouter}
          isAuthenticated={!!uid}
        />
        <PrivateRoute path="/" component={HomeScreen} isAuthenticated={!!uid} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}
