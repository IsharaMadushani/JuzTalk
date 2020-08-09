import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Appbar } from 'react-native-paper';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    
  }

  // Occurs when signout is pressed...
  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  

  onChat = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (

      <View>
        <Appbar.Header style = {{backgroundColor:"lightseagreen"}}>
          <Appbar.Content
            title="Home Page"
          />
        </Appbar.Header>

        <View style={styles.circle} />

        <View style={{ paddingTop: 80 }}>

       
        <View style={{ marginTop: 20 }}>
                        <Image
                            source={require("../assets/home.jpg")}
                            style={{ width: 150, height: 150, alignSelf: "center" }}>
                        </Image>
                    </View>
          <View style={styles.container}>
            < TouchableOpacity
              onPress={this.onSignoutPress}
              style={styles.buttonlog}>
              <Text style={{ fontSize: 20, color: 'white', textAlign: "center"  }}>Sign out</Text>
            </TouchableOpacity>
          </View>

         

         <View style={{ paddingTop: 15 }}/>
          <View style={styles.container}>
            < TouchableOpacity
              onPress={this.onChat}
              style={styles.buttonlog}>
              <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Go to chat</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  buttonlog: {
    backgroundColor: "darkcyan",
    padding: 5,
    borderRadius: 5,
    width: 320,
    height: 40,

  },

  container: {
    padding: 5,
    alignItems: "center",
    marginTop: 20,
  },

  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20
  },

});