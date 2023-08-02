$();
// 画面ローディング
$(function(){
//同じ日付で2回目以降ならローディング画面非表示の設定

  var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
  var myD = new Date();//日付データを取得
  var myYear = String(myD.getFullYear());//年
  var myMonth = String(myD.getMonth() + 1);//月
  var myDate = String(myD.getDate());//日

  if (splash_text != myYear + myMonth + myDate) {//cookieデータとアクセスした日付を比較↓
    $("#splash").css("display", "block");//１回目はローディングを表示
      setTimeout(function () {
      $("#splash_logo").fadeIn(1000, function () {//1000ミリ秒（1秒）かけてロゴがフェードイン
      setTimeout(function () {
        $("#splash_logo").fadeOut(1000);//1000ミリ秒（1秒）かけてロゴがフェードアウト
      }, 1000);//1000ミリ秒（1秒）後に処理を実行
      setTimeout(function () {
      $("#splash").fadeOut(1000, function () {//1000ミリ秒（1秒）かけて画面がフェードアウト
      var myD = new Date();
      var myYear = String(myD.getFullYear());
      var myMonth = String(myD.getMonth() + 1);
      var myDate = String(myD.getDate());
      $.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
        });
      }, 1700);//1700ミリ秒（1.7秒）後に処理を実行
    });
    }, 1000);//1000ミリ秒（1秒）後に処理を実行
  }else {
      $("#splash").css("display", "none");//同日2回目のアクセスでローディング画面非表示
  }

// ハンバーガー
  let state = false;
  let pos;

  $('.hamburger').on('click', function () {
    $('.hm-nav').toggleClass('is-active');
    $('.hamburger').toggleClass('is-active');

    $("body").toggleClass("fixed");
  });

  $(".hm-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".hamburger").removeClass('is-active');//ボタンの activeクラスを除去し
    $(".hm-nav").removeClass('is-active');//ナビゲーションのクラスも除去
    $("body").removeClass("fixed");
  });


// ナビゲーション、フッターまで入ったら消える

    let footer = $('footer').innerHeight(); // footerの高さを取得

    window.onscroll = function () {
      let point = window.pageYOffset; // 現在のスクロール地点
      let docHeight = $(document).height(); // ドキュメントの高さ
      let dispHeight = $(window).height(); // 表示領域の高さ

      if(point > docHeight-dispHeight-footer){ // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
        $('.nav-wrap').addClass('is-hidden'); //footerより下にスクロールしたらis-hiddenを追加
      }else{
        $('.nav-wrap').removeClass('is-hidden'); //footerより上にスクロールしたらis-hiddenを削除
      }
    };


  // // モーダル
    // モーダルウィンドウを開く
    $('.modal-open').on('click', function(){
      var target = $(this).data('target');
      var modal = document.getElementById(target);

      $(modal).addClass('active');

      // $(".hamburger").removeClass('is-active');//ボタンの activeクラスを除去し
      // $(".hm-nav").removeClass('is-active');//ナビゲーションのクラスも除去
      $('.hamburger-box').css('display','none');
      return false;
    });

    // 閉じるボタンをクリックしたらモーダルを閉じる
    $('.modal-close').on('click',function(){
      $('.modal-container').removeClass('active');
      $('.hamburger-box').css('display','block');

    });

    // モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click',function(e) {
      if(!$(e.target).closest('.modal-inner').length) {$('.modal-container').removeClass('active');
      $('.hamburger-box').css('display','block');
      }
    //   // return false; ←これCOすると新規ウィンドウ開ける
    });

    // ajax

    // wc
    $('#wc-01').load('./ajax-pages/webdesign/wc-01.txt');
    $('#wc-02').load('./ajax-pages/webdesign/wc-02.txt');
    $('#wc-03').load('./ajax-pages/webdesign/wc-03.txt');
    // wi
    $('#wi-01').load('./ajax-pages/webdesign/wi-01.txt');
    $('#wi-02').load('./ajax-pages/webdesign/wi-02.txt');
    $('#wi-03').load('./ajax-pages/webdesign/wi-03.txt');
    $('#wi-04').load('./ajax-pages/webdesign/wi-04.txt');
    $('#wi-05').load('./ajax-pages/webdesign/wi-05.txt');
    // gd
    $('#gd-01').load('./ajax-pages/graphic/gd-01.txt');
    $('#gd-02').load('./ajax-pages/graphic/gd-02.txt');

});
