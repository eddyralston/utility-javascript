import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 
const db = getFirestore(app);

function firestore(collectionName){
    var Ref = collection(db, collectionName)
    return {
        add(data){
             return addDoc(Ref,data)
        },
        get(){
             return getDocs(Ref)
        }
    }
 }


import { getDatabase, ref, set, get } from "firebase/database";
const rtdb = getDatabase(app);

function database(path){
    var Ref = ref(rtdb, path)
    return {
        set(data){
            return set(Ref, data);
        },
        get(){
            return get(Ref)
        }
    }
}

 export {firestore,database};