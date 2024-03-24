import React from 'react';
import { View, TextInput, ScrollView, StyleSheet, Text,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
 

const ChatsScreen = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('Contacts'); 
    };
    const handlePress2 = () => {
        navigation.navigate('Discover');
    };
    const handleChatPress = () => {
        navigation.navigate('Elon');
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
                <TouchableOpacity onPress={handleChatPress}>
                    <View style={styles.chatBox}>
                        <Image
                            source={require('../assets/elon.png')}
                            style={{ width: 50, height: 50, borderRadius: 10, }} 
                        />
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageText}>Hello, how are you?</Text>
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>10:00 AM</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.chatBox}>
                <Image
                    source={require('../assets/jensen.png')}
                    style={{ width: 50, height: 50, borderRadius: 10, }} 
                />
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>Hello, how are you?</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>10:00 AM</Text>
                </View>
                </View>
            </ScrollView>
            <View style={styles.bottomBar}>
                {/* <Text>Hello World!</Text> */}
                <Image
                    source={require('../assets/chats.jpg')}
                    style={{ width: 50, height: 50, borderRadius: 10, }} 
                />
                <TouchableOpacity onPress={handlePress} style={styles.icon}>
                    <Image
                    source={require('../assets/contacts.jpg')}
                    style={{ width: 50, height: 50, borderRadius: 10, }} 
                />
                </TouchableOpacity>
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
    messageTimeContainer: {
        flex: 1,
        position: 'absolute',
        top: 20,
        right: 0,
    },
    messageContainer: {   
        flex: 1,
        marginRight: 10,
        marginTop: 15,
    },
    messageText: {
        fontSize: 14,
        paddingLeft: 10,
    },
    timeText: {
        fontSize: 12,
        color: '#666666',
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

    export default ChatsScreen;
