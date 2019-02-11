/**
 * Created by qiujun on 15/6/26.
 */
var _viewHeight = 0;
var _viewWidth = 0;
var hype_name = 'bvlgari';
var div_id = hype_name.toLowerCase() + '_hype_container';//hype生成的div的id
var folder = hype_name + '.hyperesources/';//放图片的目录名称
var js_name = hype_name.toLowerCase() + '_hype_generated_script.js?44873' + Math.floor(Math.random() * 1000);
var title = '解密我的新年“红”运';//页面的标题
var item_scale = 1;

//imgArr用于存储图片名称,用英文的,号隔开
var imgArr = [
  'bg.jpg',
  'p1_logo.png',
  'p1_pig_1.png',
  'p1_star.png',
  'p1_text.png',
  'p1_btn_join.png',
  'p1_bottom_text.png',
  'p1_star_1.png',
  'p1_yanhua_1.png',
  'p2_back_stars.png',
  'p2_bg.jpg',
  'p2_btn_left.png',
  'p2_btn_right.png',
  'p2_gate_ae.png',
  'p2_gate_aus.png',
  'p2_gate_fra.png',
  'p2_gate_hk.png',
  'p2_gate_ita.png',
  'p2_gate_jap.png',
  'p2_gate_mac.png',
  'p2_gate_sgp.png',
  'p2_gate_thai.png',
  'p2_gate_usa.png',
  'p2_gate_span.png',
  'p2_gate_golden.png',
  'p2_icon_ae.png',
  'p2_icon_aus.png',
  'p2_icon_fra.png',
  'p2_icon_hk.png',
  'p2_icon_ita.png',
  'p2_icon_jap.png',
  'p2_icon_mac.png',
  'p2_icon_sgp.png',
  'p2_icon_thai.png',
  'p2_icon_usa.png',
  'p2_icon_span.png',
  'p2_logo.png',
  'p2_star.png',
  'p2_text.png',
  'p3_bg_ae_aus.jpg',
  'p3_bg_fra_ita.jpg',
  'p3_bg_mac_hk.jpg',
  'p3_bg_thai_sgp.jpg',
  'p3_bg_usa_jap.jpg',
  'p3_btn_next.png',
  'p3_btn_complete.png',
  'p3_cover_fra_1.png',
  'p3_cover_fra_2.png',

  'p3_cover_ae_1.png',
  'p3_cover_ae_2.png',

  'p3_cover_ae_1.png',
  'p3_cover_ae_2.png',

  'p3_cover_ita_1.png',
  'p3_cover_ita_2.png',

  'p3_cover_mac_1.png',
  'p3_cover_mac_2.png',

  'p3_cover_hk_1.png',
  'p3_cover_hk_2.png',
  'p3_cover_hk_3.png',

  'p3_cover_thai_1.png',
  'p3_cover_thai_2.png',

  'p3_cover_sgp_2.png',
  'p3_cover_sgp_1.png',

  'p3_cover_usa_1.png',
  'p3_cover_usa_2.png',

  'p3_cover_jap_1.png',

  'p3_cover_ae_0.png',
  'p3_cover_hk_0.png',
  'p3_cover_ita_0.png',
  'p3_cover_sgp_0.png',
  'p3_cover_thai_0.png',
  'p3_cover_usa_0.png',

  'p3_logo.png',
  'p3_redbag_back.jpg',
  'p3_redbag_back.png',
  'p3_redbag_front.png',
  'p3_redbag_front_2.png',
  'p4_bg.jpg',
  'p4_result_save_tip.png',
  'p4_info_1_1.png',
  'p4_info_1_2.png',
  'p4_info_2.png'
];

