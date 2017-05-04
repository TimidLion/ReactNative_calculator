/**
 * Simple React Native Calculator
 * For practice
 * Only for Integer values
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

class CalButton extends Component {
  constructor(props){
  	super(props);
  }

  render(){
  	return (
  		<View style={{width: 50, height: 50,marginRight: 8,marginLeft: 8}}>
	  		<Button
			  onPress={this.props.onButtonPress}
			  title={this.props.char}
			  color="#841584"
			  accessibilityLabel="button"
			/>
		</View>
  	);
  }
}

class Board extends React.Component {
  constructor() {
    super();
    this.state={
    	value: '0',
    	isFirst: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderNumber = this.renderNumber.bind(this);
    this.renderOperator = this.renderOperator.bind(this);
  }

  handleClick(i) {
  	if(i=='C') {
  		this.setState({
  			value: '0',
  			isFirst: true
  		})
  		Alert.alert('All values are removed')
  	} else if(i=='='){
  		this.setState({
  			value: eval(this.state.value)
  		});
  	} else {
  		if(!this.state.isFirst){
		  	this.setState({
		  		value: this.state.value + i,
		  		isFirst: false
		  	});
	  	} else {
	  		this.setState({
	  			value: i,
	  			isFirst: false
	  		});
	  	}
  	}
  }

  renderNumber(i) {
    return <CalButton char={i.toString()} onButtonPress={() => this.handleClick(i.toString())}/>;
  }

  renderOperator(op) {
  	return <CalButton char={op} onButtonPress={() => this.handleClick(op)}/>;
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <Text
          style={styles.valueHolder}>
          {this.state.value.toString()}
        </Text>
        <View style={{flex: 0, flexDirection: 'row', margin: 0, padding: 0}}>
          {this.renderNumber(1)}
          {this.renderNumber(2)}
          {this.renderNumber(3)}
          {this.renderNumber(0)}
        </View>
        <View style={{flex: 0, flexDirection: 'row', margin: 0, padding: 0}}>
          {this.renderNumber(4)}
          {this.renderNumber(5)}
          {this.renderNumber(6)}
          {this.renderOperator('C')}
        </View>
        <View style={{flex: 0, flexDirection: 'row', margin: 0, padding: 0}}>
          {this.renderNumber(7)}
          {this.renderNumber(8)}
          {this.renderNumber(9)}
          {this.renderOperator('=')}
        </View>
        <View style={{flex: 0, flexDirection: 'row', margin: 0, padding: 0}}>
       	  {this.renderOperator('+')}
       	  {this.renderOperator('-')}
       	  {this.renderOperator('*')}
       	  {this.renderOperator('/')}
        </View>
      </View>
    );
  }
}

export default class ReactNative_Calc extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      	<View style={{height:200}} />
      	<Board />
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
  valueHolder: {
  	height: 50, 
  	justifyContent: 'center',
  	alignItems: 'center',
  	textAlign: 'right',
  	backgroundColor: '#DDDDDD',
  	marginVertical: 20,
  	padding: 15
  },
});

AppRegistry.registerComponent('ReactNative_Calc', () => ReactNative_Calc);