export default () => {
    const container = document.createElement('div');
    
    const infoRegister = `
    <div class="container">
            <div class="content first-content">
            <div class="first-column">
                <h2 class="title-welcome">Welcome back!</h2>
                <p class="description">To keep conected with us</p>
                <p class="description">please login with your personal info</p>
                <button class=" btn btn-primary">Sign in</button>
            </div>
            <div class="second-column">
                <h2 class="title title-second">Create Account</h2>
                <form class="form">
                    <label class="label-input">
                        <i class="fa-regular fa-user icon-modify"></i>
                        <input type="text" placeholder="Name">
                    </label>
                    <label class="label-input">
                        <i class="fa-regular fa-envelope icon-modify"></i>
                        <input type="email" placeholder="E-mail">
                    </label>
                    <label class="label-input">
                        <i class="fa-solid fa-lock icon-modify"></i>
                        <input type="password" placeholder="Password">
                    </label>
                    <button class=" btn btn-second">Sign up</button>
                </form>
            </div>
        </div>
    `
    container.innerHTML = infoRegister;
    return container;
}