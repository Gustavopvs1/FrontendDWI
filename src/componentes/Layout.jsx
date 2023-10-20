import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
        <div style={{display:"Flex"}}>
            <nav style={{
                minHeight: "900p",
                background: "#F0F0F0",
                padding: "50px",
                margin: "50px"
            }}>
                <ul>
                    <li>
                        <Link to = "/Alumno">Alumno</Link>
                    </li>
                    <li>
                        <Link to = "/Profesor">Profesor</Link>
                    </li>
                </ul>
            </nav>
        </div>
            <Outlet />
        </>
    )
}
export default Layout