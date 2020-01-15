var charts = [];
window.onresize = function() {
	if (charts.length > 0) {
		for (var i = 0; i < charts.length; i++) {
			charts[i].resize()
		}
	}
}
//雷达图
function radar_chart(chart, data, tit) {
	var color = ["#00eed5", "#ff3a3a", "#12eb69", "#fffc12", ]
	var series = []
	for (var i = 0; i < data.data.length; i++) {
		var item = {
			name: "数据分析",
			type: "radar",
			data: [{
				name: data.data[i].name,
				value: data.data[i].data
			}]
		}
		series.push(item)
	}
	if (echarts.getInstanceByDom(chart)) {
		var mychart = echarts.getInstanceByDom(chart);
		mychart.setOption({
			radar: {
				indicator: data.xdata,
			},
			series: series
		})
	} else {
		var mychart = echarts.init(chart);
		var option = {
			color:color,
			title: {
				text: tit,
				textStyle: {
					color: "#eef4f7",
					fontSize: "16",
					fontWeight: "normal"
				},
			},
			tooltip: {},
			radar: {
				name: {
					textStyle: {
						color: '#fff',
					}
				},
				splitLine: {
					lineStyle: {
						color: "#126487"
					}
				},
				splitArea: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#126487'
					}
				},
				indicator: data.xdata,
			},
			series: series
		}
		mychart.setOption(option)
		charts.push(mychart)
	}
}
//折线图
function line_chart(chart, data, tit) {
	var color = ["#f83c3c", "#0ce052", "#efc10a", "#fc7919", ]
	var series = []
	for (var i = 0; i < data.data.length; i++) {
		var item = {
			name: data.data[i].name,
			type: "line",
			symbol: "circle",
			data: data.data[i].data
		}
		series.push(item)
	}
	if (echarts.getInstanceByDom(chart)) {
		var mychart = echarts.getInstanceByDom(chart);
		mychart.setOption({
			xAxis: {
				data: data.xdata,
			},
			series: series
		})
	} else {
		var mychart = echarts.init(chart);
		var option = {
			color: color,
			title: {
				text: tit,
				textStyle: {
					color: "#eef4f7",
					fontSize: "16",
					fontWeight: "normal"
				},
			},
			legend: {
				right:"center",
				align:"left",
				textStyle: {
					color: "#eef4f7",
				},
			},
			tooltip: {
				trigger: 'axis',

				axisPointer: {
					type: "line",
				}
			},
			xAxis: {
				axisTick: {
					alignWithLabel: true,
				},
				axisLabel: {
					color: "#b0dde9",
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: "#34788d"
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: "#34788d"
					}
				},
				data: data.xdata
			},
			yAxis: {
				axisLabel: {
					color: "#b0dde9",
				},
				axisLine: {
					lineStyle: {
						color: "#34788d"
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: "#34788d"
					}
				},
			},
			series: series
		}
		mychart.setOption(option)
		charts.push(mychart)
	}
}
//柱状图
function bar_chart(chart, data, tit) {
	if (echarts.getInstanceByDom(chart)) {
		var mychart = echarts.getInstanceByDom(chart);
		mychart.setOption({
			xAxis: {
				data: data.xdata,
			},
			series: [{
				name: "数量",
				data: data.data
			}]
		})
	} else {
		var mychart = echarts.init(chart);
		var option = {
			title: {
				text: tit,
				textStyle: {
					color: "#eef4f7",
					fontSize: "16",
					fontWeight: "normal"
				},
			},
			tooltip: {
				trigger: 'axis',

				axisPointer: {
					type: "shadow",
				}
			},
			xAxis: {
				nameTextStyle: {
					color: "#d9ebf0"
				},
				axisLabel: {
					rotate: "-45",
					color: "#99cfdf",
					interval: 0,
					formatter: function(value) {
						if (value.length > 5) {
							return value.slice(0, 5) + "..."
						} else {
							return value
						}
					}
				},
				axisTick: {
					show: false,
					alignWithLabel: true
				},
				axisLine: {
					lineStyle: {
						color: "#1b5d70"
					}
				},
				data: data.xdata
			},
			yAxis: {
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#99cfdf",
				},
				axisLine: {
					lineStyle: {
						color: "#1b5d70"
					}
				},
				splitLine: {
					lineStyle: {
						color: "#1b5d70"
					}
				}
			},
			dataZoom: {
				type: "slider",
				show: true,
				showDetail: false,
				textStyle: {
					color: "#fff",
				},
				end: 50,
			},
			series: [{
				name: "数量",
				type: "bar",
				itemStyle: {
					color: "#28bae3"
				},
				label: {
					show: true,
					position: "top",
					color: "#fff"
				},
				data: data.data
			}]
		}
		mychart.setOption(option)
		charts.push(mychart)
	}
}
//弹窗
function pop_data(point){
	if(point){
		if("type" in point){
			$.ajax({
				type:"get",
				url:urll+"/req/get_ip_pop?name="+point.name+"&sort="+point.sort+"&type="+point.type,
				async: true,
				success:function(res){
					if(res.error_code==0){
						gx.$refs.popup.title = point.name
						gx.$refs.popup.point = res.data
						gx.$nextTick(function(){
							gx.$refs.popup.ispopup = true
						})
					}else{
						alert(res.msg)
					}
				},
				error:function(){
					alert("系统错误请联系管理员")
				}
			})
		}
	}
}
var position = [{name:"l1",val:[60,50]},
				{name:"l2",val:[60,35]},
				{name:"l3",val:[60,20]},
				{name:"r1",val:[150,50]},
				{name:"r2",val:[150,35]},
				{name:"r3",val:[150,20]},
				]
