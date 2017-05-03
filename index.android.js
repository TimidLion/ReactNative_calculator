/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Numbers extends Component {
  constructor(props){
  	super(props);
  	this.onButtonPress = this.onButtonPress.bind(this);
  	this.state ={
  		number: 0
  	};
  }

  onButtonPress(){
  	Alert.alert(this.props.value.toString());
  };

  render(){
  	return (
  		<Button
		  onPress={this.onButtonPress}
		  title={this.state.number.toString()}
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
  	);
  }
}

export default class ReactNative_Calc extends Component {
  constructor(props) {
  	super(props);
  	this.state={
  		number: 0
  	};
  }

  render() {
    return (
      <View style={styles.container}>
      	<Numbers value={this.state.number}/>
		<Text>
			Nice to meet you
			abc
		</Text>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNative_Calc', () => ReactNative_Calc);
