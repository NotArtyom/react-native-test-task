import  consts from '../../helpers/consts'

const initState = {
  error: '',
  refreshed: false,
  verified: false,
  fetching: false,
  fetched: false
};

export  const authReducer = (state = initState, action) => {
  switch (action.type) {
    case consts.RequestedCredentials: {
      return {...state, fetching: true};
    }
    case consts.ReceivedCredentials: {
      return {
        ...state,
        fetching: false,
        fetched: true,
      };
    }
    case consts.RejectedCredentials: {
      return {
        ...state,
        error: action.payload,
        fetching: false,
        fetched: false,
      };
    }
  }
   return state;
};

export const verifyReducer = (state = initState, action) => {
  switch (action.type) {
    case consts.RequestedTokenVerify: {
      return {...state, fetching: true};
    }
    case consts.ReceivedTokenVerify: {
      return {
        ...state,
        verified: true,
        fetching: false,
        fetched: true,
      };
    }
    case consts.RejectedTokenVerify: {
      return {
        ...state,
        error: action.payload,
        fetching: false,
        fetched: false,
      };
    }
  }
  return state;
};

export const refreshReducer = (state = initState, action) => {
    switch (action.type) {
      case consts.RequestedTokenRefresh: {
        return {...state, fetching: true};
      }
      case consts.ReceivedTokenRefresh: {
        return {
          ...state,
          refreshed: true,
          fetching: false,
          fetched: true,
        };
      }
      case consts.RejectedTokenRefresh: {
        return {
          ...state,
          error: action.payload,
          fetching: false,
          fetched: false,
        };
      }
    }
    return state;
};

