
import { createStore } from 'vuex'
import apiResultJson from './../apiResults/annotations.json';

export const store = createStore({
    state() {
        return {
            currentImage: "TEST",
            apiResult: apiResultJson,
            imageFolderPath: "./src/assets/images/"
        }
    },
    mutations: {
        setCurrentImage(state, currentImage) {
            state.currentImage = currentImage;
        }
    }
})