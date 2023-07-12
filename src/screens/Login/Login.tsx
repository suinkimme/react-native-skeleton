import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';

// types
import { RootStackParamList } from 'types';

// styles
import styles from './Login.style';

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
  return (
    <View style={styles.containerView}>
      <View style={styles.loginFormView} />
      <View style={styles.loginButtonView}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
