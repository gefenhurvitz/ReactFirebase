import React, {useRef , useState} from 'react'
import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCDyQzl-f54nklx2qpQyD3cUzWXzLszYwU",
  authDomain: "react-firebase-gefen.firebaseapp.com",
  projectId: "react-firebase-gefen",
  storageBucket: "react-firebase-gefen.appspot.com",
  messagingSenderId: "1069605619148",
  appId: "1:1069605619148:web:43bdf241dba24e7bbb8969",
  measurementId: "G-MK3KLXNYK5"
})

const auth = firebase.auth()
const firestore = firebase.firestore()
 

 
function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Hello</h1>
      <SignOut/>
      <section>
        {user ? <ChatRoom /> : <SignIn/>}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.googleAuthProvider()
    auth.useSignInwithPopup(provider)
  }
  return(
    <button onClick={SignInWithGoogle}>sign in with google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <bottun onClick={()=> auth.SignOut}>Sign Out</bottun>
  )
}

function ChatRoom() {

}

export default App;
