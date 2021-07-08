//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

// create a component
const Card_post = (prop) => {
    return (
        <View>
            <Text>Post:{prop.name}</Text>
            <Text>Detail:{prop.detail}</Text>
            <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:25}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit',{...item})}>
                                              <View style={{marginRight:15}}>
                                              <Text>Detail:{prop.detail}</Text>
                                              </View>
                                      </TouchableHighlight>   
                                      <TouchableHighlight onPress={() => prop.delete} >
                                      <View style={{marginRight:15}}>
                                              <Text>Detail:{prop.detail}</Text>
                                              </View>
                                      </TouchableHighlight>  
                            </View>
        </View>
    );
};

// define your styles

//make this component available to the app
export default Card_post;