var attack = {  GB:{name:"英国",url:"GB",size:[132,219]},
				NL:{name:"荷兰",url:"NL",size:[164,195]},
				US:{name:"美国",url:"US",size:[213,164]},
				CN:{name:"中国",url:"CN",size:[241,199]},
				RU:{name:"俄罗斯",url:"RU",size:[216,129]},
				NL:{name:"荷兰",url:"NL",size:[164,195]},
				JP:{name:"日本",url:"JP",size:[298,199]},
				BE:{name:"比利时",url:"BE",size:[189,153]},
				BG:{name:"保加利亚",url:"BG",size:[236,158]},
				CL:{name:"智利",url:"CL",size:[141,190]},
				VN:{name:"越南",url:"VN",size:[112,239]},
				DE:{name:"德国",url:"DE",size:[147,210]},
				KR:{name:"韩国",url:"KR",size:[142,228]},
				SG:{name:"新加坡",url:"SG",size:[293,174]},
				CA:{name:"加拿大",url:"CA",size:[181,146]},
				SE:{name:"瑞典",url:"SE",size:[118,275]},
			}
var grounp = {
	l1:[[60,50],[60.7,50],[61.4,50],[60.7,50.5],[60.7,49.5],[60,49],[60,48.5],[61.4,50.5],[61.4,49.5]],
	l2:[[60,35],[60.7,35],[61.4,35],[60.7,35.5],[60.7,34.5],[60,34],[60,33.5],[61.4,35.5],[61.4,34.5]],
	l3:[[60,20],[60.7,20],[61.4,20],[60.7,20.5],[60.7,19.5],[60,19],[60,18.5],[61.4,20.5],[61.4,19.5]],
	r1:[[150,50],[150.7,50],[151.4,50],[150.7,50.5],[150.7,49.5],[150,49],[150,48.5],[151.4,50.5],[151.4,49.5]],
	r2:[[150,35],[150.7,35],[151.4,35],[150.7,35.5],[150.7,34.5],[150,34],[150,33.5],[151.4,35.5],[151.4,34.5]],
	r3:[[150,20],[150.7,20],[151.4,20],[150.7,20.5],[150.7,19.5],[150,19],[150,18.5],[151.4,20.5],[151.4,19.5]],
}
//地图
function create_map(chart,data,showHoney,showPredict,showLoophole){
	if(data!=undefined){
		//国家攻击点&攻击国家showHoney&showPredict
		var attacklist=[]
		var grounplist=[]
		
		//预测攻击线showPredict&showLoophole
		var iplinesH = []
		var iplinesWH = []
		
		//蜜罐线showHoney
		var honeylines = []
		
		//预测被攻击点showLoophole
		var scatterlistH = []
		var scatterlistWH = []
		
		//国内攻击点
		var ipattacklist = []
		var honeyattacklist = []
		var scatterlist = []
		
		//震动点showPredict&showLoophole
		var effectScatterlistWH = []
		var effectScatterlistH = []
		
		
		for(var i=0;i<data.attack_area.length;i++){
			let item = {
				name:data.attack_area[i].area_pic,
				value: position[i].val,
				symbol:'image://img/country/'+data.attack_area[i].area_pic+'.png',
				symbolSize:attack[data.attack_area[i].area_pic].size,
				tooltip:{
					show:false,
				}
			}
			attacklist.push(item)
			var grounps = data.attack_area[i].group
			for(var j=0;j<grounps.length;j++){
				let g_item = {
					name:data.attack_area[i].area_pic+"-"+grounps[j],
					value:grounp[position[i].name][j],
					tooltip:{
						show:true,
						formatter:"攻击组织:"+grounps[j]
					},
				}
				g_item.tooltip.show = !(grounps[j]=="all")
				grounplist.push(g_item)
			}
		}
		//IP
		//IP点
		var H = []
		var W = []
		var effH = []
		var effW = []
		for(var t=0;t<data.ip.points.length;t++){
			let item = {
				name:data.ip.points[t].name,
				value:data.ip.points[t].value,
				type:data.ip.points[t].type,
				risk:data.ip.points[t].risk,
				com_name:data.ip.points[t].com_name,
				sort:data.ip.points[t].sort,
				symbol:'image://img/icon/'+data.ip.points[t].pic_id+'.png',
				tooltip:{
					formatter:data.ip.points[t].com_name==""?data.ip.points[t].name:data.ip.points[t].com_name
				},
			}
			if(data.ip.points[t].risk=="0"){//安全
				if(data.ip.points[t].pic_id==""){//安全无分类
					item.symbol = null
					item.itemStyle={
						color:"#3CD500"
					}
					item.symbolSize = 5
				}
				W.push(item)
				if(data.ip.points[t].attack=="1"){//攻击
					effW.push(item)
				}
			}else{//预警
				if(data.ip.points[t].pic_id==""){//预警无分类
					item.symbol = null
					item.itemStyle={
						color:"#fa0522"
					}
					item.symbolSize = 5
				}else{//预警有分类
					item.symbol = 'image://img/icon/'+data.ip.points[t].pic_id+'_r.png'
				}
				H.push(item)
				if(data.ip.points[t].attack=="1"){//攻击
					effH.push(item)
				}
			}
		}
		scatterlistWH = W.concat(H)
		scatterlistH = H
		effectScatterlistWH = effW.concat(effH)
		effectScatterlistH = effH
		//IP连线
		for(var o=0;o<data.ip.lines.length;o++){
			let start = []
			//判断起点
			if(data.ip.lines[o].group=="all"){
				for(var i=0;i<attacklist.length;i++){
					if(data.ip.lines[o].area==attacklist[i].name){
						start = attacklist[i].value
					}
				}
			}else{
				for(var i=0;i<grounplist.length;i++){
					if((data.ip.lines[o].area+"-"+data.ip.lines[o].group)==grounplist[i].name){
						start = grounplist[i].value
					}
				}
			}
			//轮询终点
			for(var u=0;u<data.ip.lines[o].coords.length;u++){
				let item = {coords:[start,data.ip.lines[o].coords[u].value]}
				if(data.ip.lines[o].coords[u].risk=="0"){
					iplinesWH.push(item)
				}else{
					iplinesH.push(item)
					iplinesWH.push(item)
				}
				
			}
		}
		if(data.ip.inchina){
			//国内攻击点
			for(var r=0;r<data.ip.inchina.points.length;r++){
				let item = {
					name:data.ip.inchina.points[r].name,
					value:data.ip.inchina.points[r].value,
					type:data.ip.inchina.points[r].type,
					risk:data.ip.inchina.points[r].risk,
					com_name:data.ip.inchina.points[r].com_name,
					sort:data.ip.inchina.points[r].sort,
					symbol:'image://img/icon/'+data.ip.inchina.points[r].pic_id+'.png',
					tooltip:{
						formatter:data.ip.inchina.points[r].com_name==""?data.ip.inchina.points[r].name:data.ip.inchina.points[r].com_name
					},
				}
				ipattacklist.push(item)
			}
			//国内攻击连线
			for(var w=0;w<data.ip.inchina.lines.length;w++){
				let item = {coords:data.ip.inchina.lines[w].value}
				if(data.ip.inchina.lines[w].risk=="0"){
					iplinesWH.push(item)
				}else{
					iplinesH.push(item)
					iplinesWH.push(item)
				}
			}
		}
		
		//蜜罐
		//蜜罐点
		for(var t=0;t<data.honey_jar.points.length;t++){
			let item = {
				name:data.honey_jar.points[t].name,
				value:data.honey_jar.points[t].value,
				type:data.honey_jar.points[t].type,
				risk:data.honey_jar.points[t].risk,
				com_name:data.honey_jar.points[t].com_name,
				sort:data.honey_jar.points[t].sort,
				symbolSize:20,
				symbol:'image://img/icon/'+data.honey_jar.points[t].pic_id+'.png',
				tooltip:{
					formatter:data.honey_jar.points[t].com_name==""?data.honey_jar.points[t].name:data.honey_jar.points[t].com_name
				},
			}
			scatterlist.push(item)
		}
		//蜜罐连线
		for(var o=0;o<data.honey_jar.lines.length;o++){
			let start = []
			//判断起点
			if(data.honey_jar.lines[o].group=="all"){
				for(var i=0;i<attacklist.length;i++){
					if(data.honey_jar.lines[o].area==attacklist[i].name){
						start = attacklist[i].value
					}
				}
			}else{
				for(var i=0;i<grounplist.length;i++){
					if((data.honey_jar.lines[o].area+"-"+data.honey_jar.lines[o].group)==grounplist[i].name){
						start = grounplist[i].value
					}
				}
			}
			//轮询终点
			for(var u=0;u<data.honey_jar.lines[o].coords.length;u++){
				let item = {coords:[start,data.honey_jar.lines[o].coords[u]]}
				honeylines.push(item)
			}
		}
		//蜜罐
		if(data.honey_jar.inchina){
			//国内攻击点
			for(var r=0;r<data.honey_jar.inchina.points.length;r++){
				let item = {
					name:data.honey_jar.inchina.points[r].name,
					value:data.honey_jar.inchina.points[r].value,
					type:data.honey_jar.inchina.points[r].type,
					risk:data.honey_jar.inchina.points[r].risk,
					com_name:data.honey_jar.inchina.points[r].com_name,
					sort:data.honey_jar.inchina.points[r].sort,
					symbol:'image://img/icon/'+data.honey_jar.inchina.points[r].pic_id+'.png',
					tooltip:{
						formatter:data.honey_jar.inchina.points[r].com_name==""?data.honey_jar.inchina.points[r].name:data.honey_jar.inchina.points[r].com_name
					},
				}
				honeyattacklist.push(item)
			}
			//国内攻击连线
			for(var w=0;w<data.honey_jar.inchina.lines.length;w++){
				let item = {coords:data.honey_jar.inchina.lines[w]}
				honeylines.push(item)
			}
		}
	}
	console.log(honeyattacklist,honeylines)
	if (echarts.getInstanceByDom(chart)) {
		var mychart = echarts.getInstanceByDom(chart);
		mychart.setOption({
			series:[
				{
					name:"预警攻击点",
					data: []
				},
			]
		})
		mychart.setOption({
			series: [
				{
					name:"国家",
					data: (showHoney||showPredict)?attacklist:[]
				},
				{
					name:"国家攻击点",
					data: (showHoney||showPredict)?grounplist:[]
				},
				{
					name:"ip流炮",
					data: showPredict?(showLoophole?iplinesH:iplinesWH):[]
				},
				{
					name:"蜜罐流炮",
					data: showHoney?honeylines:[]
				},
				{
					name:"地图点",
					data: scatterlist
				},
				{
					name:"国内攻击点",
					data:showHoney?(showPredict?unique(honeyattacklist.concat(ipattacklist)):honeyattacklist):(showPredict?ipattacklist:[])
				},
				{
					name:"预警攻击点",
					data: showPredict?[]:(showLoophole?scatterlistH:scatterlistWH)
				},
				{
					name:"被攻击点",
					data: showPredict?(showLoophole?effectScatterlistH:effectScatterlistWH):[] 
				}
			]
		})
	} else {
		var mychart = echarts.init(chart);
		var option = {
			geo:[
				{//代替series_map
					map: 'china',
					roam: true, //缩放
					center:[104.406357,34.666856],
					zoom: 1,
					scaleLimit:{
						min:1,
					},
					itemStyle:{
						areaColor:"rgba(5,67,86,.6)",//地图块颜色
						borderColor:'#13d0df',//边线颜色
						borderWidth:'1',//线宽
					},
					emphasis:{
						label:{
							color:"#fff",
						},
						itemStyle:{
							areaColor:"rgba(5,67,86,1)",//地图块颜色
						}
					}
				},
			],
			tooltip:{
				show:true,
			},
			series:[
				{
					name: '国家',
					type: 'scatter',
					coordinateSystem: 'geo',
					silent:true,
					data: (showHoney||showPredict)?attacklist:[]
				},
				{
					name: '国家攻击点',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel:1,
					itemStyle:{
						color:"#fa0522"
					},
					data: (showHoney||showPredict)?grounplist:[]
				},
				{
					name: 'ip流炮',
					type: 'lines',
					coordinateSystem: 'geo',
					zlevel: 2,
					symbol: ['none', 'none'],
					silent:true,
					effect: {
						show: true,
						period: 4, //箭头指向速度，值越小速度越快
						trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
						symbol: 'arrow', //箭头图标
						symbolSize: 6, //图标大小
						color:'red',
					},
					lineStyle: {
						color:'#17e69b',
						width: 0,
						opacity: 0,
						curveness: 0.1,
						type:'dotted',
					},
					data: showPredict?(showLoophole?iplinesH:iplinesWH):[]
				},
				{
					name: '蜜罐流炮',
					type: 'lines',
					coordinateSystem: 'geo',
					zlevel: 2,
					symbol: ['none', 'none'],
					silent:true,
					effect: {
						show: true,
						period: 4, //箭头指向速度，值越小速度越快
						trailLength: 0.01, //特效尾迹长度[0,1]值越大，尾迹越长重
						symbol: 'arrow', //箭头图标
						symbolSize: 6, //图标大小
						color:'#F8D800',
					},
					lineStyle: {
						color:'#17e69b',
						width: 0,
						opacity: 0,
						curveness: 0.1,
						type:'dotted',
					},
					data: showHoney?honeylines:[]
				},
				{
					name: '地图点',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel:3,
					symbolSize:15,
					data: scatterlist
				},
				{
					name: '国内攻击点',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel:3,
					symbolSize:15,
					data:showHoney?(showPredict?unique(honeyattacklist.concat(ipattacklist)):honeyattacklist):(showPredict?ipattacklist:[])
				},
				{
					name: '预警攻击点',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel:4,
					symbolSize:15,
					data: showPredict?[]:(showLoophole?scatterlistH:scatterlistWH)
				},
				{
					name: '被攻击点',
					type: 'effectScatter',
					coordinateSystem: 'geo',
					zlevel:5,
					symbolSize:10,
					rippleEffect:{
						period:2,
						scale:2.5,
						brushType:'stroke',
					},
					data: showPredict?(showLoophole?effectScatterlistH:effectScatterlistWH):[]
				}
			],
		}
		mychart.setOption(option)
		mapclick(mychart)
		charts.push(mychart)
	}
}
//点击事件
function mapclick(chart){
	chart.on("click",function(params){
		pop_data(params.data)
	})
}