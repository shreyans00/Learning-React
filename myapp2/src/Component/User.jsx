import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

// const User = ({ match }) => {
//     return <h1>This is User {match.params.fname} page</h1>
// };

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <h1>This is User {fname} {lname} page</h1>
            <p>My current location is {location.pathname}</p>
            {location.pathname === `/user/shreyans/raj` ? (<button onClick={() => alert(`shreyans' location`)}>Showing</button>) : null}
            {location.pathname === `/user/shreyans/raj` ? (<button onClick={() => navigate(-1)}>Go back to previous url</button>) : null}
            {location.pathname === `/user/shreyans/raj` ? (<button onClick={() => navigate("/")}>Go back homepage</button>) : null}
        </>
    );
};

export default User;

