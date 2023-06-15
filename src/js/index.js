/**
 * 1、使用哪一个事件
 *    使用onscroll，此事件移动端与PC端都有效。
 * 2、如何获取滚动条位置
 *    获取PC端滚动条位置：document.documentElement.scrollTop
 *    获取移动端滚动条位置：document.body.scrollTop
 * 3、如何获取视口宽度
 *    document.documentElement.clientWidth 移动端与PC端都有效。
 */
window.onload = function(){
	document.onscroll = function(){
		//获取滚动条位置
		let s1 = document.documentElement.scrollTop;
		let s2 = document.body.scrollTop;
		let scroll = s1==0?s2:s1;
		//获取视口宽度
		let width = document.documentElement.clientWidth;
		//获取顶部固定块
		let search = document.getElementById('fixedBox');
		//判断滚动条超过视口宽度的12%时，搜索块变固定定位
		if(scroll>width*0.12){
			search.style.position = 'fixed';
			search.style.left = '0';
			search.style.top = '0';
		}else{
			search.style.position = 'static';
		}
		
	}
}