$(function(){
	var index = 0;
	var t = $('#hot-topics-tabs');
	var tabs = t.tabs('tabs');
	setInterval(function(){
		t.tabs('select', tabs[index].panel('options').title);
		index++;
		if (index >= tabs.length){
			index = 0;
		}
	}, 3000);
});