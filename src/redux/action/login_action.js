import { SIGN_IN, SIGN_UP } from '../consts'

export const changeLoginAction = (payload) => ({
    type: SIGN_IN,
    payload,
})


export const changeLogOutAction = (payload) => ({
    type: SIGN_UP,
    payload,
})

