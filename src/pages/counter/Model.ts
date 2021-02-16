import {Effect, Reducer} from 'umi';


export interface IState {
  count: number,
}

export interface IModel {
  namespace: string,
  state: IState,
  effects: {
    plus: Effect;
    minus: Effect;
  };
  reducers: {
    plusOne:Reducer<IState>;
    minusOne: Reducer<IState>;
    save: Reducer<IState>;
    set: Reducer<IState>;
  };
}

const Model : IModel = {
  namespace: 'Count',
  state: {
    digit: 0
  },

  effects: {
    * plus(_, {call, put}) {
      yield put({
        type: 'plusOne',
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
        digit: state.digit + 1,
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
