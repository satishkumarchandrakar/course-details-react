import {createStore,applyMiddleware, compose} from 'redux';
// import rootReducer from '../reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; 
import thunkMiddleware from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import reducers from '../reducers/reducers.js';

// const reducer = ( state = {}, action) =>{
// return state    
// }

// enable redux devtools... can this be done with Webpack instead?
// const enhancers = compose(
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )



const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware,logger)
  )
// const middleware = applyMiddleware(promise(),thunk,logger())
// export default createStore(,middleware)

// store.dispatch((dispatch) => {
//     dispatch({ type: "FETCH_COURSE_START" })
//     dispatch({ type: "BAR"})
// });


export default store;