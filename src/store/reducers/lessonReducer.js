import consts from '../../helpers/consts';

const initState = {
  lessons:[],
  fetching: false,
  fetched: false
};

export  const lessonReducer = (state = initState, action) => {
  switch (action.type) {
    case consts.RequestedLessons: {
      return {...state, fetching: true};
    }
    case consts.ReceivedLessons: {
      return {
        ...state,
        lessons: action.payload,
        fetching: false,
        fetched: true,
      };
    }
    case consts.RejectedLessons: {
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
