
import { createStore } from 'vuex'
import apiResultJson from './../apiResults/annotations.json';

export const store = createStore({
    state() {
        return {
            currentImage: "",
            currentAnnotations: [],
            apiResult: apiResultJson.result,
            imageFolderPath: "./src/assets/images/",
            
        }
    },
    mutations: {
        setCurrentImage(state, currentImage) {
            state.currentImage = currentImage;
        },
        setCurrentAnnotations(state, currentAnnotations) {
            state.currentAnnotations = currentAnnotations;
        }
    }
})