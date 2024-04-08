import { reactive } from "vue";
export const agendaData = reactive([
	{
		title: " 4月7日",
		videoItem: {
		  imgUrl:
		    "https://img2023.gcsis.cn/2023/5/3692fcd308d94db8b345f06d65a2b278.jpg",
		  titile: "格致论道@西湖论剑",
		  time: "18:00 - 21:00",
		  address: "杭州市滨江区文化中心剧院一层",
			type:{
				type:0,
				title:"观看回放",
				icon:"refreshempty"
			}
		},
	},
	{
		title: " 4月8日",
		videoItem: {
		  imgUrl:
		    "https://tse1-mm.cn.bing.net/th/id/OIP-C.WRrUxt1eqNtzpAKRPGvsEwHaEK?w=281&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
		  titile: "2024年国际互联网大会",
		  time: "2024.04.08 - 2024.04.09",
		  address: "杭州市滨江区文化中心剧院一楼",
			type:{
				type:1,
				title:"进行中",
				icon:"checkmarkempty"
			}
		},
	},
	{
		title: " 4月9日",
		videoItem: {
		  imgUrl:
		    "https://prod-tx-mdn-1305533294.file.myqcloud.com/static/1775046527844352.jpg",
		  titile: "AI引领 智启新程",
		  time: "2024.04.09 - 2024.04.11",
		  address: "杭州洲际酒店·国际厅2厅",
			type:{
				type:2,
				title:"马上报名",
				icon:"paperplane"
			}
		},
	}
])