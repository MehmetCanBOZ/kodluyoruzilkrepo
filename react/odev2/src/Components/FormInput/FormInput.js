import './FormInput.scss';
import List from '../List/List';
import Footer from '../Footer/Footer';
import {MainContext, useContext} from "../../context";
import { useState,useEffect } from "react";

function FormInput() {

  const {taskList, SetTaskList} = useContext(MainContext);
  
  const [showingList,SetShowingList] = useState(taskList.tasks);
  var tempTaskList = [...taskList.tasks];
  const submitTask = (e) => {
    e.preventDefault();
    if(e.target.task.value != ""){
      SetTaskList((prev) => {
        return {
            isAllDone:prev.isAllDone,
            tasks:[{"task":e.target.task.value,"isDone":false},...prev.tasks]
        }
      })
    }
    e.target.task.value = "";
    
  }
  useEffect(() => {
    SetShowingList(taskList.tasks);
  }, [taskList]);

  const CompleteAll = (e) => {
    SetTaskList((prev) => {
    
      return {
        tasks:prev.tasks.map((item) => 
        {
          if(prev.isAllDone){
           return {...item,isDone:false}
          }else{
            return {...item,isDone:true}
          }
        }
        ),
        isAllDone:!prev.isAllDone,
    }
    });
  };
  
  const showAll = () =>{
    SetShowingList(taskList.tasks)
  }  

  const showActive = () =>{
    tempTaskList = tempTaskList.filter((item) => {
      if(!item.isDone){
        return item;
      }
    })
    SetShowingList(tempTaskList)
  } 

  const showCompleted = () =>{
    tempTaskList = tempTaskList.filter((item) => {
      if(item.isDone){
        return item;
      }
    })
    SetShowingList(tempTaskList);
  }

  const clearAllCompleted = () =>{
    tempTaskList = tempTaskList.filter((item) => {
      if(!item.isDone){
        return item;
      }
    })
    SetTaskList((prev) => {
      return {
          isAllDone:prev.isAllDone,
          tasks:tempTaskList
      }
    })
  }
  console.log("formInput");
  return (
    <div className="form-input">
      <h1>TODOS</h1>
      <div className="form-top">
        <button id="completeAll" className = {taskList?.isAllDone ? "blackColor" : "grayColor" } onClick = { e => CompleteAll(e)}>❯</button>
        <form onSubmit = {(e) => submitTask(e)}>
          <input type="text" name="task" id="taskInfo" placeholder="What needs to be done?"/>
        </form>  
      </div>
      <List list = {showingList}/>
      { taskList.tasks[0] ? <Footer showAll = { showAll } showActive = { showActive } showCompleted = { showCompleted }  clearAllCompleted = {clearAllCompleted} /> : ""}
    </div>
  );
}

export default FormInput;