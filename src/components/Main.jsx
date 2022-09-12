import React from "react";
import {Navbar} from "./Navbar";
import {Outlet} from "react-router-dom";

export function Main() {
    return (
        <div>
            <div className="h-16">
                <Navbar />
            </div>
            <div className="p-5 mt-16">
                <Outlet />

            </div>

        </div>
    )
}