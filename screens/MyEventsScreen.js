import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { listItem } from '../components/ListItem'

export default class MyEventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Events',
    headerStyle: {
      backgroundColor: 'black',
      shadowColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTintColor: 'white',
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.screenProps.myEvents}
          keyExtractor={item => '' + item.id}
          renderItem={listItem(this.props.navigation)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  appHero: {
    height: 250,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  appTitle: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
