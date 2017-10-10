import React from 'react';
import { graphql } from 'react-apollo';
import { StyleSheet, Text, View, Image } from 'react-native';
import fetchEstablishment from '../queries/fetchEstablishment';
import Layout from '../constants/Layout';

class EstablishmentDetailScreen extends React.Component {
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
		const { establishment } = this.props.data;
		
		if (!establishment) {
			return (
				<Text>loading...</Text>
			)
		}
    return (
      <View>
				<Image
					style={{ width: Layout.window.width, height: 192 }} 
					source={{uri: 'http://lorempixel.com/342/192/food/'}} 
				/> 
				<Text>{establishment.name}</Text>
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
  }
});

export default graphql(fetchEstablishment, {
	options: props => ({
		variables: { id: props.navigation.state.params.establishmentId }
	})
})(EstablishmentDetailScreen);
