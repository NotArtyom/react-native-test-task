import * as React from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity } from 'react-native';
import { subjects } from '../helpers/subjects';
import { useState } from 'react';

function Subject () {

  const [selectedClass, setSelectedClass] = React.useState('11 класс');
  return (
    <View style={ styles.container }>
      <Text style={ styles.Title }>Спасибо за регистрацию!</Text>
      <Text style={ styles.subTitle }>Осталось указать класс и предметы, по которым нужно набрать баллы</Text>
      <Picker selectedValue={ selectedClass }
              style={ styles.classPicker }
              onValueChange={ (itemClass, itemIndex) => setSelectedClass(itemClass) }>
        <Picker.Item label="11" value="11 класс"/>
        <Picker.Item label="10" value="10 класс"/>
        <Picker.Item label="9" value="9 класс"/>
        <Picker.Item label="8" value="8 класс"/>
        <Picker.Item label="7" value="7 класс"/>
        <Picker.Item label="6" value="6 класс"/>
        <Picker.Item label="5" value="5 класс"/>
        <Picker.Item label="4" value="4 класс"/>
        <Picker.Item label="3" value="3 класс"/>
        <Picker.Item label="2" value="2 класс"/>
        <Picker.Item label="1" value="1 класс"/>
      </Picker>
      <View style={styles.subjectsContainer}>
        <SubjectList props={ subjects }/>
      </View>
    </View>
  );
}

export default Subject;

const SubjectButton = ({title}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <TouchableOpacity style={clicked ? styles.sbViewClicked : styles.sbView} onPress={() => setClicked(!clicked)}>
      <Text style={ styles.sb }>{ title } </Text>
    </TouchableOpacity>
  );
};

const SubjectList = ({props}) => {
  return (
    <View style={ styles.subjects }>
      { props.map(props => {
        return (
          <SubjectButton title={ props.title } key={ props.id }/>
        );
      }) }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      display: 'flex',
      width: '100%',
      height: '100%',
      paddingTop: '14%',
    },
    Title: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    subTitle: {
      fontSize: 13,
      marginTop: 20,
      textAlign: 'center',
      width: '90%'
    },
    classPicker: {
      borderRadius: 8,
      width: '90%',
    },
    sbView: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8,
      padding: 6,
      height: 36,
      borderWidth: 1,
      borderRadius: 18,
      borderColor: '#C9C7CC',
      borderStyle: 'dashed'
    },
    sbViewClicked:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8,
      padding: 6,
      height: 36,
      borderWidth: 1,
      borderRadius: 18,
      borderColor: '#F38822',
    },
    sb: {
      fontSize: 14
    },
    subjects: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      height: '50%',
      flexWrap: 'wrap',
      width: '80%'
    },
  subjectsContainer:{
      width: '100%',
    alignItems: 'center',
  }
  })
;
