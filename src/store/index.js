import { createStore } from "vuex"
import itemsStore from "./module/itemsStore"

export default createStore({
    modules: {
        itemsStore,
    }
})