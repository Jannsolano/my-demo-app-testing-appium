import userData from "../data/userData.json" with { type: "json"}
import { $, expect } from '@wdio/globals'
import MenuScreen from '../screenobjects/menu.screen.js'
import LoginScreen from '../screenobjects/login.screen.js'

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
        await MenuScreen.acessLoginScreen()
        await LoginScreen.fillLoginform(userData.userFail.username, userData.userFail.password)
        await expect($(LoginScreen.errorMessage)).toHaveText("Provided credentials do not match any user in this service.")
    })

    it('should login with a valid credential', async () => {
        await MenuScreen.acessLoginScreen()
        await LoginScreen.fillLoginform(userData.userSucess.username, userData.userSucess.password)
        await expect($(MenuScreen.leftMenuButton))
    })
})
