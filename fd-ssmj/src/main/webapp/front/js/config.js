
var projectName = '蜀都天香酒楼管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的订单',
	url: '../order/list.jsp'
},
{
	name: '我的收藏',
	url: '../storeup/list.jsp'
}
]


var indexNav = [

{
	name: '包间预定',
	url: './pages/baojianxinxi/list.jsp'
}, 
{
	name: '菜品',
	url: './pages/caipinxinxi/list.jsp'
}, 
{
	name: '活动资讯',
	url: './pages/news/list.jsp'
},
]

var adminurl =  "http://localhost:8080/fd-ssmj/index.jsp";

var cartFlag = false

var chatFlag = false


chatFlag = true
cartFlag = true


var menu = [{
    "backMenu": [{
        "child": [{
            "buttons": ["修改", "删除"],
            "menu": "用户信息",
            "menuJump": "列表",
            "tableName": "yonghuxinxi"
        }],
        "menu": "用户管理"
    }, {
        "child": [{
            "buttons": ["新增", "修改", "删除"],
            "menu": "类型信息",
            "menuJump": "列表",
            "tableName": "leixing"
        }],
        "menu": "类型管理"
    }, {
        "child": [{
            "buttons": ["新增", "修改", "删除"],
            "menu": "菜品信息",
            "menuJump": "列表",
            "tableName": "caipinxinxi"
        }],
        "menu": "菜品管理"
    }, {
        "child": [{
            "buttons": ["新增", "修改", "删除"],
            "menu": "包间信息",
            "menuJump": "列表",
            "tableName": "baojianxinxi"
        }, {
            "buttons": ["修改", "删除"],
            "menu": "包间预定信息",
            "menuJump": "列表",
            "tableName": "baojianyuy"
        }],
        "menu": "包间管理"
    }, {
        "child": [{
            "buttons": ["新增", "修改", "删除"],
            "menu": "客服管理",
            "tableName": "kefuguanli"
        }, {
            "buttons": ["新增", "修改", "删除"],
            "menu": "轮播图管理",
            "tableName": "lunbotuguanli"
        }, {
            "buttons": ["新增", "修改", "删除"],
            "menu": "活动咨询",
            "tableName": "news"
        }],
        "menu": "系统管理"
    }, {
        "child": [{
            "buttons": [],
            "menu": "已退款订单",
            "tableName": "yituikuandingdan"
        }, {
            "buttons": [],
            "menu": "已支付订单",
            "tableName": "yiwanchengdingdan"
        }],
        "menu": "订单管理"
    }],
    "frontMenu": [],
    "roleName": "管理员",
    "tableName": "users"
}, {
    "backMenu": [{
        "child": [{
            "buttons": ["修改"],
            "menu": "用户信息",
            "menuJump": "列表",
            "tableName": "yonghuxinxi"
        }],
        "menu": "用户管理"
    }, {
        "child": [{
            "buttons": ["购买"],
            "menu": "菜品信息",
            "menuJump": "列表",
            "tableName": "caipinxinxi"
        }],
        "menu": "菜品管理"
    }, {
        "child": [{
            "buttons": ["预定包间"],
            "menu": "包间信息",
            "menuJump": "列表",
            "tableName": "baojianxinxi"
        }, {
            "buttons": [],
            "menu": "包间预定信息",
            "menuJump": "列表",
            "tableName": "baojianyuy"
        }],
        "menu": "包间管理"
    }, {
        "child": [{
            "buttons": [],
            "menu": "已退款订单",
            "tableName": "yituikuandingdan"
        }, {
            "buttons": [],
            "menu": "已支付订单",
            "tableName": "yiwanchengdingdan"
        }],
        "menu": "订单管理"
    }],
    "frontMenu": [],
    "roleName": "用户",
    "tableName": "yonghuxinxi"
}];


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            debugger
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
