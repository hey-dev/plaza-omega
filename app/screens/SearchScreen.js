import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null    
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme 
          clearIcon={{ name: 'clear' }}
          placeholder='escribe'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
});
