import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'busquedas',
	};
	
  render() {
    return (
      <View onPress={this.navigate} style={styles.container}>
				<Text style={styles.button}>i'm search result screen</Text>
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
