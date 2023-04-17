import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVTvJNSRg4sSdALLofaT3UAqeSZ3iUtEg",
  authDomain: "puzzle-game-bc4a5.firebaseapp.com",
  projectId: "puzzle-game-bc4a5",
  storageBucket: "puzzle-game-bc4a5.appspot.com",
  messagingSenderId: "531511220836",
  appId: "1:531511220836:web:e74034e450a780ee4ddd71",
  measurementId: "G-PYDK240FYQ"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;