import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

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
          renderItem={({item}) => (
            <View key={item.id} style={styles.eventRow}>
              <View style={{flex: 1}}>
                <Text style={styles.eventTitle}>{item.event}</Text>
                <Text style={styles.eventSubtitle}>{item.time}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Event', { event: item })}>
                  <Entypo name="chevron-right" size={26} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
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
  eventRow: {
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  eventTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  eventSubtitle: {
    color: 'white',
    fontSize: 12,
  }
});
