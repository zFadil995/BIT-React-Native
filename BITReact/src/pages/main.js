import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation'
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {helloColor: false}
    }

    changeColor = () => {
        this.setState({
        helloColor: !this.state.helloColor
        })
    }

    goToNext = () => {
        Navigation.push(this.props.componentId, {
            component: {
              name: 'com.abc-techgroup.Next',
              options: {
                topBar: {
                  title: {
                    text: 'Next'
                  }
                }
              }
            }
          });
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={[styles.welcome, {color: this.state.helloColor ? 'red' : 'green'}]}>Hello World!</Text>
            <Button title="CHANGE" color="black" onPress={this.changeColor}></Button>
            <View style={{height: 10}}/>
            <Button title="NEXT" color="black" onPress={this.goToNext}></Button>
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
