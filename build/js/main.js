"use strict";

var days = document.querySelectorAll(".wheel__days-item");
var popupDays = document.querySelectorAll(".popup__days-item");
var popupDaysMob = document.querySelectorAll(".days__item");
var currentDay = 5;
function setDays(days, currentDay) {
  days.forEach(function (day, i) {
    ++i;
    day.classList.toggle("next", i > currentDay);
    day.classList.toggle("past", i < currentDay);
    day.classList.toggle("active", i === currentDay);
  });
}
function daysRemind(days, classAnim) {
  var delay = 900;
  days.forEach(function (day, i) {
    setTimeout(function () {
      day.classList.add(classAnim);
      setTimeout(function () {
        return day.classList.remove(classAnim);
      }, 1200);
    }, delay * i);
  });
}
var randomInterval = Math.random() * (20000 - 10000) + 10000;
function startRandomInterval() {
  var randomInterval = Math.random() * (20000 - 10000) + 10000; // Випадковий інтервал між 10 і 20 секундами
  daysRemind(days, "remind");
  daysRemind(popupDays, "remind");
  daysRemind(popupDaysMob, "remind");
  setTimeout(startRandomInterval, randomInterval);
}

// Запускаємо перший раз
startRandomInterval();
daysRemind(days, "remind");
setDays(days, currentDay);
setDays(popupDays, currentDay);
setDays(popupDaysMob, currentDay);
// addAnimationClass()

/// wheel logic
var wheelSections = document.querySelector(".wheel__sections");
var wheelWrap = document.querySelector(".wheel__wrap");
var wheelArrow = document.querySelector(".wheel__arrow");
var wheelBtn = document.querySelector(".wheel__btn");
var spinBg = document.querySelector(".spin-bg");
var salut = document.querySelector(".fireworks-wrap");
var bubleBtn = document.querySelector(".wheel__days-icons");
var wheelBuble = document.querySelector(".wheel__buble");
var popupContainer = document.querySelector(".popups");
var popup = document.querySelector(".popup");
var popupCloseBtn = document.querySelector(".popup__close");
bubleBtn.addEventListener("click", function (e) {
  wheelBuble.classList.toggle("_hidden");
  document.addEventListener("click", function (e) {
    if (e.target !== bubleBtn) wheelBuble.classList.add("_hidden");
  });
});
var prizes = ['iphone', 'ecoflow', 'merch', 'nothing', "bonuses"];
function getRandomPrize(arr) {
  return arr[Math.floor(Math.random() * prizes.length)];
}
function showPopup(sections, wheel, showClass, currentDay, spinBg, closeBtn, popupContainer, popup) {
  popup.classList.add("".concat(showClass));
  currentDay === 7 ? popup.classList.add("_done") : popup.classList.add("_incomplete");
  popupContainer.classList.add("_opacity", "_zIndex");
  document.body.style.overflow = "hidden";
  spinBg.classList.remove("showSpinBg");
  var pers = document.querySelectorAll(".popup__pers");
  var prize = document.querySelectorAll(".popup__prize");
  var buble = document.querySelectorAll(".popup__buble");
  var popupBody = document.querySelector(".popup__main");
  var popupTitle = document.querySelectorAll(".popup__title");
  var popupLeftArrow = document.querySelectorAll(".popup__decor-left");
  var popupRightArrow = document.querySelectorAll(".popup__decor-right");
  currentDay === 7 ? popupBody.classList.add("_done") : popup.classList.add("_incomplete");
  function addAnim(arr, classAnim) {
    arr.forEach(function (item) {
      return item.classList.add("".concat(classAnim));
    });
  }

  //popup animations
  popupBody.classList.add("popupMainAnim");
  setTimeout(function () {
    addAnim(pers, "popupPersAnim");
    addAnim(buble, "popupBubleAnim");
  }, 600);
  setTimeout(function () {
    return addAnim(prize, "popupPrizeAnim");
  }, 1200);
  setTimeout(function () {
    return popupTitle.forEach(function (item) {
      return item.classList.add("popupTitleAnim");
    });
  }, 1800);
  setTimeout(function () {
    return popupLeftArrow.forEach(function (item) {
      return item.classList.add("popupLeftArrAnim");
    });
  }, 2400);
  setTimeout(function () {
    return popupRightArrow.forEach(function (item) {
      return item.classList.add("popupRightArrAnim");
    });
  }, 2700);

  //popup animations

  closeBtn.addEventListener("click", function () {
    wheel.classList.add("_lock");
    wheel.classList.remove("wheelSizeIncrease");
    document.body.style.overflow = "auto";
    popupContainer.classList.remove("_opacity", "_zIndex");
    popup.classList.remove("".concat(showClass), '_done', '_incomplete');
  });
}
function spinWheel(position, animation, sections, btn, wheel, arrow, prize, spinBg, salut) {
  sections.addEventListener("animationend", function () {
    sections.style.transform = "translate(-50%, -50%) rotate(".concat(position, "deg)");
    console.log(prize);
  }, {
    once: true
  });
  sections.classList.add("".concat(animation));
  arrow.style.opacity = "0";
  wheel.classList.add("wheelSizeIncrease");
  spinBg.classList.add("showSpinBg");
  salut.classList.add("_opacity");
  btn.style.pointerEvents = "none";
}
function firstSpin(sections, btn, wheel, arrow, prize, spinBg, salut) {
  btn.addEventListener("click", function () {
    if (prize === "iphone") {
      sections.addEventListener("animationend", function () {
        return showPopup(sections, wheel, "_iphone", currentDay, spinBg, popupCloseBtn, popupContainer, popup);
      });
      spinWheel(1800, "iphonePrize", sections, btn, wheel, arrow, prize, spinBg, salut);
    }
    if (prize === "ecoflow") {
      sections.addEventListener("animationend", function () {
        return showPopup(sections, wheel, "_ecoflow", currentDay, spinBg, popupCloseBtn, popupContainer, popup);
      });
      spinWheel(1665, "ecoflowPrize", sections, btn, wheel, arrow, prize, spinBg, salut);
    }
    if (prize === "merch") {
      sections.addEventListener("animationend", function () {
        return showPopup(sections, wheel, "_merch", currentDay, spinBg, popupCloseBtn, popupContainer, popup);
      });
      spinWheel(1711, "merchPrize", sections, btn, wheel, arrow, prize, spinBg, salut);
    }
    if (prize === "nothing") {
      sections.addEventListener("animationend", function () {
        return showPopup(sections, wheel, "_nothing", currentDay, spinBg, popupCloseBtn, popupContainer, popup);
      });
      spinWheel(1755, "nothingPrize", sections, btn, wheel, arrow, prize, spinBg, salut);
    }
    if (prize === "bonuses") {
      sections.addEventListener("animationend", function () {
        return showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup);
      });
      spinWheel(1935, "bonusesPrize", sections, btn, wheel, arrow, prize, spinBg, salut);
    }
  });
}
firstSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow, "ecoflow", spinBg, salut);

