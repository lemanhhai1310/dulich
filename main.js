// // // slider
$(".owl-carousel").owlCarousel({
    loop: false,
    margin: 50,
    nav: true,
    dots: false,
    mouseDrag: false,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        992: {
            items: 3,
        },
    },
});

$(".owl-carousel2").owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    mouseDrag: false,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        992: {
            items: 4,
        },
    },
});

$(".owl-carousel3").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        992: {
            items: 1,
        },
    },
});

$(".owl-carousel4").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        992: {
            items: 1,
        },
    },
});

$(".owl-carousel5").owlCarousel({
    margin: 0,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        992: {
            items: 1,
        },
    },
});

// counter up
const num1 = document.querySelector(".goi-y__number1");
const num2 = document.querySelector(".goi-y__number2");
const num3 = document.querySelector(".goi-y__number3");
const num4 = document.querySelector(".goi-y__number4");
const elementA = document.querySelector(".goi-y");

function counterUp(el, to) {
    let speed = 100;
    let from = 0;
    let step = to / speed;
    const counter = setInterval(function () {
        from += step;
        if (from > to) {
            clearInterval(counter);
            el.innerText = to;
        } else {
            el.innerText = Math.ceil(from);
        }
    }, 1);
}

function counterUpWhenVisible(element, targetValue) {
    let isVisible = false;

    function checkVisibility() {
        var rect = element.getBoundingClientRect();
        var viewHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight
        );

        // Kiểm tra xem phần tử có nằm trong khung nhìn hiện tại hay không
        isVisible =
            rect.top <= viewHeight && rect.bottom >= 0;
    }

    function counterUp(el, to) {
        let speed = 250;
        let from = 0;
        let step = to / speed;
        const counter = setInterval(function () {
            from += step;
            if (from > to) {
                clearInterval(counter);
                el.innerText = to;
            } else {
                el.innerText = Math.ceil(from);
            }
        }, 1);
    }

    function handleScroll() {
        checkVisibility();
        if (isVisible) {
            counterUp(element, targetValue);
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        }
    }

    // Gọi hàm checkVisibility khi tải trang và khi cuộn trang
    window.addEventListener("load", checkVisibility);
    window.addEventListener("scroll", handleScroll);
}

// Sử dụng hàm counterUpWhenVisible cho các phần tử cần kiểm tra
counterUpWhenVisible(num1, 12);
counterUpWhenVisible(num2, 100);
counterUpWhenVisible(num3, 99);
counterUpWhenVisible(num4, 89);

// rps click
const myButton = document.querySelector(".header-bar i");
const rpsHeader = document.querySelector(".rpsHeader");
const rpsHeaderModal = document.querySelector(
    ".rpsHeader_moda"
);
const menuClicks = document.querySelector(
    ".rpsHeader_heading"
);
const dowClick = document.querySelector(".click-up");
const upClick = document.querySelector(".click-dow");
const menec2Click = document.querySelector(
    ".rpsHeader_menuc2"
);

//menuc2
const dowClick2 = document.querySelector(".click-up2");
const upClick2 = document.querySelector(".click-dow2");
const menec2Click2 = document.querySelector(
    ".rpsHeader_menuc4"
);

//menuc2.1
const dowClick6 = document.querySelector(".click-up6");
const upClick6 = document.querySelector(".click-dow6");
const menec6Click6 = document.querySelector(
    ".rpsHeader_menuc6"
);

// dịch vụ
//menuc2.1
const dowClick10 = document.querySelector(".click-up10");
const upClick10 = document.querySelector(".click-dow10");
const menec10Click10 = document.querySelector(
    ".rpsHeader_menuc10"
);

function handleClick() {
    // Xử lý khi sự kiện click xảy ra
    rpsHeader.classList.add("new-rpsheader");
    rpsHeaderModal.classList.add("new-modal");
}

// Gắn sự kiện click cho phần tử myButton
myButton.addEventListener("click", handleClick);

