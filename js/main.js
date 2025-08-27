const TITLE_ELEM_NAME_MAIN_PAGE = "h3 a span";
const TITLE_ELEM_NAME_SUBS_PAGE = "#video-title-link yt-formatted-string";

let counter_videos_hidden = 0;
let block_mode = "hide"; //hide, mark
let muted_words = [
    "Valorant", "Chillstep", "Lo-fi", "#shorts", "Gross", "AI", "LIFE"
];


function filter_out() {
    const video_grid = document.querySelectorAll("#contents ytd-rich-item-renderer");
    video_grid.forEach((element) => {
        const title = element.querySelector(TITLE_ELEM_NAME_MAIN_PAGE) || element.querySelector(TITLE_ELEM_NAME_SUBS_PAGE);

        if (title) {
            let title_has_muted_word = false;

            for (let i = 0; i < muted_words.length; i++) {
                if (title.textContent.toLowerCase().search(muted_words[i].toLowerCase()) != -1) {
                    title_has_muted_word = true;
                    break;
                }
            }

            if (title_has_muted_word) {
                counter_videos_hidden++;

                switch (block_mode) {
                    case("hide"):
                        element.remove();
                        break;
                    case("mark"):
                        title.style.color = "red";
                        title.textContent = "BLOCKED";
                        break;
                }
            }
        }
    });
}

filter_out();

// Observe DOM changes for dynamic content
const observer = new MutationObserver(filter_out);
observer.observe(document.body, { childList: true, subtree: true });
