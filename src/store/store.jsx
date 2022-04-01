import {createStore} from 'redux'
import counterReducer from './reducers/counterReducer'
import todosReducer from './reducers/todosReducer'

const allReducers = counterReducer({counterReducer,todosReducer})

const store = createStore(allReducers)

export {store}
