export default function (state = [], action){
    switch (action.type) {
      case 'BLOGS_FETCH_FIRESTOREDATABASE':
        return {
          ...state,
          blogsListFirestore:action.payload
        };
  
      default:
        return state;
    }
  };