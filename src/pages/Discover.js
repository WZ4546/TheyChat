import React from 'react';
import { View, TextInput, ScrollView, StyleSheet, Text,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const DiscoverScreen = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('Contacts'); // 导航到联系人页面
    };
    const handlePress2 = () => {
    navigation.navigate('TheyChat'); // 导航到联系人页面
    };
  return (
    <View style={styles.container}>
        <ScrollView style={styles.container}>
        {/* 用户背景 */}
        <View style={styles.backgroundContainer}>
            <Image
            source={require('../assets/background.webp')}
            style={styles.backgroundImage}
            />
            <View style={styles.userAvatarContainer}>
            <Image
                source={require('../assets/ma.png')}
                style={styles.userAvatar}
            />
            </View>
        </View>
        {/* 用户所有 posts */}
        <View style={styles.postsContainer}>
            {/* 每个 post 的内容 */}
            <View style={styles.post}>
            {/* 这里放置单个 post 的内容 */}
            </View>
            {/* 可以继续添加更多的 posts */}
        </View>
        </ScrollView>
        <View style={styles.bottomBar}>
            {/* <Text>Hello World!</Text> */}
            <TouchableOpacity onPress={handlePress2} style={styles.icon}>
                <Icon name="comments" size={30} color="black" />
            </TouchableOpacity>
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
    height: 200, // 背景图片高度
    resizeMode: 'cover',
  },
  userAvatarContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  userAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40, // 设置圆形头像
    borderWidth: 2,
    borderColor: '#FFFFFF', // 头像边框颜色
  },
  postsContainer: {
    padding: 20,
  },
  post: {
    marginBottom: 20, // 间隔
    padding: 10,
    backgroundColor: '#F0F0F0', // post 的背景色
    borderRadius: 5,
  },
});

export default DiscoverScreen;
