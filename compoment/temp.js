Vue.component('componenta', {
	props: ["current",'pages'],
	data: function() {
		return {
			current_page: this.current, //当前页 
			//pages: this.page, //总页数 
			changePage: '', //跳转页 
			//nowIndex: 0
		}
	},
	computed: {
		show: function() {
			return this.pages && this.pages != 1
		},
		efont: function() {
			if(this.pages <= 7) return false;
			return this.current_page > 5
		},
		indexs: function() {
			var left = 1,
				right = this.pages,
				ar = [];
			if(this.pages >= 7) {
				if(this.current_page > 5 && this.current_page < this.pages - 4) {
					left = Number(this.current_page) - 3;
					right = Number(this.current_page) + 3;
				} else {
					if(this.current_page <= 5) {
						left = 1;
						right = 7;
					} else {
						right = this.pages;

						left = this.pages - 6;
					}
				}
			}
			while(left <= right) {
				ar.push(left);
				left++;
			}
			return ar;
		},
	},
	methods: {
		Pageplus() {
			this.current_page++
			this.$emit('enlarge-text',this.current_page)
		},
		Pageminus() {
			this.current_page--
			this.$emit('enlarge-text',this.current_page)
		},
		jumpPage: function(id) {
			this.current_page = id;
			this.$emit('enlarge-text',this.current_page)
		},
		reset(){
			this.current_page = 1
		},
	},
	template: `<div class="page" v-show="show">
					<div class="pagelist">
						<span class="jump" v-show="current_page>1" @click="Pageminus">上一页</span>
						<span v-show="current_page>5" class="jump" @click="jumpPage(1)">1</span>
						<span class="ellipsis" v-show="efont">...</span>
						<span class="jump" v-for="num in indexs" :class="{bgprimary:current_page==num}" @click="jumpPage(num)">{{num}}</span>
						<span class="ellipsis" v-show="efont&&current_page<pages-4">...</span>

						<span v-show="current_page<pages" class="jump" @click="Pageplus">下一页</span>
						<span v-show="current_page<pages-1" class="jump" @click="jumpPage(pages)">{{pages}}</span>

						<span class="jumppoint">跳转到：</span>
						<span class="jumpinp"><input type="text" v-model="changePage"></span>
						<span class="jump gobtn" @click="jumpPage(changePage)">GO</span>
						
					</div>
				</div>`

})