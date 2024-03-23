import React from 'react';
import { View, TextInput, ScrollView, StyleSheet, Text,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
 

const ChatsScreen = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('Contacts'); // 导航到联系人页面
    };
    const handlePress2 = () => {
    navigation.navigate('Discover'); // 导航到联系人页面
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
                <Icon name="comments" size={30} color="black" style={styles.icon} />
                <TouchableOpacity onPress={handlePress} style={styles.icon}>
                    <Icon name="address-book" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress2} style={styles.icon}>
                    <Icon name="compass" size={30} color="black" />
                </TouchableOpacity>
                {/* <Icon name="compass" size={30} color="black" style={styles.icon} /> */}
                <Icon name="user" size={30} color="black" style={styles.icon} /> 
            </View>

            
            </View>
        );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        flexDirection: 'row', // 水平排列
        alignItems: 'center', // 垂直居中对齐
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        backgroundColor: '#F0F0F0', // 灰色的背景
    },
    searchInput: {
        flex: 1, // 输入框自动填充剩余空间
        height: 40,
        borderWidth: 1,
        borderColor: '#CCCCCC', // 边框颜色与背景一致
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF', // 白色的填充
        position: 'relative', // 允许子元素使用绝对定位
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
        top: 20, // 将时间定位到顶部
        right: 0, // 将时间定位到右侧
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
