<?php

function positive_sum($arr)
{
	$total = 0;
	foreach ($arr as $el) {
		if ($el > 0) {
			$total += $el;
		}
	}
	return $total;
}

positive_sum([1, -2, 3, 4, 5]);
