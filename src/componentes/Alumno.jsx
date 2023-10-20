import { useState } from "react"
export default function Alumno({titulo, detalle = "Cargando alumnos"}) {
    const [text, setText] = useState("");
    return (
        <>
        <h1>{titulo}</h1>
        <p>{detalle}</p>
        <input type="text" onChange={(v) => setText(v.target.value)}></input>
        <h1>{text}</h1>
        </>
    )
}