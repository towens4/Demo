

$(document).ready(function () {
    var owl = $(".item-container");
    owl.owlCarousel({
        margin: 10,
        loop: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
        }
    });

    $('.select-right').click(function () {
        owl.trigger('owl.next.carousel');
    });

    $('.select-left').click(function () {
        owl.trigger('owl.prev.carousel');
    });
});



/*$('select-left').click(function () {
    $(".item-container").trigger('prev.owl.carousel')
});

$('select-right').click(function () {
    $(".item-container").trigger('next.owl.carousel')
});*/

//const itemList = document.getElementsByClassName('item');

function hideOutOfBoundsItems()
{
    for (var i = 0; i < itemList.length; i++) {
        console.log(itemList[i]);
        if (isInViewport(itemList[i]) == false) {
            itemList[i].style.visibility = "hidden";
        }
    }
}

/*function isInViewport(element)
{

    element.getBoundingClientRect();
    return (
        element.top >= 0 &&
        element.left >= 0 &&
        element.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        element.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}*/


//const item = document.querySelector('.item');

var id = null;
function Scroll(dir)
{
    var container = document.getElementsByClassName('item-container')[0];

    switch (dir) {
        case 'Left':
            moveLeft(container);
            break;
        case 'Right':
            moveRight(container);
            break;
        default: break;
    }
    //Move the item-container class
    //Check which direction the button points to
    
}

function moveLeft(element)
{
    var xPos = element.getBoundingClientRect().x;
    clearInterval(id);

    id = setInterval(frame, 10);

    function frame()
    {
        if (xPos == (xPos - 100)) {
            clearInterval(id);
        } else {
            xPos--;
            element.style.left = xPos + 'px';
        }
    }
}

function moveRight(element) {
    var xPos = element.getBoundingClientRect().x;
    var setPos = xPos;
    clearInterval(id);

    id = setInterval(frame, 10);

    function frame() {
        if (xPos == (setPos + 100)) {
            clearInterval(id);
        } else {
            console.log(xPos);
            xPos++;
            element.style.left = xPos + 'px';
        }
    }
}

function move(element, dir)
{
    var xPos = element.getBoundingClientRect().x;
    clearInterval(id);

    id = setInterval(frame, 10);

    function frame()
    {
        switch (dir) {
            case 'Left':
                if (xPos == (xPos - 100)) {
                    clearInterval(id);
                } else {
                    xPos--;
                    element.style.left = xPos + 'px';
                }
                break;
            case 'Right':
                if (xPos == (xPos + 100)) {
                    clearInterval(id);
                } else {
                    xPos++;
                    element.style.right = xPos + 'px';
                }
                break;
            default: break;
        }
    }
    
}

