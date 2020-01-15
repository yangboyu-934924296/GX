Vue.component("footerl",{
	props:[],
	data:function(){
		return{
			view_type:"ip",
		}
	},
	created(){},
	mounted(){},
	methods:{
		show(view_type){
			this.view_type = view_type
			this.$emit('view-type',view_type)
		},
	},
	template:`
		<div class="new-footer flex">
			<div class="new-footer-left">
				
			</div>
			<div class="new-footer-mid flex">
				<div class="flex">
					<span @click="show('ip')" class="ip" :class="{'on':view_type=='ip'}"><i></i><b>IP</b></span>
					<span @click="show('assert')" class="device" :class="{'on':view_type=='assert'}"><i></i><b>设备</b></span>
					<span @click="show('group')" class="grounp" :class="{'on':view_type=='group'}"><i></i><b>组织</b></span>
					<span @click="show('company')" class="company" :class="{'on':view_type=='company'}"><i></i><b>企业</b></span>
				</div>
			</div>
			<div class="new-footer-right">
				
			</div>
		</div>
	`
})