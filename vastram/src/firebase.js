

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyDL2xy2wlQ2c1akSAeYhYEG0dXThCXJzms",
  // authDomain: "loginotp-611df.firebaseapp.com",
  // projectId: "loginotp-611df",
  // storageBucket: "loginotp-611df.appspot.com",
  // messagingSenderId: "986918936503",
  // appId: "1:986918936503:web:89c36987fc45affe905232",
  // measurementId: "G-XNX5NSG205"

  apiKey: "AIzaSyBvhjsopUc4mKo6fmxO9o1jxTZiOep7GPk",
  authDomain: "okotp-808e3.firebaseapp.com",
  projectId: "okotp-808e3",
  storageBucket: "okotp-808e3.appspot.com",
  messagingSenderId: "367684623113",
  appId: "1:367684623113:web:70900f48970b0e4a3711d8",
  measurementId: "G-3B4MZGHBNH"




};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)