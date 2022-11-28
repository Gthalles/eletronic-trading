import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateUser from "../pages/CreateUser";
import ListUser from "../pages/ListUser";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/list-user" />} />

            <Route path="/create-user" element={<CreateUser />} />

            <Route path="/list-user" element={<ListUser />} />
        </Routes>
    );
}

export default Router;