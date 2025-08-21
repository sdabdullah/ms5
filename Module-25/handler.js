document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        // console.log('btn clicked')
        const pageTitleElement = document.getElementById('page-title');
        pageTitleElement.innerText = 'Updated page title text.'
    })

// User login
document
    .getElementById("btn-login")
    .addEventListener("click", function () {
        const userInfoEl = document.getElementById("user-info");
        userInfoEl.innerText = "user logged In successfully";
    });