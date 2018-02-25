/* メディアクエリリストの作成 */
const mql = window.matchMedia('(max-width: 767px)');

/* クエリの条件分に従って処理させる */
const handleScaleChange = (mql) => {
  const text = document.getElementById('text');

  console.log(mql);

  if (mql.matches) {
    text.style.color = 'red';
    text.innerHTML = '767px以下です';
  } else {
    text.style.color = 'blue';
    text.innerHTML = '768px以上です';
  }
}

/* メディアクエリリストをリスナに登録 */
mql.addListener(handleScaleChange);

/* 初回実行 */
handleScaleChange(mql);