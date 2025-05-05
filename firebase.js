 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
 import { getAuth ,GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCC6NLik752cm_wuLlcgWDozMhdj_NH-Is",
   authDomain: "student-attendance-check-4918c.firebaseapp.com",
   projectId: "student-attendance-check-4918c",
   storageBucket: "student-attendance-check-4918c.firebasestorage.app",
   messagingSenderId: "605976921552",
   appId: "1:605976921552:web:02819e02245ec6aa3ca5d5",
   measurementId: "G-CV1TF2Q4VX"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app)
 export{
    auth    ,
    GoogleAuthProvider ,
    signInWithPopup,
    onAuthStateChanged
 }