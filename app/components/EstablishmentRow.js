import React, { Component } from 'react';
import {
  Text,
	View
} from 'react-native';

class EstablishmentRow extends Component {	
	render() {
		return (
			<View>
				<Text>{this.props.establishment.name}</Text>
			</View>
		);
	}
}

export default EstablishmentRow;
