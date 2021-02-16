import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
  Platform
} from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import firebase from 'firebase'
import db from '../config'

export default class WriteStory extends React.Component {
  constructor() {
    super();

    this.state = {
      storyTitle: "",
      authorName: "",
      story: "",
    };
  }

  handlePublish = () => {
    const showToast = () => {
        if(Platform.OS === 'android'){
            ToastAndroid.show("Story Published", ToastAndroid.SHORT);
        }else{
            alert("Story Published")
        }
    }

    firebase.firestore().collection("stories").add({
      storyTitle:this.state.storyTitle,
      authorName:this.state.authorName,
      story:this.state.story
    })

    this.setState({
      storyTitle:'',
      authorName:'',
      story:''
    })

    showToast()
  };

  render() {
    return (
      <SafeAreaProvider style={styles.container}>
          <KeyboardAvoidingView>
        <Header
          centerComponent={{
            text: "Story hub",
            style: { fontSize: 20, fontWeight: "600" },
          }}
          backgroundColor="#FFC0CB"
        />

        <View style={{ marginHorizontal: 19, marginTop: 20 }}>
          <Text style={styles.header}>Title of the story</Text>
          <TextInput
            placeholder=""
            style={{
              fontSize: 20,
              fontWeight: "400",
              height: 40,
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 5,
            }}
            value={this.state.storyTitle}
            onChangeText={storyTitle => this.setState({storyTitle})}
            autoFocus={true}
          />
        </View>

        <View style={{ marginHorizontal: 19, marginTop: 20 }}>
          <Text style={styles.header}>Author</Text>
          <TextInput
            placeholder=""
            style={{
              fontSize: 20,
              fontWeight: "400",
              height: 40,
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 5,
            }}
            value={this.state.authorName}
            onChangeText={authorName => this.setState({authorName})}
          />
        </View>

        <View style={{ marginHorizontal: 19, marginTop: 20 }}>
          <Text style={styles.header}>Write your story</Text>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: "400",
              height: 350,
              borderWidth: StyleSheet.hairlineWidth,
              marginTop: 5,
            }}
            multiline={true}
            value={this.state.story}
            onChangeText={story => this.setState({story})}
          />
        </View>

        <View style={{ marginHorizontal: 19, marginTop: 10 }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              padding: 15,
            }}
            onPress={this.handlePublish}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Entypo name="publish" size={30} />
              <Text style={{ marginLeft: 7, fontSize: 20 }}>Publish</Text>
            </View>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FFFA",
  },
  header: {
    fontSize: 18,
    fontWeight: "200",
    color: "#8e93a1",
    textTransform: "uppercase",
  },
});
