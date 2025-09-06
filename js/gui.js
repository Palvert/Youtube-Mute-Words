// const btn_open_donate_usdt = document.querySelector("#btn_open_donate_usdt");
// btn_open_donate_usdt.addEventListener("click", () => {
//     window.open("donate_info_usdt.html", "_self");
// });

const word_input = document.querySelector("#word_input");
const word_table = document.querySelector("#word_table");

const btn_add_word_black = document.querySelector("#btn_add_word_b");
btn_add_word_black.addEventListener("click", () => {
    if (word_input.value) {
        const new_row = document.createElement("tr");
        new_row.innerHTML = `
          <td><div class="div_col_word_type_b"></div></td>
          <td class="td_col_word">${word_input.value}</td>
          <td><input class="input_radio" type="checkbox"></input></td>
        `;
        word_table.appendChild(new_row);
    }
});

const btn_add_word_white = document.querySelector("#btn_add_word_w");
btn_add_word_white.addEventListener("click", () => {
    if (word_input.value) {
      const new_row = document.createElement("tr");
      new_row.innerHTML = `
        <td><div class="div_col_word_type_w"></div></td>
        <td class="td_col_word">${word_input.value}</td>
        <td><input class="input_radio" type="checkbox"></input></td>
      `;
      word_table.appendChild(new_row);
    }
});
