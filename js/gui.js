// const btn_open_donate_usdt = document.querySelector("#btn_open_donate_usdt");
// btn_open_donate_usdt.addEventListener("click", () => {
//     window.open("donate_info_usdt.html", "_self");
// });

const word_input = document.querySelector("#word_input");
const word_table = document.querySelector("#word_table");
const btn_add_word = document.querySelector("#btn_add_word");
btn_add_word.addEventListener("click", () => {
  const new_row = document.createElement("tr");
  new_row.innerHTML = `
    <td><div class="div_col_word_type_w"></div></td>
    <td class="td_col_word">${word_input.value}</td>
    <td><button class="btn_normal">❌</button></td>
  `;
  word_table.appendChild(new_row);
});


/*
    <tr>
        <td><div class="div_col_word_type_w"></div></td>
        <td class="td_col_word">Hello</td>
        <td><button class="btn_normal">❌</button></td>
    </tr>
    <tr>
        <td><div class="div_col_word_type_b"></div></td>
        <td class="td_col_word">Success</td>
        <td><button class="btn_normal">❌</button></td>
    </tr>
*/
