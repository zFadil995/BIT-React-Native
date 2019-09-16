/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {helloColor: 'green'}
  }

  changeColor = () => {
    this.setState({
      helloColor: 'red'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, {color: this.state.helloColor}]}>Hello World!</Text>
        <Button title="CHANGE" color="black" onPress={this.changeColor}></Button>
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
    margin: 10,
  },
});
