import React from "react";
export function Task() {
    return (
        <div>
            <div className="bg-gray-50 pt-5 mt-5 rounded-md">
                <div className="flex">
                    <div className="w-6 h-6 bg-blue-400 rounded-full m-2"></div>
                    <div className="m-2 text-blue-400">
                        Today
                    </div>
                </div>
                <div className="pl-3 pr-3">
                    <div className="p-5 text-black">
                        <hr/>
                    </div>
                    <div className="pb-3">
                        <h3 className="font-bold">
                            I want to learn how to climb a tree
                        </h3>
                        <p>
                            I'll go to Titcombe college and climb a Mango tree. If I perish .... I will not perish in Jesus Name
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}