//// accordion

var accordionHeaders = document.querySelectorAll('.accordion__header');
accordionHeaders.forEach(function (header) {
  header.addEventListener('click', function () {
    var content = header.nextElementSibling;
    document.querySelectorAll('.accordion__content').forEach(function (item) {
      if (item !== content) {
        item.style.display = 'none';
        item.previousElementSibling.classList.remove('open');
      }
    });
    if (content.style.display === 'block') {
      content.style.display = 'none';
      header.classList.remove('open');
    } else {
      content.style.display = 'block';
      header.classList.add('open');
    }
  });
});

//// for test

var btnsWrap = document.querySelector('.btns-wrap');
var buttons = btnsWrap.querySelectorAll('button');
var dropIphoneButton = document.querySelector('.drop-iphone');
var dropEcoflowButton = document.querySelector('.drop-ecoflow');
var dropNothingButton = document.querySelector('.drop-nothing');
var dropMerchButton = document.querySelector('.drop-merch');
var dropBonusButton = document.querySelector('.drop-bonus');
var dropDone = document.querySelector('.drop-done');
// const dropIncomplete = document.querySelector('.drop-incomplete');
var dropMenu = document.querySelector('.drop-menu');
dropMenu.addEventListener("click", function () {
  return btnsWrap.classList.toggle("_hidden");
});
firstSpin(wheelSections, dropIphoneButton, wheelWrap, wheelArrow, "iphone", spinBg, salut);
firstSpin(wheelSections, dropEcoflowButton, wheelWrap, wheelArrow, "ecoflow", spinBg, salut);
firstSpin(wheelSections, dropNothingButton, wheelWrap, wheelArrow, "nothing", spinBg, salut);
firstSpin(wheelSections, dropMerchButton, wheelWrap, wheelArrow, "merch", spinBg, salut);
firstSpin(wheelSections, dropBonusButton, wheelWrap, wheelArrow, "bonuses", spinBg, salut);
buttons.forEach(function (item) {
  item.addEventListener("click", function () {
    wheelSections.style.animationDuration = "0.1s";
    wheelSections.addEventListener("animationend", function () {
      wheelSections.style.animationDuration = "8s";
    });
  });
});
dropDone.addEventListener("click", function () {
  return currentDay = 7;
});
// localStorage.setItem(currentDay, currentDay)
// dropIncomplete.addEventListener("click", () => currentDay = 3)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZGF5cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBvcHVwRGF5cyIsInBvcHVwRGF5c01vYiIsImN1cnJlbnREYXkiLCJzZXREYXlzIiwiZm9yRWFjaCIsImRheSIsImkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJkYXlzUmVtaW5kIiwiY2xhc3NBbmltIiwiZGVsYXkiLCJzZXRUaW1lb3V0IiwiYWRkIiwicmVtb3ZlIiwicmFuZG9tSW50ZXJ2YWwiLCJNYXRoIiwicmFuZG9tIiwic3RhcnRSYW5kb21JbnRlcnZhbCIsIndoZWVsU2VjdGlvbnMiLCJxdWVyeVNlbGVjdG9yIiwid2hlZWxXcmFwIiwid2hlZWxBcnJvdyIsIndoZWVsQnRuIiwic3BpbkJnIiwic2FsdXQiLCJidWJsZUJ0biIsIndoZWVsQnVibGUiLCJwb3B1cENvbnRhaW5lciIsInBvcHVwIiwicG9wdXBDbG9zZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicHJpemVzIiwiZ2V0UmFuZG9tUHJpemUiLCJhcnIiLCJmbG9vciIsImxlbmd0aCIsInNob3dQb3B1cCIsInNlY3Rpb25zIiwid2hlZWwiLCJzaG93Q2xhc3MiLCJjbG9zZUJ0biIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicGVycyIsInByaXplIiwiYnVibGUiLCJwb3B1cEJvZHkiLCJwb3B1cFRpdGxlIiwicG9wdXBMZWZ0QXJyb3ciLCJwb3B1cFJpZ2h0QXJyb3ciLCJhZGRBbmltIiwiaXRlbSIsInNwaW5XaGVlbCIsInBvc2l0aW9uIiwiYW5pbWF0aW9uIiwiYnRuIiwiYXJyb3ciLCJ0cmFuc2Zvcm0iLCJjb25zb2xlIiwibG9nIiwib25jZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiZmlyc3RTcGluIiwiYWNjb3JkaW9uSGVhZGVycyIsImhlYWRlciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJkaXNwbGF5IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImJ0bnNXcmFwIiwiYnV0dG9ucyIsImRyb3BJcGhvbmVCdXR0b24iLCJkcm9wRWNvZmxvd0J1dHRvbiIsImRyb3BOb3RoaW5nQnV0dG9uIiwiZHJvcE1lcmNoQnV0dG9uIiwiZHJvcEJvbnVzQnV0dG9uIiwiZHJvcERvbmUiLCJkcm9wTWVudSIsImFuaW1hdGlvbkR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUMzRCxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7QUFDaEUsSUFBTUUsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztBQUM3RCxJQUFJRyxVQUFVLEdBQUcsQ0FBQztBQUVsQixTQUFTQyxPQUFPLENBQUNOLElBQUksRUFBRUssVUFBVSxFQUFDO0VBQzlCTCxJQUFJLENBQUNPLE9BQU8sQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLENBQUMsRUFBSTtJQUNwQixFQUFFQSxDQUFDO0lBQ0hELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxFQUFFRixDQUFDLEdBQUdKLFVBQVUsQ0FBQztJQUM1Q0csR0FBRyxDQUFDRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLEVBQUVGLENBQUMsR0FBR0osVUFBVSxDQUFDO0lBQzVDRyxHQUFHLENBQUNFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRUYsQ0FBQyxLQUFLSixVQUFVLENBQUM7RUFDcEQsQ0FBQyxDQUFDO0FBQ047QUFFQSxTQUFTTyxVQUFVLENBQUNaLElBQUksRUFBRWEsU0FBUyxFQUFFO0VBQ2pDLElBQUlDLEtBQUssR0FBRyxHQUFHO0VBQ2ZkLElBQUksQ0FBQ08sT0FBTyxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsQ0FBQyxFQUFLO0lBQ3JCTSxVQUFVLENBQUMsWUFBTTtNQUNiUCxHQUFHLENBQUNFLFNB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TSxFQUFFQyxLQUFLLENBQUM7QUFDNUYwQyxTQUFTLENBQUNoRCxhQUFhLEVBQUUyRCxpQkFBaUIsRUFBRXpELFNBQVMsRUFBRUMsVUFBVSxFQUFFLFNBQVMsRUFBRUUsTUFBTSxFQUFFQyxLQUFLLENBQUM7QUFDNUYwQyxTQUFTLENBQUNoRCxhQUFhLEVBQUU0RCxlQUFlLEVBQUUxRCxTQUFTLEVBQUVDLFVBQVUsRUFBRSxPQUFPLEVBQUVFLE1BQU0sRUFBRUMsS0FBSyxDQUFDO0FBQ3hGMEMsU0FBUyxDQUFDaEQsYUFBYSxFQUFFNkQsZUFBZSxFQUFFM0QsU0FBUyxFQUFFQyxVQUFVLEVBQUUsU0FBUyxFQUFFRSxNQUFNLEVBQUVDLEtBQUssQ0FBQztBQUUxRmtELE9BQU8sQ0FBQ3ZFLE9BQU8sQ0FBQyxVQUFBbUQsSUFBSSxFQUFHO0VBQ25CQSxJQUFJLENBQUN4QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNqQ1osYUFBYSxDQUFDMEIsS0FBSyxDQUFDc0MsaUJBQWlCLEdBQUcsTUFBTTtJQUM5Q2hFLGFBQWEsQ0FBQ1ksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFlBQUs7TUFDaERaLGFBQWEsQ0FBQzBCLEtBQUssQ0FBQ3NDLGlCQUFpQixHQUFHLElBQUk7SUFDaEQsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUZGLFFBQVEsQ0FBQ2xELGdCQUFnQixDQUFDLE9BQU8sRUFBRTtFQUFBLE9BQU03QixVQUFVLEdBQUcsQ0FBQztBQUFBLEVBQUM7QUFDeEQ7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2hlZWxfX2RheXMtaXRlbVwiKVxuY29uc3QgcG9wdXBEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fZGF5cy1pdGVtXCIpO1xuY29uc3QgcG9wdXBEYXlzTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXlzX19pdGVtXCIpO1xubGV0IGN1cnJlbnREYXkgPSA1XG5cbmZ1bmN0aW9uIHNldERheXMoZGF5cywgY3VycmVudERheSl7XG4gICAgZGF5cy5mb3JFYWNoKChkYXksIGkpID0+e1xuICAgICAgICArK2lcbiAgICAgICAgZGF5LmNsYXNzTGlzdC50b2dnbGUoXCJuZXh0XCIsIGkgPiBjdXJyZW50RGF5KTtcbiAgICAgICAgZGF5LmNsYXNzTGlzdC50b2dnbGUoXCJwYXN0XCIsIGkgPCBjdXJyZW50RGF5KTtcbiAgICAgICAgZGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIiwgaSA9PT0gY3VycmVudERheSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGF5c1JlbWluZChkYXlzLCBjbGFzc0FuaW0pIHtcbiAgICBsZXQgZGVsYXkgPSA5MDA7XG4gICAgZGF5cy5mb3JFYWNoKChkYXksIGkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChjbGFzc0FuaW0pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkYXkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc0FuaW0pLCAxMjAwKVxuICAgICAgICB9LCBkZWxheSAqIGkpO1xuICAgIH0pO1xufVxuXG5jb25zdCByYW5kb21JbnRlcnZhbCA9IE1hdGgucmFuZG9tKCkgKiAoMjAwMDAgLSAxMDAwMCkgKyAxMDAwMDtcblxuXG5mdW5jdGlvbiBzdGFydFJhbmRvbUludGVydmFsKCkge1xuICAgIGNvbnN0IHJhbmRvbUludGVydmFsID0gTWF0aC5yYW5kb20oKSAqICgyMDAwMCAtIDEwMDAwKSArIDEwMDAwOyAvLyDQktC40L/QsNC00LrQvtCy0LjQuSDRltC90YLQtdGA0LLQsNC7INC80ZbQtiAxMCDRliAyMCDRgdC10LrRg9C90LTQsNC80LhcbiAgICBkYXlzUmVtaW5kKGRheXMsIFwicmVtaW5kXCIpO1xuICAgIGRheXNSZW1pbmQocG9wdXBEYXlzLCBcInJlbWluZFwiKTtcbiAgICBkYXlzUmVtaW5kKHBvcHVwRGF5c01vYiwgXCJyZW1pbmRcIik7XG4gICAgc2V0VGltZW91dChzdGFydFJhbmRvbUludGVydmFsLCByYW5kb21JbnRlcnZhbCk7XG59XG5cbi8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INC/0LXRgNGI0LjQuSDRgNCw0LdcbnN0YXJ0UmFuZG9tSW50ZXJ2YWwoKTtcbmRheXNSZW1pbmQoZGF5cywgXCJyZW1pbmRcIilcblxuc2V0RGF5cyhkYXlzLCBjdXJyZW50RGF5KVxuc2V0RGF5cyhwb3B1cERheXMsIGN1cnJlbnREYXkpXG5zZXREYXlzKHBvcHVwRGF5c01vYiwgY3VycmVudERheSlcbi8vIGFkZEFuaW1hdGlvbkNsYXNzKClcblxuLy8vIHdoZWVsIGxvZ2ljXG5jb25zdCB3aGVlbFNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGVlbF9fc2VjdGlvbnNcIilcbmNvbnN0IHdoZWVsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hlZWxfX3dyYXBcIilcbmNvbnN0IHdoZWVsQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoZWVsX19hcnJvd1wiKVxuY29uc3Qgd2hlZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoZWVsX19idG5cIilcbmNvbnN0IHNwaW5CZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbi1iZ1wiKVxuY29uc3Qgc2FsdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcmV3b3Jrcy13cmFwXCIpXG5jb25zdCBidWJsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hlZWxfX2RheXMtaWNvbnNcIilcbmNvbnN0IHdoZWVsQnVibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoZWVsX19idWJsZVwiKVxuY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc1wiKVxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpXG5jb25zdCBwb3B1cENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2VcIilcblxuYnVibGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICB3aGVlbEJ1YmxlLmNsYXNzTGlzdC50b2dnbGUoXCJfaGlkZGVuXCIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7aWYoZS50YXJnZXQgIT09IGJ1YmxlQnRuKSB3aGVlbEJ1YmxlLmNsYXNzTGlzdC5hZGQoXCJfaGlkZGVuXCIpfSlcbn0pXG5cbmxldCBwcml6ZXMgPSBbJ2lwaG9uZScsICdlY29mbG93JywgJ21lcmNoJywgJ25vdGhpbmcnLCBcImJvbnVzZXNcIl1cbmZ1bmN0aW9uIGdldFJhbmRvbVByaXplKGFycikge1xuICAgIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcHJpemVzLmxlbmd0aCldO1xufVxuZnVuY3Rpb24gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgc2hvd0NsYXNzLCBjdXJyZW50RGF5LCBzcGluQmcsIGNsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXApe1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoYCR7c2hvd0NsYXNzfWApXG4gICAgY3VycmVudERheSA9PT0gNyA/IHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKSA6IHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfaW5jb21wbGV0ZVwiKVxuICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIilcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIHNwaW5CZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1NwaW5CZ1wiKVxuICAgIGNvbnN0IHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19wZXJzXCIpXG4gICAgY29uc3QgcHJpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19wcml6ZVwiKVxuICAgIGNvbnN0IGJ1YmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fYnVibGVcIilcbiAgICBjb25zdCBwb3B1cEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19tYWluXCIpXG4gICAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX3RpdGxlXCIpXG4gICAgY29uc3QgcG9wdXBMZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19kZWNvci1sZWZ0XCIpXG4gICAgY29uc3QgcG9wdXBSaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fZGVjb3ItcmlnaHRcIilcbiAgICBjdXJyZW50RGF5ID09PSA3ID8gcG9wdXBCb2R5LmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKSA6IHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfaW5jb21wbGV0ZVwiKVxuXG4gICAgZnVuY3Rpb24gYWRkQW5pbShhcnIsIGNsYXNzQW5pbSl7XG4gICAgICAgIGFyci5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzQW5pbX1gKSApXG4gICAgfVxuXG4gICAgLy9wb3B1cCBhbmltYXRpb25zXG4gICAgcG9wdXBCb2R5LmNsYXNzTGlzdC5hZGQoXCJwb3B1cE1haW5BbmltXCIpXG4gICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgYWRkQW5pbShwZXJzLCBcInBvcHVwUGVyc0FuaW1cIilcbiAgICAgICAgYWRkQW5pbShidWJsZSwgXCJwb3B1cEJ1YmxlQW5pbVwiKVxuICAgIH0sIDYwMClcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiBhZGRBbmltKHByaXplLCBcInBvcHVwUHJpemVBbmltXCIpLCAxMjAwKVxuICAgIHNldFRpbWVvdXQoICgpID0+IHBvcHVwVGl0bGUuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInBvcHVwVGl0bGVBbmltXCIpKSwgMTgwMClcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiBwb3B1cExlZnRBcnJvdy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwicG9wdXBMZWZ0QXJyQW5pbVwiKSksIDI0MDApXG4gICAgc2V0VGltZW91dCggKCkgPT4gcG9wdXBSaWdodEFycm93LmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFJpZ2h0QXJyQW5pbVwiKSksIDI3MDApXG5cbiAgICAvL3BvcHVwIGFuaW1hdGlvbnNcblxuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICB3aGVlbC5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIilcbiAgICAgICAgd2hlZWwuY2xhc3NMaXN0LnJlbW92ZShcIndoZWVsU2l6ZUluY3JlYXNlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIiwgXCJfekluZGV4XCIpXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoYCR7c2hvd0NsYXNzfWAsICdfZG9uZScsICdfaW5jb21wbGV0ZScpXG4gICAgfSlcbn1cbmZ1bmN0aW9uIHNwaW5XaGVlbChwb3NpdGlvbiwgYW5pbWF0aW9uLCBzZWN0aW9ucywgYnRuLCB3aGVlbCwgYXJyb3csIHByaXplLCBzcGluQmcsIHNhbHV0KXtcbiAgICBzZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+e1xuICAgICAgICBzZWN0aW9ucy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgke3Bvc2l0aW9ufWRlZylgXG4gICAgICAgIGNvbnNvbGUubG9nKHByaXplKVxuICAgIH0sIHtvbmNlOiB0cnVlfSlcbiAgICBzZWN0aW9ucy5jbGFzc0xpc3QuYWRkKGAke2FuaW1hdGlvbn1gKVxuICAgIGFycm93LnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoXCJ3aGVlbFNpemVJbmNyZWFzZVwiKVxuICAgIHNwaW5CZy5jbGFzc0xpc3QuYWRkKFwic2hvd1NwaW5CZ1wiKVxuICAgIHNhbHV0LmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiKVxuICAgIGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCJcbn1cblxuZnVuY3Rpb24gZmlyc3RTcGluKHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdywgcHJpemUsIHNwaW5CZywgc2FsdXQpe1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHByaXplID09PSBcImlwaG9uZVwiKXtcbiAgICAgICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgXCJfaXBob25lXCIsIGN1cnJlbnREYXksIHNwaW5CZywgcG9wdXBDbG9zZUJ0biwgcG9wdXBDb250YWluZXIsIHBvcHVwKSlcbiAgICAgICAgICAgIHNwaW5XaGVlbCgxODAwLCBcImlwaG9uZVByaXplXCIsIHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdywgcHJpemUsIHNwaW5CZywgc2FsdXQpXG4gICAgICAgIH1cbiAgICAgICAgaWYocHJpemUgPT09IFwiZWNvZmxvd1wiKXtcbiAgICAgICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgXCJfZWNvZmxvd1wiLCBjdXJyZW50RGF5LCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCkpXG4gICAgICAgICAgICBzcGluV2hlZWwoMTY2NSwgXCJlY29mbG93UHJpemVcIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgfVxuICAgICAgICBpZihwcml6ZSA9PT0gXCJtZXJjaFwiKXtcbiAgICAgICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgXCJfbWVyY2hcIiwgY3VycmVudERheSwgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXApKVxuICAgICAgICAgICAgc3BpbldoZWVsKDE3MTEsIFwibWVyY2hQcml6ZVwiLCBzZWN0aW9ucywgYnRuLCB3aGVlbCwgYXJyb3csIHByaXplLCBzcGluQmcsIHNhbHV0KVxuICAgICAgICB9XG4gICAgICAgIGlmKHByaXplID09PSBcIm5vdGhpbmdcIil7XG4gICAgICAgICAgICBzZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsXCJfbm90aGluZ1wiLCBjdXJyZW50RGF5LCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCkpXG4gICAgICAgICAgICBzcGluV2hlZWwoMTc1NSwgXCJub3RoaW5nUHJpemVcIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgfVxuICAgICAgICBpZihwcml6ZSA9PT0gXCJib251c2VzXCIpe1xuICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLCBcIl9ib251c1wiLCBjdXJyZW50RGF5LCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCkpXG4gICAgICAgICAgICBzcGluV2hlZWwoMTkzNSwgXCJib251c2VzUHJpemVcIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZpcnN0U3Bpbih3aGVlbFNlY3Rpb25zLCB3aGVlbEJ0biwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBcImVjb2Zsb3dcIiwgc3BpbkJnLCBzYWx1dClcblxuXG5cblxuXG5cbi8vLy8gYWNjb3JkaW9uXG5cbmNvbnN0IGFjY29yZGlvbkhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19oZWFkZXInKTtcbmFjY29yZGlvbkhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fY29udGVudCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSAhPT0gY29udGVudCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG4vLy8vIGZvciB0ZXN0XG5cbmNvbnN0IGJ0bnNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bnMtd3JhcCcpO1xuXG5jb25zdCBidXR0b25zID0gYnRuc1dyYXAucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5cbmNvbnN0IGRyb3BJcGhvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC1pcGhvbmUnKTtcbmNvbnN0IGRyb3BFY29mbG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3AtZWNvZmxvdycpO1xuY29uc3QgZHJvcE5vdGhpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC1ub3RoaW5nJyk7XG5jb25zdCBkcm9wTWVyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC1tZXJjaCcpO1xuY29uc3QgZHJvcEJvbnVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3AtYm9udXMnKTtcbmNvbnN0IGRyb3BEb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3AtZG9uZScpO1xuLy8gY29uc3QgZHJvcEluY29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC1pbmNvbXBsZXRlJyk7XG5jb25zdCBkcm9wTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wLW1lbnUnKTtcblxuZHJvcE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4gYnRuc1dyYXAuY2xhc3NMaXN0LnRvZ2dsZShcIl9oaWRkZW5cIikpXG5cbmZpcnN0U3Bpbih3aGVlbFNlY3Rpb25zLCBkcm9wSXBob25lQnV0dG9uLCB3aGVlbFdyYXAsIHdoZWVsQXJyb3csIFwiaXBob25lXCIsIHNwaW5CZywgc2FsdXQpXG5maXJzdFNwaW4od2hlZWxTZWN0aW9ucywgZHJvcEVjb2Zsb3dCdXR0b24sIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgXCJlY29mbG93XCIsIHNwaW5CZywgc2FsdXQpXG5maXJzdFNwaW4od2hlZWxTZWN0aW9ucywgZHJvcE5vdGhpbmdCdXR0b24sIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgXCJub3RoaW5nXCIsIHNwaW5CZywgc2FsdXQpXG5maXJzdFNwaW4od2hlZWxTZWN0aW9ucywgZHJvcE1lcmNoQnV0dG9uLCB3aGVlbFdyYXAsIHdoZWVsQXJyb3csIFwibWVyY2hcIiwgc3BpbkJnLCBzYWx1dClcbmZpcnN0U3Bpbih3aGVlbFNlY3Rpb25zLCBkcm9wQm9udXNCdXR0b24sIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgXCJib251c2VzXCIsIHNwaW5CZywgc2FsdXQpXG5cbmJ1dHRvbnMuZm9yRWFjaChpdGVtID0+e1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgd2hlZWxTZWN0aW9ucy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC4xc1wiXG4gICAgICAgIHdoZWVsU2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PntcbiAgICAgICAgICAgIHdoZWVsU2VjdGlvbnMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjhzXCJcbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxuZHJvcERvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGN1cnJlbnREYXkgPSA3KVxuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudERheSwgY3VycmVudERheSlcbi8vIGRyb3BJbmNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjdXJyZW50RGF5ID0gMylcblxuXG5cbiJdfQ==
