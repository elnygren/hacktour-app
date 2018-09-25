import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export const listItem = (navigation) => ({ item }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Event', { event: item })}>
    <View style={styles.eventRow}>
      <View style={{ flex: 1 }}>
        <Text style={styles.eventTitle}>{item.event}</Text>
        <Text style={styles.eventSubtitle}>{item.time}</Text>
      </View>
      <View>
        <Entypo name="chevron-right" size={26} color="white" />
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
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
})
