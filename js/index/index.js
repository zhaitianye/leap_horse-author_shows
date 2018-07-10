var arr=['酒徒','对倒','迷楼','秋']
var arr2=['脸颊感到一阵冷涔，原来我已经流过泪了。我的泪水也含有五百六十三分之九的酒精。 酒变成一种护照，常常带我去到另外一个世界。我未必喜欢空白似的境界；只是更讨厌丑恶的现实。','他想起了消逝了的岁月。那些消逝了的岁月，仿佛隔着一块积着灰尘的玻璃，看得到，抓不着。看到的种种，也是模模糊糊的。','烛火跳跃。花烛是不能吹熄的。欲望在火头寻找另一个定义。帐内的低语，即使贴耳门缝的丫鬟也听不清楚。那是一种快乐的声音。','我回过头来，想看看“过去”的履痕，却发现她凭倚在门边，正在谛听我那渐去渐远的脚步声。']
var swiper1=new Swiper('.swiper1',{
	effect:'fade',
	autoplay:3500,
	speed:1000,
	loop:true,
	autoplayDisableOnInteraction : false,
	nextButton:'.swiper-button-next',
	prevButton:'.swiper-button-prev',
	onTransitionStart:function(swiper){
		var i=swiper.activeIndex;
		if(i>4){i=1}
		$('.text h3').html(arr[i-1]);
		$('.text .text-info').html(arr2[i-1]);
	}
})