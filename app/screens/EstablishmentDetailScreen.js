import React from 'react';
import { graphql } from 'react-apollo';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, Platform } from 'react-native';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Card, List, ListItem } from 'react-native-elements';
import fetchEstablishment from '../queries/fetchEstablishment';
import Layout from '../constants/Layout';
import Footer from '../components/Footer';

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

    const iconName = Platform.OS === 'ios' ? `ios-cart${focused ? '' : '-outline'}` : 'md-cart';

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
                  titleStyle={{ fontSize: 14, marginLeft: 70 }}
                  subtitle={'categories'}
                  subtitleStyle={{ fontSize: 12, marginLeft: 70 }}
                  avatar={{ uri: 'http://lorempixel.com/73/96/food' }}
                  containerStyle={{ borderBottomWidth: 0, paddingBottom: 24 }}
                  wrapperStyle={{ paddingBottom: 24 }}
                  avatarContainerStyle={{ width: 96, height: 73 }}
                  avatarStyle={{ width: 96, height: 75 }}
                  rightIcon={{ style: { display: 'none' } }}       
                />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this._renderSeparator}
            />
          </List>
        </ScrollView>
        <Footer>
          <Ionicons name={iconName} size={28} color={'#212121'} />
        </Footer>
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
