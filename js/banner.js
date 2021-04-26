//全屏滚动
window.onload=function(){
	$(".one,.two,.three").removeClass("hide111");
	$(".one,.two,.three").addClass("show111");
    var n=0;
	var imgLength=$(".b-img .img").length;
	var ctWidth=imgLength*100;
	var itemWidth=1/imgLength*100;
	$(".b-img").width(ctWidth+"%");
	$(".b-img .img").width(itemWidth+"%");
	$(".b-list").width(54+"px");
	if(imgLength>1)
	{
	for(var i=0;i<imgLength;i++)
	{
		var listSpan=$("<span></span>")
		$(".b-list").append(listSpan);
		}
	}
	$(".b-list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
	$(".bar-right em").click(function(){
		if(n==imgLength-1)
		{
			var ctPosit=(n+1)*100;
			$(".banner").append($(".b-img").clone());
			$(".b-img:last").css("left","100%");
			$(".b-img:first").animate({"left":"-"+ctPosit+"%"},1000);
			$(".b-img:last").animate({"left":"0"},1000);
			var setTime0=setTimeout(function () {
            $(".banner .b-img:first").remove();
            }, 1000);
			n=0;
			$(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
			}
		else
		{
		n++;
		var ctPosit=n*100;
		$(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
		$(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
		}
		})
	$(".bar-left em").click(function(){
		if(n==0)
		{
			var stPosit=imgLength*100;
			var etPosit=(imgLength-1)*100;
			$(".banner").prepend($(".b-img").clone());
			$(".b-img:first").css("left","-"+stPosit+"%");
			$(".b-img:last").animate({"left":"100%"},1000);
			$(".b-img:first").animate({"left":"-"+etPosit+"%"},1000);
			var setTime0=setTimeout(function () {
            $(".banner .b-img:last").remove();
            }, 1000);
			n=imgLength-1;
			$(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
			}
		else
		{
		n--;
		var ctPosit=n*100;
		$(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
		$(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
		}
		})
	$(".b-list span").click(function(){
		var lsIndex=$(this).index();
		n=lsIndex;
		var ctPosit=n*100;
		$(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
		$(this).addClass("spcss").siblings("span").removeClass("spcss");
		})
	function rollEnvent(){
		$("nav").removeClass("nav-frist");
		$("nav").removeClass("nav-two");
		$("nav").removeClass("nav-three");
		if(n == 2){
			$("nav").addClass("nav-frist");
		}else if(n == 0){
			$("nav").addClass("nav-two");
		}else{
			$("nav").addClass("nav-three");
		}
		if(n==imgLength-1)
		{
			var ctPosit=(n+1)*100;
			$(".banner").append($(".b-img").clone());
			$(".b-img:last").css("left","100%");
			$(".b-img:first").animate({"left":"-"+ctPosit+"%"},1000);
			$(".b-img:last").animate({"left":"0"},1000);
			var setTime0=setTimeout(function () {
            $(".banner .b-img:first").remove();
            }, 1000);
			n=0;
			$(".b-list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
			}
		else
		{
		n++;
		var ctPosit=n*100; 
		$(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
		$(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
		}
		}
	var slidesetInterval=setInterval(rollEnvent,5000);
	$(".banner").hover(function(){clearInterval(slidesetInterval);},function(){slidesetInterval=setInterval(rollEnvent,5000);});
}






