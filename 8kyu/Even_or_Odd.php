<?php

function evenOrOdd($num)
{
	if ($num % 2 === 0) {
		return 'Even';
	}
	return 'Odd';
}

evenOrOdd(2);
