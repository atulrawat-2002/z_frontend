import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container text-center" style={{display: "flex", flexDirection: "column" ,height: "80vh", alignItems: "center", justifyContent: "center"
        }}>
            <h1>404, Page Not Found</h1>
            <h3>
                <Link to="/" >Go Home</Link>
            </h3>
        </div>
    )
}



export default NotFound;