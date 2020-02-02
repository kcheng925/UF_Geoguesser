import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

async function fb() {
  const storage = firebase.storage();
  const imageReference = storage.ref('Logo.png');
  const logo = await imageReference.getDownloadURL().then((url) => {
      return url;
  });
  return logo;
}

var test;
export default class StartScreen extends React.Component {

  //const [logoURI, setlogoURI] = useState(null);
  //logoURI = this.state.logoURI
  //setlogoURi = this.setState

  constructor(props) {
    super(props);
    this.state = {
      logoURI: null
    };
  }

  //useEffect(async () => {
  //  setlogoURI(await fb());
  //},[]);  
  
  componentDidMount() {
    this.setState({logoURI: "https://firebasestorage.googleapis.com/v0/b/swamphacksufgeoguesser.appspot.com/o/Logo.png?alt=media&token=c8dbbd0031534a7e-a7ca-a4043462ba9c"})
  }

  

    render(){
        var {navigate} = this.props.navigation;
        return(
            
                <View
                    style={styles.container}
                    >
                    <View style={styles.welcomeContainer}>

                    {this.state.logoURI && <Image source = {{uri: this.state.logoURI}} style = {styles.appLogo}/>}

                    <Image 
                        source={
                            require('../assets/images/title_img.png')
                        } 
                        style = {styles.title}
                    />

                    <TouchableOpacity onPress={() => navigate("Game", {
                      sourceImg: require('../assets/images/turlington.jpg')
                      })} style = {styles.startButton}>
                        <Text style={styles.startText}>Start</Text>
                    </TouchableOpacity>

                    </View>
                </View>
            
        );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    appLogo: {
      width: 375,
      height: 250,
      resizeMode: 'contain',
      marginTop: 60,
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