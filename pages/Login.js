import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as userApi from '../api/user';

function Login () {

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const [isClick, setIsClick] = useState(false);

  const loginAction = async () => {
    setIsClick(true);
    // Alert.alert('제목', '로그인 버튼을 클릭하였습니다.');

    if (userInfo.email && userInfo.password) {
      const users = await userApi.getUsers();
      const matchData = users.filter(user => {
        return user.email === userInfo.email && user.password === userInfo.password;
      });

      if (matchData.length) {
        Alert.alert('성공', '로그인이 완료되었습니다.');
      } else {
        Alert.alert('실패', '일치하는 사용자 정보가 없습니다.');
      }
    }
  };

  return (
    <>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo.png')}
          style={{ width: 90, height: 90 }}
        />
        <Text style={{ padding: 30 }}>Welcome to my App</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Email</Text>
        <TextInput 
          style={styles.textBox}
          placeholder='Email'
          placeholderTextColor='#ffffff'
          selectionColor='#fff'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
        />
        { isClick && userInfo.email === '' 
        ? 
        <Text style={{ color: 'red', marginTop: 5 }}>Email 을 입력해주세요.</Text>
         : 
        null 
        }
        <Text style={styles.text}>Password</Text>
        <TextInput 
          style={styles.textBox}
          placeholder='Password'
          placeholderTextColor='#ffffff'
          selectionColor='#fff'
          onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
          secureTextEntry
        />
        { isClick && userInfo.password === '' 
        ? 
        <Text style={{ color: 'red', marginTop: 5 }}>Password 를 입력해주세요.</Text>
         : 
        null 
        }
        <TouchableOpacity style={styles.button} onPress={loginAction}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>      
    </>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBox: {
    backgroundColor: 'silver',
    width: 300,
    height: 50,
    borderRadius: 25,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#ffffff'
  },
  text: {
    width: 300, 
    fontWeight: '700', 
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 16
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#1c313a',
    marginVertical: 10,
    borderRadius: 25
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '900',
    marginTop: 15
  }
});

export default Login;