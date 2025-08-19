function fun() {
    let muted_words = ["QUIT", "BROKEN", "WAKE UP"];
    
    const video_grid = document.querySelectorAll("#contents ytd-rich-item-renderer");

    video_grid.forEach( (element) => {
        const title = element.querySelector("#video-title");

        let title_has_muted_word = false;

        for (let i = 0; i < muted_words.length; i++) {
            if (title.textContent.match(muted_words[i])) {
                title_has_muted_word = true;
                break;
            }
        }

        if (title_has_muted_word) {
            title.style.color = "red";
            title.textContent = "BLOCKED";
        } else {
            title.style.color = "green";
        }
    });
}

// Run initially
fun();

// Observe DOM changes for dynamic content
const observer = new MutationObserver(() => {
    fun();
});
observer.observe(document.body, { childList: true, subtree: true });
