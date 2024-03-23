import React from 'react';
import { Text } from 'react-native';
import { View, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Layout = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('TheyChat'); // 导航到 Chats 页面
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./default.png')}
        style={styles.avatar}
      />
      <TextInput
        style={styles.input}
        placeholder="phone number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // 修改为 'flex-start'，居中偏上显示
    alignItems: 'center',
    paddingTop: windowHeight * 0.1, // 调整上边距，使内容偏上显示
  },
  avatar: {
    width: windowWidth * 0.3, // 使用相对单位来定义大小
    height: windowWidth * 0.3, // 使用相对单位来定义大小
    borderRadius: windowWidth * 0.25, // 使用相对单位来定义大小
    marginBottom: windowHeight * 0.05, // 使用相对单位来定义大小
  },
  input: {
    width: windowWidth * 0.8, // 使用相对单位来定义大小
    height: windowHeight * 0.05, // 使用相对单位来定义大小
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: windowHeight * 0.02, // 使用相对单位来定义大小
    paddingLeft: 10,
  },
  loginButton: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.05, 
    backgroundColor: '#1AAD19',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold', // 添加 fontWeight 来加粗文字
  },
});

export default Layout;
