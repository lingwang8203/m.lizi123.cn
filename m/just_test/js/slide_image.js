define("textservicesIndexHtml", [], function() {
	return {
		render: function() {
			with(this) return _h("div", {
				attrs: {
					style: "height:100%;"
				}
			}, [_h("header", {
				staticClass: "page-top si-page-top"
			}, [_h("div", {
				staticClass: "flex-wrap si-top-flex-wrap"
			}, [_h("div", {
				staticClass: "flex gay6 si-top-item",
				class: {
					active: 1 === activeType
				},
				on: {
					click: function() {
						showAction("B", 1)
					}
				}
			}, ["\n      " + _s(brandName) + "\n      ", _m(0)]), " ", _m(1), " ", _h("div", {
				staticClass: "flex gay6 si-top-item js-show",
				class: {
					active: 2 === activeType
				},
				on: {
					click: function() {
						showAction("O", 2)
					}
				}
			}, ["\n      " + _s(orderName), " ", _m(2)])])]), " ", _h("div", {
				staticClass: "page-content"
			}, [_h("div", {
				directives: [{
					name: "show",
					value: serviceList && serviceList.length,
					expression: "serviceList && serviceList.length"
				}],
				staticClass: "si-shop-info js-scroll-load",
				show: !0
			}, [serviceList && _l(serviceList, function(t) {
				return _h("div", {
					staticClass: "si-shop-wrap cat-line-shadow clearfix",
					on: {
						click: function() {
							detailAction(t.id)
						}
					}
				}, [_h("div", {
					staticClass: "si-shop-logo vertical-center"
				}, [_h("img", {
					staticClass: "js-imgs",
					attrs: {
						src: t.imgSrc
					}
				})]), " ", _h("div", {
					staticClass: "si-shop-item"
				}, [_h("div", {
					staticClass: "si-shop-name show-dots"
				}, ["\n\t\t\t\t " + _s(t.storeName) + "\t\n\t\t\t\t"]), " ", _h("div", {
					staticClass: "si-logo-discount clearfix"
				}, [_h("div", {
					staticClass: "si-discount"
				}, [t.discountValueMin ? _h("span", [_h("span", {
					staticClass: "si-disconut-num"
				}, [_s(t.discountValueMin)]), " ", _m(3)]) : void 0]), " ", t.brandImgs && _l(t.brandImgs, function(t) {
					return [_h("img", {
						staticClass: "si-car-logo",
						attrs: {
							src: t
						}
					})]
				})]), " ", _h("div", {
					staticClass: "si-star"
				}, [_h("star-score", {
					attrs: {
						score: t.overallScoreAvg || 5
					}
				}), " ", _h("span", {
					staticClass: "si-score-words"
				}, ["\n\t\t\t\t\t\t" + _s(t.overallScoreAvg || 5) + " \n\t\t\t\t\t\t", _m(4)])]), " ", _h("div", {
					staticClass: "si-address-distance"
				}, [t.distance ? _h("div", {
					staticClass: "si-distance gray9 font-xs show-dots"
				}, [_s(_f("address")(t.distance))]) : void 0, " ", _h("div", {
					staticClass: "si-address show-dots font-xs"
				}, [_s(t.address) + "\t"])])])])
			}), " "]), " ", _h("div", {
				directives: [{
					name: "show",
					value: !(serviceList && serviceList.length),
					expression: "!(serviceList && serviceList.length)"
				}],
				staticClass: "si-results-none",
				show: !0
			}, ["\n\t\t很抱歉，暂时没有店家。", _m(5), " 建议您减少筛选条件试试\n\t"])])])
		},
		staticRenderFns: [function() {
			with(this) return _h("span", {
				staticClass: "si-top-arrow"
			})
		}, function() {
			with(this) return _h("div", {
				staticClass: "si-line vertical-line"
			})
		}, function() {
			with(this) return _h("span", {
				staticClass: "si-top-arrow"
			})
		}, function() {
			with(this) return _h("span", {
				staticClass: "font-xs"
			}, ["折起"])
		}, function() {
			with(this) return _h("span", {
				staticClass: "font-xs si-score"
			}, ["分"])
		}, function() {
			with(this) return _h("br")
		}]
	}
}), define("textservicesIndexCss", [], function() {
	return ".si-page-top{z-index:9}.si-page{padding-top:.41rem}.si-top-item{color:#666}.si-top-item.active{color:#32c8fa}.si-top-flex-wrap{height:.4rem;line-height:.4rem;font-size:.15rem;text-align:center;background-color:#fff;border-bottom:1px #ededee solid}.si-top-arrow{position:relative}.si-top-arrow::after{font-family:'iconfont';content:\"\\e650\";font-size:0.1rem;color:#999}.si-top-item.active .si-top-arrow::after{font-family:'iconfont';content:\"\\e651\";font-size:0.1rem;color:#32c8fa}.si-shop-info{background-color:#fff}.si-shop-info::after{content:'';height:.75rem;display:block;background-color:#f4f4f8}.si-shop-wrap{padding:.15rem 0;height:.75rem;position:relative}.si-shop-item{padding:0 .15rem 0 1.05rem;position:relative;line-height:1.2}.si-shop-logo{width:.75rem;height:.75rem;left:.15rem}.si-shop-logo img{width:100%;height:100%;border-radius:.04rem}.si-default-shop{background:url(https://img06.lechebangstatic.com/webapp/shop/default162d0b7661.jpg) no-repeat;-webkit-background-size:100% 100%;background-size:100% 100%}.si-shop-name{font-size:.15rem}.si-car-logo{height:.28rem;width:.28rem;vertical-align:middle;margin-right:.01rem}.si-discount{top:.22rem;color:#fa5a4b;float:right;height:.28rem;line-height:.28rem}.si-star{color:#ffa028;font-size:.16rem;margin:-.04rem 0 .02rem}.si-star .star-item::after{font-size:.12rem}.si-distance{width:29%;float:right;text-align:right}.si-black-overlay{background-color:rgba(0, 0, 0, 0.75);z-index:6;display:none;top:.4rem}.si-select-car-onelevel{background-color:#efeff4;height:80%;overflow-y:scroll;-webkit-overflow-scrolling:touch;border-top:1px #ededee solid}.si-wrap{background-color:#fff}.si-unlimited-brand{padding:.12rem .15rem;font-size:.15rem;background-color:#fff}.si-brand-item{padding:.12rem .15rem;font-size:.15rem}.si-unlimited-brand.active{color:#32c8fa;position:relative}.si-unlimited-brand.active::before{content:'';position:absolute;left:0;top:0;bottom:0;width:1px;background-color:#32c8fa}.si-unlimited-brand.active::after{font-size:.1rem;color:#32c8fa;font-family:'iconfont';content:\"\\e621\";position:absolute;right:.15rem}.si-gap-words{padding:0 .15rem}.si-brand-item.active{color:#32c8fa;background-color:#f7f7f9;position:relative}.si-select-car-secondlevel{width:65%;position:absolute;top:0;right:0;z-index:-1;height:80%;background-color:#f7f7f9;margin-top:0;overflow-y:scroll;-webkit-overflow-scrolling:touch}.si-gap-words2{padding:.01rem .1rem;background-color:#fff}.si-brand-item2{padding:.12rem .2rem;font-size:.15rem}.si-brand-item2.active{color:#32c8fa}.si-brand-item2.active::after{font-size:.1rem;color:#32c8fa;font-family:'iconfont';content:\"\\e621\";position:absolute;right:.15rem}.si-black-overlay2{display:none;z-index:7;top:.4rem}.si-recommend-wrap{background-color:#fff}.si-recommend-item{padding:.12rem}.si-recommend-sort::before{font-family:'iconfont';content:\"\\e62d\";font-size:.15rem;color:#c3c3c3;position:absolute;left:.06rem}.si-discount-lowest::before{position:absolute;font-family:'iconfont';content:\"\\e62b\";font-size:.16rem;color:#c3c3c3;left:.06rem}.si-distance-recently::before{position:absolute;font-family:'iconfont';content:\"\\e603\";font-size:.16rem;color:#c3c3c3;left:.06rem}.si-recommend-sort,.si-discount-lowest,.si-distance-recently{position:relative;padding-left:.3rem}.si-recommend-item.active{color:#32c8fa;position:relative}.si-recommend-item.active::after{font-size:.1rem;color:#32c8fa;font-family:'iconfont';content:\"\\e621\";position:absolute;right:.15rem;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.si-recommend-item.active .si-discount-lowest::before,.si-recommend-item.active .si-recommend-sort::before,.si-recommend-item.active .si-distance-recently::before{color:#32c8fa}.si-results-none{width:80%;background-color:#efeff4;text-align:center;border:1px dotted #c7c7cb;border-radius:.05rem;padding:.1rem 0;color:#999;font-size:.15rem;position:absolute;top:20%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.si-ui-page-loading{margin-top:.4rem}.si-line::after{top:.1rem;bottom:.1rem;background-color:#ccc}.si-address{color:#666}.si-score-words{margin-left:.03rem}.si-score{font-weight:700;margin-left:-.04rem}.si-disconut-num{font-size:.16rem}"
}), define("textShopfilterHtml", [], function() {
	return function(obj) {
		var __t, __p = "",
			__j = Array.prototype.join,
			print = function() {
				__p += __j.call(arguments, "")
			};
		with(obj || {}) __p += '<div class="black-overlay si-black-overlay js-showBrand"><div class="si-select-car-onelevel js-firstLevel"></div><div class="si-select-car-secondlevel js-secondLevel"></div></div><div class="black-overlay si-black-overlay2 js-showOrder"><div class=si-recommend-wrap><div class="si-recommend-item cat-line-shadow js-filter-order" data-type=2 data-id=1><div class="si-recommend-sort js-sort">推荐排序</div></div><div class="si-recommend-item cat-line-shadow js-filter-order" data-type=2 data-id=2><div class="si-discount-lowest js-sort">折扣最低</div></div>', haslocated && (__p += '<div class="si-recommend-item cat-line-shadow js-filter-order" data-type=2 data-id=3><div class="si-distance-recently js-sort">距离最近</div></div>'), __p += "</div></div>";
		return __p
	}
}), define("textfilterbrandHtml", [], function() {
	return function(obj) {
		var __t, __p = "",
			__j = Array.prototype.join,
			print = function() {
				__p += __j.call(arguments, "")
			};
		with(obj || {}) __p += '<div class="si-unlimited-brand js-secondBrandAction" data-id=0 data-type=1>品牌不限</div>', _.each(brandTypeList, function(t) {
			__p += '<div class=si-select-item><div class="si-gap-words font-s gay6">' + (null == (__t = t.pinYin) ? "" : __t) + "</div><div class=si-wrap>", _.each(t.results, function(t) {
				__p += '<div class="si-brand-item line-shadow js-secondBrandAction" data-id="' + (null == (__t = t.id) ? "" : __t) + '" data-type=1><img class=si-car-logo alt=logo src=' + (null == (__t = t.imgUrl) ? "" : __t) + "><span class=js-name>" + (null == (__t = t.brandName) ? "" : __t) + "</span></div>"
			}), __p += "</div></div>"
		}), __p += "";
		return __p
	}
}), define("textfilterorderHtml", [], function() {
	return function(obj) {
		var __t, __p = "",
			__j = Array.prototype.join,
			print = function() {
				__p += __j.call(arguments, "")
			};
		with(obj || {}) __p += "", _.each(brandSecondTypeList, function(t) {
			__p += '<div class=si-select-item2><div class="si-gap-words2 gay6 font-xs">' + (null == (__t = t.pinYin) ? "" : __t) + "</div><div class=si-wrap2>", _.each(t.brandProduceCar, function(i) {
				__p += '<div class="si-brand-item2 line-shadow js-filter-brand" data-id="' + (null == (__t = t.id) ? "" : __t) + '" data-type=1>' + (null == (__t = i.carName) ? "" : __t) + "</div>"
			}), __p += "</div></div>"
		}), __p += "";
		return __p
	}
}), define("Shopfilter", ["UIAbstract", "textShopfilterHtml", "textfilterbrandHtml", "textfilterorderHtml", "model"], function(t, i, e, s, o) {
	function r(t, i, e) {
		return e = e || "asc", _.sortBy(t, i, e)
	}
	var n = t.extend({
		options: {
			filterList: null
		},
		events: {
			"click .js-show-order": "showOrderAction",
			"click .js-secondBrandAction": "secondBrandAction",
			"click .js-filter-brand": "filterAction",
			"click .js-filter-order": "filterAction",
			"click .js-showBrand, .js-showOrder": "hideAction"
		},
		_create: function() {
			var t = this.template(i, {
					haslocated: this.options.haslocated
				}),
				s = this;
			this.$el.html(t);
			var r = o.firstLevel();
			r.success = function(t) {
				s.options.brandTypeList = t;
				var i = s.template(e, {
					brandTypeList: t
				});
				s.$(".js-firstLevel").html(i)
			}, Lizard.ajax(r)
		},
		_setOptions: function(t) {
			this.options = _.extend(this.options, t, !0)
		},
		showAction: function(t, i) {
			if(i) {
				var e = "B" == t ? this.$(".js-showBrand")[0] : this.$(".js-showOrder")[0];
				return void this.hideAction({
					target: e
				})
			}
			t && "B" == t ? (this.$(".js-showOrder").hide(), this.$(".js-showBrand").show()) : (this.$(".js-showBrand").hide(), this.$(".js-showOrder").show())
		},
		secondBrandAction: function(t) {
			var i = $(t.currentTarget),
				e = i.data("id"),
				r = this;
			if(this.$(".js-secondBrandAction").removeClass("active"), i.addClass("active"), 0 === e) {
				this.hideAction({
					target: this.$(".js-showBrand")[0]
				}), this.$(".js-secondLevel").hide();
				var n = this.$(".js-filter-order.active");
				if(this.options.filterList = this.options.serviceList, n && n.length) {
					var a = n.data("id");
					this.showOrderAction(a, this.options.filterList)
				}
				return void(this.options.callback && this.options.callback(0, this.options.filterList, {
					type: 1,
					name: "品牌"
				}))
			}
			o.secondLevel(e, function(t) {
				var i = [];
				t && t.length && t.forEach(function(t) {
					var e = [];
					t.brandProduceCar.forEach(function(t) {
						e.push({
							carName: t.carName,
							id: t.id
						})
					}), i.push({
						id: t.id,
						pinYin: t.producerName,
						brandProduceCar: e
					})
				});
				var e = r.template(s, {
					brandSecondTypeList: i
				});
				r.$(".js-secondLevel").css("zIndex", 7).html(e).show()
			})
		},
		filterAction: function(t) {
			var i, e = this.$(t.currentTarget),
				s = e.data("type");
			if(this.options.callback) {
				if(1 == s) {
					this.$(".js-filter-brand").removeClass("active"), e.addClass("active");
					var o = e.data("id");
					this.options.filterList = _.filter(this.options.serviceList, function(t) {
						return t.carBrandTypeIds.indexOf(o) != -1
					});
					var r = this.$(".js-filter-order.active");
					if(r && r.length) {
						var n = r.data("id");
						this.showOrderAction(n, this.options.filterList)
					}
					this.$(".js-showBrand").hide(), i = this.$(".js-secondBrandAction.active").find(".js-name").html()
				} else if(2 == s) {
					this.$(".js-filter-order").removeClass("active"), e.addClass("active");
					var a = e.data("id");
					i = e.find(".js-sort").html(), this.showOrderAction(a, this.options.serviceList);
					var c = this.$(".js-secondBrandAction.active"),
						d = this.$(".js-filter-brand.active");
					if((!c || !c.length || 0 !== c.data("id")) && d && d.length) {
						var l = d.data("id");
						this.options.filterList = _.filter(this.options.filterList, function(t) {
							return t.carBrandTypeIds.indexOf(l) != -1
						})
					}
					this.$(".js-showOrder").hide()
				}
				this.options.callback(0, this.options.filterList, {
					type: s,
					name: i
				})
			}
		},
		showOrderAction: function(t, i) {
			if(t) switch(t) {
				case 1:
					this.options.filterList = this.options.serviceList;
					break;
				case 2:
					this.options.filterList = r(i, "discountValueMin");
					break;
				case 3:
					this.options.filterList = r(i, "distance")
			}
		},
		hideAction: function(t) {
			var i = this.$(t.target);
			(i.hasClass("js-showOrder") || i.hasClass("js-showBrand")) && (this.options.callback && this.options.callback(1), i.hide())
		}
	});
	return n
}), define("controller/services/index", ["textservicesIndexHtml", "textservicesIndexCss", "PageView", "Footer", "geolocation", "model", "Shopfilter"], function(t, i, e, s, o, r, n) {
	var a = {
			template: t,
			methods: {
				detailAction: function(t) {
					Lizard.goTo("services/detail?id=" + t)
				},
				showAction: function(t, i) {
					var e = this.pageView,
						s = this;
					e.shopFilter ? e.shopFilter.show() : e.shopFilter = new n({
						haslocated: e.haslocated ? 1 : 0,
						appendElement: e.el,
						callback: function(t, i, o) {
							if(e.goTopAction(), e.listIndex = 0, t) return void(s.activeType = 0);
							if(s.activeType = 0, s.serviceList = null, s.serviceList = i.slice(e.listIndex, e.listSize), o) switch(o.type) {
								case 1:
									s.brandName = o.name;
									break;
								case 2:
									s.orderName = o.name
							}
							s.serviceList.length == e.listSize ? e.off("bottom").once("bottom", e.bottomAction.bind(e, i)) : e.off("bottom")
						},
						serviceList: e.serviceList
					}), i === this.activeType ? (e.shopFilter.showAction(t, i), this.activeType = 0) : (this.activeType = i, e.shopFilter && e.shopFilter.showAction(t)), 1 === i ? this.ubtClickSend("brand") : 2 === i && this.ubtClickSend("sort")
				}
			},
			filters: {
				address: function(t) {
					return t ? (t >= 1e3 ? t = (t / 1e3).toFixed(1) + "km" : t += "m", t) : ""
				}
			}
		},
		c = e.extend({
			options: {
				pageId: "10018",
				pageCss: i,
				header: {
					left: !1,
					center: {
						text: "4S店"
					},
					right: [{
						text: "加盟",
						callback: function() {
							Lizard.goTo("services/join"), this.ubtClickSend("join")
						}
					}]
				},
				backWithCache: !0
			},
			attributes: {
				class: "page si-page"
			},
			onCreate: function() {
				this.position = o.getPostion(), this.listSize = 6, this.listIndex = 0, this.haslocated = this.position.location, this.renderFooter()
			},
			ajax: function() {
				var t = {
					url: "shop/getServiceNetList",
					data: {
						cityId: this.position.cityId
					},
					session: !0,
					expires: "3M"
				};
				return this.haslocated && (t.data.lat = this.haslocated.lat, t.data.lon = this.haslocated.lng), t
			},
			onShow: function(t) {
				var i = this,
					e = t.storeDetailResults;
				this.serviceList = [], e && e.length && e.forEach(function(t) {
					i.serviceList.push({
						id: t.id,
						imgSrc: t.storeImages.length ? t.storeImages[0].imgUrl : "https://img06.lechebangstatic.com/webapp/shop/default162d0b7661.jpg",
						storeName: t.storeNickName || t.storeName,
						discountValueMin: t.discountValueMin,
						overallScoreAvg: t.overallScoreAvg,
						carBrandTypeIds: t.carBrandTypeIds,
						address: t.address,
						distance: t.distance,
						brandImgs: t.brandImages
					})
				}), this.filterList = this.serviceList.slice(this.listIndex * this.listSize, (this.listIndex + 1) * this.listSize), this.registerView(a, {
					brandName: "品牌",
					orderName: "推荐排序",
					serviceList: this.filterList,
					activeType: 0
				}), this.vue.$nextTick(function() {
					i.addOnScroll(), i.filterList.length == i.listSize && i.off("bottom").once("bottom", i.bottomAction.bind(i, i.serviceList))
				})
			},
			bottomAction: function(t) {
				this.listIndex++, this.filterList = t.slice(this.listIndex * this.listSize, (this.listIndex + 1) * this.listSize), this.vue.serviceList = this.vue.serviceList.concat(this.filterList), this.filterList.length == this.listSize && this.off("bottom").once("bottom", this.bottomAction.bind(this, t))
			},
			goTopAction: function() {
				this.$(".page-content").scrollTop(0)
			},
			renderFooter: function() {
				new s({
					actived: 2,
					appendElement: this.el
				})
			}
		});
	return c
});