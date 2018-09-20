import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {
    regData: {
        name: '',
        password: ''
    }
}

const store = createStore (
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   
)

export { store };