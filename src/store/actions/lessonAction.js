import consts from '../../helpers/consts';

export const lessonAction = ({token}) => (dispatch) => {
  dispatch({
    type: consts.RequestedLessons
  });
  fetch('https://umschool.online/api/mastergroup/lessons/', {
    method: 'GET', headers: {
      'Content-Type': 'application/json',
      'Authorization' : 'JWT ' + token
    },
  }).then(data => { return data.json();})
    .then( (data) => {
      console.log(data.results);
      dispatch({
        type: consts.ReceivedLessons,
        payload: data.results
      });
    }).catch(err => {
    dispatch({
      type: consts.RejectedLessons,
      payload: err
    });
  });
};
