Vue.component("popup",{
	props:[],
	data:function(){
		return {
			ispopup:false,
			title:"122.161.1.1",
			point:{
				list:{
					'com':[{'con':'哈药','name':'企业名称'},],
					'ip':[{'con':'1.1.1.1','name':'ip'},]
				},
				table:{
				}
			},
		}
	},
	created(){},
	mounted(){},
	methods:{},
	watch:{
		ispopup(val){
			if(val){
				$(".hide-con").hide()
			}
		}
	},
	template:`
		<div>
			<el-dialog :title="title" :visible.sync="ispopup" width="60%" center>
			  <div class="popup-con scroll">
				  <div v-if="!(point.sort=='end'||point.sort=='start')" style="text-align:right">
					<a :href="'company_portrait.html?com_id='+point.com_id" target="_blank"><el-button v-if="!(point.com_id=='')" type="warning" icon="el-icon-info" size="mini" round>企业画像</el-button></a>
					<a :href="'assets_portrait.html?ip='+title" target="_blank"><el-button type="warning" icon="el-icon-info" size="mini" round>资产画像</el-button></a>
				  </div>
				  <div class="popup-con-list company">
					  <ul class="flex" >
						  <li class="flex" :class="{'all':index==(point.list.com.length-1)}" v-for="(item,index) in point.list.com" :key="item.id">
							<span>{{item.name}}:</span>
							<div class="flex " :class="{'flex-between':item.con.length>1}">
								<span :class="{'all':item.con.length==1}" v-for="ite in item.con" :key="ite.id">{{ite}}</span>
							</div>
						  </li>
					  </ul>
				  </div>
				  <div class="popup-con-list ip">
					  <ul class="flex" >
						  <li class="flex"  v-for="(item,index) in point.list.ip" :key="item.id">
							<span>{{item.name}}:</span>
							<div class="flex " :class="{'flex-between':item.con.length>1}">
								<span :class="{'all':item.con.length==1}" v-for="ite in item.con" :key="ite.id">
										<b>{{ite}}</b>
								</span>
							</div>
						  </li>
					  </ul>
				  </div>
				  <table v-if="!($.isEmptyObject(point.table))" class="yby_table popup-table">
						<tr>
							<th v-for="item in point.table.th" :key="item.id">{{item}}</th>
						</tr>
						<tr v-for="item in point.table.td" :key="item.id">
							<td v-if="item.date">{{item.date}}</td>
							<td v-if="item.AgainstIp">{{item.AgainstIp}}</td>
							<td v-if="item.DestinationIp">{{item.DestinationIp}}</td>
							<td v-if="item.attacks">{{item.attacks}}</td>
							<td v-if="item.intelligence">{{item.intelligence}}</td>
							<td v-if="item.frequency">{{item.frequency}}</td>
							<td v-if="item.name">{{item.name}}</td>
							<td v-if="item.number">{{item.number}}</td>
							<td v-if="item.deal">{{item.deal}}</td>
							<td v-if="item.type">{{item.type}}</td>
							<td v-if="item.message">{{item.message}}</td>
						</tr>
				  </table>
			  </div>
			</el-dialog>
		</div>
	`
})