import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { lessonAction } from '../store/actions/lessonAction';
import { useState } from 'react';

function Lessons (props) {
  const [result, setResult] = React.useState(false);

  async function getItem () {
    try {
      await AsyncStorage.getItem('token')
        .then(value => {
          console.log(value);
          props.lessonAction({token: value});
        });
    } catch (error) {
      console.log('No token found');
    }
  }
  React.useEffect(() => {
    if (!result) {
      getItem().then(setResult(true));
    }
  });
  return (
    <View style={ {display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'} }>
      <LessonList props={props.lessons.lessons}/>
    </View>
  );
}

const Lesson = ({title}) => {
  return (
    <TouchableOpacity>
      <Text>{ title } </Text>
    </TouchableOpacity>
  );
};

const LessonList = ({props}) => {
  return (
    <View>
      { props.map(props => {
        return (
          <Lesson title={ props.title } key={ props.id }/>
        );
      }) }
    </View>
  );
};

const mapStateToProps = state => {
  return {lessons: state.lessons};
};

const mapDispatchToProps = (dispatch) => {
  return {
    lessonAction: (payload) => dispatch(lessonAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);





























