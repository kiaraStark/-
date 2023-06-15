window.onload = function(){
	//获取显示隐藏按钮DOM数组
	let showBtnArr = document.getElementsByClassName('fa-caret-down');
	//获取订单明细DOM数组
	let detailetBoxArr = document.getElementsByClassName('order-detailet');
	//设置默认所有订单明细都隐藏
	for(let i=0;i<detailetBoxArr.length;i++){
		detailetBoxArr[i].style.display='none';
	}
	
	for(let i=0;i<showBtnArr.length;i++){
		showBtnArr[i].onclick = function(){
			if(detailetBoxArr[i].style.display=='none'){
				detailetBoxArr[i].style.display='block';
			}else{
				detailetBoxArr[i].style.display='none';
			}
		}
	}
}