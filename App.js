/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView provider={PROVIDER_GOOGLE} style={{ width: '100%', height: '100%' }} />
      </View>
    );
  }
}


