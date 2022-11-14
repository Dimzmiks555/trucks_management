import React from 'react'
import s from './AuthScreen.module.scss'

const AuthScreen = () => {
  return (
    <div className={s.screen}>
        <form>
            <div>
                <img src="/logo.svg"></img>
            </div>
        </form>
    </div>
  )
}

export default AuthScreen