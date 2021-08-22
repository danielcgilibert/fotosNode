import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../actions/auth"
import logo from "../../styles/images/logo.png"
export const NavBar = () => {
  const dispatch = useDispatch()
  const { name } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(startLogout())
  }
  return (
    <header>
      <div className="LeftSection">
        <div className="LogoWrapper">
          <img className="LogoImg" src={logo} alt="logo" />
        </div>
      </div>
      <div className="MiddleSection">
        <div className="NavLinksContainer">
          <ul>
            <li className="LinkItem" href="#">
              {" "}
              Home{" "}
            </li>
            <li className="LinkItem" href="#">
              {" "}
              Mis imagenes{" "}
            </li>
            <li className="LinkItem" href="#">
              {" "}
              Perfil {name}{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="RightSection">
        <button className="btn-grad" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}
