import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
	};
	
	navigate = () => {
		this.props.navigation.navigate('Main');
	}

  render() {
    return (
      <View style={styles.container}>
				<Text onPress={this.navigate} style={styles.button}>touch me to continue</Text>
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
