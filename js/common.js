var fn = {
  Tab: function(obj){
    var hd = obj.find('.J_TabHd'),
        bd = obj.find('.J_TabBd');
    hd.children('li').eq(0).show();
    bd.children('.Items').eq(0).show();
    hd.children('li').hover(function(){
      var _this = $(this),
          index = _this.index();
      _this.addClass('cur').siblings().removeClass('cur');
      bd.children('.Items').hide().eq(index).show();
    })
  }
}

