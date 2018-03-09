var ns = 'http://www.w3.org/2000/svg';
var cvs = document.getElementById( 'cvs' );
var clear = document.getElementById( 'clearButt' );

var time;

var dvdIt = function() {

    var currX = 250;
    var currY = 250;
    
    var angle = Math.PI / 6;
    
    var dX = Math.cos(angle) * 8;
    var dY = Math.sin(angle) * 8;

    var bouncing = function() {
		
	clearIt();
	
	var rec = document.createElementNS( ns, "rect" );
	rec.setAttribute( 'x', currX );
	rec.setAttribute( 'y', currY );
	rec.setAttribute( 'width', 100 );
	rec.setAttribute( 'height', 50 );
	rec.setAttribute( 'fill', 'coral' );
	cvs.appendChild(rec);
	
	if( currX <= 0 || currX >= 400 ) {
	    dX *= -1;
	}
	if( currY <= 0 || currY >= 450 ) {
	    dY *= -1;
	}
	currX += dX;
	currY += dY;

    }
    time = setInterval( bouncing, 1000/60 );	
}

var makeCirc = function(e) {
    var circ = document.createElementNS( ns, "circle" );
    circ.setAttribute( 'x', e.offsetX );
    circ.setAttribute( 'y', e.offsetY );
    circ.setAttribute( 'r', 33 );
    circ.setAttribute( 'fill', 'coral' );
    cvs.appendChild(circ);
}

var bounce = function() {
}

var clearIt = function() {
    while( cvs.lastChild ) {
	cvs.removeChild( cvs.lastChild);
    }
}

var stopIt = function() {
    clearInterval(time);
}

cvs.addEventListener( 'click', bounce );
clear.addEventListener( 'click', clearIt );
