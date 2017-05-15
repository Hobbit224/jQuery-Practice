
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

	});



})

// // 1. Wait until absolutely everything has loaded
// $(window).load(function(){


// 	var thing = document.getElementById('thing');
// 	console.log(thing);

// })