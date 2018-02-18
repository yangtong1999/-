window.onload = function(){
//创建XMLHttpRequest对象。
	var xmlhttp = null;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");
	}
//连接服务器
	xmlhttp.open("GET","http://rapapi.org/mockjsdata/31800/synaesthesia-design-language",true);
//发送数据或请求
	xmlhttp.send("");
//监听响应状态
	xmlhttp.onreadystatechange=function(){	
		if(xmlhttp.readyState==4){ //连接服务器成功
			//判断服务器响应的HTTP状态码
			if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status==304){
			//解析响应文本 （json） content（js）
	 	    var content = JSON.parse(xmlhttp.responseText) 
	 		document.getElementById("containter").innerHTML = "<img  src ='"+content.image1+"'>"
           +"<img src='"+content.image2+"'>"
			+"<img src='"+content.image3+"'>"
			+"<img src='"+content.image4+"'>"
			+"<img src='"+content.image5+"'>"
			+"<img src='"+content.image6+"'>"
			}else{
				alert("请求失败");
			}
		}
	}
	console.log("ajax外的操作");
}