import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class EstablishmentListScreen extends React.Component {
  static navigationOptions = {
		title: 'mi ubicacion',
		tabBarLabel: 'Establecimientos'
	};
	
  render() {
    return (
      <View onPress={this.navigate} style={styles.container}>
				<Text style={styles.button}>i'm establishment list screen</Text>
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
		borderWidth: 1	
	}
});
