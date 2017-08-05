//进入登录页
function openLogin(url){
  api.openWin({
      name: 'login',
      url: url,
      pageParam: {
          name: 'test'
      }
  });

}

//进入首页
function openMain(url){
  api.openWin({
      name: 'main',
      url: url,
      pageParam: {
          name: 'test'
      }
  });

}
