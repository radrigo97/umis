import styles from '../index.less';
import {connect} from 'umi';

function countPage(props) {

  return (
    <div>
      <ul>
        <li>
          <h1 className={styles.count}>{props.count}</h1>
          <button onClick={props.plusOne}>Plus</button>
          <button onClick={props.minusOne}>Minus</button>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.Count.digit
})

const mapDispatchToProps = (dispatch: any) => ({
  plusOne: () => dispatch({type: 'Count/plus'}),
  minusOne: () => dispatch({type: 'Count/minus'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(countPage)
