import { initializeApp, cert } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import { ServiceAccount } from "./serviceAccount.js";

initializeApp({
    credential: cert(ServiceAccount)
})

const db=getFirestore()
