/* This file is part of Centage!. */
/* Copyright (C) 2010 Jussi Jokinen <jussijokinen@iki.fi>. */
/* Licenced under MIT licence */

function createGrid(columns) {
	var grid = '<div id="grid_wrapper"><div id="grid">';
	
	for (i=1; i<columns; i++) {
		grid += '<div class="grid_col"><div class="right_grid_colborder"></div></div>';
	}
	
	grid += '<div class="grid_col lastcol"><div class="right_grid_colborder"></div></div>';
	grid += '</div></div><div id="grid_no_gut_wrapper"><div id="grid_no_gut"><div class="center first"></div>';
	
	for (i=1; i<columns-1; i++) {
		grid += '<div class="center"></div>';
	}
	
	grid += '</div></div><div id="grid_toggle"><input type="button" value="Toggle grid" id="grid_toggle" /></div>';
	
	$('body').prepend(grid);
}


function grid(columns){

	createGrid(columns);

	$('#grid_wrapper').hide();
		$('#grid_no_gut_wrapper').hide();

	$('#grid_toggle').click(function(){
		$('#grid_wrapper').toggle();
		$('#grid_no_gut_wrapper').toggle();
	});	
	
}

