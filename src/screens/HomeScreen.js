import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {getBlogs, deleteBlogs} from '../actions';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
import _ from 'lodash';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.getBlogs();
  }

  render() {
    return (
      <View style={{backgroundColor: '#ffecb3', flex: 1}}>
        <Text style={{...styles.Topic_fonts, padding: 18}}>
          Diary Note by Realtime Database
        </Text>
        {this.props.loadingReducer ? (
          <Text>Loading Please Wait</Text>
        ) : (
          <FlatList
            style={{width: '100%'}}
            data={this.props.listOfBlogs}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      borderWidth: 1,
                      marginBottom: 15,
                      borderRadius: 15,
                      backgroundColor: '#fccfe8',
                      padding: 12,
                      width: '92%',
                      borderColor: item.newBgColor,
                    }}>
                    <Text>
                      <Text style={styles.Topic_fonts}>Title : </Text>
                      <Text style={styles.fonts}>{item.title}</Text>
                    </Text>
                    <Text>
                      <Text style={styles.Topic_fonts}>Time : </Text>
                      <Text style={styles.fonts}>{item.time}</Text>
                    </Text>
                    <Text style={styles.Topic_fonts}>Content :</Text>
                    <Text style={styles.fonts}>{item.content}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginTop: 25,
                      }}>
                      <TouchableHighlight
                        onPress={() =>
                          this.props.navigation.navigate('Edit', {item})
                        }>
                        <View style={{marginRight: 15}}>
                          <Icon
                            name="pen"
                            type="font-awesome-5"
                            color="green"
                          />
                        </View>
                      </TouchableHighlight>
                      <TouchableHighlight
                        onPress={() => this.props.deleteBlogs(item.key)}>
                        <View>
                          <Icon
                            name="trash"
                            type="font-awesome-5"
                            color="red"
                          />
                        </View>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });
  return {
    listOfBlogs,
    loadingReducer: state.loadingReducer.loadingReducer,
  };
  //return {listOfBlogs:state.blogsList.blogsList}
};

const styles = StyleSheet.create({
  Topic_fonts: {
    padding: 0.3,
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  fonts: {
    paddingLeft: 0.3,
    fontSize: 20,
    color: 'black',
  },
});

export default connect(mapStateToProps, {getBlogs, deleteBlogs})(HomeScreen);

// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// export default function HomeScreen({ navigation }) {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Home Screen</Text>
//         <Button
//           title="ails"
//           onPress={() => navigation.navigate('DetailsScreen')}
//         />
//       </View>
//     );
//   }

// import React, { Component } from 'react';
// import { View, Text, Button} from 'react-native';
// import Card_post from '../components/Card_post';
// import firebase from 'firebase';
// import { getBlogs } from '../actions';
// import { connect } from 'react-redux'

// class HomeScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   Test=()=>{
//     this.props.getBlogs()
//   }

//   render() {
//     return (
//       <View>
//         <Text> screens </Text>
//         <Card_post name="hello" detail="5555"/>
//         <Button
//           onPress={this.Test}
//           title="Add"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />

//       </View>
//     );
//   }
// }

// const mapStateToProps = (state) =>{
//   return{
//     listOfBlog : state.blogList
//   }
// }

// export default connect(mapStateToProps,{getBlogs})(HomeScreen);
