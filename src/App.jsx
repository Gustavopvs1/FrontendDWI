import Alumno from "./componentes/Alumno"
import Layout from "./componentes/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profesor from "./componentes/Profesor"
export default function App(){
  const mensaje = "Alumnos aprendiendo react"
  return (
    <>
    <h1>Hola mundo</h1>
    <Alumno titulo="Mi componente alumno"
    detalle={mensaje}
    ></Alumno>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Alumno/>}/>
          <Route path="Alumno" element={<Alumno
                          titulo="Mi componente Alumno"
                          detalle={mensaje}/>}/>
          <Route path="Profesor" element={<Profesor
                          title="Soy un profe">
                            <h2>Hijo</h2>
                            </Profesor>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>

  )
}