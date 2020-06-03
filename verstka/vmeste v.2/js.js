//Обнуление нажатия кнопки по-умолчанию <a>
var all_a = document.querySelectorAll('a');
for (i = 0; i <= all_a.length - 1; i++) {
  var elem = all_a[i];
  elem.onclick = function(e) {
    e.preventDefault();
  }
}

var left_arrow = document.querySelectorAll(".arrow-js-left");
var right_arrow = document.querySelectorAll(".arrow-js-right");
var mass_arrow = [left_arrow, right_arrow];
var imgsCollection = document.getElementsByClassName("slide-page-3");
var imgs = Array.from(imgsCollection);

for (i = 0; i <= mass_arrow.length - 1; i++) {
  var elem_slide = mass_arrow[i][0];
  var arrReverse = false;
  elem_slide.onclick = function(e) {
    e.preventDefault();
    let start_time = Date.now();


    let timer = setInterval(function() {
      let timePassed = Date.now() - start_time;
      if (timePassed >= 500) {
        clearInterval(timer);
        return;
      }
      incr = 7;

      if (e.target.className.indexOf('left') != -1 && !arrReverse) {
        imgs.reverse();
        arrReverse = !arrReverse;
      } else if (e.target.className.indexOf('left') == -1 && arrReverse) {
        imgs.reverse();
        arrReverse = !arrReverse;
      }

      // var maxWidth = false;
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
    }, 20)
  }
}


// for (j = 0; j <= imgs.length - 1; j++) {
//   var img_to_move = imgs[j];
//
//   let start_time = Date.now();
//   let timer = setInterval(timerForImg(img_to_move, start_time, e.target), 20);
// }
//
// function timerForImg(img_to_move, start_time, btn) {
//   let timePassed = Date.now() - start_time;
//   if (timePassed >= 4000) {
//     clearInterval(timer);
//     return;
//   }
//   moveImage(timePassed, img_to_move, btn);
// }
//
// function moveImage(timePassed, img, btn) {
//   if (btn.className.indexOf('left') != -1) { //Стрелка влево
//     cs_left = parseInt(getComputedStyle(img).left);
//     img.style.left = cs_left - 10 + 'px';
//   } else {
//     cs_left = parseInt(getComputedStyle(img_to_move).left);
//     img_to_move.style.left = cs_left + 10 + 'px';
//   }
// }
