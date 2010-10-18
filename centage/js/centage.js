/* at this stage this is identical to Fernando Trasviña's cool elastic */

function resizeCols(container, marginWidthP, rows) {
	container.css({'width' : ''});
	

	var cache, i, column, columnPercentage, columnWidths, columnWidth, columnWidthTally, difference, 
	    absDifference, positionDivision, increment, direction, marginWidth;
	
	//var columns = container.children().size();
	var columns = rows

	columnPercentage = 100 / columns;
	
	columnWidths     = [];
	
	var containerWidth= container.width();
	//alert(containerWidth);
	marginWidth  	 = Math.round(containerWidth * (marginWidthP / 100));
	columnWidth      = Math.round((containerWidth * ( columnPercentage / 100 )));
	//marginWidth 	 = Math.round((containerWidth - (columns*columnWidth)) / columns);
	columnWidth  	 = columnWidth - marginWidth; 
	columnWidthTally = columnWidth * columns + marginWidth * columns;
	
	for(i = 0; i < columns; i++) {
		columnWidths.push(columnWidth);
	}
	
	
//	alert(containerWidth + 'px' + columnWidthTally);
	difference       = containerWidth - columnWidthTally;
	absDifference    = Math.abs(difference);
	positionDivision = columns / (absDifference + 1);
	increment        = (difference > 0);
	direction        = -1;
	var k = 0;
	
	if(difference !== 0) {
		for(i = 1; i <=(Math.abs(difference)); i++) {
			if(direction == -1) {
				k = columnWidths.length - Math.floor( positionDivision * Math.round(i/2) );
			}
			else {
				k = Math.floor( positionDivision * Math.round(i/2) ) - 1;
			}
			
			
			if(increment) {
				columnWidths[k] = columnWidth + 1;
				}
			else{
				columnWidths[k] = columnWidth - 1;
			}	
			direction = direction * -1;
			}	
		
	}


var de = columns * marginWidth;
var re = columnWidthTally + de;			
	
	
	for (i=0; i<columns; i++) {
		
		var ge = container.find('div').eq(i);
		$(ge).css({width : columnWidths[i] + 'px', 'margin-right' : marginWidth});
		var negativeMargin = marginWidth * -1;
		container.css({'margin-right' : negativeMargin, 'width' : containerWidth});
	//	$(ge).css({width : columnWidths[i] + 'px'});
//		container.find('div').last().css({'margin-right' : 0});
//		$(ge).html(columnPercentage);
	//	$('#test').html(containerWidth + ' ' + columnWidthTally + ' ' + difference + ' margin:' + marginWidth);
	}
	
	//$('#co').css({width : containerWidth + 'px'});



};


function processRows(container){
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
	
	d = container.width() / container.find('div').eq(0).width();
	e = Math.round(d);
	$('#test').html(e);
	return e;
	

};

$(window).resize(function(){
	$('#rowtest').each(function(){
		rows = processRows($(this));
		resizeCols($(this), 1.5, rows);	
	});										
});







