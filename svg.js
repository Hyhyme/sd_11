var ns = 'http://www.w3.org/2000/svg';
var cvs = document.getElementById( 'cvs' );
var clear = document.getElementById( 'clearButt' );

var time;
var circles = [];

var makeCirc = function(e) {
    
    clearInterval(time);
    time = setInterval( dvdIt, 10 );
    
    var circ = document.createElementNS( ns, 'circle' );
    circ.setAttribute( 'cx', e.offsetX );
    circ.setAttribute( 'cy', e.offsetY );
    circ.setAttribute( 'r', 33 );
    circ.setAttribute( 'fill', 'coral' );
    circ.setAttribute( 'dX', Math.cos( Math.PI / 6 ) * 4 );
    circ.setAttribute( 'dY', Math.sin( Math.PI / 6 ) * 4 );
    cvs.appendChild(circ);
    circles.push(circ);
}

var dvdIt = function(e) {
    var n = 0;
    while( n < circles.length ) {
	var circ = circles[n];
	var moveX = parseInt( circ.getAttribute('dX') );
	var moveY = parseInt( circ.getAttribute('dY') );
	var currX = parseInt( circ.getAttribute('cx') );
	var currY = parseInt( circ.getAttribute('cy') );
	
	//so that the circles dont get stuck on the borders
	if( currX < 33 ) {
	    moveX = (Math.cos( Math.PI / 6 ) * 4);
	}
	if( currX >= 467 ) {
	    moveX = (Math.cos( Math.PI / 6 ) * 4) * -1;
	}
	if( currY < 33 ) {
	    moveY = (Math.cos( Math.PI / 6 ) * 4);
	}
	if( currY >= 467 ) {
	    moveY = (Math.sin( Math.PI / 6 ) * 4) * -1;
	}
	currX += moveX;
	currY += moveY;
	circ.setAttribute( 'dX', moveX );
	circ.setAttribute( 'dY', moveY );
	circ.setAttribute( 'cx', currX );
	circ.setAttribute( 'cy', currY );
	n += 1;	
    }
}		

var clearIt = function() {
    while( cvs.lastChild ) {
	cvs.removeChild(cvs.lastChild);
    }
    clearInterval(time);
}

cvs.addEventListener( 'click', makeCirc );
clear.addEventListener( 'click', clearIt );
