import React from 'react';
import { View, TextInput, ScrollView, StyleSheet, Text,TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';

const ContactsScreen = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('TheyChat');
      };
    const handlePress2 = () => {
      navigation.navigate('Discover');
      };
    const handlePress3 = () => {
      navigation.navigate('Profile');
      };
    
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍Search"
          textAlign="center"
        />
        <TouchableOpacity style={styles.plusButton}>
          <Icon name="plus" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        <TouchableOpacity onPress={handlePress3}>
          <View style={styles.chatBox}>
            <Image
              source={require('../assets/elon.png')}
              style={{ width: 50, height: 50, borderRadius: 10, }} 
            />
            <View>
              <Text style={[styles.messageText, { paddingLeft: 10 }]}>Elon Musk</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.chatBox}>
        <Image
            source={require('../assets/jensen.png')}
            style={{ width: 50, height: 50, borderRadius: 10, }} 
          />
          <View >
            <Text style={[styles.messageText, { paddingLeft: 10 }]}>Jensen</Text>
          </View>
        </View>
      </ScrollView>
     
      <View style={styles.bottomBar}>
          <TouchableOpacity onPress={handlePress} style={styles.icon}>
            <Image
                source={require('../assets/chats.jpg')}
                style={{ width: 50, height: 50, borderRadius: 10, }} 
            />
          </TouchableOpacity>
            <Image
            source={require('../assets/contacts.jpg')}
            style={{ width: 50, height: 50, borderRadius: 10, }} 
          />
          <TouchableOpacity onPress={handlePress2} style={styles.icon}>
              <Image
                  source={require('../assets/discover.jpg')}
                  style={{ width: 50, height: 50, borderRadius: 10, }} 
              />
          </TouchableOpacity>
          <Image
              source={require('../assets/me.jpg')}
              style={{ width: 50, height: 50, borderRadius: 10, }} 
          />
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center', 
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    backgroundColor: '#F0F0F0',
  },
  searchInput: {
    flex: 1, 
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC', 
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF', 
    position: 'relative',
  },
  chatBox: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  messageText: {
    fontSize: 14,
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
});

export default ContactsScreen;
