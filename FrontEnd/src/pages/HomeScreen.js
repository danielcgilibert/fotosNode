import React, { useEffect, useState } from "react";
import { CardImagen } from "../components/cardImagen/CardImagen";
import { NavBar } from "../components/navbar/NavBar";

const getFotos = async () => {
  const url = `http://localhost:3000/api/img`;
  const respuesta = await fetch(url, { method: "GET" });
  const datos = await respuesta.json();
  return datos;
};

export const HomeScreen = () => {
  const [fotos, setFotos] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getFotos().then((datos) => {
      setFotos(datos)
      setLoading(false);
    } );
  }, []);

  return (
    <>
    <NavBar />
    <div className="homeScreen gridHomeScreen">
      
    </div>
    </>
  );
};
