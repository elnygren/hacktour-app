import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/MainTabNavigator';

import * as A from 'axios';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    data: {
      events: [],
    },
    myEvents: [],
  };

  render() {
    const { data, myEvents } = this.state
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator screenProps={{
            events: data.events,
            myEvents,
            toggleMyEvent: this.toggleMyEvent,
          }} />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/hacktour_hero.jpg'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        ...Icon.Entypo.font,
      }),
    ]);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  toggleMyEvent = (myEvent) => {
    const contains = this.state.myEvents.find(e => e.id == myEvent.id)
    if (contains) {
      this.setState({ myEvents: this.state.myEvents.filter(e => e.id != myEvent.id) })
    } else {
      const newEvents = [
        ...this.state.myEvents.filter(e => e.id != myEvent.id),
        myEvent
      ]
      newEvents.sort((a, b) => a.id - b.id)
      this.setState({ myEvents: newEvents })
    }
  }

  async componentDidMount() {
    try {
      const r = await A.get('https://hacktour.now.sh/api/')
      const data = r.data
      this.setState({ data })
    } catch (error) {
      console.error(error)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
