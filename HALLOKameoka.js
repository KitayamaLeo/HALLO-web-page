window.addEventListener('load', function() {
    // ロード完了時の処理
    console.log('ページが読み込まれました！');
  });
  
  window.addEventListener('scroll', function() {
    // スクロール時の処理
    console.log('スクロールされました！');
  });
  
  var button = document.querySelector('button');
if (button === null) {
  console.log('ボタンが見つかりませんでした！');
} else {
  button.addEventListener('click', function() {
    // ボタンがクリックされた時の処理
    console.log('ボタンがクリックされました！');
  });
}



  

  