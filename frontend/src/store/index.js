import { createStore } from 'vuex'
import valueStore from './modules/valueStore'

export default createStore(
  {
    modules: {
      valueStore
    }
  })
