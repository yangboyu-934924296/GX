var charts = [];
window.onresize = function() {
	if (charts.length > 0) {
		for (var i = 0; i < charts.length; i++) {
			charts[i].resize()
		}
	}
}
//地区热力
function heatmap(chart,data,min,max) {
	if (echarts.getInstanceByDom(chart)) {
		var mychart = echarts.getInstanceByDom(chart);
		mychart.setOption({
			visualMap:{
				min: min,
				max: max,
			},
			series: [
				{
					name: 'mapSer',
					data: data
				}
			]
		})
	} else {
		var mychart = echarts.init(chart);
		var option = {
			tooltip: {
			        show: true,
			        formatter: function(params) {
			            return params.name + '：' + params.data['value']
			        },
			    },
			    visualMap: {
			        type: 'continuous',
			        orient: 'horizontal',
			        itemWidth: 10,
			        itemHeight: 80,
			        text: ['高', '低'],
			        showLabel: true,
			        seriesIndex: [0],
			        min: min,
			        max: max,
			        inRange: {
			            color: ['rgba(5,67,86,.6)', '#dd6b06', '#c31c1c']
			        },
			        textStyle: {
			            color: '#7B93A7'
			        },
			    },
			    geo: {
			        map: 'china',
			        roam: false, //缩放
			        center: [104.406357, 34.666856],
			        zoom: 1,
			        scaleLimit: {
			        	min: 1,
			        },
			        itemStyle: {
			        	areaColor: "rgba(5,67,86,.6)", //地图块颜色
			        	borderColor: '#13d0df', //边线颜色
			        	borderWidth: '1', //线宽
			        },
			        emphasis: {
			        	label: {
			        		color: "#fff",
			        	},
			        	itemStyle: {
			        		areaColor: "rgba(5,67,86,1)", //地图块颜色
			        	}
			        }
			    },
			    series: [{
			        name: 'mapSer',
			        type: 'map',
			        roam: false,
			        geoIndex: 0,
			        label: {
			            show: false,
			        },
			        data: data
			    }]
		}
		mychart.setOption(option)
		charts.push(mychart)
	}
}
//线
function create_line(chart,data,title,color){
	var color = color || ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
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
		mychart.clear()
		var option = {
			color: color,
			title: {
				text: "{a|} "+title,
				textStyle: {
					color: "#d9ebf0",
					fontSize: "16",
					fontWeight: "normal",
					rich:{
						a:{
							width:10,
							height:10,
							borderRadius:5,
							backgroundColor:"#17cced"
						}
					}
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
			grid: {
			  left: '15%',
			  right:"15%"
			},
			xAxis: {
				axisTick: {
					alignWithLabel: true,
				},
				axisLabel: {
					rotate: "-45",
					color: "#b0dde9",
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: "#34788d"
					}
				},
				splitLine: {
					show: false,
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
	} else {
		var mychart = echarts.init(chart);
		var option = {
			color: color,
			title: {
				text: "{a|} "+title,
				textStyle: {
					color: "#d9ebf0",
					fontSize: "16",
					fontWeight: "normal",
					rich:{
						a:{
							width:10,
							height:10,
							borderRadius:5,
							backgroundColor:"#17cced"
						}
					}
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
			grid: {
			  left: '15%',
			  right:"15%"
			},
			xAxis: {
				axisTick: {
					alignWithLabel: true,
				},
				axisLabel: {
					rotate: "-45",
					color: "#b0dde9",
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: "#34788d"
					}
				},
				splitLine: {
					show: false,
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
function craete_bar_row(chart, data, title,color) {
	var color = color || ['#28bae3','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
	var series = []
	for (var i = 0; i < data.data.length; i++) {
		var item = {
			name: data.data[i].name,
			type: "bar",
			barWidth:"30%",
			label: {
				show: true,
				position: "top",
				color: "#fff"
			},
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
			color:color,
			title: {
				text: "{a|} "+title,
				textStyle: {
					color: "#d9ebf0",
					fontSize: "16",
					fontWeight: "normal",
					rich:{
						a:{
							width:10,
							height:10,
							borderRadius:5,
							backgroundColor:"#17cced"
						}
					}
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
					type: "shadow",
				}
			},
			grid: {
			  left: '15%',
			  right:"15%"
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
				height: 12,
				showDetail: false,
				textStyle: {
					color: "#fff",
				},
				start:0,
				end: 50,
			},
			series: series
		}
		mychart.setOption(option)
		charts.push(mychart)
	}
}
//饼环图
function craete_pie_ring(chart, patch,vuln, title) {
	var pie = []
	var ring = []
	for(var i=0;i<patch.xdata.length;i++){
		let item = {
			name:patch.xdata[i],
			value:patch.data[i],
		}
		pie.push(item)
	}
	for(var t=0;t<vuln.xdata.length;t++){
		let item = {
			name:vuln.xdata[t],
			value:vuln.data[t]
		}
		ring.push(item)
	}
	if (echarts.getInstanceByDom(chart)) {
		var mychart = echarts.getInstanceByDom(chart);
		mychart.setOption({
			series: [{
				name: "漏洞威胁",
				data: ring
			},
			{
				name: "补丁",
				data: pie
			}
			]
		})
	} else {
		var mychart = echarts.init(chart);
		var option = {
			color:["#0f9aea","#16c397","#dedb0a",'#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
			title: {
				text: "{a|} "+title,
				textStyle: {
					color: "#d9ebf0",
					fontSize: "16",
					fontWeight: "normal",
					rich:{
						a:{
							width:10,
							height:10,
							borderRadius:5,
							backgroundColor:"#17cced"
						}
					}
				},
			},
			series: [
				{
					name: '补丁',
					type: 'pie',
					radius : '55%',
					center: ['50%', '60%'],
					data:pie,
					label:{
						color:"#fff",
						position: 'inner',
						formatter:function(params){
							return params.name+"\n"+Math.round(params.percent)+"%"
						}
					},
					itemStyle: {
						normal:{
							borderWidth: 3,
							borderColor: 'rgba(2,40,54,.55)'
						},
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 10,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
				},
				{
					name: '漏洞威胁',
					type: 'pie',
					radius: ['68%', '80%'],
					center: ['50%', '60%'],
					silent:true,
					data:ring,
					label:{
						fontSize: "16",
						color:"#fff",
						formatter:function(params){
							return params.name+"\n"+Math.round(params.percent)+"%"
						}
					}
				}
			]
		}
		mychart.setOption(option)
		charts.push(mychart)
	}
}
//饼环图
function craete_pie(chart, data, title) {
	if (echarts.getInstanceByDom(chart)) {
		var mychart = echarts.getInstanceByDom(chart);
		mychart.setOption({
			series: [{
				name: "占比",
				data: data
			}
			]
		})
	} else {
		var mychart = echarts.init(chart);
		var option = {
			color:["#0f9aea","#16c397","#dedb0a",'#c23531','#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
			title: {
				text: "{a|} "+title,
				textStyle: {
					color: "#d9ebf0",
					fontSize: "16",
					fontWeight: "normal",
					rich:{
						a:{
							width:10,
							height:10,
							borderRadius:5,
							backgroundColor:"#17cced"
						}
					}
				},
			},
			series: [
				{
					name: '占比',
					type: 'pie',
					radius : '55%',
					center: ['50%', '60%'],
					data:data,
					label:{
						color:"#fff",
						formatter:function(params){
							return params.name+"\n"+Math.round(params.percent)+"%"
						}
					},
					labelLine:{
						length:5,
						length2:15,
					},
					itemStyle: {
						normal:{
							borderWidth: 3,
							borderColor: 'rgba(2,40,54,.55)'
						},
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 10,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
				}
			]
		}
		mychart.setOption(option)
		charts.push(mychart)
	}
}
//排行柱图
function create_bar_top(chart,data,color,num){
	if (echarts.getInstanceByDom(chart)) {
		var mychart = echarts.getInstanceByDom(chart);
		mychart.setOption({
			yAxis: {
				data: data.xdata.reverse(),
			},
			series: [
				{
					name:"数量",
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: color[0]
							}, {
								offset: 1,
								color: color[1]
							}]),
							barBorderRadius: 11,
						}
					},
					data:data.data.reverse()
				}
			]
		})
	} else {
		var mychart = echarts.init(chart);
		var option = {
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
					color: "#99cfdf",
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
				splitLine:{
					show: false,
				}
			},
			grid: {
			  left: '2%',
			  right: '4%',
			  bottom: '14%',
			  top:'2%',
			  containLabel: true
			},
			yAxis: {
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#99cfdf",
					interval: 0,
					formatter: function(value) {
						if (value.length > num) {
							return value.slice(0, num) + "..."
						} else {
							return value
						}
					}
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
				},
				data: data.xdata.reverse()
			},
			series:[
				{
				  name: '数量',
				  type: 'bar',
				  barWidth: '30%',
				  label:{
					  show:true,
					  textStyle:{
						  fontSize:13,
					  }
				  },
				  itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: color[0]
						}, {
							offset: 1,
							color: color[1]
						}]),
						barBorderRadius: 11,
					}
				  },
				  data:data.data.reverse()
				}
			]
		}
		mychart.setOption(option)
		charts.push(mychart)
	}
}
//表盘
function create_dashboard(chart,data,title,color){
	if (echarts.getInstanceByDom(chart)) {
		var mychart = echarts.getInstanceByDom(chart);
		mychart.setOption({
			series: [{
				name: "占比",
				axisLine: {
					show: true,
					lineStyle: {
						width: 30,
						shadowBlur: 0,
						color: [
							[1, color]
						]
					}
				},
				data: [data]
			},
			]
		})
	} else {
		var mychart = echarts.init(chart);
		var option = {
			title: {
				text: "{a|} "+title,
				right:"center",
				textStyle: {
					color: "#d9ebf0",
					fontSize: "16",
					fontWeight: "normal",
					rich:{
						a:{
							width:10,
							height:10,
							borderRadius:5,
							backgroundColor:"#0b7289"
						}
					}
				},
			},
			series: [{
				name: '占比',
				type: 'gauge',
				center: ['50%', '60%'],
				detail: {
					formatter: '{value}%'
				},
				startAngle:180,
				endAngle:0,
				splitNumber:5,
				axisTick: {            
					length: 15,        
					lineStyle: {       
						color: 'auto'
					}
				},
				splitLine: {           
					length: 20,         
					lineStyle: {       
						color: 'auto'
					}
				},
				axisLabel:{
					color:"#fff"
				},
				axisLine: {
					show: true,
					lineStyle: {
						width: 10,
						shadowBlur: 0,
						color:[[1,color]]
					}
				},
				title: {
					show: false
				},
				detail:{
					formatter:"{value}%",
					fontSize:14,
				},
				pointer:{
					width:2
				},
				data:[data]
			}]
		}
		mychart.setOption(option)
		charts.push(mychart)
	}
}
