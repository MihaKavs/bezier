
	function changeStyle(){
        var element = document.getElementById("right");
		var right = document.getElementById("right").styleRight;
		var numericValue = window
		.getComputedStyle(document.getElementById('right'),null)
		.getPropertyValue('right')
		.match(/\d+/);
		var num = parseInt(numericValue, 10);
		num += 5;
		if(num < 50){
			element.style.right = num + "px";
		}
		else{}
    }
	
	function moveUp(){
        var element = document.getElementById("right");
		var bott = document.getElementById("right").styleBottom;
		var numericValueBot = window
		.getComputedStyle(document.getElementById('right'),null)
		.getPropertyValue('bottom')
		.match(/\d+/);
		var numb = parseInt(numericValueBot, 10);
		numb += 5;
		if(numb < 120){
			element.style.bottom = numb + "px";
		}
		else{}
    }
	
		function moveDown(){
        var element = document.getElementById("right");
		var bott = document.getElementById("right").styleBottom;
		var numericValueBot = window
		.getComputedStyle(document.getElementById('right'),null)
		.getPropertyValue('bottom')
		.match(/\d+/);
		var numb = parseInt(numericValueBot, 10);
		numb = numb-5;
		if(numb > -5){
			element.style.bottom = numb + "px";
		}
		else{}
    }
	
		function moveRight(){
        var element = document.getElementById("right");
		var right = document.getElementById("right").styleRight;
		var numericValue = window
		.getComputedStyle(document.getElementById('right'),null)
		.getPropertyValue('right')
		.match(/\d+/);
		var num = parseInt(numericValue, 10);
		num += -5;
		if(num > -5){
			element.style.right = num + "px";
		}
		else{}
    }
	
	function center(){
		var element = document.getElementById("right");
		var right = document.getElementById("right").styleRight;
		element.style.right = "25px";
		element.style.bottom = "25px";
		
	}
	
	var canvas = document.getElementById('viewport'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'images/logo.png';
  base_image.onload = function(){
    context.drawImage(base_image, 15, 0);
  }
}

document.getElementById("myCamvas").style.display = "none";
document.getElementById("svgCanvas").style.display = "none";
document.getElementById("one").style.backgroundColor = "#00ffd2";

function showBezier(){
	document.getElementById("viewport").style.display = "none";
	document.getElementById("svgCanvas").style.display = "none";
	document.getElementById("myCamvas").style.display = "block";
	document.getElementById("three").style.backgroundColor = "#00ffd2";
	document.getElementById("twoo").style.backgroundColor = "#34ccb1";
	document.getElementById("one").style.backgroundColor = "#34ccb1";
	document.getElementById("colorpicker").style.display = "block";
	var c = document.getElementById("myCamvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(150,60);
	ctx.lineTo(60,90);
	ctx.bezierCurveTo(33,99,15,82.5,48,51); 
	ctx.bezierCurveTo(40.5,60,42,76.5,57,76.5); 
	ctx.lineTo(150,60);
	ctx.fill();
	ctx.stroke();
}   //125, 300, 382, 206, 551, 70
var bezierColor = '#000000';
	let colorInput = document.getElementById('colorpicker');
	let colorValue = colorInput.value;
	colorInput.addEventListener('input', () =>{
	var c = document.getElementById("myCamvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(150,60);
	ctx.lineTo(60,90);
	ctx.bezierCurveTo(33,99,15,82.5,48,51); 
	ctx.bezierCurveTo(40.5,60,42,76.5,57,76.5); 
	ctx.lineTo(150,60);
	ctx.fill();
	ctx.stroke();
	ctx.strokeStyle = colorInput.value;
	ctx.fillStyle = colorInput.value;
	});
	

function showImg(){
	document.getElementById("myCamvas").style.display = "none";
	document.getElementById("svgCanvas").style.display = "none";
	document.getElementById("viewport").style.display = "block";
	document.getElementById("one").style.backgroundColor = "#00ffd2";
	document.getElementById("three").style.backgroundColor = "#34ccb1";
	document.getElementById("twoo").style.backgroundColor = "#34ccb1";
	document.getElementById("colorpicker").style.display = "none";
}
function showSvg(){
	document.getElementById("myCamvas").style.display = "none";
	document.getElementById("viewport").style.display = "none";
	document.getElementById("svgCanvas").style.display = "block";
	document.getElementById("twoo").style.backgroundColor = "#00ffd2";
	document.getElementById("three").style.backgroundColor = "#34ccb1";
	document.getElementById("one").style.backgroundColor = "#34ccb1";
	document.getElementById("colorpicker").style.display = "none";
}
document.getElementById("colorpicker").style.display = "none";

$(document).ready(function() {
  $("#submitDesighn").on("click", function(e) {
    var buttons = $('<div>')
	Swal.fire({
	icon: 'success',
	title: 'Thank you for submitting your design.',
	confirmButtonColor: '#34ccb1',
	})
    
  });
});



function createButton(text, cb) {
  return $('<button>' + text + '</button>').on('click', cb);
}

function submitButton(){
	center();
	showImg();
}

function imgInfo(){
	$(document).ready(function() {
	  $("#infoIMG").on("click", function(e) {
		Swal.fire({
		icon: 'info',
		title: 'This is the original vresion of Nike logo.',
		confirmButtonColor: '#34ccb1',
		})
		
	  });
	});
}
function svgInfo(){
	$(document).ready(function() {
	  $("#infoSVG").on("click", function(e) {
		Swal.fire({
		icon: 'info',
		title: 'This is the SVG vresion of Nike logo.',
		 html:
		'If you want to learn more, ' +
		'<a target="_blank" href="https://en.wikipedia.org/wiki/Scalable_Vector_Graphics">click here.</a> ',
		confirmButtonColor: '#34ccb1',
		})
		
	  });
	});
}
function bezierInfo(){
	document.getElementById("infoBezier").addEventListener('click', function(){
		Swal.fire({
		icon: 'info',
		title: 'This is the Bezier curve vresion of Nike logo.',
		 html:
		'If you want to learn more, ' +
		'<a target="_blank" href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve">click here.</a> ',
		confirmButtonColor: '#34ccb1',
		})
		
	  });
	};
	

