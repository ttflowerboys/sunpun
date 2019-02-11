//初始化config信息
var website = window.location.href;
var _WXSDK_URL = "https://www.yunhuodong.net/wx/event/testproject/wxsdk.ashx";

jQuery(function ($) {

    //取签名
    jQuery.ajax({
        type: "get", //jquey是不支持post方式跨域的
        async: false,
        url: _WXSDK_URL + "?m=" + Math.random(), //跨域请求的URL
        data: { url: website },//传递参数 url为当前活动地址
        dataType: "jsonp",
        //传递给请求处理程序，用以获得jsonp回调函数名的参数名(默认为:callback)
        jsonp: "jsoncallback",
        //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
        jsonpCallback: "success_jsonpCallback",
        //成功获取跨域服务器上的json数据后,会动态执行这个callback函数
        success: function (data) {

            if (data.code == '200') {

                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: data.appId, // 必填，公众号的唯一标识
                    timestamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.nonceStr, // 必填，生成签名的随机串
                    signature: data.signature,// 必填，签名，见附录1
                    jsApiList:
                    [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo'
                    ]
                });

            } else {
                alert(data.errMsg);
                return;
            }
        }
    });

});

setTimeout(share, 1000);

var share_data = {
  title: '宝格丽解密我的新年“红”运',
  imgUrl: document.location.href.split('?')[0].replace('/index.html','').replace('share.html', '') + '/share/logo.jpg?_=' + Math.random(),
  desc: '回答三个问题发现旅途奇遇，揭晓新年运势！',
  link: document.location.href,
  success:share_success
};

$('#wx_pic').find('img').attr('src', share_data.imgUrl);

function share() {
    wx.ready(function () {
        //构造分享信息
        var shareData = share_data;
        var shareSuccess = Object.assign(share_data);
        var voice_localId = '';
        var is_start = false;

        // 2.1 “分享给朋友”
        wx.onMenuShareAppMessage(shareData);

        // 2.2 “分享到朋友圈”
        wx.onMenuShareTimeline(shareData);

        // 2.3 “分享到QQ”
        wx.onMenuShareQQ(shareData);

        // 2.4 “分享到微博”
        wx.onMenuShareWeibo(shareData);
        //document.getElementById('media').play();

        //bindUploadEvent();
    });
}


function share_success() {
  var category = '宝格丽201910';
  _hmt.push(['_trackEvent',category,'share','分享成功']);
}
/*
 * 微信分享 
 */

//wx.error(function (res) {
//    alert(res.errMsg);
//});