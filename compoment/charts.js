Vue.component("charts",{
	props:['index'],
	data:function(){
		return{
			show_chart:false,
			risk1:"",//预警数据
			risk2:"",//工业互联网风险数据
			risk3:"",//工业互联网数据
		}
	},
	created(){},
	mounted(){},
	methods:{
		showchart(){
			var that = this
			that.show_chart = !that.show_chart
		},
	},
	template:`
		<div class="index-chart-box" :class="{'on':show_chart}">
			<!-- show-chart -->
			<b @click="showchart" class="showchart" :class="{'on':show_chart}"></b>
			<!-- search-page -->
			<!--<a href="search.html" target="_blank" class="searchpage" title="资产搜索"><b class="el-icon-search"></b></a>-->
			<!-- charts -->
			<div class="index-charts flex">
				<div class="charts" id="threat-grounp"></div>
				<div class="charts" id="device-risk"></div>
				<div class="charts" id="risk-state">
					<b>风险态势</b>
					<span class="risk1-name">工业互联网预警ip</span><span class="risk1-val">{{risk1}}</span>
					<span class="risk2-name">工业互联网风险ip</span><span class="risk2-val">{{risk2}}</span>
					<span class="risk3-name">工业互联网ip</span><span class="risk3-val">{{risk3}}</span>
				</div>
				<div class="charts" id="company"></div>
			</div>
			<!-- border -->
			<div class="index-chart-box-footer flex">
				<div class="chart-box-footer-left"></div>
				<div class="chart-box-footer-mid"></div>
				<div class="chart-box-footer-right"></div>
			</div>
		</div>
	`
})