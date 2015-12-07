(function () {
function getTimelineInfo(timeline) {
	$.getJSON('timelineData.json', function(data) {
		timelineDataJson = data[timeline];
		$('.TimelineInfo').html('<p> Title: ' +timelineDataJson['Title']+ '</p>');
		$('.TimelineInfo').append('<p> Author:' +timelineDataJson['Author'] + '</p>');
		$('.TimelineInfo').append('<p> Genre:' +timelineDataJson['Genre'] + '</p>');
		$('.Date').html(timelineDataJson['Year']);
	});
}

}());
