import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';



import LottieView from 'lottie-react-native';
import MapCursor from './Components/MapCursor.js';
import Search from './Screens/Search.js';

let { geolocation } = navigator;
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {

    setTimeout(()=>{
      this.setState({isLoading: false})
    }, 1000)
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView source={require('./LottieFiles/loading.json')} autoPlay loop />
        </View>
      )
    }

    return (
      <Search />
    )
    return (
      <View style={{ flex: 1 }}>
        <MapCursor />
      </View>
    );
  }
}
