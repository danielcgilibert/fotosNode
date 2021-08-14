import React from "react";

export const CardImagen = ({foto}) => {

  const {id, nombre, imagen,Autor, Likes } = foto;
  console.log(foto);
  return (
    <div className="cardImagen" id={id} style={{backgroundImage: `url(${imagen})`   }}>
      <h4>{nombre }</h4>
      <p>{Autor} con {Likes} likes</p>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="#00ADB5">
          <path d="M18,4c-4-1-6,3-6,3s-2-4-6-3s-4,6-2,8l8,8l8-8C22,10,22,5,18,4z"></path>
        </g>
      </svg>

      <div>

      </div>

    </div>
  );
};
