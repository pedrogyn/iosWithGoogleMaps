import React, { Component } from 'react';
import { View } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

let { geolocation } = navigator;

export default class SearchMapComponent extends Component {
  constructor() {
    super();
    this.state = {
      latitude: -23.597410772305587,
      longitude: -46.68226607143879,
      latitudeDelta: 0.01,
      longitudeDelta: 0.001
    };
  }

  componentDidMount() {
    geolocation.getCurrentPosition(
      response => {
        response = JSON.parse(JSON.stringify(response));
        let { latitude, longitude } = response.coords;
        this.setState({ latitude, longitude });
        console.log('GEO LOCATION: ', response.coords);
      },
      error => {
        console.log('GEO LOCATION: ', error);
      },
      {
        enableHighAccuracy: true
      }
    );

    let watchID = geolocation.watchPosition(
      response => {
        response = JSON.parse(JSON.stringify(response));
        let { latitude, longitude } = response.coords;
        this.setState({ latitude, longitude });
        console.log('GEO LOCATION: ', response);
      },
      error => {
        console.log('GEO LOCATION ERROR: ', error);
      },
      {
        enableHighAccuracy: true
      }
    );
  }
  render() {
    return (
      <MapView
        showsUserLocation={true}
        mapType="standard"
        showsCompass={true}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta: this.state.longitudeDelta
        }}
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta: this.state.longitudeDelta
        }}
        provider={PROVIDER_GOOGLE}
        style={{ width: '100%', height: '100%' }}
        onRegionChange={event => {
          console.log(event);
        }}
      />
    );
  }
}
