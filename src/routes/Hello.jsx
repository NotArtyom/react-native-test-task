import * as React from 'react';
import { View, Image, ImageBackground } from 'react-native';


export default function Hello ({navigation}) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.push('Auth')
    }, 2000);
  });
  return (
      <ImageBackground source={ require('../assets/img/bg.png')} style={ {display: 'flex', width: '100%', height: '100%' }  }>
    <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center'} }>
        <Image source={ require('../assets/img/logoUmSchool.png') }/>
    </View>
      </ImageBackground>
  );
}


