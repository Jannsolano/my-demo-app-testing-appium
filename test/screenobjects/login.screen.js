class LoginScreen {
    constructor() {
        this.userNameInput = "~Username input field"
        this.PasswordInput = "~Password input field"
        this.LoginButton = "~Login button"
        this.errorMessage = "//android.view.ViewGroup[@content-desc='generic-error-message']/android.widget.TextView"
    }

    async fillLoginform(username, password) {
        await $(this.userNameInput).setValue(username)
        await $(this.PasswordInput).setValue(password)
        await $(this.LoginButton).click()
    }
}

export default new LoginScreen()