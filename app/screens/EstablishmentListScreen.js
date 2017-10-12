import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import query from '../queries/fetchEstablishments';

class EstablishmentListScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
    title: 'mi ubicacion',
    tabBarLabel: 'Establecimientos',
  };

  _renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#EAEAEA'
          //marginLeft: '14%'
        }}
      />
    );
  };

  render() {
    const { loading, establishments } = this.props.data;
    const { navigate } = this.props.navigation;
    if (loading) {
      return <Text>loading...</Text>;
    }
    console.log(this.props);

    return (
      <ScrollView>
        <List
          containerStyle={{ marginTop: 0, padding: 0, borderTopWidth: 0, borderBottomWidth: 0 }}
        >
          <FlatList
            data={establishments}
            renderItem={({ item }) => (
              <ListItem
                title={item.name}
                titleStyle={{ fontSize: 18, marginLeft: 30  }}
                subtitle={'categories'}
                subtitleStyle={{ fontSize: 12, marginLeft: 30 }}
                avatar={{ uri: 'http://lorempixel.com/50/50/food' }}
                containerStyle={{ borderBottomWidth: 0 }}
                avatarContainerStyle={{ width: 50, height: 50 }}
                avatarStyle={{ width: 50, height: 50 }}
                style={{ margin: 0, paddingTop: 16, paddingBottom: 24 }}
                onPressRightIcon={() =>
                  navigate('establishmentDetail', { establishmentId: item.id })}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this._renderSeparator}
          />
        </List>
      </ScrollView>
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

export default graphql(query)(EstablishmentListScreen);