var imgArr2 = [
  'loading/pig_left/1.png',
  'loading/pig_left/2.png',
  'loading/pig_left/3.png',
  'loading/pig_left/4.png',
  'loading/pig_left/5.png',
  'loading/pig_left/6.png',
  'loading/pig_left/7.png',
  'loading/pig_left/8.png',
  'loading/pig_left/9.png',
  'loading/pig_left/10.png',
  'loading/pig_right/1.png',
  'loading/pig_right/2.png',
  'loading/pig_right/3.png',
  'loading/pig_right/4.png',
  'loading/pig_right/5.png',
  'loading/pig_right/6.png',
  'loading/pig_right/7.png',
  'loading/pig_right/8.png',
  'loading/pig_right/9.png',
  'loading/pig_right/10.png',
  'loading/logo/logo_1.png',
  'loading/logo/logo_2.png',
  'loading/logo/logo_3.png',
  'loading/logo/logo_4.png',
  'loading/logo/logo_5.png',
  'loading/logo/logo_6.png',
  'loading/logo/logo_7.png',
  folder + 'p3_item_fra_1_dark.png',
  folder + 'p3_item_fra_1_light.png',
  folder + 'p3_item_fra_2_dark.png',
  folder + 'p3_item_fra_2_light.png',
  folder + 'p3_item_fra_3_dark.png',
  folder + 'p3_item_fra_3_light.png',
  folder + 'p3_item_fra_flower_l.png',
  folder + 'p3_item_fra_flower_r.png',
  folder + 'p3_item_tag_fra.png',

  folder + 'p3_item_ita_1_dark.png',
  folder + 'p3_item_ita_1_light.png',
  folder + 'p3_item_ita_2_dark.png',
  folder + 'p3_item_ita_2_light.png',
  folder + 'p3_item_ita_3_dark.png',
  folder + 'p3_item_ita_3_light.png',
  folder + 'p3_item_tag_ita.png',

  folder + 'p3_item_ae_1_dark.png',
  folder + 'p3_item_ae_1_light.png',
  folder + 'p3_item_ae_2_dark.png',
  folder + 'p3_item_ae_2_light.png',
  folder + 'p3_item_tag_ae.png',

  folder + 'p3_item_aus_2_light.png',
  folder + 'p3_item_aus_1_dark.png',
  folder + 'p3_item_aus_1_light.png',
  folder + 'p3_item_aus_2_dark.png',
  folder + 'p3_item_tag_aus.png',

  folder + 'p3_item_mac_1_dark.png',
  folder + 'p3_item_mac_1_light.png',
  folder + 'p3_item_mac_2_dark.png',
  folder + 'p3_item_mac_2_light.png',
  folder + 'p3_item_tag_mac.png',

  folder + 'p3_item_hk_1_2_dark.png',
  folder + 'p3_item_hk_1_2_light.png',
  folder + 'p3_item_hk_1_dark.png',
  folder + 'p3_item_hk_1_light.png',
  folder + 'p3_item_hk_2_2_dark.png',
  folder + 'p3_item_hk_2_2_light.png',
  folder + 'p3_item_hk_2_dark.png',
  folder + 'p3_item_hk_2_light.png',
  folder + 'p3_item_tag_hk.png',

  folder + 'p3_item_tag_thai.png',
  folder + 'p3_item_thai_1_dark.png',
  folder + 'p3_item_thai_1_light.png',
  folder + 'p3_item_thai_2_dark.png',
  folder + 'p3_item_thai_2_light.png',


  folder + 'p3_item_sgp_1_dark.png',
  folder + 'p3_item_sgp_1_light.png',
  folder + 'p3_item_sgp_2_dark.png',
  folder + 'p3_item_sgp_2_light.png',
  folder + 'p3_item_tag_sgp.png',

  folder + 'p3_item_tag_usa.png',
  folder + 'p3_item_usa_1_dark.png',
  folder + 'p3_item_usa_1_light.png',
  folder + 'p3_item_usa_2_dark.png',
  folder + 'p3_item_usa_2_light.png',

  folder + 'p3_item_jap_2_light.png',
  folder + 'p3_item_jap_1_light.png',
  folder + 'p3_item_jap_1_dark.png',
  folder + 'p3_item_tag_jap.png',
  folder + 'p3_item_jap_2_dark.png',

  'loading/full_fire/1.jpg',
  'loading/full_fire/2.jpg',
  'loading/full_fire/3.jpg',
  'loading/full_fire/4.jpg',
  'loading/full_fire/5.jpg',
  'loading/full_fire/6.jpg',
  'loading/full_fire/7.jpg',
  'loading/full_fire/8.jpg',
  'loading/full_fire/9.jpg',
  'loading/full_fire/10.jpg',
  'loading/full_fire/11.jpg',
  'loading/full_fire/12.jpg',
  'loading/full_fire/13.jpg',
  'loading/full_fire/14.jpg',
  'loading/full_fire/15.jpg',
  'loading/full_fire/16.jpg'
];


//----------------上面的要改，下面的不要动--------------------------------------


var total = imgArr.length;


$(document).ready(function () {
  if (document.location.href.indexOf('#') > 0) {
    document.location.href = document.location.href.split('#')[0];
  }
  _viewHeight = $(document).height();
  _viewWidth = $(document).width();

  document.title = title;
  $('#container').attr('id', div_id);
  startLoading();
});

function startLoading() {
  var html = '<img src="' + folder + imgArr[0] + '" onload="loadProgress(0)">';
  $('.preloadPan').append(html);
}

function loadProgress(index) {
  if (index < total - 1) {
    index += 1;
    var html = '<img src="' + folder + imgArr[index] + '" onload="loadProgress(' + index + ')">';
    console.log(html);
    var percent = Math.round((index + 1) / total * 100);

    $('.loadText').text('' + percent + '%');
    $('.preloadPan').append(html);
  }
  else {
    $('.loadingPan').fadeOut(500, function() {
      $('.loadingPan').hide();
    });
    var sc = document.createElement('script');
    sc.type = 'text/javascript';
    sc.charset = 'utf-8';
    sc.src = folder + js_name;//加载的js名称

    $('#' + div_id + '').append(sc);//修改此处为div的ID名称
  }
}

function continueLoading() {
  setTimeout(function () {
    total = imgArr2.length;
    if (total > 0) {
      var html = '<img src="' + imgArr2[0] + '" onload="continueloadProgress(0)">';
      $('.preloadPan').append(html);
    }
    else {
      continueLoading();
    }
  }, 100);
}

function continueloadProgress(index) {
  if (index < total - 1) {
    index += 1;
    var html = '<img src="' + imgArr2[index] + '" onload="continueloadProgress(' + index + ')">';
    console.log(html);
    $('.preloadPan').append(html);
  }
}
