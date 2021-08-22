import React from "react"

export const CardImagen = () => {
  // const {id, nombre, imagen,Autor, Likes } = foto;
  // console.log(foto);
  return (
    <div
      className="cardImagen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
      }}
    >
      <h4> Test Nombre </h4>
      <p>Autor con 55 likes</p>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="#00ADB5">
          <path d="M18,4c-4-1-6,3-6,3s-2-4-6-3s-4,6-2,8l8,8l8-8C22,10,22,5,18,4z"></path>
        </g>
      </svg>

      <div></div>
    </div>
  )
}
