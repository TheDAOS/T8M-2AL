import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDuMx-pHphRufSTb4qvbHE_GGHMHG6msgQ",
    authDomain: "task-manager-application-14596.firebaseapp.com",
    projectId: "task-manager-application-14596",
    storageBucket: "task-manager-application-14596.firebasestorage.app",
    messagingSenderId: "565927119941",
    appId: "1:565927119941:web:cc0c327414be1a9155272c",
    measurementId: "G-W8JVCS40PM"
};

const app = initializeApp(firebaseConfig);

export default app;