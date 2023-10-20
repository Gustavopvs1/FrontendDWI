import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
        <div style={{display:"flex"}}>
            <nav style={{
                minHeight: "900px",
                background: "#F0F0F0",
                padding: "50px",
            }}>
                <ul>
                    <div>
                    <li>
                        <Link to = "/Alumno">Alumno</Link>
                    </li>
                    </div>
                    <div>
                    <li>
                        <Link to = "/Profesor">Profesor</Link>
                    </li>
                    </div>
                </ul>
            </nav>
        <div>
        <Outlet />
        </div>
            
            </div>
        </>
    )
}
export default Layout