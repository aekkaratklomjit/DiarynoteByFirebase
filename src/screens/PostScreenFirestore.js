import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {connect} from 'react-redux';
import {postBlogsFirestore,getBlogsFirestore} from '../actions';

class PostScreenFirestore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      errorMessage: null,
    };
  }
  PostSubmit = () => {
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    const newBgColor =
       'rgb(' +
       Math.floor(Math.random() * 256) +
       ',' +
       Math.floor(Math.random() * 256) +
       ',' +
       Math.floor(Math.random() * 256) +
       ')';
    this.props.postBlogsFirestore(
       this.state.title,
       this.state.content,
       time,
       newBgColor)
    this.props.getBlogsFirestore()
    this.setState({title: '', content: ''});
    this.props.navigation.navigate('HomeScreenFirestore');
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
            backgroundColor: '#E6BB89',
            borderRadius: 15,
          }}>
          <Text style={{...styles.Topic_fonts, textAlign: 'center'}}>
            Add Post
          </Text>
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
            style={{...styles.input, height: 120}}
            onChangeText={content => this.setState({content: content})}
            value={this.state.content}
            placeholder="Please input Content."
            placeholderTextColor="black"
          />
          {this.state.errorMessage && (
            <Text style={{color: 'red', fontSize: 15}}>
              {this.state.errorMessage}
            </Text>
          )}
          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={this.PostSubmit}>
              <View
                style={{
                  width: 70,
                  height: 50,
                  backgroundColor: '#8a00d4',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  borderRadius: 9,
                }}>
                <Text style={{color: 'white'}}>Add Post</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(null, {postBlogsFirestore,getBlogsFirestore})(PostScreenFirestore);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AABA78',
    paddingTop: 20,
  },
  input: {
    textAlignVertical: 'top',
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: 'black',
    backgroundColor: '#fde8f3',
    borderRadius: 9,
    padding: 9,
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
