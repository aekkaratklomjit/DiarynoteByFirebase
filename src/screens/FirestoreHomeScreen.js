import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
import {getFirestoreBlogs, deleteFirestoreBlogs} from '../actions';
import _ from 'lodash';

class FirestoreHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getFirestoreBlogs();
  }
  render() {
    return (
      <View style={{backgroundColor: '#ffecb3', flex: 1}}>
        <Text style={{...styles.Topic_fonts, padding: 18}}>
          Diary Note by Firestore
        </Text>
        {this.props.loadingReducer ? (
          <Text style={{fontSize:12}}>Loading Please Wait</Text>
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
                      borderWidth: 3,
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
                          this.props.navigation.navigate('FirestoreEditScreen', {item})
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
                        onPress={() =>{
                          this.props.deleteFirestoreBlogs(item.keys)
                          }
                        }>
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
  const listOfBlogs = _.map(state.blogsListFirestore.blogsListFirestore,(val, key) => {
      return {
        ...val,
        key: key,
      };
    },
  );
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

export default connect(mapStateToProps, {getFirestoreBlogs,deleteFirestoreBlogs})(FirestoreHomeScreen);
