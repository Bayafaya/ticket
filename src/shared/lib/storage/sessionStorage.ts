import { SetStorageProps } from './types'

export const setSessionStorage = ({ key, value }: SetStorageProps) => {
  sessionStorage.setItem(key, value)
}

export const getSessionStorage = (key: string) => {
  return sessionStorage.getItem(key) || ''
}

export const deleteSessionStorage = (key: string) => {
  sessionStorage.removeItem(key)
}
