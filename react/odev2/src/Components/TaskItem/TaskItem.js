import './TaskItem.scss';
import { useState,useEffect } from 'react';
import {MainContext, useContext} from "../../context";

function TaskItem( {item,index} ) {

  const {taskList, SetTaskList} = useContext(MainContext);
  const  tempTaskList = [...taskList.tasks];
  const indexItem = tempTaskList.indexOf(item)

  const changeItemIsDone = (index,item) =>{
    tempTaskList[indexItem].isDone =  !tempTaskList[indexItem].isDone;

    SetTaskList((prev) => {
      return {
        tasks:tempTaskList,
        isAllDone:prev.isAllDone,
    }
    });
    
  }
  
  const changeItemInfo = (e,index,item) =>{
    tempTaskList[indexItem].task =  e.target.value;

    SetTaskList((prev) => {
      return {
        tasks:tempTaskList,
        isAllDone:prev.isAllDone,
      }
    });
   
  }

  const deleteItem = (item) =>{

    tempTaskList.splice(indexItem,1);

    SetTaskList((prev) => {
      return {
        tasks:tempTaskList,
        isAllDone:prev.isAllDone,
      }
    });
    console.log(taskList);
  }
  console.log("taskItem");
  return (
    <div className="taskItem">
        <label className="container">
           <input type="checkbox"  id="" className= "checkBox" onChange = {(e) => changeItemIsDone(index,item)} checked = {item.isDone}/>
           <span className="checkmark"></span>
        </label>
        
        <input type="text" className="taskItemInfo" onChange = {(e)=> changeItemInfo(e,index,item)} value = {item.task} />
        <button onClick = {(e) => deleteItem(item) }>x</button>
    </div>
  );
}

export default TaskItem;