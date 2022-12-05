import {ref} from 'vue'
import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'


export const useAuthStore = defineStore('auth', () => {
    const token = useStorage('token', "")
    function setToken(newToken) {
      token.value = newToken
    }
  
    return { token, setToken }
  })