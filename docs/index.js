/* メディアクエリリストの作成 */
const mql = window.matchMedia('(max-width: 767px)');

/* メディアクエリリストをリスナに登録 */
mql.addListener(handleScaleChange);

/* 初回実行 */
handleScaleChange(mql);

/* クエリの条件分に従って処理させる */
function handleScaleChange(mql) {
  const body = document.body;
  const text = document.getElementById('text');

  console.log(mql);

  if (mql.matches) {
    body.style.background = 'red';
    text.innerHTML = '767px以下です';
  } else {
    body.style.background = 'blue';
    text.innerHTML = '768px以上です';
  }
}