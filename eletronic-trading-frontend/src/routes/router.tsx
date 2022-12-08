import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateUser from "../pages/CreateUser";
import ListUsers from "../pages/ListUsers";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/list" />} />

            <Route path="/register" element={<CreateUser />} />

            <Route path="/list" element={<ListUsers />} />
        </Routes>
    );
}

export default Router;