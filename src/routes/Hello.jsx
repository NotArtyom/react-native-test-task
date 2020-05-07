import * as React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { AsyncStorage } from 'react-native-web';
import { refreshTokenAction } from '../store/actions/authAction';
import { verifyTokenAction } from '../store/actions/authAction';
import { connect } from 'react-redux';

function Hello (props) {
  const [proceeded, setProceeded] = React.useState(false);

  async function getItem () {
    try {
      await AsyncStorage.getItem('token')
        .then(value => {
          console.log('token found');
          console.log(value);
          props.refreshTokenAction({token: value});
          props.verifyTokenAction({token: value});
        });
    } catch (error) {
      console.log('No token found');
      setTimeout(() => props.navigation.push('Auth'), 2000);
    }
  }

  React.useEffect(() => {
      if (!proceeded) {
        getItem().then(setProceeded(true));
        if (props.refresh.fetched && props.verify.fetched) {
          props.navigation.push('Subject');
        }
      }
    }
  );
  return (
    <ImageBackground source={ require('../assets/img/bg.png') }
                     style={ {display: 'flex', width: '100%', height: '100%'} }>
      <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center'} }>
        <Image source={ require('../assets/img/logoUmSchool.png') }/>
      </View>
    </ImageBackground>
  );
}

const mapStateToProps = state => {
  return {refresh: state.refresh, verify: state.verify};
};

const mapDispatchToProps = (dispatch) => {
  return {
    refreshTokenAction: (payload) => dispatch(refreshTokenAction(payload)),
    verifyTokenAction: (payload) => dispatch(verifyTokenAction(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);





























