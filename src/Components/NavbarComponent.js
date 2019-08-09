import React, { Component } from 'react'
import {View, Text, Image } from 'react-native'

export default class NavbarComponent extends Component{
    render(){
        return(
            <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: 45,
            }}
          >
            <View style={{ flex: 2, alignItems: "center", justifyContent: 'center' }}>
              <Image style={{height: 12, width: 12}} source={require("../Resources/back-icon.png")} />
            </View>
            <View style={{ flex: 6, alignItems: "center", justifyContent: 'center' }}>
              <Text style={{fontSize: 16,}}>Discover</Text>
            </View>
            <View style={{ flex: 2, alignItems: "center", justifyContent: 'center' }}>

            </View>
          </View>
        )
    }
}