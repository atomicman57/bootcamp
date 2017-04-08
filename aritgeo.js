function aritGeo(arr){

// To check if array is empty, if it is, it should return 0.
	if (arr.length == 0){
		return 0; 
	} 
	
	/* To check if array is less than two, if it is true return nothing, 
	because we can not campare two or less for AP or GP */

	else if (arr.length <= 2){
		return;
	}


	else {

	var arith = arr[1] - arr[0];
	var geo = arr[1] / arr[0];

	var checkArith = true;
	var checkGeo = true; 

// Start of loop to check if it is either Arithmetic,Geometric or neither

	for(var i = 0; i < arr.length - 1; i++){
		if (arr[i + 1] - arr[i] != arith){
			checkArith = false;
		} 

		if (arr[i + 1] / arr[i] != geo){
			checkGeo = false;
		}  
	}
		// end of loop

// To return if it either arithmetic, geometric or neither, if neither it return -1
	if (checkArith == true){
		return "Arithmetic";
	}
	else if(checkGeo == true){
		return "Geometric";
	}
	else {
		return -1;
	}
 } 
}

