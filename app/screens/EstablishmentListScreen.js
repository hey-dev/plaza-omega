import React from 'react';
import { graphql } from 'react-apollo';
import {
  StyleSheet,
  Text,
	View,
	FlatList
} from 'react-native';
import EstablishmentRow from '../components/EstablishmentRow';
import query from '../queries/fetchEstablishments';

class EstablishmentListScreen extends React.Component {
  static navigationOptions = {
		title: 'mi ubicacion',
		tabBarLabel: 'Establecimientos'
	};
	
  render() {
		if (this.props.data.loading) {
			return <Text>loading...</Text>
		}
		console.log(this.props)
    return (
      <View onPress={this.navigate} style={styles.container}>
				<FlatList 
					data={this.props.data.establishments}
					renderItem={({ item }) => <EstablishmentRow key={item} establishment={item} />}
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
		borderWidth: 1	
	}
});

export default graphql(query)(EstablishmentListScreen);
