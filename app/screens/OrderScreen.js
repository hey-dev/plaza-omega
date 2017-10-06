import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class OrderScreen extends React.Component {
  static navigationOptions = {
		tabBarLabel: 'Orden',
		header: null,
	};
	
  render() {
    return (
      <View onPress={this.navigate} style={styles.container}>
				<Text style={styles.button}>i'm order screen</Text>
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
