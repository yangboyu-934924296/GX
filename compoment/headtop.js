Vue.component("headtop",{
	props:['index'],
	data:function(){
		return{
			cnt:this.index,
		}
	},
	created(){},
	mounted(){},
	methods:{
		
	},
	template:`
		
		<div class="new-headtop flex">
		
			<div class="new-head-left flex">
				
			</div>
			<div class="new-head-mid"><span class="new-head">风险态势关联分析平台</span></div>
			<div class="new-head-right flex">
				
			</div>
		</div>
	`
})