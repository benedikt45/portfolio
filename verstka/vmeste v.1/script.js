//Обнуление нажатия кнопки по-умолчанию <a>
var all_a = document.querySelectorAll('a');
for (i = 0; i <= all_a.length - 1; i++) {
  var elem = all_a[i];
  elem.onclick = function(e) {
    e.preventDefault();
  }
}

var sliders = document.querySelectorAll('.slide');

for (i = 0; i <= sliders.length - 1; i++) {
  css_left = parseInt(getComputedStyle(sliders[i]).width);
  css_margin = parseInt(getComputedStyle(sliders[i]).marginLeft)
  sliders[i].style.left = css_left * i + css_margin * 2 * i + 'px';
}

var menu_burger = document.body.getElementsByClassName("burger-button");
var header = document.body.getElementsByClassName("page-1")[0].getElementsByClassName("header")[0];

if (menu_burger.length != 0) {
  var btn = menu_burger[0];
  btn.onclick = function(e) {
    if (e.target.checked) {
      header.style.visibility = "visible";
    } else {
      header.style.visibility = "hidden";
    }
  }
}


var page_5 = document.getElementsByClassName("page-5");
var circle = page_5[0].getElementsByClassName("circle");
var left_arrow = circle[0].getElementsByClassName("left-arrow");
var right_arrow = circle[1].getElementsByClassName("right-arrow");

var mass_arrow = [circle[0], circle[1]];
var imgs_collection = page_5[0].getElementsByClassName("slider");
imgs_collection = imgs_collection[0].getElementsByClassName("slide");
var imgs = Array.from(imgs_collection);

for (i = 0; i <= mass_arrow.length - 1; i++) {
  var elem_slide = mass_arrow[i];
  var arrReverse = false;
  elem_slide.onclick = function(e) {
    e.preventDefault();

    incr = 14;
    let start_time = Date.now();

    if (e.target.className.indexOf('left') != -1 && !arrReverse) {
        imgs.reverse();
        arrReverse = !arrReverse;
      } else if (e.target.className.indexOf('left') == -1 && arrReverse) {
        imgs.reverse();
        arrReverse = !arrReverse;
      }

    for (j = 0; j <= imgs.length - 1; j++) {
      var img_to_move = imgs[j];
      maxRight = 598; //598 цифра взялсь - просто вычислил исходя из макета =)
      maxLeft = 0;
      if (e.target.className.indexOf('left') != -1) { //Стрелка влево
        cs_left = parseInt(getComputedStyle(img_to_move).left);
        if (j == 0) {
          if (cs_left == maxRight) {
            incr = 0;
            // maxWidth = true;
            continue;
          } else if ((cs_left - incr) < maxRight) {
            img_to_move.style.left = maxRight + 'px';
            incr = cs_left - incr;
          } else {
            img_to_move.style.left = cs_left - incr + 'px';
          }
        } else {
          cs_left = parseInt(getComputedStyle(img_to_move).left);
          if (j == 0) {
            if (cs_left == maxLeft) {
              incr = 0;
              // maxWidth = true;
              continue;
            } else if ((cs_left + incr) > maxLeft) {
              img_to_move.style.left = 0 + 'px';
              incr = -cs_left;
            } else {
              img_to_move.style.left = cs_left + incr + 'px';
            }
          } else {
            img_to_move.style.left = cs_left + incr + 'px';
          }
        }
      }
    }


    // let timer = setInterval(function() {
    //   let timePassed = Date.now() - start_time;
    //   if (timePassed >= 500) {
    //     clearInterval(timer);
    //     return;
    //   }
    //   incr = 7;
    //
    //   if (e.target.className.indexOf('left') != -1 && !arrReverse) {
    //     imgs.reverse();
    //     arrReverse = !arrReverse;
    //   } else if (e.target.className.indexOf('left') == -1 && arrReverse) {
    //     imgs.reverse();
    //     arrReverse = !arrReverse;
    //   }
    //
    //   // var maxWidth = false;
    //   for (j = 0; j <= imgs.length - 1; j++) {
    //     var img_to_move = imgs[j];
    //     maxRight = 598; //598 цифра взялсь - просто вычислил исходя из макета =)
    //     maxLeft = 0;
    //     if (e.target.className.indexOf('left') != -1) { //Стрелка влево
    //       cs_left = parseInt(getComputedStyle(img_to_move).left);
    //       if (j == 0) {
    //         if (cs_left == maxRight) {
    //           incr = 0;
    //           // maxWidth = true;
    //           continue;
    //         } else if ((cs_left - incr) < maxRight) {
    //           img_to_move.style.left = maxRight + 'px';
    //           incr = cs_left - maxRight;
    //         } else {
    //           img_to_move.style.left = cs_left - incr + 'px';
    //         }
    //       } else {
    //         img_to_move.style.left = cs_left - incr + 'px';
    //       }
    //     } else {
    //       cs_left = parseInt(getComputedStyle(img_to_move).left);
    //       if (j == 0) {
    //         if (cs_left == maxLeft) {
    //           incr = 0;
    //           // maxWidth = true;
    //           continue;
    //         } else if ((cs_left + incr) > maxLeft) {
    //           img_to_move.style.left = 0 + 'px';
    //           incr = -cs_left;
    //         } else {
    //           img_to_move.style.left = cs_left + incr + 'px';
    //         }
    //       } else {
    //         img_to_move.style.left = cs_left + incr + 'px';
    //       }
    //     }
    //   }
    // }, 20)
  }
}
