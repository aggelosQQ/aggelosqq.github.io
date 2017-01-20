$(document).ready(function() {
	$('.toggle-visibility').click(function() {
		$('.password').attr('type', function(index, attr) {
			return attr == 'password' ? null : 'password';
		});
	});
});