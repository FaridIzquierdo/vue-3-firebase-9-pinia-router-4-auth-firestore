import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDkULdrR6D1J-G89XReaJudvzPQoHnIE1s",
    authDomain: "vue-3-2022-b902b.firebaseapp.com",
    projectId: "vue-3-2022-b902b",
    storageBucket: "vue-3-2022-b902b.appspot.com",
    messagingSenderId: "467187533247",
    appId: "1:467187533247:web:90470ab2653a23754b8d0a"
};

initializeApp(firebaseConfig);
const auth = getAuth();

export {auth};