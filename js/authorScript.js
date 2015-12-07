function getAuthorInfo(author) {
	$.getJSON('authors.json', function(data) {
		authorJson = data[author];
		$('#DOB').html(authorJson['DOB']);
		$('#Area').html(authorJson['Area']);
		$('#Works').html(authorJson['Works']);
		$('#Affiliations').html(authorJson['Affiliations']);
		$('#ExternalLink1').html(authorJson['ExternalLink1']);
		$('#ExternalLink2').html(authorJson['ExternalLink2']);
	});
}
