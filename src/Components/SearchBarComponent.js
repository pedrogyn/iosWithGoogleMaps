import React, { Component } from 'react';

import { View, Image, TextInput, Dimensions } from 'react-native';

export default class SearchBarComponent extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 10
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'gray',
            shadowOffset: {
              width: 1,
              height: 1
            },
            shadowRadius: 5,
            shadowOpacity: 1,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 8
          }}
        >
          <Image style={{height: 16, width: 16, marginRight: 15}} source={require("../Resources/search-icon.png")}/>
          <TextInput
            placeholder="Buscar no Gympass"
            placeholderTextColor="gray"
            style={{
                fontSize: 16,
              color: 'black',
              width: Dimensions.get('window').width * 0.65
            }}
          />
        </View>
      </View>
    );
  }
}
