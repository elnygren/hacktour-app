import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { listItem } from '../components/ListItem'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <ImageBackground
            source={require('../assets/images/hacktour_hero.jpg')}
            style={styles.appHero}>
            <Text style={styles.appTitle}>Hack Tour</Text>
          </ImageBackground>
        </View>
        <FlatList
          data={this.props.screenProps.events}
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
  }
});
