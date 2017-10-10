import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';
import Layout from '../constants/Layout';

export default class EstablishmentDetailScreen extends React.Component {
  static navigationOptions = {
		tabBarVisible: false,
		headerStyle: {
			position: 'absolute',
			backgroundColor: 'transparent',
			zIndex: 100,
			top: 0,
			left: 0,
			right: 0,
			elevation: 0,       //remove shadow on Android
			shadowOpacity: 0  //remove shadow on iOS
		}
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
				<Image
					style={{ width: Layout.window.width, height: 192 }} 
					source={{uri: 'http://lorempixel.com/342/192/food/'}} 
				/> 
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
});
