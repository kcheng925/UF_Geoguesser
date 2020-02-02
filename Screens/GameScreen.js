import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class GameScreen extends React.Component{
    static navigationOptions = {
        title: 'Game Screen',
    };
    handleAnswer = (text) => {
        this.setState({answer: text})
    }
    answerBox = (answer) => {
        alert('Your answer is: ' + answer)
    }

    render(){
        return([
            <View style = {styles.container1}>
                <Image
                        source={
                            require('../assets/images/turlington.jpg')
                        }
                        style={styles.picture}
                    />
            </View>,
            <View style = {styles.container2}>
                <TextInput style = {styles.input}
                    />
            </View>
        ]);
    }
}

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        backgroundColor: "#000"
    },
    container2:{
        flex: 2
    },
    picture:{
        alignItems: 'center'
    },
    input:{
        margin: 15,
        height: 40,
        borderColor: "blue",
        borderWidth: 1,
        alignItems: 'center'
    }
});