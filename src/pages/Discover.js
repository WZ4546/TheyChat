import React from 'react';
import { View, TextInput, ScrollView, StyleSheet, Text,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const DiscoverScreen = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('Contacts'); 
    };
    const handlePress2 = () => {
    navigation.navigate('TheyChat');
    };
  return (
    <View style={styles.container}>
        <ScrollView style={styles.container}>
        <View style={styles.backgroundContainer}>
            <Image
            source={require('../assets/background.webp')}
            style={styles.backgroundImage}
            />
            <View style={styles.userAvatarContainer}>
            <Image
                source={require('../assets/ma.png')}
                style={styles.userAvatar2}
            />
            </View>
        </View>
        <View style={styles.post}>
          <View style={styles.userInfoContainer}>
              <Image
                source={require('../assets/elon.png')}
                style={styles.userAvatar}
              />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Elon Musk</Text>
                <Text style={styles.postTime}>Posted 1 hour ago</Text>
              </View>
            </View>
            <Text style={styles.postContent}>
              Let's support TheyChat instead of WeChat!
            </Text>
            <Image
              source={require('../assets/x.png')}
              style={styles.postImage}
            />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button}>
                <Icon name="heart" size={20} color="red" />
                <Text style={styles.buttonText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Icon name="comment" size={20} color="blue" />
                <Text style={styles.buttonText}>Comment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.addButton}>
          <Image
            source={require('../assets/addpost.png')}
            style={styles.addButtonIcon}
          />
        </TouchableOpacity>
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={handlePress2} style={styles.icon}>
            <Image
                source={require('../assets/chats.jpg')}
                style={{ width: 50, height: 50, borderRadius: 10, }} 
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress} style={styles.icon}>
            <Image
              source={require('../assets/contacts.jpg')}
              style={{ width: 50, height: 50, borderRadius: 10, }} 
            />
          </TouchableOpacity>
            <Image
                source={require('../assets/discover.jpg')}
                style={{ width: 50, height: 50, borderRadius: 10, }} 
            />
          <Image
              source={require('../assets/me.jpg')}
              style={{ width: 50, height: 50, borderRadius: 10, }} 
          />
      </View>

        
        </View>
    
  );
};

const styles = StyleSheet.create({
  userAvatar2: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  bottomBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 25,
      borderTopWidth: 1,
      borderTopColor: '#CCCCCC',
  },
  icon: {
      paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  backgroundContainer: {
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover',
  },
  userAvatarContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  post: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    color: '#999999',
  },
  postContent: {
    fontSize: 14,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 14,
  },
  icon: {
    paddingHorizontal: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 120,
    right: 10,
  },
  addButtonIcon: {
    width: 50,
    height: 50,
  },
});

export default DiscoverScreen;
