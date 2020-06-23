/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Mark Lassoff</Text>
      <Text style={styles.title}>Founder, Framework Television</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  title:{
    fontSize: 14,
  },
});
*/

/* VERSION 2 */

/*
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.pic} />
      <Text style={styles.name}>Mark Lassoff</Text>
      <Text style={styles.title}>Founder, Framework Television</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
  title:{
    fontSize: 14,
  },
  pic:{
    width: 300 ,
    height: 150,
  },
  
});
*/

/* VERSION 3 */

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.pic} />
      <Text style={styles.name}>Mark Lassoff</Text>
      <Text style={styles.title}>Founder, Framework Television</Text>
      <TouchableOpacity
        onPress={() =>  alert("Welcome to the World of Mobile Development")}
        style = {styles.buttonStyle} >
        <Text style ={styles.buttonText}>See a Secret Greeting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
  title:{
    fontSize: 14,
  },
  pic:{
    width: 300 ,
    height: 150,
  },
  buttonStyle:{
    backgroundColor: '#fda738',
    padding: 20,
    borderRadius: 5,
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
