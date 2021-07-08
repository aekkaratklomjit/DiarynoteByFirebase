/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import AppNavigator from './src/route';
import 'react-native-gesture-handler';
import rootReducer from './src/reducers';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

const  state= createStore(rootReducer,{},applyMiddleware(ReduxThunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={state}>
        <AppNavigator />
      </Provider>
    );
  }
}



// import * as React from 'react';
// import AppNavigator from './src/route';
// import 'react-native-gesture-handler';
// import reducers from './src/reducers';
// import {createStore,applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import ReduxThunk from 'redux-thunk';

// const  state= createStore(reducers,{},applyMiddleware(ReduxThunk))

// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={state}>
//         <AppNavigator />
//       </Provider>
//     );
//   }
// }



// import * as React from 'react';
// import AppNavigator from './src/route';
// import 'react-native-gesture-handler';
// import rootReducer from './src/reducers';
// import {createStore,applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import ReduxThunk from 'redux-thunk';

// const  state= createStore(rootReducer,{},applyMiddleware(ReduxThunk))

// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={state}>
//         <AppNavigator />
//       </Provider>
//     );
//   }
// }