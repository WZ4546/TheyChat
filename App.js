import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/pages/Login'; 
import ChatsScreen from './src/pages/chats'; 
import ContactsScreen from './src/pages/Contacts'; 
import DiscoverScreen from './src/pages/Discover'; 
import ElonChat from './src/pages/elonchat'; 
import ElonContact from './src/pages/eloncontact'; 

const Stack = createStackNavigator();

export default function App() {
  const [renderIndex, setRenderIndex] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderIndex(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {renderIndex ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={IndexScreen} />
          <Stack.Screen name="TheyChat" component={ChatsScreen} />
          <Stack.Screen name="Contacts" component={ContactsScreen} />
          <Stack.Screen name="Discover" component={DiscoverScreen} />
          <Stack.Screen name="Elon" component={ElonChat} />
          <Stack.Screen name="Profile" component={ElonContact} />
        </Stack.Navigator>
      ) : (
        <View style={styles.container}>
          <Image
            source={require('./assets/Designer.png')}
            style={styles.image}
            resizeMode="cover" 
          />
          <StatusBar style="auto" />
        </View>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  image: {
    flex: 1,
    width: null, 
    height: null, 
  },
});
