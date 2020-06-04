const INITIAL_STATE = {
    loading: false,
    repo: [],
  };
  
  export const Types = {
    GET_REPO_REQUEST: 'GET_REPO_REQUEST',
    GET_REPO_SUCCESS: 'GET_REPO_SUCCESS',
    GET_REPO_ERROR: 'GET_REPO_ERROR'
  };
  
  export const Actions = {
    getRepo: (data) => ({
      type: Types.GET_REPO_REQUEST,
      payload: {data},
    }),
    getRepoSuccess: (data) => ({
      type: Types.GET_REPO_SUCCESS,
      payload: {data},
    }),
    getRepoError: () => ({
      type: Types.GET_REPO_ERROR,
    })
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case Types.GET_REPO_REQUEST:
        return {...state, loading: true};
      case Types.GET_REPO_SUCCESS:
        return {...state, repo: action.payload.data, loading: false};
      case Types.GET_REPO_ERROR:
        return {...state, loading: false};
      default:
        return state;
    }
  }
  