import { Tile } from 'react-native-elements/dist/tile/Tile';
import firebase from '../Firebase';

export function postBlogs(title,content,time,newBgColor) {
  return dispatch => {
    firebase.database().ref('/blogs').push({title,content,time,newBgColor});
    // firebase.database().ref('/blogs/').set({
    //   username: "name",
    //   email: "email",
    //   profile_picture : "imageUrl"
    // });
  };
}

export function getBlogs() {
  return dispatch => {
    console.log('getBlogs')
    dispatch({
      type: 'BLOGS_LOADING_STATUS',
      payload: true,
    });
    firebase
      .database()
      .ref('blogs')
      .on('value', function (snapshot) {
        dispatch({
          type: 'BLOGS_FETCH_REALTIMEDATABASE',
          payload: snapshot.val(),
        });
        dispatch({
          type: 'BLOGS_LOADING_STATUS',
          payload: false,
        });
      });
  };
}

export function getBlogsFirestore(){
     return (dispatch) => {
      dispatch({
        type: 'BLOGS_LOADING_STATUS',
        payload: true,
      });
      firebase
        .firestore()
        .collection("blogs")
        .get().then((querySnapshot) => {
          const movie = []
          querySnapshot.forEach((doc) => {
              const {title,content,time,newBgColor} = doc.data();
              movie.push({
                keys:doc.id,
                title,
                content,
                time,
                newBgColor
              })
          });
          dispatch({
             type: 'BLOGS_FETCH_FIRESTOREDATABASE',
             payload: movie,
          });
      }); 
      dispatch({
        type: 'BLOGS_LOADING_STATUS',
        payload: false,
      });
     } 
 }

 export function postBlogsFirestore(title,content,time,newBgColor) {
  return dispatch => {
    firebase.firestore().collection("blogs").add({
      title: title,
      content: content,
      time: time,
      newBgColor: newBgColor})
  };
}

export function editBlog(title,content,key) {
  return dispatch => {
    firebase.database().ref('/blogs').child(key).update({title, content})
  };
}
export function editFirestoreBlog(title,content,key) {
  return dispatch => {
    firebase.firestore().collection("blogs").doc(key).update({   
     title: title,
     content : content,
     })

  };
}

export function deleteBlogs(key) {
  return dispatch => {
    firebase.database().ref(`/blogs/${key}`).remove()
  };
}

export function deleteBlogsFirestore(key) {
  return dispatch => {
    firebase.firestore().collection("blogs").doc(key).delete()
    dispatch({
      type: 'BLOGS_LOADING_STATUS',
      payload: true,
    });
    firebase
      .firestore()
      .collection("blogs")
      .get().then((querySnapshot) => {
        const movie = []
        querySnapshot.forEach((doc) => {
            const {title,content,time,newBgColor} = doc.data();
            movie.push({
              keys:doc.id,
              title,
              content,
              time,
              newBgColor
            })
        });
        dispatch({
           type: 'BLOGS_FETCH_FIRESTOREDATABASE',
           payload: movie,
        });
    }); 
    dispatch({
      type: 'BLOGS_LOADING_STATUS',
      payload: false,
    });
  };
}


// export function postBlogs(title, content){
//     return (dispatch) => {
//         // firebase.database().ref('/blogs').push({title, content})
//         console.log(title,content)
//     }
// }
