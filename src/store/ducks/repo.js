const INITIAL_STATE = {
	loading: false,
  repos: [],
  currentRepo: null,
  currentUser: null
};

export const Types = {

	GET_USER_REPOS_REQUEST: 'GET_USER_REPOS_REQUEST',
	GET_USER_REPOS_SUCCESS: 'GET_USER_REPOS_SUCCESS',
	GET_USER_REPOS_ERROR: 'GET_USER_REPOS_ERROR',
};

export const Actions = {
	
	getUserRepos: (user, page, sort) => ({
		type: Types.GET_USER_REPOS_REQUEST,
		payload: { user, page, sort },
	}),
	getUserReposSuccess: (repos, hasPrevious, hasNext, user) => ({
		type: Types.GET_USER_REPOS_SUCCESS,
		payload: { repos, hasPrevious, hasNext, user },
	}),
	getUserReposError: () => ({
		type: Types.GET_USER_REPOS_ERROR,
	}),
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		
		case Types.GET_USER_REPOS_REQUEST:
			return { ...state, loading: true };
		case Types.GET_USER_REPOS_SUCCESS:
			return {
        ...state,
        repos: action.payload.repos,
        hasPrevious: action.payload.hasPrevious,
        hasNext: action.payload.hasNext,
        currentUser: action.payload.user,
				loading: false
			};
		case Types.GET_USER_REPOS_ERROR:
			return { ...state, loading: false };

		default:
			return state;
	}
}
