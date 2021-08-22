import React from "react"
import { CardImagen } from "../components/cardImagen/CardImagen"
import { NavBar } from "../components/navbar/NavBar"

export const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <div className="homeScreen gridHomeScreen">
        <CardImagen />
      </div>
    </>
  )
}
