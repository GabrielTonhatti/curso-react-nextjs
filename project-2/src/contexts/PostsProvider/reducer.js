import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_LOADING:
      console.log('action', action);
      return {
        ...state,
        loading: true,
      };
    case types.POSTS_SUCCESS:
      console.log('action', action);
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    default:
      console.log('Não encontrei a action', action.type);
      return state;
  }
};
