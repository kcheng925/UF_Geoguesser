import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
let correct = "Marston";

export default class GameScreen extends React.Component{
    
    
    handleAnswer = (text) => {
        this.setState({answer: text})
    }
    answerBox = (answer) => {
        if (answer == correct){
            alert('Correct!');
        }
        else {
            alert('Incorrect!')
        }
    }
    

    render(){
        var {navigate} = this.props.navigation;
        return([
            <View style = {styles.container1}>
                <Image
                        source={
                            this.props.navigation.getParam('sourceImg')
                        }
                        style={styles.picture}
                    />
            </View>,
            <View style = {styles.container2}>
                <TextInput style = {styles.input} textAlign={'center'}
                    onChangeText = {this.handleAnswer}
                    />
                <TouchableOpacity
                    style = {styles.answerButton}
                    onPress = {
                        () => this.answerBox(this.state.answer)
                    }>
                    <Text style = {styles.answerText}>Answer</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate("Start", {
                      sourceImg: require('../assets/images/marston.jpg')
                      })} style = {styles.answerButton}>
                        <Text style={styles.answerText}>Next</Text>
                    </TouchableOpacity>

                
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
        marginTop: 250,
        alignItems: 'center',
        flex: 2
    },
    picture:{
        alignItems: 'center',
        width: 500,
        height: 375
    },
    input:{
        margin: 15,
        height: 40,
        width: 300,
        borderColor: "blue",
        borderWidth: 1,
        alignItems: 'center'
    },
    answerButton:{
        justifyContent: 'center',
        backgroundColor: "#004D9C",
        borderRadius: 5,
        width: 125,
        height: 50
    },
    answerText:{
        textAlign: 'center', 
        fontSize: 15, 
        color: '#FCB209'
    },
});