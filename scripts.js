
// console.dir(window.$)
// console.dir($)
// console.dir(jQuery)
// console.dir(window.jQuery)



// 1. Wait until document is fully loaded
// 2. Once the DOM is loaded, run the anon function
$(document).ready(function(){


	// var thing = document.getElementById('thing');
	// console.log(thing);
	// thing = $('#thing')
	// console.log(thing)



	$('button').click(function(){
		// console.log()
		// console.log($(this).attr('toDO'))
		var whatToDo = $(this).attr('toDO')
		if(whatToDo == 'hide'){
			$('#thing').hide();
		}
		else if(whatToDo == 'show'){
			$('#thing').show()
		}
		else if(whatToDo == 'toggle'){
			$('#thing').toggle()
		}
		else if(whatToDo == 'html'){
			$('#thing').html('I am new innerHTML.')
		}
		else if(whatToDo == 'text'){
			$('#thing').text('I am new text.')
		}
		else if(whatToDo == 'prepend'){
			$('#thing').prepend('I am new text.')
		}
		else if(whatToDo == 'append'){
			$('#thing').append('I am new text.')
		}
		else if(whatToDo == 'css'){
			$('#thing').css({
				'color': 'orange',
				'font-size': '40px',
				'border-radius': '50%',
				'background-color':'blue'
			})
		}
		else if(whatToDo == 'addClass'){
			$('#thing').addClass('crazy-css')
		}
		else if(whatToDo == 'removeClass'){
			$('#thing').removeClass('crazy-css')
		}


	});



})

// // 1. Wait until absolutely everything has loaded
// $(window).load(function(){


// 	var thing = document.getElementById('thing');
// 	console.log(thing);

// })