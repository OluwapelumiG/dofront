import React from "react"
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';

import { Routes, Route} from "react-router-dom";
import {Main} from "./components/Main";
import {Tasks} from "./components/Tasks";
import {Schedules} from "./components/Schedules";
import {Completed} from "./components/Completed";
import {Task} from "./components/Task";
import {Dashboard} from "./components/Dashboard";

function App() {
  return (
      <div className="h-screen w-full justify-center bg-white">

          <Routes>
              <Route exact={true} path='/' element={<Main />}>
                  <Route exact={true} path='' name={`Dashboard`} element={<Dashboard />} />
                  <Route exact={true} path='tasks' name={`Tasks`} element={<Tasks />} />
                  <Route exact={true} path='active' name={`Active`} element={<Schedules />} />
                  <Route exact={true} path='done' name={`Done`} element={<Completed />} />
                  <Route exact={true} path=':tasksId' element={<Task />} />
              </Route>

          </Routes>
      </div>
  );
}

export default App;
