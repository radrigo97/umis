import {connect} from 'umi';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import styles from '../todolist/todoList.less';
import {useState} from "react";

function listPage(props) {
  const [taski, setTaski] = useState('');

  return (
    <div className={styles.list}>
      <ul className={styles.typeList}>
        <div className={styles.inputAdd}>
          <Input placeholder="Pleas enter text" />
          <Button className={styles.addTask}>Add Task</Button>
        </div>
      {

        props.task.map(el => <li key={el.id}>{el.title}
          <Button className={styles.deleteTask} type="primary" danger>
            Delete
          </Button>
        </li>)
      }
      </ul>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  task: state.Task.todo
})


export default connect(mapStateToProps)(listPage);
