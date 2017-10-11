import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

export default ({ children }) => 
	<View style={styles.footer}>
		{children}
	</View>


const styles = StyleSheet.create({
	footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'flex-end',
    backgroundColor: '#fbfbfb',
		paddingVertical: 16,
		paddingRight: 16,
		paddingLeft: 16
  }
});
