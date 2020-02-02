import React from 'react';
import {Text, View} from 'react-native';

export default class GameScreen extends React.Component{
    static navigationOptions = {
        title: 'Game Screen',
    };

    render(){
        return(
            <View>
                <Text>This is where the game goes</Text>
            </View>
        );
    }
}