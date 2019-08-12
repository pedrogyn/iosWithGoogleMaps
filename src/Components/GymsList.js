import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, Image } from 'react-native';

export default class GymsList extends Component {
  render() {
    let width = Dimensions.get('window').width * 0.8;
    return (
      <View style={{ width: '100%' }}>
        <FlatList
          data={this.props.gyms}
          keyExtractor={(item, index) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          ItemSeparatorComponent={() => {
            return <View style={{ width: 8 }} />;
          }}
          ListHeaderComponent={() => {
            return <View style={{ width: 8 }} />;
          }}
          ListFooterComponent={() => {
            return <View style={{ width: 8 }} />;
          }}
          renderItem={({ item }) => (
            <View
              key={item.id}
              style={{
                height: 150,
                minWidth: width,
                backgroundColor: 'gray'
              }}
            >
              <Text>{item.title}</Text>
              <Image
                source={{ uri: item.logo }}
                style={{ height: 64, width: 64 }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}
