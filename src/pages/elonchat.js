import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';

const ElonChat = () => {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View style={styles.messageContainer2}>
                <View style={[styles.messageBubble, styles.senderMessage]}>
                <Text style={styles.messageText}>Hello there!</Text>
                </View>
                <Image source={require('../assets/ma.png')} style={styles.avatar} />
            </View>
            <View style={styles.messageContainer}>
                <Image source={require('../assets/elon.png')} style={styles.avatar} />
                <View style={[styles.messageBubble, styles.receiverMessage]}>
                <Text style={styles.messageText}>Hello, how are you?</Text>
                </View>
            </View>
        </ScrollView>
      {/* Add more messages here */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          multiline
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  messageContainer2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e6e6ff',
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f2f2f2',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // 设置为屏幕底部对齐
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ElonChat;
