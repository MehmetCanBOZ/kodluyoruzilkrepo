import './FormInput.scss';
import List from '../List/List';
import Footer from '../Footer/Footer';
import {MainContext, useContext} from "../../context";
import { useState,useEffect } from "react";

function FormInput() {

  const {taskList, SetTaskList} = useContext(MainContext);
  
  const [showingList,SetShowingList] = useState(taskList.tasks);

  const submitTask = (e) => {
    e.preventDefault();
    if(e.target.task.value != ""){
      SetTaskList((prev) => {
        return {
            isAllDone:prev.isAllDone,
            tasks:[...prev.tasks,{"task":e.target.task.value,"isDone":false}]
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
           return {...item,isDone:true}
          }else{
            return {...item,isDone:false}
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
    var tempTaskList = [...taskList.tasks];
    tempTaskList = tempTaskList.filter((item) => {
      if(!item.isDone){
        return item;
      }
    })
    SetShowingList(tempTaskList)
  } 

  const showCompleted = () =>{
    var tempTaskList = [...taskList.tasks];
    tempTaskList = tempTaskList.filter((item) => {
      if(item.isDone){
        return item;
      }
    })
    SetShowingList(tempTaskList);
  }

  const clearAllCompleted = () =>{
    var tempTaskList = [...taskList.tasks];
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

  return (
    <div className="form-input">
      <h1>TODOS</h1>
      <div className="form-top">
        <button id="completeAll" className = {taskList?.isAllDone ? "grayColor" : "blackColor" } onClick = { e => CompleteAll(e)}>❯</button>
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