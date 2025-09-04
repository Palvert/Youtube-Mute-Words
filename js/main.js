const TITLE_ELEM_NAME_MAIN_PAGE = "h3 a span";
const TITLE_ELEM_NAME_SUBS_PAGE = "#video-title-link yt-formatted-string";
const VIDEO_GRID = document.querySelectorAll("#contents ytd-rich-item-renderer");

// Save a list of words
const words = ["SCARED"];
browser.storage.local.set({ wordList: words })
    .then(() => console.log('Words saved'))
    .catch(error => console.error('Error:', error));

let counter_videos_hidden = 0;
let block_mode = "hide"; //hide, mark
let muted_words;
console.log(browser.storage.local.get('wordList'));
browser.storage.local.get('wordList')
    .then(data => {console.log(muted_words = data.wordList)})
    .catch(error => console.error('Error:', error));
console.log(`WORDS: ${muted_words}`);
// console.log(browser.storage.local.get('wordList'));

function filter_out() {
    VIDEO_GRID.forEach((element) => {
        // Second half makes it work on the subscriptions page
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
observer.observe(VIDEO_GRID, { childList: true, subtree: true });
