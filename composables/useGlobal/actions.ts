import type { Actions, State } from './types'
import { message, useNuxtApp } from '#imports'

export function useGlobalActions(state: State): Actions {
  /** Sign out by deleting the token from localStorage */
  const signOut: Actions['signOut'] = () => {
    state.token.value = null
    state.user.value = null
  }

  /** Sign in by setting the token in localStorage */
  const signIn: Actions['signIn'] = async (newToken) => {
    // @fix: a real example token
    newToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5tejg5ODI1QGdtYWlsLmNvbSIsImZpcnN0bmFtZSI6bnVsbCwibGFzdG5hbWUiOm51bGwsImlkIjoidXNfcnlpY3Z4MnVkeHNqaW8iLCJyb2xlcyI6ImNyZWF0b3IiLCJ0b2tlbl92ZXJzaW9uIjoiY2U0NzJiYzVmYzYyYTVmNDg4OGU1OGFiNGQ1M2RlYzAzZTRkMmU3NmVhMzk1NjJiNDA2ODI0ZWQwMTM5OGRhY2M0NmUzZDliMWUxMGUyYTgiLCJpYXQiOjE2NjY0NTYwNTgsImV4cCI6MTY2NjQ5MjA1OH0.t55j8LTw9L3zUAks2aSzcR6sDVf3oAwI_rH3_jfRLes"
    state.token.value = newToken

    if (state.jwtPayload.value) {
      state.user.value = {
        id: state.jwtPayload.value.id,
        email: state.jwtPayload.value.email,
        firstname: state.jwtPayload.value.firstname,
        lastname: state.jwtPayload.value.lastname,
        roles: state.jwtPayload.value.roles,
      }
    }
  }

  /** manually try to refresh token */
  const refreshToken = async () => {
    const nuxtApp = useNuxtApp()
    const t = nuxtApp.vueApp.i18n.global.t

    nuxtApp.$api.instance
      .post('/auth/refresh-token', null, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data?.token) {
          signIn(response.data.token)
        }
      })
      .catch((err) => {
        message.error(err.message || t('msg.error.youHaveBeenSignedOut'))
        signOut()
      })
  }

  return { signIn, signOut, refreshToken }
}
