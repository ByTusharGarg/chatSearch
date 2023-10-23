import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";

const Home = () => {
  const messages = [
    { id: 1, text: "Hey there!", sender: "user" },
    { id: 2, text: "Hello! How are you doing?", sender: "other" },
    { id: 3, text: "I'm good, thanks. How about you?", sender: "user" },
    { id: 4, text: "I'm doing well too.", sender: "other" },
    { id: 5, text: "That's great to hear!", sender: "user" },
    { id: 6, text: "Yes, it's been a good day.", sender: "other" },
    { id: 7, text: "What have you been up to today?", sender: "other" },
    { id: 8, text: "I had a busy day at work.", sender: "user" },
    { id: 9, text: "I see. What kind of work do you do?", sender: "other" },
    { id: 10, text: "I work in web development.", sender: "user" },
    {
      id: 11,
      text: "That sounds interesting. I'm a student.",
      sender: "other",
    },
    { id: 12, text: "What are you studying?", sender: "user" },
    { id: 13, text: "I'm studying computer science.", sender: "other" },
    {
      id: 14,
      text: "Nice! Computer science is a fascinating field.",
      sender: "user",
    },
    { id: 15, text: "Yeah, I find it really interesting.", sender: "other" },
    {
      id: 16,
      text: "Have you been coding anything interesting lately?",
      sender: "user",
    },
    {
      id: 17,
      text: "I'm currently working on a mobile app project.",
      sender: "other",
    },
    { id: 18, text: "That sounds cool. What's the app about?", sender: "user" },
    {
      id: 19,
      text: "It's a chat application with some great features.",
      sender: "other",
    },
    { id: 20, text: "Oh, like the one we're chatting on now?", sender: "user" },
    { id: 21, text: "Yes, something similar.", sender: "other" },
    {
      id: 22,
      text: "What's the most interesting feature in your app?",
      sender: "user",
    },
    {
      id: 23,
      text: "I think the voice messages feature is really cool.",
      sender: "other",
    },
    {
      id: 24,
      text: "Voice messages can add a personal touch to conversations.",
      sender: "user",
    },
    { id: 25, text: "Absolutely, and it's fun to use too.", sender: "other" },
    {
      id: 26,
      text: "I agree. It's amazing how technology has evolved.",
      sender: "user",
    },
    { id: 27, text: "Indeed, it's a fast-paced world!", sender: "other" },
    {
      id: 28,
      text: "Do you have any exciting plans for the weekend?",
      sender: "user",
    },
    {
      id: 29,
      text: "I'm thinking of going hiking. How about you?",
      sender: "other",
    },
    {
      id: 30,
      text: "I might catch up on some reading or watch a movie.",
      sender: "user",
    },
    {
      id: 31,
      text: "Both sound like great ways to spend the weekend.",
      sender: "other",
    },
    {
      id: 32,
      text: "Definitely. It's essential to relax and recharge.",
      sender: "user",
    },
    {
      id: 33,
      text: "I completely agree. Well, enjoy your weekend!",
      sender: "other",
    },
    { id: 34, text: "Thank you! You too.", sender: "user" },
    { id: 35, text: "I will. Have a great day!", sender: "other" },
    { id: 36, text: "You too!", sender: "user" },
    { id: 37, text: "Goodbye for now.", sender: "other" },
    { id: 38, text: "Goodbye!", sender: "user" },
    { id: 39, text: "See you later.", sender: "other" },
    {
      id: 40,
      text: "Absolutely. It's essential to find a balance.",
      sender: "user",
    },
    {
      id: 41,
      text: "That's true. Work-life balance is crucial.",
      sender: "other",
    },
    { id: 42, text: "So, what's your favorite way to relax?", sender: "user" },
    {
      id: 43,
      text: "I love to read books and go for long walks.",
      sender: "other",
    },
    { id: 44, text: "Reading is a fantastic way to unwind.", sender: "user" },
    { id: 45, text: "Yes, it's a great escape.", sender: "other" },
    { id: 46, text: "I also enjoy listening to music.", sender: "other" },
    { id: 47, text: "Music can be very soothing.", sender: "user" },
    { id: 48, text: "What's your favorite genre of music?", sender: "user" },
    { id: 49, text: "I love classical music. How about you?", sender: "other" },
    {
      id: 50,
      text: "I enjoy a variety of music, but classical is beautiful.",
      sender: "user",
    },
    // Add more chat messages here
  ];
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const flatListRef = React.createRef();

  const handleSearch = () => {
    const results = messages.filter((message) =>
      message.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results.slice(0, 3));

    // Scroll to the top of the chat when searching
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    setModalVisible(true);
  };

  const scrollToIndex = (index) => {
    setModalVisible(false)
    flatListRef.current.scrollToIndex({ animated: true, index });
  };

  return (
    <View style={{ backgroundColor: "#fff", height: "100%", flex: 1 }}>
      <TextInput
        placeholder="Search"
        onChangeText={setSearchQuery}
        onEndEditing={handleSearch}
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
          borderBottomWidth: 1,
          fontSize: 12,
          paddingHorizontal: 5,
          borderRadius: 10,
        }}
      />
      <FlatList
        data={messages}
        ref={flatListRef}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              {
                alignSelf: item.sender === "user" ? "flex-end" : "flex-start",
              },
              item.sender === "user" ? styles.myMsg : styles.senderMsg,
            ]}
          >
            <Text
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                color: item.sender === "user" ? "black" : "white",
              }}
            >
              {item.text}
            </Text>
          </View>
        )}
      />
      <Modal
        isVisible={isModalVisible}
        style={{ margin: 0, justifyContent: "flex-end" }}
        onBackdropPress={() => setModalVisible(false)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 22,
            justifyContent: "center",
            alignItems: "center",
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between",width:"100%" }}
          >
            <Text style={{fontWeight:"700"}}>Top 3 search results</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => scrollToIndex(item.id - 1)}>
                <Text style={{ padding: 10 }}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  myMsg: {
    backgroundColor: "tomato",
    marginHorizontal: 5,
    marginVertical: 5,
    width: "auto",
    borderRadius: 25,
  },
  senderMsg: {
    backgroundColor: "green",
    marginHorizontal: 5,
    marginVertical: 5,
    width: "auto",
    borderRadius: 25,
  },
});
