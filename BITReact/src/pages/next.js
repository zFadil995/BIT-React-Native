import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Next extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>NEXT</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    margin: 10,
  },
});
