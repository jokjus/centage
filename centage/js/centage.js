
//********************************************************
//********************************************************
//********************************************************

function processRow(container, row) {	
	
	var cache, i, column, columnPercentage, columnWidths, columnWidth, columnWidthTally,difference, absDifference, positionDivision, increment, direction, marginWidth;

	var columns = row.length;
	//reset values
	for (var k in row){
		row[k].css({'width':'', 'margin-right':'', 'margin-left':'', 'padding-right':'', 'padding-left':''});
	}
	
	rowDims = getChildrenDimensions(row);	//get all dimensions of row elements
	//alert(rowDims[0][4]);
	columnWidthTally = getTotal(rowDims);	//calculate total sum of children dimensions
	var containerWidth= container.width();	//get containers width

	difference       = containerWidth - columnWidthTally;
	absDifference    = Math.abs(difference);
	positionDivision = columns / (absDifference + 1);
	increment        = (difference > 0);
	direction        = -1;
	var k = 0;
	$('#debug').html(containerWidth + ' ' + columnWidthTally);
	//if (difference > columns){
		//alert(difference + ' > ' + columns);
	// }
	
	if(difference !== 0) {
		for(i = 1; i <=(Math.abs(difference)); i++) {
			if(direction == -1) {
				k = columns - Math.floor( positionDivision * Math.round(i/2) );	//algorithm for distributing changes into object widths
			}
			else {
				k = Math.floor( positionDivision * Math.round(i/2) ) - 1;
			}	
			
			if(increment) {
				rowDims[k][4] += 1; //set the fourth number in array = width of an object
				}
			else {
				rowDims[k][4] += -1;
			}	
			direction = direction * -1;
		}	
	}		
	
	//Here we apply new calculated widths to objects

	for (var i in row) {		
	//row[i].html('test');
		row[i].css({width : rowDims[i][4] + 'px', 'margin-right' : rowDims[i][0] + 'px', 'margin-left' : rowDims[i][1] + 'px', 'padding-right' : rowDims[i][2] + 'px', 'padding-left' : rowDims[i][3] + 'px'});

	}

};

//********************************************************
//********************************************************
//********************************************************



function getRowCount(container){
	var elements = container.children().size();
	var rightSide = 0;
    var rowCount = 1;	

	for (i=0; i<elements; i++){
		el = container.find('div').eq(i);
		p = el.position().left + el.width();;
		el.html(p);
		if (p < rightSide){
			rowCount++;}
			rightSide = p;		
	};
	return rowCount;
};

function getTotal(object){
	total = 0;
	for (var i in object){
		for (var k in object[i]){
			total += object[i][k];
		}		
	}
	return total;
};


function getRowObjects(container){
	var elementCount = container.children().size();
	var rightSide = 0;	
    var rows = [];
    var row = [];

	for ( i = 0; i<elementCount; i++){
		el = container.children().eq(i);			//get div

		p = el.position().left + el.outerWidth(); 	//get right coordinate of element
		if (p <= rightSide){  						//if element is to the left of previous element = new row
			rows.push(row);							//put array of objects in row to array
			row = [];								//reset row array
		}
		else {
			row.push(el);
		}											//put this object to row array
		rightSide = p;		
	};   	
	rows.push(row);	
	//alert (rows[0]);	
	return rows; // ** ROWS ei tule oikein! 	
};



function getDimensions(object){
	Mr = object.margin().right;
	Ml = object.margin().left;
	Pl = object.padding().left;
	Pr = object.padding().right;
	Wi = object.width();
	objDims= [Mr, Ml, Pr, Pl, Wi];
//	$(this).html('Margin right:' + Mr + ' Margin left:' + Ml + ' Padding left:' + Pl + ' Padding right:' + Pr);
	return objDims;
};

function getChildrenDimensions(object){
	var dimsList = [];
	for (var i in object){
		g = [];
		g= getDimensions(object[i]);
		dimsList.push(g);
		object[i].html(g[0]);
	};
	//alert(dimsList[0][4]);
	return dimsList;
};


function processRows(object){
	object.css({'width' : ''});
	allRows = getRowObjects(object);
	//alert(allRows.length);
	for (i=0; i<allRows.length; i++) {
		processRow(object, allRows[i]);
	}

	var containerWidth=object.width();
	object.css({'width' : containerWidth});
	
};

$(window).resize(function(){
	$('.container').each(function(){
		processRows($(this));
	//	resizeCols($(this), 1.5, rows);	
	});										
});







