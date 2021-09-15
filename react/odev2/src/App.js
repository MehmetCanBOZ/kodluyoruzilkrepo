import FormInput from './Components/FormInput/FormInput';
import './App.css';
import { MainContext } from "./context";
import { useState } from "react";


function App() {
  
  const [taskList,SetTaskList] = useState({"isAllDone":false,"tasks":[]})
  
  const data = {
    taskList,
    SetTaskList    
  }

  return (
    <MainContext.Provider value = {data}>
    <div className="App">
      <FormInput />
    </div>
    </MainContext.Provider>
  );
}

export default App;
