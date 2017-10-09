import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class AccountLocationsScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Direcciones',
  };

  render() {
    return (
      <View onPress={this.navigate} style={styles.container}>
        <View style={styles.container}>
          <GooglePlacesAutocomplete
            placeholder="Selecciona tu ubicacion"
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            styles={{
              textInputContainer: {
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth: 0,
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
						nearbyPlacesAPI='GooglePlacesSearch'
            query={{
              key: 'AIzaSyDqmUNNYnCmRWTaLsHaC_TMDR3wTNEai6U',
              language: 'es', // language of the results
              types: 'address', // default: 'geocode',
              radius: '50000',
              components: 'country:co',
              location: '4.5467415, -75.7157796'             
            }}
          />
        </View>
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
  },
});
