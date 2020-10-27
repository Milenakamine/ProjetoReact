import React, { useEffect } from "react";
import Rodape from "../../components/rodape";
import Menu from "../../components/menu";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";

const Dashboard = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token-nyous");
        
        if(token === null || jwt_decode(token).role !== "Admin") {
            history.push("/login");
        }
    }, []);

    return (
        <div>
            <Menu/>
            <h1>Dashboard</h1>
            <Rodape/>
        </div>
    )
}

export default Dashboard;