'use client'
import firebase_app from '../api/firebase'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(firebase_app)

export default async function handler() {
  return await signOut(auth)
}
