import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function Subject() {
  return (
    <View style={styles.container}>
      <Text>Subject</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: '31.47%',
    right: '31.2%',
    top: '35.68%',
    bottom: '41.83%'
  },
});
