import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class StartScreen extends React.Component {
    static navigationOptions = {
        title: 'Home page'
    }
    render(){
        var {navigate} = this.props.navigation;
        return(
            <View style={styles.container1}>
                <View
                    style={styles.container1}
                    contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                    <Image
                        source={
                            require('../assets/images/UFGG-Logo.png')
                        }
                        style={styles.appLogo}
                    />

                    <Image 
                        source={
                            require('../assets/images/title_img.png')
                        } 
                        style = {styles.title}
                    />

                    <TouchableOpacity onPress={() => navigate("Game")} style = {styles.startButton}>
                        <Text style={styles.startText}>Start</Text>
                    </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentContainer: {
      paddingTop: 10,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    appLogo: {
      width: 300,
      height: 200,
      resizeMode: 'contain',
      marginTop: 100,
    },
    startButton: {
      justifyContent: 'center',
      backgroundColor: "#004D9C",
      borderRadius: 5,
      width: 125,
      height: 50
    },
    startText:{
      textAlign: 'center', 
      fontSize: 15, 
      color: '#FCB209'
    },
    title: {
      width: 350,
      resizeMode: 'contain',
      alignItems: 'center'
    }
  });