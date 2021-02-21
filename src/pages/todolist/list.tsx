import {connect} from 'umi';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import styles from '../todolist/todoList.less';
import React,{useState} from "react";



function listPage(props) {
  const [taskos, setTaskos] = useState('');

  const createTask = (taskos: any) => {
    let data = taskos;
    props.addTask(data)
  }


  return (
    <div className={styles.list}>
      <ul className={styles.typeList}>
        <div className={styles.inputAdd}>
          <Input placeholder="Pleas enter text" value={taskos} onChange={e => setTaskos(e.target.value)}/>
          <Button className={styles.addTask} onClick={createTask}>Add Task</Button>
        </div>
      {

        props.task.map(el => <li key={el.id}>{el.title}
        </li>)
      }
      </ul>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  task: state.Task.todo
})

const mapDispatchToProps = (dispatch: any) => ({
  addTask: (payload: {data: any}) => dispatch({type: 'Task/add'}, payload),
});


export default connect(mapStateToProps,mapDispatchToProps)(listPage);
