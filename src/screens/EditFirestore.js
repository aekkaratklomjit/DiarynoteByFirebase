//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TextInput,TouchableOpacity} from 'react-native';
import {editFirestoreBlog} from '../actions'
import {connect} from 'react-redux'
import firebase from '../Firebase';
// create a component
class EditFirestore extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:this.props.route.params.item.title,
        content:this.props.route.params.item.content,
        keys:this.props.route.params.item.keys,
    };
  }
  onSubmit=()=>{
    this.props.editFirestoreBlog(this.state.title, this.state.content, this.state.keys);
    // const update = [{
    //   content : this.state.content,
    //   title : this.state.title,
    //   keys : this.state.keys}]
    // this.props.editFirestoreBlog(update);
    this.setState({
        title:"",
        content:"",
        key:""
    })
    this.props.navigation.navigate("HomeScreenFirestore")
}
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
              <Text style={{...styles.Topic_fonts,textAlign:"center"}}>Edit</Text>
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
              <TouchableOpacity onPress={this.onSubmit}>
                <View style={{width:70,height:50,backgroundColor:"#8a00d4",justifyContent:"center",alignItems:"center",alignContent:"center",borderRadius:9}}>
                  <Text style={{color:"white"}}>Edit</Text>
                </View>
              </TouchableOpacity>
              </View>
            </View>
          </View>
    );
  }
}

// define your styles
// define your styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#b3b3b3',
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
export default connect(null, {editFirestoreBlog})(EditFirestore);
