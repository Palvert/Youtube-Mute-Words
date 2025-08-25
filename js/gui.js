const btn_open_donate_usdt = document.querySelector("#btn_open_donate_usdt");
btn_open_donate_usdt.addEventListener("click", () => {
    window.open("donate_info_usdt.html", "_self");
});

const btn_open_blacklist = document.querySelector("#btn_open_blacklist");
btn_open_blacklist.addEventListener("click", () => {
    window.open("blacklist.html", "_self");
});

const btn_open_whitelist = document.querySelector("#btn_open_whitelist");
btn_open_whitelist.addEventListener("click", () => {
    window.open("whitelist.html", "_self");
});



//TODO: click on email to copy
const contacts_email = document.querySelector("#contacts_email");
//......
