import {createStore,applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


// enable redux devtools... can this be done with Webpack instead?
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

export default function configureStore(initialState){
    console.log(initialState);
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}