var home ={
	init : function(){
		this.head = document.getElementById('header');
		
		this.logoBox = document.getElementById('hym_logo');
		this.logo = this.logoBox.getElementsByTagName('img')[0];
		this.chil = this.head.children;
		this.win = window;

		this.ulNav = document.getElementById('ul_nav');
		this.navLi = this.ulNav.getElementsByTagName('li');
		this.iden = this.ulNav.getElementsByTagName('div')[0];
		this.aI = this.ulNav.getElementsByTagName('i');

		var oUl = document.getElementById('tabUl');
		var aLi = oUl.getElementsByTagName('li');
		var oDiv = oUl.getElementsByTagName('div')[0];

		this.sollChange();

		this.optionTab(oUl,aLi,oDiv,false);
		this.optionTab(this.ulNav,this.navLi,this.iden,true);
		
	},
	sollChange : function(){
		var _this = this;
		this.win.onscroll = function(){
			var iTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (iTop>=100) {
				_this.zoom(['none','height .5s,line-height .8s',0,0,0,50,45,150]);
			}else{
				_this.zoom(['block','.3s',26,26,26,98,98,225]);
			}
			cur();
		}
		
		function cur(){
			for (var i = 0; i < _this.navLi.length; i++) {
				if (_this.navLi[i].className == 'cur') {
					_this.iden.style.left = _this.navLi[i].offsetLeft +'px';
		 			_this.iden.style.width = _this.navLi[i].offsetWidth +'px';
				};
			};
		}
	},
	zoom : function(arr){
		for (var i = 0; i < this.aI.length; i++) {
			this.aI[i].style.display = arr[0];
		};
		this.chil[0].style.transition=arr[1];
		this.chil[0].style.height=arr[2] +'px';
		this.chil[0].style.lineHeight=arr[3] +'px';
		this.chil[1].style.top = arr[4] +'px';
		this.chil[1].style.height = arr[5] +'px';
		this.logoBox.style.lineHeight = arr[6] +'px';
		this.logo.style.width = arr[7] +'px';
	},
	optionTab : function(oUl,aLi,oDiv,btn){
		var _this = this;
		
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].index = i;
			aLi[i].onmouseenter = function(){
				oDiv.style.transition = '.5s cubic-bezier(0,0,.09,1.35)';
				oDiv.style.left = this.offsetLeft +'px';
				if (btn) {
					oDiv.style.width = this.offsetWidth +'px';
				};
			}
		};

		oUl.onmouseleave = function(){
			loadChan();
		}

		function loadChan() {
		 	for (var i = 0; i < aLi.length; i++) {
		 		if (aLi[i].className == 'cur') {
		 			oDiv.style.left = aLi[i].offsetLeft +'px';
		 			if (btn) {
		 			  oDiv.style.width = aLi[i].offsetWidth +'px';
		 		    };
		 		};
		 	}
		}
		 loadChan();

	}

};


(function(){
			var $view = $('#divFloatToolsView')
				, $showBtn = $('#aFloatTools_Show')
				, $hideBtn = $('#aFloatTools_Hide')
				, $list = $('ul', $view)
				, _top;
			$list.append('<li class="top"><h3 class="titZx">QQ咨询</h3></li>');
			$list.append('<li><a class="icoTc" target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ 800097268 +'&amp;site=qq&amp;menu=yes">'+  800097268 +'</a> </li>');
			$list.append('<li class="top"><h3 class="titDh">电话咨询</h3></li>');
			$list.append('<li><a class="icoTl">'+  4001008765 +'</a> </li>');
			_top = parseInt(($view.height() - 108) / 2);
			$showBtn.click(function(){
				$view.animate({width: 'show', opacity: 'show'}, 'normal',function(){
					$view.show();
				 });
				$showBtn.css('display','none');
				$hideBtn.css('display','block');
			}).css('top',_top);
			$hideBtn.click(function(){
				$view.animate({width: 'hide', opacity: 'hide'}, 'normal',function(){
					$('#divFloatToolsView').hide();
				});
				$showBtn.css('display','block');
				$hideBtn.css('display','none');
			}).css('top',_top);
			$('#floatTools').css('visibility','visible')
})();		 
