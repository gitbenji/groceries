/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import { store, persistor } from '../configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import AddItem from '../containers/AddItem'
import VisibleItemList from '../containers/VisibleItemList'
import { styles } from '../styles/index'

// too clear everything
// persistor.purge()

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <VisibleItemList />
            <AddItem />
          </View>
        </PersistGate>
      </Provider>
    )
  }
}
