/* This file is part of Centage!.
* Copyright (C) Jussi Jokinen <jussijokinen@iki.fi>.
* Centage! is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* Centage! is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with Centage!.  If not, see <http://www.gnu.org/licenses/>. */

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

