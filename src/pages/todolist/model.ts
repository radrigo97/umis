import {Effect, Reducer} from 'umi';


export interface IState {
  count: number,
}

export interface IModel {
  namespace: string,
  state: IState,
  effects: {
    add: Effect;
    minus: Effect;
  };
  reducers: {
    AddTask:Reducer<IState>;
    minusOne: Reducer<IState>;
    save: Reducer<IState>;
    set: Reducer<IState>;
  };
}

const Model : IModel = {
  namespace: 'Task',
  state: {
    todo: [
      {title: 'One step by step', done: true, id: Math.random()},
      {title: 'Just do it', done: false, id: Math.random()},
      {title: 'Chicken popkorn', done: true, id: Math.random()},
    ],
  },

  effects: {
    * add(_, {call, put}) {
      yield put({
        type: 'addTask',
      });
    },
  },

  effects: {
    * minus(_, {call, put}) {
      yield put({
        type: 'minusOne',
      });
    },
  },

  reducers: {
    minusOne(state: any, {payload}: any) {
      return {
        ...state,
        digit: state.digit - 1,
      };
    },

    plusOne(state: any, {payload}: any) {
      return {
        ...state,

      };
    },


    save(state: any, {payload}: any) {
      return {
        ...state,
        ...payload,
      };
    },

    set(state:any, {payload}: any) {
      return payload
    },
  },
};

export default Model;
