import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';

export default class Detail extends React.Component {
  state = {
    buttonDisable: false,
	};
	
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.detailRow}>
          <Image style={styles.img} source={{ uri: 'http://lorempixel.com/73/96/food' }} />
          <View style={styles.body}>
            <Text style={styles.title}>Some long Title</Text>
            <Text style={styles.subTitle}>clasica comida con entrada y plato fuerte</Text>
            <Text style={styles.price}>$10.000</Text>
          </View>
          <View style={styles.quantity}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  backgroundColor: '#f5f5f5',
                }}
              >
                <Text style={{ fontSize: 30 }}>+</Text>
              </View>
            </TouchableOpacity>
            <View style={{ paddingVertical: 2 }} />
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: '#fafafa',
                }}
              >
                <Text style={{ fontSize: 30 }}>--</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    width: Layout.window.width,
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 0,
  },
  img: {
    padding: 0,
    margin: 0,
    width: 95,
    height: 75,
  },
  title: {
    marginTop: -5,
    fontSize: 18,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '100',
    opacity: 0.5,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
  },
  quantity: {
    flex: 1,
    flexDirection: 'column',
  },
  body: {
    flex: 4,
    paddingLeft: 8,
    flexDirection: 'column',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
