import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default class EventScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.event.event,
      headerStyle: {
        backgroundColor: 'black',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
      },
      headerTintColor: 'white',
      headerRight: (
        <TouchableOpacity
          style={{paddingRight: 10}}
          onPress={() => navigation.getParam('toggleMyEvent')(navigation.getParam('event'))}>
          <Entypo name={navigation.getParam('isFavored') ? 'heart' : 'heart-outlined'} color="white" size={26}/>
        </TouchableOpacity>
      ),
    };
  };

  componentDidUpdate(prevProps) {
    if (this.props.screenProps.myEvents !== prevProps.screenProps.myEvents) {
      const { navigation } = this.props;
      navigation.setParams({
        isFavored: this.props.screenProps.myEvents.includes(navigation.getParam('event')),
        event: navigation.getParam('event')
      });
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      toggleMyEvent: this.props.screenProps.toggleMyEvent,
      isFavored: this.props.screenProps.myEvents.includes(navigation.getParam('event')),
      event: navigation.getParam('event')
    });
  }

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const event = navigation.getParam('event');
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image
            source={{ uri: event.coverPhoto }}
            style={styles.appHero}>
          </Image>
        </View>
        <View style={{paddingHorizontal: 15, marginTop: 30}}>
          <Text style={styles.bold}>Address</Text>
          <Text style={styles.normal}>{event.address}</Text>
          <Text style={styles.normal}>{event.address2}</Text>
        </View>
      </ScrollView>
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
  bold: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  normal: {
    color: 'white',
    fontSize: 14,
  }
});
