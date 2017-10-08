import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {
  StyleSheet,
  Text,
	View,
	FlatList
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import query from '../queries/fetchEstablishments';

class EstablishmentListScreen extends Component {
  static navigationOptions = {
		title: 'mi ubicacion',
		tabBarLabel: 'Establecimientos'
	};

	_renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: '100%',
					backgroundColor: '#CED0CE',
					//marginLeft: '14%'
				}}
			/>
		);
	};
	
  render() {
		if (this.props.data.loading) {
			return <Text>loading...</Text>
		}
		console.log(this.props);

    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >
				<FlatList 
					data={this.props.data.establishments}
					renderItem={({ item }) => (
						<ListItem
							title={item.name}
							avatar={{ uri: 'http://lorempixel.com/50/50/food' }}
							containerStyle={{ borderBottomWidth: 0 }}
						/>
					)}
					keyExtractor={item => item.id}
					ItemSeparatorComponent={this._renderSeparator}
				/>
      </List>
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
