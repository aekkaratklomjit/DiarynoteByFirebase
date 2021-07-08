export default function (state = [], action){
  switch (action.type) {
    case 'BLOGS_FETCH_REALTIMEDATABASE':
      //console.log(action.payload)
      return {
        ...state,
        blogsList:action.payload
      };

    default:
      return state;
  }
};

// export default Reducer = (state = [], action) => {
//   switch (action.type) {

//   default:
//     return state
//   }
// };



// export default function (state = [], action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };