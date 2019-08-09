import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MapCursor extends Component {
  render() {
    return (
      <Text
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
      >
        V
      </Text>
    );
  }
}
