<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
var menus = [{
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
		}, {
			"buttons": ["修改", "删除"],
			"menu": "菜品评论",
			"menuJump": "列表",
			"tableName": "discusscaipinxinxi"
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
		}, {
			"buttons": ["修改", "删除"],
			"menu": "包间评论",
			"menuJump": "列表",
			"tableName": "discussbaojianxinxi"
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
		}, {
			"buttons": ["修改"],
			"menu": "主题设置",
			"tableName": "zhutixinxi"
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
	}, {
		"child": [{
			"buttons": ["修改", "删除"],
			"menu": "收藏信息",
			"tableName": "storeup"
		}],
		"menu": "收藏商品管理"
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
			"buttons": [],
			"menu": "包间信息",
			"menuJump": "列表",
			"tableName": "baojianxinxi"
		}, {
			"buttons": ["修改"],
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
	}, {
			"child": [{
			"buttons": [],
			"menu": "收藏信息",
			"tableName": "storeup"
		}],
		"menu": "收藏商品管理"
	}],
	"frontMenu": ["修改", "删除"],
	"roleName": "用户",
	"tableName": "yonghuxinxi"
}];

var hasMessage = '';
