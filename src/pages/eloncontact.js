import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ElonContact = () => {
    const navigation = useNavigation();
    const handleChatPress = () => {
        navigation.navigate('Elon');
    };
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image source={require('../assets/elon.png')} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>Elon Musk</Text>
          <Text style={styles.location}>California, USA</Text>
        </View>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={ {fontSize: 18, fontWeight: 'bold',marginRight: 10,}}>Moments</Text>
        <Image source={require('../assets/x.png')} style={styles.avatar} />
        <Image source={require('../assets/spacex.png')} style={styles.avatar} />
      </View>
      <TouchableOpacity onPress={handleChatPress}>
        <View style={styles.messagecontainer}>
            <Text style={ {fontSize: 18, fontWeight: 'bold',marginRight: 10,}}>💬Messages</Text>
        </View>
      </TouchableOpacity>
      {/* Add more user info here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'top',
    marginBottom: 10,
    backgroundColor: '#ffffff', 
    padding: 30,
    borderRadius: 15, 
  },
  messagecontainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff', 
    padding: 10, 
    borderRadius: 15, 
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: '#666666',
  },
});

export default ElonContact;
