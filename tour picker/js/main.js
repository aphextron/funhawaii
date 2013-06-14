
 $(function(){ 
$('#submitform').submit(function(){
	var form_values = jQuery(this).serialize();	
	$.ajax({
		type: "GET",
		url: "test.php",
		data: form_values
	}).done(function( msg ) {
  $('#ajaxreturn').html(msg);
  console.log('success');
	});
return false;

});

}); 
