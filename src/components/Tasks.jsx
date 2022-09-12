import {Task} from "./Task";

export function Tasks() {

    return (
        <div>
            <div className="text-white -mt-16 mb-3">
                <div className="bg-gray-100 w-full p-5 rounded-md">
                    <div className="text-gray-900">
                        Tasks
                    </div>
                </div>
            </div>
            <div>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    )
}