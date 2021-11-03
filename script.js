let btn = document.getElementById("submit");
btn.addEventListener("click", main);

function validation(num_1, num_2, num_3){

	let val_1
	let val_2
	let val_3

	if(num_1.length == 0){
		document.getElementById("error_1").innerHTML = "Դաշտը պարտադիր է"
	}else{val_1 = true}
	
	if(num_2.length == 0){
		document.getElementById("error_2").innerHTML = "Դաշտը պարտադիր է"
	}else{val_2 = true}
	
	if(num_3.length == 0){
		document.getElementById("error_3").innerHTML = "Դաշտը պարտադիր է"
	}else{val_3 = true}

	if(val_1 == true && val_2 == true && val_3 == true){
		return true
	}else{
		return false
	}
}

function ajaxRequest(num_1, num_2, num_3){

	$.ajax({

		url:'max.php',
		method: 'POST',
		cache: false,
		data: {"num_1":num_1, "num_2":num_2, "num_3":num_3},
		dataType: 'html',
		success: function(res){
			alert(res)
		},
		error: function(res){
			console.log("error")
		}


	})

}



function main(){
	let num_1 = document.getElementById('num_1').value
	let num_2 = document.getElementById('num_2').value
	let num_3 = document.getElementById('num_3').value
	let valid = validation(num_1,num_2,num_3)

	change()

	if(valid){
		ajaxRequest(num_1, num_2, num_3)
	}

}