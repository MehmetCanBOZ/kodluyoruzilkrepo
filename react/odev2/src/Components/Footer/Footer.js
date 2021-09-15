import './Footer.scss';
import {MainContext, useContext} from "../../context";
import { useEffect, useState } from "react"

function Footer( {showAll,showActive,showCompleted, clearAllCompleted } ) {
  const [ state, setState] = useState(false)
  const {taskList, SetTaskList} = useContext(MainContext);
  
  const notCompleted = taskList.tasks.filter(item => {
      if(!item.isDone){
          return item;
      }
  });

  const isAnyCompleted = (taskList) => {
    const anyCompleted = taskList.tasks.filter((item) => {
      if(item.isDone){
        return item;
      }
    });

    if(anyCompleted.length > 0){
      setState(true)
    }else{
      setState(false)
    }
  }
    useEffect(() => {
      isAnyCompleted(taskList);
    }, [taskList])
  return (  
    <div className = "footer">
      <p><span>{notCompleted.length}</span> item left  </p>
      <div>
        <button id="all" onClick={(e)=> showAll()}>All</button>
        <button id="active" onClick={(e)=> showActive()}>Active</button>
        <button id="completed" onClick={(e)=> showCompleted()}>Completed</button>
      </div>
      { state ? <button id = "clearCompleted" onClick={(e)=> clearAllCompleted()}>Clear Completed</button> : "" }
    </div> 
  );
}

export default Footer;