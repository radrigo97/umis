import {connect} from 'umi';

function listPage(props) {

  return (
    <div>
      {
        props.task.map(el => <li key={el.id}>{el.title}</li>)
      }
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  task: state.Task.todo
})


export default connect(mapStateToProps)(listPage);
