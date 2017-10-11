import React from 'react';
import { graphql } from 'react-apollo';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { Card, List, ListItem } from 'react-native-elements';
import fetchEstablishment from '../queries/fetchEstablishment';
import Layout from '../constants/Layout';

class EstablishmentDetailScreen extends React.Component {
  static navigationOptions = {
    tabBarVisible: false,
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      top: 0,
      left: 0,
      right: 0,
      elevation: 0, //remove shadow on Android
      shadowOpacity: 0, //remove shadow on iOS,
    },
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
    const { params } = this.props.navigation.state;
    const { establishment } = this.props.data;

    if (!establishment) {
      return <Text>loading...</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Image
            style={{ width: Layout.window.width, height: 150 }}
            source={{ uri: 'http://lorempixel.com/342/192/food/' }}
          />
          <Card containerStyle={styles.card}>
            <Text style={{ fontSize: 24 }}>{establishment.name}</Text>
            <Text style={{ fontSize: 14, textAlign: 'center' }}>Category</Text>
            <Text style={{ fontSize: 14, fontWeight: '600', textAlign: 'center' }}>
              35 - 45 MIN
            </Text>
          </Card>
          <Text style={{ fontSize: 14, textAlign: 'center' }}>11:00 AM - 9:30 PM</Text>
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
              data={[
                { id: '1', name: 'Botella 1lt Antioqueño ' },
                { id: '2', name: 'Botella 1lt Antioqueño ' },
                { id: '3', name: 'Botella 1lt Antioqueño ' },
                { id: '4', name: 'Botella 1lt Antioqueño ' },
                { id: '5', name: 'Botella 1lt Antioqueño ' },
                { id: '6', name: 'Botella 1lt Antioqueño ' },
                { id: '7', name: 'Botella 1lt Antioqueño ' },
              ]}
              renderItem={({ item }) => (
                <ListItem
                  title={item.name}                  
                  avatar={{ uri: 'http://lorempixel.com/50/50/food' }}
                  containerStyle={{ borderBottomWidth: 0 }}
                  rightIcon={{ style: { display: 'none' } }}
                />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this._renderSeparator}
            />
          </List>
        </ScrollView>
        <View style={{ height: 50, alignItems: 'flex-end', backgroundColor: '#212121' }} />
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
  card: {
    paddingTop: 24,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -50,
  },
  button: {
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default graphql(fetchEstablishment, {
  options: props => ({
    variables: { id: props.navigation.state.params.establishmentId },
  }),
})(EstablishmentDetailScreen);
