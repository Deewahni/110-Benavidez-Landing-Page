function sendEmail(params){
	var tempParams={
		from_name: document.getElementById("fromName").value,
		from_lname: document.getElementById("fromlastName").value,
		message: document.getElementById("message").value,
		from_email:document.getElementById("fromEmail").value,
		from_mobilenum: document.getElementById("fromPhone").value
	};
	emailjs.send('service_ercphbn','template_jo3ms8a',tempParams)
	.then(function(res){
		alert("Message Sent! Thank you", res.status);
		document.getElementById("fromName").value = "";
		document.getElementById("fromlastName").value= "";
		document.getElementById("message").value= "";
		document.getElementById("fromEmail").value= "";
		document.getElementById("fromPhone").value= "";
	})
}