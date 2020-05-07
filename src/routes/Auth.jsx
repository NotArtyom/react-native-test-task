import * as React from 'react';
import { Text, View, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { authAction } from '../store/actions/authAction';

function Auth (props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [wrong, setWrong] = useState('');

  function handleSubmit() {
    if (email && pass) {
      props.authAction({username: email, password: pass})
    }
  }

  useEffect(() => {
    if (props.auth.fetched) {props.navigation.push('Subject')} else if (props.auth.error!==''){setWrong("Неправильные логин или пароль")}
  });

  return (
    <View style={ styles.container }>
      <View style={ styles.higherContainer }>
        <View style={ styles.imgContainer }>
          <Image style={ styles.img } source={ require('../assets/img/logoUmSchoolSmall.png') }/>
        </View>
        <View style={ styles.inputContainer }>
          <TextInput style={ styles.input } name="email" onChangeText={ email => setEmail(email) } placeholder='Электронная почта'/>
          <TextInput style={ styles.input } name="password" onChangeText={ pass => setPass(pass) } placeholder='Пароль' secureTextEntry/>
          {wrong!=='' && <Text>{wrong}</Text>}
          <Text style={ styles.forgotPass }> Забыли пароль? </Text>
        </View>
      </View>
      <View style={ styles.lowerContainer }>
        <TouchableOpacity style={ styles.logButton } onPress={handleSubmit }>
        <Text style={ styles.logButtonText }>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.vkButton }>
          <Image source={ require('../assets/img/logoVk.png') } />
          <Text style={ styles.vkButtonText }>Войти через ВКонтакте</Text>
        </TouchableOpacity>
        <View style={styles.regView}>
          <Text style={{color: '#F36900'}}>Зарегистрироваться</Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {auth: state.auth}
};

const mapDispatchToProps = (dispatch) => {
  return {
    authAction: (payload) => dispatch(authAction(payload))
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  higherContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    flex: 1
  },
  lowerContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    flex: 1
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40,
    flex: 2
  },
  inputContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 2,
  },
  forgotPass: {
    fontSize: 13,
    color: '#F36900',
    paddingBottom: 10
  },
  input: {
    minWidth: 200,
    height: 20,
    fontSize: 14,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D1D6',
  },
  img: {
    display: 'flex',
    resizeMode: 'contain',
  },
  logButton: {
    backgroundColor:"#F38822",
    marginTop: 40,
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    maxHeight: 56,
    flex:1
  },
  logButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF'
  },
  vkButton: {
    borderWidth: 1,
    borderColor: 'rgba(69, 102, 142, 0.2)',
    borderRadius: 28,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 56,
    maxHeight: 56,
    flex: 1
  },
  vkButtonText: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
    color:'#45668E'
  },
  regView: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 2,
    paddingBottom: 20
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Auth)


