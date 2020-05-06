import * as React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { AsyncStorage } from 'react-native-web';


export default function Hello (props) {
  React.useEffect(() => {
    // if (AsyncStorage.getItem('token')) {
      setTimeout(() => {
        props.navigation.push('Subject')
      }, 2000);})
    // else{
    // setTimeout(() => {
    //   props.navigation.push('Subject')
    // }, 2000);}
  // });
  return (
      <ImageBackground source={ require('../assets/img/bg.png')} style={ {display: 'flex', width: '100%', height: '100%' }  }>
    <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center'} }>
        <Image source={ require('../assets/img/logoUmSchool.png') }/>
    </View>
      </ImageBackground>
  );
}































