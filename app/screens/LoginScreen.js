import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Iniciar Sesion',
	};
	
	navigate = () => {
		this.props.navigation.navigate('Main');
	}

  render() {
    return (
      <View onPress={this.navigate} style={styles.container}>
				<Text style={styles.button}>touch me to continue</Text>
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
