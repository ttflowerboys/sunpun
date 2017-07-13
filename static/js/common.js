function inews(){
	var ihs=750;
	var ih=$(window).height();
	if(ih>ihs){
		$("#pres-video").height(ih);
	}else{
		$("#pres-video").height(ihs);
	}
}
function inews2(){
	var ihs=440;
	var ih=$(window).height()-310;
	if(ih>ihs){
		$("#pres-video1").height(ih);
	}else{
		$("#pres-video1").height(ihs);
	}
}
inews();
$(window).resize(function() {
	inews();
	inews2();
});
inews2();
$(window).resize(function() {
});