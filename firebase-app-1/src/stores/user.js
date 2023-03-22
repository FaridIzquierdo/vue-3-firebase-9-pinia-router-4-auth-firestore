import {defineStore} from 'pinia'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebaseConfig'

import router from '../router.js'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null,
        loadingUser: false,
        loadingSession:false
    }),
    actions:{
        async registerUser(email, password){
            try{
                this.loadingUser=true
                const {user} = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid: user.uid}
                router.push('/')
            }catch(error){
                console.log(error)
            }finally {
                this.loadingUser=false
            }
        },
        async loginUser(email, password){
            try {
                this.loadingUser=true
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid: user.uid}
                router.push('/')
            }catch(e){
                console.log(e)
            }finally {
                this.loadingUser=false
            }
        },
        async logoutUser(){
            try {
                this.loadingUser=true
               await signOut(auth)
                this.userData=null
                router.push('/login')
            }catch(e){
                console.log(e)
            }finally {
                this.loadingUser=false
            }
        },
        currentUser(){
            return new Promise((resolve, reject)=>{
                const unsubcribe = onAuthStateChanged(auth, user =>{
                    if(user){
                        this.userData = {email: user.email, uid: user.uid}
                    }else{
                        this.userData = null
                    }
                    resolve(user)
                }, (e) => reject(e))
                unsubcribe()
            })
        }
    },

});