function modalClick() {
    // Xử lý khi sự kiện click xảy ra
    rpsHeader.classList.remove("new-rpsheader");
    rpsHeaderModal.classList.remove("new-modal");
}

// Gắn sự kiện click cho phần tử myButton
rpsHeaderModal.addEventListener("click", modalClick);

// click tg
function menuClick() {
    // xử lý up dow
    dowClick.classList.add("click-up-remove");
    upClick.classList.add("click-dow-add");
    dowClick.classList.remove("click-dow_toggle");
    dowClick.classList.remove("click-up1");
    menec2Click.classList.add("menec2Click-block");
    menec2Click2.classList.remove("menec2Click-block5");
    menec6Click6.classList.remove("menec6Click-block5");
}

// Gắn sự kiện click cho phần tử myButton
dowClick.addEventListener("click", menuClick);

function removeupClick() {
    dowClick.classList.remove("click-up-remove");
    upClick.classList.remove("click-dow-add");
    // xử lý dow
    dowClick.classList.add("click-dow_toggle");
    dowClick.classList.add("click-up2");

    menec2Click.classList.remove("menec2Click-block");

    console.log(1);
}

// Gắn sự kiện click cho phần tử myButton
upClick.addEventListener("click", removeupClick);

//menu c3

function menuClick2() {
    // xử lý up dow
    dowClick2.classList.add("click-up-remove");
    upClick2.classList.add("click-dow-add2");
    dowClick2.classList.remove("click-dow_toggle3");
    upClick2.classList.remove("click-up3");
    menec2Click2.classList.add("menec2Click-block5");
}

// Gắn sự kiện click cho phần tử myButton
dowClick2.addEventListener("click", menuClick2);

function removeupClick2() {
    dowClick2.classList.remove("click-up-remove");
    upClick2.classList.remove("click-dow-add");
    // xử lý dow
    dowClick2.classList.add("click-dow_toggle3");
    upClick2.classList.add("click-up3");

    menec2Click2.classList.remove("menec2Click-block5");
}

// Gắn sự kiện click cho phần tử myButton
upClick2.addEventListener("click", removeupClick2);

// item 2
//menu c3

function menuClick6() {
    // xử lý up dow
    dowClick6.classList.add("click-up-remove");
    upClick6.classList.add("click-dow-add6");
    dowClick6.classList.remove("click-dow_toggle3");
    upClick6.classList.remove("click-up7");
    menec6Click6.classList.add("menec6Click-block5");
}

// Gắn sự kiện click cho phần tử myButton
dowClick6.addEventListener("click", menuClick6);

function removeupClick6() {
    dowClick6.classList.remove("click-up-remove");
    upClick6.classList.remove("click-dow-add");
    // xử lý dow
    dowClick6.classList.add("click-dow_toggle7");
    upClick6.classList.add("click-up7");

    menec6Click6.classList.remove("menec6Click-block5");
}

// Gắn sự kiện click cho phần tử myButton
upClick6.addEventListener("click", removeupClick6);

// dịch vu
// / item 1
//menu c2

function menuClick10() {
    // xử lý up dow
    dowClick10.classList.add("click-up-remove");
    upClick10.classList.add("click-dow-add10");
    dowClick10.classList.remove("click-dow_toggle10");
    upClick10.classList.remove("click-up11");
    menec10Click10.classList.add("menec10Click-block5");

    console.log(1);
}

// Gắn sự kiện click cho phần tử myButton
dowClick10.addEventListener("click", menuClick10);

function removeupClick10() {
    dowClick10.classList.remove("click-up-remove");
    upClick10.classList.remove("click-dow-add");
    // xử lý dow
    dowClick10.classList.add("click-dow_toggle11");
    upClick10.classList.add("click-up11");

    menec10Click10.classList.remove("menec10Click-block5");
}

// Gắn sự kiện click cho phần tử myButton
upClick10.addEventListener("click", removeupClick10);
