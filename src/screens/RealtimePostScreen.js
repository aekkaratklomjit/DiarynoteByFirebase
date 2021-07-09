import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button,TouchableOpacity} from 'react-native';
import moment from 'moment';
import {connect} from 'react-redux';
import {postRealtimeBlogs} from '../actions';

class RealtimePostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      errorMessage:null
    };
  }
  PostSubmit = () => {
    if(this.state.title=="" && this.state.content==""){
      this.setState({errorMessage : "Please enter title and content.",coloruser:'red',colorpass:'red'})
    }
    else if(this.state.title==""){
      this.setState({errorMessage : "Please enter title.",coloruser:'red',colorpass:'black'})
    }
    else if (this.state.content==""){
      this.setState({errorMessage : "Please enter content.",coloruser:'black',colorpass:'red'})
    }
    else{ 
      const time = moment().format('MMMM Do YYYY, h:mm:ss a');
       const newBgColor =
          'rgb(' +
          Math.floor(Math.random() * 256) +
          ',' +
          Math.floor(Math.random() * 256) +
          ',' +
          Math.floor(Math.random() * 256) +
          ')';
        this.props.postRealtimeBlogs(
          this.state.title,
          this.state.content,
          time,
          newBgColor,
        );
      this.setState({title: '', content: ''});
      this.props.navigation.navigate('RealtimeHomeScreen');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: '95%',
            height: '60%',
            borderWidth: 1.5,
            padding: 12,
            backgroundColor: '#fbd0e6',
            borderRadius: 15,
          }}>
            <Text style={{...styles.Topic_fonts,textAlign:"center"}}>Add Post</Text>
          <Text style={styles.Topic_fonts}>Title : </Text>
          <TextInput
            style={styles.input}
            onChangeText={title => this.setState({title: title})}
            value={this.state.title}
            placeholder="Please input Title."
            placeholderTextColor="black"
          />
          <Text style={styles.Topic_fonts}>Content : </Text>
          <TextInput
            style={{...styles.input,height:120}}
            onChangeText={content => this.setState({content: content})}
            value={this.state.content}
            placeholder="Please input Content."
            placeholderTextColor="black"
          />
          {this.state.errorMessage &&<Text style={{ color: 'red' , fontSize: 15}}>{this.state.errorMessage}</Text>}
          <View style={{alignContent:"center",alignItems:"center"}}>
          <TouchableOpacity onPress={this.PostSubmit}>
            <View style={{width:70,height:50,backgroundColor:"#8a00d4",justifyContent:"center",alignItems:"center",alignContent:"center",borderRadius:9}}>
              <Text style={{color:"white"}}>Add Post</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default connect(null, {postRealtimeBlogs})(RealtimePostScreen);

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#b3b3b3',
    paddingTop: 20,
  },
  input: {
    textAlignVertical: 'top',
    height: 40,
    margin: 12,
    borderWidth: 1,
    color:"black",
    backgroundColor: '#fde8f3',
    borderRadius:9,
    padding:9
  },
  Topic_fonts: {
    padding: 0.3,
    fontSize: 21,
    color: 'black',
    fontWeight: 'bold',
  },
  fonts: {
    paddingLeft: 0.3,
    fontSize: 20,
    color: 'black',
  },
});

//make this component available to the app

// import * as React from 'react';
// import { View, Text } from 'react-native';

// export default function DetailsScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
