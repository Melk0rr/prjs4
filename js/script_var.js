SCRIPT_VAR  = "SPEED%20%3D%201000%3B%20%2F%2F%20vitesse%20de%20scroll%20entre%20les%20slides%0Arunning%20%3D%20false%3B%20%2F%2F%20la%20pr%C3%A9sentation%20est-elle%20en%20cours%0A%0A%2F**%0A%20*%20Listeners%20sur%20les%20fl%C3%A8ches%20pour%20bouger%20dans%20la%20pr%C3%A9sentation%0A%20*%2F%0A%24(document).ready(function()%20%7B%0A%20%20%24(document).keyup(function(e)%20%7B%0A%20%20%20%20if%20(running)%20%7B%0A%20%20%20%20%20%20if%20(e.which%20%3D%3D%2039)%20decaleSlide(1%2C%20true)%3B%0A%20%20%20%20%20%20else%20if%20(e.which%20%3D%3D%2037)%20decaleSlide(-1%2C%20true)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%0A%7D)%0A%0A%2F**%0A%20*%20D%C3%A9cale%20la%20pr%C3%A9sentation%20d'un%20certain%20nombre%20de%20slide.%0A%20*%20D%C3%A9caler%20de%201%20slide%20%3D%20aller%20vers%20l'avant%20%3B%20d%C3%A9caler%20de%20-1%20%3D%20revenir%20en%20arri%C3%A8re%0A%20*%20%40param%20%20%7Bint%7D%20nb%20%20%20%20%3A%20le%20nombre%20de%20slides%20%C3%A0%20d%C3%A9caler%0A%20*%20%40param%20%20%7Bbool%7D%20anim%20%3A%20le%20d%C3%A9calage%20se%20fait-il%20avec%20une%20animation%20%3F%0A%20*%20%40return%20%7Bvoid%7D%0A%20*%2F%0Afunction%20decaleSlide(nb%2C%20anim)%20%7B%0A%20%20var%20point1%20%3D%20%24(document).scrollTop()%3B%0A%20%20var%20point2%20%3D%20point1%20%2B%20(nb%20*%20%24(window).height())%3B%0A%20%20distance%20%3D%20Math.abs(point1%20-%20point2)%3B%0A%20%20duree%20%3D%20(distance%20%2F%20SPEED)%20*%201000%3B%0A%20%20if%20(!anim)%20duree%20%3D%201%3B%0A%20%20%24('body%2Chtml').animate(%7B'scrollTop'%3A%20point2%7D%2C%20duree)%3B%0A%7D%0A%0A%2F**%0A%20*%20D%C3%A9marre%20la%20pr%C3%A9sentation%0A%20*%20%40return%20%7Bvoid%7D%0A%20*%2F%0Afunction%20startPresentation()%20%7B%0A%20%20%24(document).fullScreen(true)%3B%0A%20%20%24(%22.start%22).hide()%3B%0A%20%20running%20%3D%20true%3B%0A%7D%0A%0A%2F**%0A%20*%20Arr%C3%AAte%20la%20pr%C3%A9sentation%0A%20*%20%40return%20%7Bvoid%7D%0A%20*%2F%0Afunction%20stopPresentation()%20%7B%0A%20%20%24(document).fullScreen(false)%0A%20%20%24(%22.start%22).show()%3B%0A%20%20running%20%3D%20false%3B%0A%7D"
