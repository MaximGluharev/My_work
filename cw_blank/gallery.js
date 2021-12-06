const gallery = function() {
    let a = document.querySelectorAll(".gallery__thumbs a");
    let b = document.querySelector(".gallery__preview img");
    let c = document.querySelector(".gallery__preview .gallery__preview_close");
    //console.log (a);

    a.forEach(function(elem){ 
        elem.addEventListener('click', function (event){
            event.preventDefault();
            b.src = this.href;
            b.parentElement.style.display = "flex";
            //console.log(b.src);

        });
    });

    c.addEventListener("click", function (event){
        c.parentElement.style.display = "none"

    })
    
    
}

gallery('gallery'); // id