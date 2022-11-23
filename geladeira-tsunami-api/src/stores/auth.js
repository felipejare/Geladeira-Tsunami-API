import {ref} from 'vue'
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
    const token = ref("")
    function setToken(newToken) {
      token.value = newToken
    }
  
    return { token, setToken }
  })