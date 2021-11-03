<?php
	
	$num_1 = $_POST['num_1'];
	$num_2 = $_POST['num_2'];
	$num_3 = $_POST['num_3'];
	$max = max($num_1, $num_2, $num_3);


	echo "Թվերից ամենմեծն է ՝  $max";

?>