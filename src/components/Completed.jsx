import React from "react";
import {Task} from "./Task";

export function Completed() {
    return (
        <div>
            <div className="text-white -mt-16 mb-3">
                <div className="bg-gray-100 w-full p-5 rounded-md">
                    <div className="text-gray-900">
                        Completed
                    </div>
                </div>
            </div>
            <div>
                <Task />
            </div>
        </div>
    )
}