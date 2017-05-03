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

class Number extends Component {
  constructor(props){
  	super(props);
  	this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress(){
  	Alert.alert(this.props.number.toString());
  };

  render(){
  	return (
  		<View style={{width: 50, height: 50}}>
	  		<Button
			  onPress={this.onButtonPress}
			  title={this.props.number.toString()}
			  color="#841584"
			  accessibilityLabel="Learn more about this purple button"
			/>
		</View>
  	);
  }
}

class Board extends React.Component {
  constructor() {
    super();
  }

  renderNumber(i) {
    return <Number number={i} />;
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
        <View style={{flex: 0, flexDirection: 'row'}}>
          {this.renderNumber(1)}
          {this.renderNumber(2)}
          {this.renderNumber(3)}
          {this.renderNumber(0)}
        </View>
        <View style={{flex: 0, flexDirection: 'row'}}>
          {this.renderNumber(4)}
          {this.renderNumber(5)}
          {this.renderNumber(6)}
        </View>
        <View style={{flex: 0, flexDirection: 'row', borderWidth: 0}}>
          {this.renderNumber(7)}
          {this.renderNumber(8)}
          {this.renderNumber(9)}
        </View>
      </View>
    );
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export default class ReactNative_Calc extends Component {
  constructor(props) {
  	super(props);
  	this.state={
  		value: 0
  	};
  }

  render() {
    return (
      <View style={styles.container}>
      	<Board value={this.state.value}/>
      	<View style={{height:100}} />
		<Text>
			TimidLion's Calculator
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
