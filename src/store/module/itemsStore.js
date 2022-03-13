import axios from 'axios';
export default {
    namespaced: true,
    state() {
        return {
            ItemsInStore: [],
            ItemsInCart: [],
            savingResult: null
        }
    },
    getters: {
        getItemsInCart(state){
           return (state.ItemsInCart.length > 0) 
           ? state.ItemsInCart
           : null  
        },
        getItemsInStore(state) {
            return state.ItemsInStore
        },
        getSavingResult(state) {
            return state.savingResult
        }
    },
    mutations: {
        collectItemsData(state,data) {
          let arr = Object.values(data)
            arr.forEach(item => state.ItemsInStore.push(item))
        },
        collectCartData(state,data) {
            let arr = Object.values(data)
            arr.forEach(item => state.ItemsInCart.push(item))
          },
        // Эта мутация находит товар в корзине, в котором были сделаны изменения и перезаписывает данные
        changeOrderInfo(state, data){
            let item = state.ItemsInCart.find(elem => elem.id == data.id)
            item.info = data.info
        },
        // Этот метод (доделаю) записывает в state успешно ли сохранены данные в БД. В зависимости от полученного геттера будет выводиться страница успеха или ошибки 
        collectSavingResult(state, data){
            data.status < 400 ? state.savingResult = true : state.savingResult = false
        },
        deleteItem(state, data){
            let idx = state.ItemsInCart.indexOf(data.id)
            state.ItemsInCart.splice(idx, 1)
        },
    },
    actions: {
        async loadItems({ commit }) {
            const response = await axios.get('#')
            if(response.data){
                commit('collectItemsData', response.data)
            }
        },
        // Здесь будем подгружать данные о корзине либо из БД (проверка, есть ли там данные) либо из LocalStorage (если в БД нет инфы о товарах пользователя) (доделать)
        async loadItemsInCart({ commit }) {
            const response = await axios.get('#')
            if(response.data){
                commit('collectCartData', response.data)
            }
        },
        // Когда пользователь нажал кнопку купить - товары из localStorage улетают в БД. Примерно так я записывал данные в Firebase
        async addItemsToDB({ commit }, data){
            let name = await axios.post('https://freelance-test-vue-default-rtdb.firebaseio.com/tasks.json', 
            data)
            data.idDB = name.data.name
            await axios.patch(`https://freelance-test-vue-default-rtdb.firebaseio.com/tasks/${name.data.name}/.json`, {idDB:data.idDB})
            await commit ('collectSavingResult', data)
        },
        // При изменении параметров заказа - Здесь будет проверка, есть ли данные в БД. Если есть - меняем их через patch, если нет, то меняем только в localSorage
        async changeBuyingInfo({ commit }, data){
            await axios.patch(`https://freelance-test-vue-default-rtdb.firebaseio.com/tasks/${data.db}/status.json`, data)
            await commit ('changeOrderInfo', data)
        },
        async deleteItemFromOrder({ commit }, data){
            await axios.delete(`https://freelance-test-vue-default-rtdb.firebaseio.com/tasks/${data.db}/status.json`, data.id)
            await commit ('deleteItem', data)
        }
    }
}