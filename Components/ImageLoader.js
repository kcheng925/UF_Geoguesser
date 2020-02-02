import React, {useState, useEffect} from 'react';
import * as firebase from 'firebase';
import { render } from 'react-dom';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

async function fb() {
  const storage = firebase.storage();
  const imageReference = storage.ref('Logo.png');
  const logo = await imageReference.getDownloadURL().then((url) => {
      return url;
  });
  return logo;
}


export default function ImageLoader() {
  const [logoURI, setlogoURI] = useState(null);

  useEffect(async () => {
    setlogoURI(await fb());
  },[]);
    return(

        logoURI && <Image source = {{uri: logoURI}} style = {styles.appLogo}/>

    )

};
