import './List.scss';
import TaskItem from '../TaskItem/TaskItem';

import {MainContext, useContext} from "../../context";

function List( {list}) {
  const {taskList, SetTaskList} = useContext(MainContext);
  


  return (
    <div className="list-wrapper">
    {
      list?.map((item,index) =>{
        return  <TaskItem key = {index} index = {index} item = {item} />
      })
    }
    </div>
  );
}

export default List;