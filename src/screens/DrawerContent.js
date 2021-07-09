//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// create a component
export function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <View
          style={{
            paddingTop: 12,
            flex: 0.17,
            backgroundColor: '#c68400',
            borderWidth: 2,
          }}>
          <Image
            style={{resizeMode: 'cover', width: 280, height: 80}}
            source={{
              uri: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-built_knockout.png',
            }}
          />
        </View>

        <View style={{paddingTop: 9}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Realtime');
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                backgroundColor: '#ffb300',
                paddingHorizontal: 12,
                paddingVertical: 9,
                borderRadius: 12,
              }}>
              <Image
                style={{resizeMode: 'cover', width: 30, height: 30}}
                source={{
                  uri: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png',
                }}
              />
              <Text style={{fontSize: 18, paddingLeft: 12}}>
                Realtime Database
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{paddingTop: 3}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Firestore');
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                backgroundColor: '#ffb300',
                paddingHorizontal: 12,
                paddingVertical: 9,
                borderRadius: 12,
              }}>
              <Image
                style={{resizeMode: 'cover', width: 30, height: 30}}
                source={{
                  uri: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png',
                }}
              />
              <Text style={{fontSize: 18, paddingLeft: 12}}>
                Firestore Database
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffecb3',
  },
});
