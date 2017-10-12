import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom, TabBarTop} from 'react-navigation';

import Colors from '../constants/Colors';

import EstablishmentListScreen from '../screens/EstablishmentListScreen';
import EstablishmentDetailScreen from '../screens/EstablishmentDetailScreen';
import AccountProfileScreen from '../screens/AccountProfileScreen';
import AccountLocationsScreen from '../screens/AccountLocationsScreen';
import AccountPaymentMethodsScreen from '../screens/AccountPaymentMethodsScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import OrderScreen from '../screens/OrderScreen';


export default TabNavigator(
  {
    Home: {
      screen: StackNavigator({
        establishmentList: { screen: EstablishmentListScreen },
        establishmentDetail: { screen: EstablishmentDetailScreen },
      }, { headerMode: 'none' }),
    },
    Search: {
      screen: SearchScreen,
    },
    Account: {
      screen: TabNavigator({
        Profile: { screen: AccountProfileScreen },
        Locations: { screen: AccountLocationsScreen },
        Payments: { screen: AccountPaymentMethodsScreen }
      })
    },    
    Cart: {
      screen: TabNavigator(
        {
          Cart: { screen: CartScreen },
          Order: { screen: OrderScreen }
      })
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-list${focused ? '' : '-outline'}`
              : 'md-list';
            break;
          case 'Account':
            iconName = Platform.OS === 'ios'
              ? `ios-person${focused ? '' : '-outline'}`
              : 'md-person';
            break;
          case 'Search':
            iconName = Platform.OS === 'ios'
              ? `ios-search${focused ? '' : '-outline'}`
              : 'md-search';
            break;
          case 'Cart':
            iconName = Platform.OS === 'ios'
              ? `ios-cart${focused ? '' : '-outline'}`
              : 'md-cart';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
