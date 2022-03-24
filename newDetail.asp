<!doctype html>
<html lang="en">
<head>
<%@ codepage=65001%>
<%
set conn=Server.Createobject("adodb.Connection") 
str="dsn=mysql_person_position;Driver={mysql driver};server=127.0.0.1;uid=root;pwd=qdhlkj123456;database=person_position"
conn.open(str)
dim id
id=request.queryString("id")
sql = "select * from new where id="&id
set rs = conn.execute(sql)
%>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
<meta name="description" content="高精度定位,人员定位,室内定位,UWB,蓝牙定位,化工厂区人员定位,定位传感器,员工定位,石油人员定位,人员定位管理系统">
<meta name="keywords" content="高精度定位,人员定位,室内定位,UWB,蓝牙定位,化工厂区人员定位,定位传感器,员工定位,石油人员定位,人员定位管理系统">
<style type="text/css">
body{
	overflow:scroll;
	overflow-x:hidden;
}
.xqnr_div{
	font-size: 26px;
	text-align: center;
}
</style>
<title><%=rs("title")%></title>
<link rel="stylesheet" href="./layui/css/layui.css">
<link rel="stylesheet" href="./css/newDetail.css">
<link type="text/css" rel="stylesheet" href="./css/nav.css" />
<link rel="stylesheet" href="css/theme.fonts.css">
<link rel="stylesheet" href="css/plugin.style.css">
<!--plugin style css-->
<link rel="stylesheet" href="css/hearderStyle.css">
<!-- <link type="text/css" rel="stylesheet" href="./layer/mobile/need/layer.css"/> -->
<script src="js/jquery-3.2.1.min.js" type="text/javascript"></script>
<script src="js/pageHead.js"></script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?eaa6af63d7cedb3eead124561c0653ef";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

function getQueryString(name){
	 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 var r = window.location.search.substr(1).match(reg);
	 if(r!=null)return  unescape(r[2]); return null;
}

$(function(){
	//initXqnrDiv();
});

/*
*为了让百度蜘蛛抓去网页源码内容,现在改用asp模式读取数据了,原来这种跨域请求获取新闻的方法暂时不用了
function initXqnrDiv(){
	$.ajax({
		url:"http://120.27.5.36:8080/PersonPositionBg/foreground/getNewById?id="+getQueryString("id"),
		//url:"http://localhost:8080/PersonPositionBg/foreground/getNewById?id="+getQueryString("id"),
		//contentType: "application/json",
		//data:JSON.stringify({"id":encodeURI(3)}),
		dataType:"jsonp",
		type: "post",
		jsonpCallback:"jsonpCallback",
		success:function(result){
			console.log(result);
			var data=JSON.parse(result);
			var status=data.status;
			if(status=="ok"){
				var title=data.entity.title;
				$("title").html(title);

				var xqnrDiv=$("#xqnr_div");
				xqnrDiv.empty();
				xqnrDiv.append(title);

				var xqnrDiv2=$("#xqnr_div2");
				xqnrDiv2.empty();
				xqnrDiv2.append(data.entity.content);
			}
			else{
				
			}
		}
	});
}
*/
</script>
</head>
<body>
<header class="hotel-header transparent">
	<div class="layui-fluid">
		<div class="layui-row">
			<div id="menuzord" class="menuzord p-0 head h70">
				<a href="index.html" class="menuzord-brand custom-logo-link">
					<img src="img/homePage/logoL.png" class="custom-logo" alt="logo">
				</a>
				<div class="menuzord-menu shower111 pcNav f_r">
					<ul>
						<li>
							<a href="index.html">首页</a>
						</li>
						<li>
							<a href="dangerTrade.html">危化行业</a>
						</li>
						<li>
							<a href="productShow.html">产品展示</a>
						</li>
						<li>
							<a href="casus.html">项目案例</a>
						</li>
						<li class="check cur">
							<a href="new.html">新闻动态</a>
						</li>
						<li>
							<a href="contactUs.html">联系我们</a>
						</li>
					</ul>
					<div class="move-bg shower222"></div>
				</div>
			</div>
		</div>
		<!--/row-->
	</div>
</header>

<div class="xqnr_div" id="xqnr_div">
<%=rs("title")%>
</div>
<div class="xqnr_div2" id="xqnr_div2">
<%=rs("content")%>
</div>

<div class="space_div"></div>

<div class="foot_div">
	<div class="content_div">
		<div class="space_div"></div>
		<div class="row_div">公司名称：青岛华凌科技有限公司</div>
		<div class="row_div">咨询热线：0532-55588351&nbsp;&nbsp;15712773653（微信同号）</div>
		<div class="row_div">邮箱地址：qdhualing@126.com</div>
		<div class="row_div">公司地址：青岛市北中央商务区敦化路136号西王大厦1606</div>
	</div>
	<div class="bah_div">
		青岛华凌科技有限公司  <a href="https://beian.miit.gov.cn" target="_blank" style="color:#999;">鲁ICP备19062226号-4</a>
	</div>
</div>
</body>
</html>
