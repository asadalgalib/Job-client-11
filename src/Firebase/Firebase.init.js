import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyApF1SbNrGIrcSz3YXSy5sFbbHmQPynzg4",
    authDomain: "job-web-90438.firebaseapp.com",
    projectId: "job-web-90438",
    storageBucket: "job-web-90438.firebasestorage.app",
    messagingSenderId: "1017483053998",
    appId: "1:1017483053998:web:41ae0ffcfd50372b5ed63f"
  };

const app = initializeApp(firebaseConfig);

export default app;