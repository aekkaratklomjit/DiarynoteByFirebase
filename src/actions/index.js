import firebase from '../Firebase';

// RealtimeBlogs

export function getRealtimeBlogs() {
  return dispatch => {
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

export function postRealtimeBlogs(title,content,time,newBgColor) {
  return dispatch => {
    firebase.database().ref('/blogs').push({title,content,time,newBgColor});
  };
}

export function editRealtimeBlog(title,content,key) {
  return dispatch => {
    firebase.database().ref('/blogs').child(key).update({title, content})
  };
}

export function deleteRealtimeBlogs(key) {
  return dispatch => {
    firebase.database().ref(`/blogs/${key}`).remove()
  };
}


//FirestoreBlogs
export function getFirestoreBlogs(){
     return (dispatch) => {
      dispatch({
        type: 'BLOGS_LOADING_STATUS',
        payload: true,
      });
      firebase
        .firestore()
        .collection("blogs")
        .get().then((querySnapshot) => {
          const diary = []
          querySnapshot.forEach((doc) => {
              const {title,content,time,newBgColor} = doc.data();
              diary.push({
                keys:doc.id,
                title,
                content,
                time,
                newBgColor
              })
          });
          dispatch({
             type: 'BLOGS_FETCH_FIRESTOREDATABASE',
             payload: diary,
          });
      }); 
      dispatch({
        type: 'BLOGS_LOADING_STATUS',
        payload: false,
      });
     } 
 }

 export function postFirestoreBlogs(title,content,time,newBgColor) {
  return dispatch => {
    firebase.firestore().collection("blogs").add({
      title: title,
      content: content,
      time: time,
      newBgColor: newBgColor})
  };
}


export function editFirestoreBlog(title,content,key) {
  return dispatch => {
    firebase.firestore().collection("blogs").doc(key).update({   
     title: title,
     content : content,
     })
     dispatch({
      type: 'BLOGS_LOADING_STATUS',
      payload: true,
     });
     firebase
     .firestore()
     .collection("blogs")
     .get().then((querySnapshot) => {
       const diary = []
       querySnapshot.forEach((doc) => {
           const {title,content,time,newBgColor} = doc.data();
           diary.push({
             keys:doc.id,
             title,
             content,
             time,
             newBgColor
           })
       });
       dispatch({
          type: 'BLOGS_FETCH_FIRESTOREDATABASE',
          payload: diary,
       });
   }); 
   dispatch({
     type: 'BLOGS_LOADING_STATUS',
     payload: false,
   });
  };
}

export function deleteFirestoreBlogs(key) {
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
        const diary = []
        querySnapshot.forEach((doc) => {
            const {title,content,time,newBgColor} = doc.data();
            diary.push({
              keys:doc.id,
              title,
              content,
              time,
              newBgColor
            })
        });
        dispatch({
           type: 'BLOGS_FETCH_FIRESTOREDATABASE',
           payload: diary,
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
