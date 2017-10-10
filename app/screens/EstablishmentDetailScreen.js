import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class EstablishmentDetailScreen extends React.Component {
  static navigationOptions = {
		tabBarVisible: false
	};
	
  render() {
		const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
				<Text style={styles.button}>i'm detail screen {`${params.establishmentId}`}</Text>
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
