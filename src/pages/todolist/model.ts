import {Effect, Reducer} from 'umi';


export interface IState {
  todo: any,
  tas: any,
}

export interface IModel {
  namespace: string,
  state: IState,
  effects: {
    add: Effect;
  };
  reducers: {
    create: Reducer<IState>;
  };
}



const Model : IModel = {
  namespace: 'Task',
  state: {
    todo: [
      {title: 'One step by step', id: Math.random()},
      {title: 'Just do it', id: Math.random()},
      {title: 'Chicken popkorn', id: Math.random()},
    ],
    tas: [],
  },

  effects: {
    *add(_, { call, put }) {
      yield put({type: 'create'})
    },
    },

  reducers: {
    create(state: any, { payload }: any) {
      const newTask = [...state.tas]
      newTask.push({title: payload, id: Math.random()})
      console.log(payload)
      return {
        ...state,
        tas: newTask
      };
    },
  },
};

export default Model;
