var toaddress="<h4 style='FONT-SIZE: 14px;color:#CC0038;'><strong>大理乌托邦婚纱摄影</strong></h4>" + 
	"<p style='line-height:1.2; FONT-SIZE: 12px;color:#333;white-space:nowrap'>地址：中国·大理下关滨海大道005号洱海天域风情街C-L幢101号&nbsp;&nbsp;<br/>联系电话：400-004-3344</p>";
var map = new BMap.Map("containermap");
var point = new BMap.Point(100.247867,25.609249);
map.centerAndZoom(point, 18);
map.addControl(new BMap.NavigationControl());               // 添加平移缩放控件
map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
//map.enableScrollWheelZoom();//启用地图滚轮放大缩小
var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);              // 将标注添加到地图中
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
var sContent =toaddress;

var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
marker.openInfoWindow(infoWindow);
marker.addEventListener("click", function(){          
   this.openInfoWindow(infoWindow);
   
});
$(function(){
	var oDiv=document.getElementById('dmap');
	var oBtn=document.getElementById('btn');
	setTimeout(function(){
	document.getElementById('dmap').style.display='none';
	},1500);
	oBtn.onclick=function ()
	{
		oDiv.style.display='block';
	}
});