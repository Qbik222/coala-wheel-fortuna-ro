"use strict";

(function () {
  // const apiURL = 'https://fav-prom.com/api_wheel_hr';
  //
  // const
  //     unauthMsgs = document.querySelectorAll('.unauth-msg'),
  //     participateBtns = document.querySelectorAll('.btn-join');
  //
  // const hrLeng = document.querySelector('#hrLeng');
  // const enLeng = document.querySelector('#enLeng');
  //
  // let locale = 'en';
  //
  // if (hrLeng) locale = 'hr';
  // if (enLeng) locale = 'en';
  //
  //
  // let i18nData = {};
  var debug = true;
  // let userId;
  //
  // function loadTranslations() {
  //     return fetch(`${apiURL}/translates/${locale}`).then(res => res.json())
  //         .then(json => {
  //             i18nData = json;
  //             translate();
  //
  //             var mutationObserver = new MutationObserver(function (mutations) {
  //                 translate();
  //             });
  //             mutationObserver.observe(document.getElementById('wheel'), {
  //                 childList: true,
  //                 subtree: true,
  //             });
  //
  //         });
  // }
  //
  // function translate() {
  //     const elems = document.querySelectorAll('[data-translate]')
  //     if (elems && elems.length) {
  //         elems.forEach(elem => {
  //             const key = elem.getAttribute('data-translate');
  //             elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
  //             elem.removeAttribute('data-translate');
  //         })
  //     }
  //     refreshLocalizedClass();
  // }
  //
  // function refreshLocalizedClass(element, baseCssClass) {
  //     if (!element) {
  //         return;
  //     }
  //     for (const lang of ['hr', 'en']) {
  //         element.classList.remove(baseCssClass + lang);
  //     }
  //     element.classList.add(baseCssClass + locale);
  // }
  //
  // const request = function (link, extraOptions) {
  //     return fetch(apiURL + link, {
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //         },
  //         ...(extraOptions || {})
  //     }).then(res => res.json())
  // }
  //
  //
  // function init() {
  //     if (window.store) {
  //         var state = window.store.getState();
  //         userId = state.auth.isAuthorized && state.auth.id || '';
  //         setupPage();
  //     } else {
  //         setupPage();
  //         let c = 0;
  //         var i = setInterval(function () {
  //             if (c < 50) {
  //                 if (!!window.g_user_id) {
  //                     userId = window.g_user_id;
  //                     setupPage();
  //                     checkUserAuth();
  //                     clearInterval(i);
  //                 }
  //             } else {
  //                 clearInterval(i);
  //             }
  //         }, 200);
  //     }
  //
  //     checkUserAuth();
  //
  //     participateBtns.forEach((authBtn, i) => {
  //         authBtn.addEventListener('click', (e) => {
  //             e.preventDefault();
  //             participate();
  //         });
  //     });
  // }
  //
  // function setupPage() {}
  //
  // function participate() {
  //     if (!userId) {
  //         return;
  //     }
  //
  //     const params = {userid: userId};
  //     request('/user', {
  //         method: 'POST',
  //         body: JSON.stringify(params)
  //     }).then(res => {
  //         participateBtns.forEach(item => item.classList.add('hide'));
  //         wheelWrap.classList.remove('_sign');
  //         document.querySelector(".progress").classList.remove("_sign");
  //         setupPage();
  //     });
  // }
  //
  //
  //
  // function checkUserAuth() {
  //     if (userId) {
  //         for (const unauthMes of unauthMsgs) {
  //             unauthMes.classList.add('hide');
  //         }
  //         request(`/favuser/${userId}?nocache=1`)
  //             .then(res => {
  //                 if (res.userid) {
  //                     participateBtns.forEach(item => item.classList.add('hide'));
  //                     wheelWrap.classList.remove('_sign');
  //                     document.querySelector(".progress").classList.remove("_sign");
  //                     if (debug) {
  //                         res.pointsPerDay = 30;
  //                         res.spinAllowed = true;
  //                         res.spinsStreak = 3;
  //                     }
  //                     refreshUserInfo(res);
  //                     displayUserSpins(res.spins);
  //                 } else {
  //                     participateBtns.forEach(item => item.classList.remove('hide'));
  //                 }
  //             })
  //     } else {
  //         for (let participateBtn of participateBtns) {
  //             participateBtn.classList.add('hide');
  //         }
  //         for (const unauthMes of unauthMsgs) {
  //             unauthMes.classList.remove('hide');
  //         }
  //     }
  // }
  //
  // function displayUserSpins(spins) {
  //     const headDropItem = document.querySelector('.accordion__content-item.head-drop');
  //     const noSpinItem = document.querySelector('.accordion__content-item.no-spins');
  //
  //     if (!spins || spins.length === 0) {
  //         headDropItem.classList.add('hide');
  //         noSpinItem.classList.remove('hide');
  //         return;
  //     }
  //
  //     const spinsContainer = document.querySelector('.accordion__content-wrap');
  //     spinsContainer.innerHTML = '';
  //
  //     headDropItem.classList.remove('hide');
  //     noSpinItem.classList.add('hide');
  //
  //     spins.forEach(spin => {
  //         const spinDate = new Date(spin.date);
  //         const formattedDate = spinDate.toLocaleDateString('hr-HR');
  //         const spinName = translateKey(spin.name) || '';
  //
  //         const spinElement = document.createElement('div');
  //         spinElement.classList.add('accordion__content-item');
  //
  //         spinElement.innerHTML = `
  //         <span class="content-date">${formattedDate}</span>
  //         <span class="content-prize">${spinName}</span>
  //     `;
  //
  //         spinsContainer.appendChild(spinElement);
  //     });
  // }
  //
  // function translateKey(key) {
  //     if (!key) {
  //         return;
  //     }
  //     return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
  // }
  //
  // loadTranslations()
  //     .then(init);
  //
  // let mainPage = document.querySelector('.fav-page');
  // setTimeout(() => mainPage.classList.add('overflow'), 1000);
  //
  //
  // let i = 1;
  // function sendSpinRequest() {
  //     if (!userId) {
  //         return;
  //     }
  //
  //     if (debug) {
  //         return Promise.resolve({
  //             number: i++,
  //             type: 'test'
  //         });
  //     }
  //
  //     const params = {userid: userId};
  //     return request('/spin', {
  //         method: 'POST',
  //         body: JSON.stringify(params)
  //     });
  // }

  //Before Code
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
  // const randomInterval = Math.random() * (6000 - 4000) + 4000;
  function addFireworks(containerSelector, numberOfFireworks) {
    var fireworksWrap = document.createElement('div');
    fireworksWrap.className = 'fireworks-wrap';
    for (var i = 0; i < numberOfFireworks; i++) {
      var firework = document.createElement('div');
      firework.className = 'firework';
      fireworksWrap.appendChild(firework);
    }
    var container = document.querySelector(containerSelector);
    if (container) {
      container.appendChild(fireworksWrap);
    } else {
      console.error("\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0437 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u043E\u043C \"".concat(containerSelector, "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E."));
    }
  }
  function removeFireworks(containerSelector) {
    var container = document.querySelector(containerSelector);
    if (container) {
      var fireworksWrap = container.querySelector('.fireworks-wrap');
      if (fireworksWrap) {
        fireworksWrap.remove();
      } else {
        console.error("\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0437 \u043A\u043B\u0430\u0441\u043E\u043C \".fireworks-wrap\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0456 ".concat(containerSelector, "."));
      }
    } else {
      console.error("\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0437 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u043E\u043C \"".concat(containerSelector, "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E."));
    }
  }
  function startRandomInterval() {
    var randomInterval = Math.random() * (20000 - 10000) + 10000; // Випадковий інтервал між 10 і 20 секундами
    daysRemind(days, "remind");
    daysRemind(popupDays, "remind");
    daysRemind(popupDaysMob, "remind");
    setTimeout(startRandomInterval, randomInterval);
  }
  startRandomInterval();
  daysRemind(days, "remind");
  setDays(days, currentDay);
  setDays(popupDays, currentDay);
  setDays(popupDaysMob, currentDay);

  /// wheel logic
  var wheelSections = document.querySelector(".wheel__sections"),
    wheelWrap = document.querySelector(".wheel__wrap"),
    wheelArrow = document.querySelector(".wheel__arrow"),
    wheelBtn = document.querySelector(".wheel__btn"),
    spinBg = document.querySelector(".spin-bg"),
    salut = document.querySelector(".fireworks-wrap"),
    bubleBtn = document.querySelector(".wheel__days-icons"),
    wheelBuble = document.querySelector(".wheel__buble"),
    popupContainer = document.querySelector(".popups"),
    popup = document.querySelector(".popup"),
    popupCloseBtn = document.querySelector(".popup__close");
  bubleBtn.addEventListener("mouseover", function (e) {
    wheelBuble.classList.remove("_hidden");
  });
  bubleBtn.addEventListener("mouseout", function (e) {
    wheelBuble.classList.add("_hidden");
  });
  document.addEventListener("click", function (e) {
    return e.target === bubleBtn ? null : wheelBuble.classList.add("_hidden");
  });
  var prizes = ['iphone', 'ecoflow', 'merch', 'nothing', "bonuses"];
  function getRandomPrize(arr) {
    return arr[Math.floor(Math.random() * prizes.length)];
  }
  function showPopup(sections, wheel, showClass, streakBonus, spinBg, closeBtn, popupContainer, popup, classPrize) {
    // document.querySelector(".fav-page").classList.add("popupBg")
    if (classPrize) {
      popup.classList.add("".concat(classPrize));
    }
    if (classPrize === "respin") return;
    popup.classList.add("".concat(showClass));
    popup.classList.contains('_nothing') === true ? null : addFireworks(".popups", 7);
    streakBonus ? popup.classList.add("_done") : popup.classList.add("_incomplete");
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
    streakBonus ? popupBody.classList.add("_done") : popup.classList.add("_incomplete");
    document.querySelector(".fav-page").classList.remove("bgScale");
    function addAnim(arr, classAnim) {
      arr.forEach(function (item) {
        return item.classList.add("".concat(classAnim));
      });
    }
    //popup animations
    setTimeout(function () {
      popupBody.classList.add("popupMainAnim");
      addAnim(pers, "popupPersAnim");
      addAnim(buble, "popupBubleAnim");
    }, 100);
    setTimeout(function () {
      addAnim(prize, "popupPrizeAnim");
      popupTitle.forEach(function (item) {
        return item.classList.add("popupTitleAnim");
      });
    }, 600);
    setTimeout(function () {
      popupLeftArrow.forEach(function (item) {
        return item.classList.add("popupLeftArrAnim");
      });
      popupRightArrow.forEach(function (item) {
        return item.classList.add("popupRightArrAnim");
      });
    }, 1200);
    //popup animations
    closeBtn.addEventListener("click", function () {
      popup.classList.contains('_nothing') === true ? null : addFireworks(".wheel", 7);
      wheel.classList.add("_lock");
      document.querySelector(".progress").classList.add("_lock");
      wheel.classList.remove("wheelSizeIncrease");
      document.body.style.overflow = "auto";
      popupContainer.classList.remove("_opacity", "_zIndex");
      popup.classList.remove("".concat(showClass), '_done', '_incomplete');
      removeFireworks(".popups");
    }, {
      once: true
    });
    document.querySelectorAll('.popup__btn').forEach(function (btn) {
      return btn.addEventListener("click", function () {
        popup.classList.contains('_nothing') === true ? null : addFireworks(".wheel", 7);
        wheel.classList.add("_lock");
        document.querySelector(".progress").classList.add("_lock");
        wheel.classList.remove("wheelSizeIncrease");
        document.body.style.overflow = "auto";
        popupContainer.classList.remove("_opacity", "_zIndex");
        popup.classList.remove("".concat(showClass), '_done', '_incomplete');
        removeFireworks(".popups");
      }, {
        once: true
      });
    });
  }
  function spinWheel(position, animation, sections, btn, wheel, arrow, prize, spinBg, salut) {
    sections.addEventListener("animationend", function () {
      sections.style.transform = "translate(-50%, -50%) rotate(".concat(position, "deg)");
      sections.classList.remove("".concat(animation));
    }, {
      once: true
    });
    sections.classList.add("".concat(animation));
    arrow.style.opacity = "0";
    wheel.classList.add("wheelSizeIncrease");
    document.querySelector(".fav-page").classList.add("bgScale");
    document.querySelector(".sector-prize").style.opacity = "1";
    spinBg.classList.add("showSpinBg");
    if (animation !== "respinAnim") {
      btn.style.pointerEvents = "none";
    }
  }
  function initSpin(sections, btn, wheel, arrow, spinBg, salut, prize, streakBonus) {
    btn.addEventListener("click", function () {
      // sendSpinRequest().then(res => {
      //     console.log(res);
      //     if (!res || !!res.error) {
      //         btnWheel.classList.add('pulse-btn');
      //         btnWheel.classList.remove('_disabled')
      //         return;
      //     }
      // });

      // const prize = res.number;
      // const streakBonus = res.streakBonus || debug;
      // const streakBonus = true
      console.log(streakBonus);
      if (prize === "nothing") {
        popup.classList.add("_nothing");
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_nothing", streakBonus, spinBg, popupCloseBtn, popupContainer, popup);
        }, {
          once: true
        });
        spinWheel(1872, "nothingPrize", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "fs20") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs20");
        }, {
          once: true
        });
        spinWheel(1800, "fs20anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "fs25") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs25");
        }, {
          once: true
        });
        spinWheel(1762, "fs25anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "fs40") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs40");
        }, {
          once: true
        });
        spinWheel(2088, "fs40anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "fs50") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs50");
        }, {
          once: true
        });
        spinWheel(2052.5, "fs50anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "fs75") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs75");
        }, {
          once: true
        });
        spinWheel(2016.5, "fs75anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "lei15") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "lei15");
        }, {
          once: true
        });
        spinWheel(1980, "lei15anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "lei20") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "lei20");
        }, {
          once: true
        });
        spinWheel(1942, "lei20anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "lei25") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "lei25");
        }, {
          once: true
        });
        spinWheel(1908, "lei30anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "respin") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "respin");
        }, {
          once: true
        });
        spinWheel(72.5, "respinAnim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
    });
  }
  initSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow, spinBg, salut, "lei30", streakBonus);
  //
  // function refreshUserInfo(userInfo) {
  //     refreshDailyPointsSection(userInfo);
  //     refreshWheel(userInfo);
  //     refreshStreak(userInfo);
  // }
  //
  // function refreshWheel(userInfo) {
  //     if (userInfo.spinAllowed) {
  //         return;
  //     }
  //     if (userInfo.pointsPerDay >= 50) {
  //         wheelWrap.classList.add('_lock');
  //     } else {
  //         wheelWrap.classList.add('_block');
  //     }
  // }
  //
  // function refreshDailyPointsSection(userInfo) {
  //     const points = Math.min(userInfo.pointsPerDay || 0, 50);
  //     const progressStatus = document.querySelector('.progress__bar-status');
  //     progressStatus.innerHTML = `${points} €`;
  //     const currentSpan = document.querySelector('.current');
  //     currentSpan.innerHTML = `${points}€`;
  //     const progressLine = document.querySelector('.progress__bar-line');
  //     const progress = points / 50.0 * 100;
  //     progressLine.style.width = `${progress}%`;
  // }
  //
  // function refreshStreak(userInfo) {
  //     const items = document.querySelectorAll('.wheel__days-item');
  //     let i = 0;
  //     let streak = userInfo.spinsStreak;
  //     for (let item of items) {
  //         item.classList.remove('past');
  //         item.classList.remove('next');
  //         if (i < streak) {
  //             item.classList.add('past');
  //         } else {
  //             item.classList.add('next');
  //         }
  //         i++;
  //     }
  //
  //     const popupDays = document.querySelectorAll('.popup__days-item');
  //     let j = 0;
  //     for (let item of popupDays) {
  //         item.classList.remove('active');
  //         item.classList.remove('past');
  //         item.classList.remove('next');
  //         if (j < streak) {
  //             item.classList.add('past');
  //         } else {
  //             item.classList.add('next');
  //         }
  //         j++;
  //     }
  //
  //     const mobileDays = document.querySelectorAll('.days__item');
  //     let k = 0;
  //     for (let item of mobileDays) {
  //         item.classList.remove('past');
  //         item.classList.remove('next');
  //         if (k < streak) {
  //             item.classList.add('past');
  //         } else {
  //             item.classList.add('next');
  //         }
  //         k++;
  //     }
  // }

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

  // for test

  var fs20 = document.querySelector('.fs20');
  var fs25 = document.querySelector('.fs25');
  var fs40 = document.querySelector('.fs40');
  var fs50 = document.querySelector('.fs50');
  var fs75 = document.querySelector('.fs75');
  var lei15 = document.querySelector('.lei15');
  var lei20 = document.querySelector('.lei20');
  var lei25 = document.querySelector('.lei25');
  var done = document.querySelector('.streak');
  var dropBonusButton = document.querySelector('.drop-bonus');
  var dropNothingButton = document.querySelector('.drop-nothing');
  var dropLock = document.querySelector('.lock');
  var dropSign = document.querySelector('.sign');
  var streakBonus = JSON.parse(localStorage.getItem('streakBonus')) || false;
  if (streakBonus) {
    done.style.background = "green";
  }
  if (!streakBonus) {
    done.style.background = "red";
  }
  done.addEventListener("click", function () {
    streakBonus = !streakBonus;
    localStorage.setItem('streakBonus', JSON.stringify(streakBonus));
    streakBonus = JSON.parse(localStorage.getItem('streakBonus')) || false;
    console.log(streakBonus);
    window.location.reload();
  });
  document.querySelector(".drop-btn").addEventListener("click", function () {
    document.querySelector(".drop-menu").classList.toggle("_hidden");
  });
  initSpin(wheelSections, fs20, wheelWrap, wheelArrow, spinBg, salut, "fs20", streakBonus);
  initSpin(wheelSections, fs25, wheelWrap, wheelArrow, spinBg, salut, "fs25", streakBonus);
  initSpin(wheelSections, fs40, wheelWrap, wheelArrow, spinBg, salut, "fs40", streakBonus);
  initSpin(wheelSections, fs50, wheelWrap, wheelArrow, spinBg, salut, "fs50", streakBonus);
  initSpin(wheelSections, fs75, wheelWrap, wheelArrow, spinBg, salut, "fs75", streakBonus);
  initSpin(wheelSections, lei15, wheelWrap, wheelArrow, spinBg, salut, "lei15", streakBonus);
  initSpin(wheelSections, lei20, wheelWrap, wheelArrow, spinBg, salut, "lei20", streakBonus);
  initSpin(wheelSections, lei25, wheelWrap, wheelArrow, spinBg, salut, "lei25", streakBonus);
  // initSpin(wheelSections, dropBonusButton, wheelWrap, wheelArrow, spinBg, salut)
  initSpin(wheelSections, dropNothingButton, wheelWrap, wheelArrow, spinBg, salut, "nothing", streakBonus);
  dropLock.addEventListener("click", function () {
    wheelWrap.classList.toggle("_lock");
    document.querySelector(".progress").classList.toggle("_lock");
    wheelWrap.classList.remove("_sign");
    document.querySelector(".progress").classList.remove("_sign");
  });
  dropSign.addEventListener("click", function () {
    wheelWrap.classList.toggle("_sign");
    document.querySelector(".progress").classList.toggle("_sign");
    wheelWrap.classList.remove("_lock");
    document.querySelector(".progress").classList.remove("_lock");
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZGVidWciLCJkYXlzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9wdXBEYXlzIiwicG9wdXBEYXlzTW9iIiwiY3VycmVudERheSIsInNldERheXMiLCJmb3JFYWNoIiwiZGF5IiwiaSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImRheXNSZW1pbmQiLCJjbGFzc0FuaW0iLCJkZWxheSIsInNldFRpbWVvdXQiLCJhZGQiLCJyZW1vdmUiLCJhZGRGaXJld29ya3MiLCJjb250YWluZXJTZWxlY3RvciIsIm51bWJlck9mRmlyZXdvcmtzIiwiZmlyZXdvcmtzV3JhcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJmaXJld29yayIsImFwcGVuZENoaWxkIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJlcnJvciIsInJlbW92ZUZpcmV3b3JrcyIsInN0YXJ0UmFuZG9tSW50ZXJ2YWwiLCJyYW5kb21JbnRlcnZhbCIsIk1hdGgiLCJyYW5kb20iLCJ3aGVlbFNlY3Rpb25zIiwid2hlZWxXcmFwIiwid2hlZWxBcnJvdyIsIndoZWVsQnRuIiwic3BpbkJnIiwic2FsdXQiLCJidWJsZUJ0biIsIndoZWVsQnVibGUiLCJwb3B1cENvbnRhaW5lciIsInBvcHVwIiwicG9wdXBDbG9zZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicHJpemVzIiwiZ2V0UmFuZG9tUHJpemUiLCJhcnIiLCJmbG9vciIsImxlbmd0aCIsInNob3dQb3B1cCIsInNlY3Rpb25zIiwid2hlZWwiLCJzaG93Q2xhc3MiLCJzdHJlYWtCb251cyIsImNsb3NlQnRuIiwiY2xhc3NQcml6ZSIsImNvbnRhaW5zIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJwZXJzIiwicHJpemUiLCJidWJsZSIsInBvcHVwQm9keSIsInBvcHVwVGl0bGUiLCJwb3B1cExlZnRBcnJvdyIsInBvcHVwUmlnaHRBcnJvdyIsImFkZEFuaW0iLCJpdGVtIiwib25jZSIsImJ0biIsInNwaW5XaGVlbCIsInBvc2l0aW9uIiwiYW5pbWF0aW9uIiwiYXJyb3ciLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImluaXRTcGluIiwibG9nIiwiYWNjb3JkaW9uSGVhZGVycyIsImhlYWRlciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJkaXNwbGF5IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImZzMjAiLCJmczI1IiwiZnM0MCIsImZzNTAiLCJmczc1IiwibGVpMTUiLCJsZWkyMCIsImxlaTI1IiwiZG9uZSIsImRyb3BCb251c0J1dHRvbiIsImRyb3BOb3RoaW5nQnV0dG9uIiwiZHJvcExvY2siLCJkcm9wU2lnbiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJiYWNrZ3JvdW5kIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtFQUNUO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsSUFBTUEsS0FBSyxHQUFHLElBQUk7RUFDbEI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztFQUMzRCxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7RUFDaEUsSUFBTUUsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztFQUM3RCxJQUFJRyxVQUFVLEdB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O0VBQ0ZzRixRQUFRLENBQUN6RCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUMzQ1YsU0FBUyxDQUFDMUIsU0FBUyxDQUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25DVixRQUFRLENBQUMwQixhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNqQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDN0R5QixTQUFTLENBQUMxQixTQUFTLENBQUNPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkNoQixRQUFRLENBQUMwQixhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNqQixTQUFTLENBQUNPLE1BQU0sQ0FBQyxPQUFPLENBQUM7RUFDakUsQ0FBQyxDQUFDO0FBR04sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIC8vIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfd2hlZWxfaHInO1xuICAgIC8vXG4gICAgLy8gY29uc3RcbiAgICAvLyAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgLy8gICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpO1xuICAgIC8vXG4gICAgLy8gY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIC8vIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcbiAgICAvL1xuICAgIC8vIGxldCBsb2NhbGUgPSAnZW4nO1xuICAgIC8vXG4gICAgLy8gaWYgKGhyTGVuZykgbG9jYWxlID0gJ2hyJztcbiAgICAvLyBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuICAgIC8vXG4gICAgLy9cbiAgICAvLyBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCBkZWJ1ZyA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZDtcbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgLy8gICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAvLyAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgIC8vICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAvLyAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgIC8vICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3doZWVsJyksIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgLy8gICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgLy8gICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAvLyAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgLy8gICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAvLyAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgIC8vICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWydocicsICdlbiddKSB7XG4gICAgLy8gICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAvLyAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAvLyAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIC8vICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgIC8vICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgIC8vICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgLy8gICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgIC8vICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAvLyAgICAgICAgIGxldCBjID0gMDtcbiAgICAvLyAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSwgMjAwKTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAvL1xuICAgIC8vICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaCgoYXV0aEJ0biwgaSkgPT4ge1xuICAgIC8vICAgICAgICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgICAgICAgIHBhcnRpY2lwYXRlKCk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gc2V0dXBQYWdlKCkge31cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgIC8vICAgICBpZiAoIXVzZXJJZCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAvLyAgICAgcmVxdWVzdCgnL3VzZXInLCB7XG4gICAgLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAvLyAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAvLyAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgLy8gICAgICAgICB3aGVlbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIikuY2xhc3NMaXN0LnJlbW92ZShcIl9zaWduXCIpO1xuICAgIC8vICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgIC8vICAgICBpZiAodXNlcklkKSB7XG4gICAgLy8gICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgLy8gICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgIC8vICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdoZWVsV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiX3NpZ25cIik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXMucG9pbnRzUGVyRGF5ID0gMzA7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5BbGxvd2VkID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3BpbnNTdHJlYWsgPSAzO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFVzZXJJbmZvKHJlcyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VXNlclNwaW5zKHJlcy5zcGlucyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAvLyAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgLy8gICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIGRpc3BsYXlVc2VyU3BpbnMoc3BpbnMpIHtcbiAgICAvLyAgICAgY29uc3QgaGVhZERyb3BJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fY29udGVudC1pdGVtLmhlYWQtZHJvcCcpO1xuICAgIC8vICAgICBjb25zdCBub1NwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fY29udGVudC1pdGVtLm5vLXNwaW5zJyk7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKCFzcGlucyB8fCBzcGlucy5sZW5ndGggPT09IDApIHtcbiAgICAvLyAgICAgICAgIGhlYWREcm9wSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IHNwaW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fY29udGVudC13cmFwJyk7XG4gICAgLy8gICAgIHNwaW5zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIC8vXG4gICAgLy8gICAgIGhlYWREcm9wSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgLy8gICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vXG4gICAgLy8gICAgIHNwaW5zLmZvckVhY2goc3BpbiA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uZGF0ZSk7XG4gICAgLy8gICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdoci1IUicpO1xuICAgIC8vICAgICAgICAgY29uc3Qgc3Bpbk5hbWUgPSB0cmFuc2xhdGVLZXkoc3Bpbi5uYW1lKSB8fCAnJztcbiAgICAvL1xuICAgIC8vICAgICAgICAgY29uc3Qgc3BpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9fY29udGVudC1pdGVtJyk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAvLyAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAvLyAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1wcml6ZVwiPiR7c3Bpbk5hbWV9PC9zcGFuPlxuICAgIC8vICAgICBgO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBzcGluc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGluRWxlbWVudCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXkpIHtcbiAgICAvLyAgICAgaWYgKCFrZXkpIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgLy8gICAgIC50aGVuKGluaXQpO1xuICAgIC8vXG4gICAgLy8gbGV0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdycpLCAxMDAwKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gbGV0IGkgPSAxO1xuICAgIC8vIGZ1bmN0aW9uIHNlbmRTcGluUmVxdWVzdCgpIHtcbiAgICAvLyAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIGlmIChkZWJ1Zykge1xuICAgIC8vICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgLy8gICAgICAgICAgICAgbnVtYmVyOiBpKyssXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogJ3Rlc3QnXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgLy8gICAgIHJldHVybiByZXF1ZXN0KCcvc3BpbicsIHtcbiAgICAvLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIC8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvL0JlZm9yZSBDb2RlXG4gICAgY29uc3QgZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2hlZWxfX2RheXMtaXRlbVwiKVxuICAgIGNvbnN0IHBvcHVwRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2RheXMtaXRlbVwiKTtcbiAgICBjb25zdCBwb3B1cERheXNNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRheXNfX2l0ZW1cIik7XG4gICAgbGV0IGN1cnJlbnREYXkgPSA1XG4gICAgZnVuY3Rpb24gc2V0RGF5cyhkYXlzLCBjdXJyZW50RGF5KXtcbiAgICAgICAgZGF5cy5mb3JFYWNoKChkYXksIGkpID0+e1xuICAgICAgICAgICAgKytpXG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LnRvZ2dsZShcIm5leHRcIiwgaSA+IGN1cnJlbnREYXkpO1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC50b2dnbGUoXCJwYXN0XCIsIGkgPCBjdXJyZW50RGF5KTtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsIGkgPT09IGN1cnJlbnREYXkpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBkYXlzUmVtaW5kKGRheXMsIGNsYXNzQW5pbSkge1xuICAgICAgICBsZXQgZGVsYXkgPSA5MDA7XG4gICAgICAgIGRheXMuZm9yRWFjaCgoZGF5LCBpKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChjbGFzc0FuaW0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NBbmltKSwgMTIwMClcbiAgICAgICAgICAgIH0sIGRlbGF5ICogaSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBjb25zdCByYW5kb21JbnRlcnZhbCA9IE1hdGgucmFuZG9tKCkgKiAoNjAwMCAtIDQwMDApICsgNDAwMDtcbiAgICBmdW5jdGlvbiBhZGRGaXJld29ya3MoY29udGFpbmVyU2VsZWN0b3IsIG51bWJlck9mRmlyZXdvcmtzKSB7XG4gICAgICAgIGNvbnN0IGZpcmV3b3Jrc1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmlyZXdvcmtzV3JhcC5jbGFzc05hbWUgPSAnZmlyZXdvcmtzLXdyYXAnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRmlyZXdvcmtzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcmV3b3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmaXJld29yay5jbGFzc05hbWUgPSAnZmlyZXdvcmsnO1xuICAgICAgICAgICAgZmlyZXdvcmtzV3JhcC5hcHBlbmRDaGlsZChmaXJld29yayk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJld29ya3NXcmFwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYNCa0L7QvdGC0LXQudC90LXRgCDQtyDRgdC10LvQtdC60YLQvtGA0L7QvCBcIiR7Y29udGFpbmVyU2VsZWN0b3J9XCIg0L3QtSDQt9C90LDQudC00LXQvdC+LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUZpcmV3b3Jrcyhjb250YWluZXJTZWxlY3Rvcikge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgZmlyZXdvcmtzV3JhcCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZmlyZXdvcmtzLXdyYXAnKTtcbiAgICAgICAgICAgIGlmIChmaXJld29ya3NXcmFwKSB7XG4gICAgICAgICAgICAgICAgZmlyZXdvcmtzV3JhcC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihg0JXQu9C10LzQtdC90YIg0Lcg0LrQu9Cw0YHQvtC8IFwiLmZpcmV3b3Jrcy13cmFwXCIg0L3QtSDQt9C90LDQudC00LXQvdC+INCyINC60L7QvdGC0LXQudC90LXRgNGWICR7Y29udGFpbmVyU2VsZWN0b3J9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihg0JrQvtC90YLQtdC50L3QtdGAINC3INGB0LXQu9C10LrRgtC+0YDQvtC8IFwiJHtjb250YWluZXJTZWxlY3Rvcn1cIiDQvdC1INC30L3QsNC50LTQtdC90L4uYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RhcnRSYW5kb21JbnRlcnZhbCgpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tSW50ZXJ2YWwgPSBNYXRoLnJhbmRvbSgpICogKDIwMDAwIC0gMTAwMDApICsgMTAwMDA7IC8vINCS0LjQv9Cw0LTQutC+0LLQuNC5INGW0L3RgtC10YDQstCw0Lsg0LzRltC2IDEwINGWIDIwINGB0LXQutGD0L3QtNCw0LzQuFxuICAgICAgICBkYXlzUmVtaW5kKGRheXMsIFwicmVtaW5kXCIpO1xuICAgICAgICBkYXlzUmVtaW5kKHBvcHVwRGF5cywgXCJyZW1pbmRcIik7XG4gICAgICAgIGRheXNSZW1pbmQocG9wdXBEYXlzTW9iLCBcInJlbWluZFwiKTtcbiAgICAgICAgc2V0VGltZW91dChzdGFydFJhbmRvbUludGVydmFsLCByYW5kb21JbnRlcnZhbCk7XG4gICAgfVxuICAgIHN0YXJ0UmFuZG9tSW50ZXJ2YWwoKTtcbiAgICBkYXlzUmVtaW5kKGRheXMsIFwicmVtaW5kXCIpXG4gICAgc2V0RGF5cyhkYXlzLCBjdXJyZW50RGF5KVxuICAgIHNldERheXMocG9wdXBEYXlzLCBjdXJyZW50RGF5KVxuICAgIHNldERheXMocG9wdXBEYXlzTW9iLCBjdXJyZW50RGF5KVxuXG4vLy8gd2hlZWwgbG9naWNcbiAgICBjb25zdCB3aGVlbFNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGVlbF9fc2VjdGlvbnNcIiksXG4gICAgICAgICAgd2hlZWxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGVlbF9fd3JhcFwiKSxcbiAgICAgICAgICB3aGVlbEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGVlbF9fYXJyb3dcIiksXG4gICAgICAgICAgd2hlZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoZWVsX19idG5cIiksXG4gICAgICAgICAgc3BpbkJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGluLWJnXCIpLFxuICAgICAgICAgIHNhbHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maXJld29ya3Mtd3JhcFwiKSxcbiAgICAgICAgICBidWJsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hlZWxfX2RheXMtaWNvbnNcIiksXG4gICAgICAgICAgd2hlZWxCdWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hlZWxfX2J1YmxlXCIpLFxuICAgICAgICAgIHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cHNcIiksXG4gICAgICAgICAgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpLFxuICAgICAgICAgIHBvcHVwQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKVxuXG4gICAgYnVibGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT57XG4gICAgICAgIHdoZWVsQnVibGUuY2xhc3NMaXN0LnJlbW92ZShcIl9oaWRkZW5cIilcbiAgICB9KVxuICAgIGJ1YmxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT57XG4gICAgICAgIHdoZWVsQnVibGUuY2xhc3NMaXN0LmFkZChcIl9oaWRkZW5cIilcbiAgICB9KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IGUudGFyZ2V0ID09PSBidWJsZUJ0biA/IG51bGwgOiB3aGVlbEJ1YmxlLmNsYXNzTGlzdC5hZGQoXCJfaGlkZGVuXCIpKVxuICAgIGxldCBwcml6ZXMgPSBbJ2lwaG9uZScsICdlY29mbG93JywgJ21lcmNoJywgJ25vdGhpbmcnLCBcImJvbnVzZXNcIl1cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21Qcml6ZShhcnIpIHtcbiAgICAgICAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwcml6ZXMubGVuZ3RoKV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIHNob3dDbGFzcywgc3RyZWFrQm9udXMsIHNwaW5CZywgY2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCwgY2xhc3NQcml6ZSl7XG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIikuY2xhc3NMaXN0LmFkZChcInBvcHVwQmdcIilcbiAgICAgICAgaWYoY2xhc3NQcml6ZSl7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzUHJpemV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY2xhc3NQcml6ZSA9PT0gXCJyZXNwaW5cIikgcmV0dXJuXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoYCR7c2hvd0NsYXNzfWApXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnX25vdGhpbmcnKSA9PT0gdHJ1ZSA/IG51bGwgOiBhZGRGaXJld29ya3MoXCIucG9wdXBzXCIsIDcpXG4gICAgICAgIHN0cmVha0JvbnVzID8gcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpIDogcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9pbmNvbXBsZXRlXCIpXG4gICAgICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICAgICAgc3BpbkJnLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93U3BpbkJnXCIpXG4gICAgICAgIGNvbnN0IHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19wZXJzXCIpXG4gICAgICAgIGNvbnN0IHByaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fcHJpemVcIilcbiAgICAgICAgY29uc3QgYnVibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19idWJsZVwiKVxuICAgICAgICBjb25zdCBwb3B1cEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19tYWluXCIpXG4gICAgICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX190aXRsZVwiKVxuICAgICAgICBjb25zdCBwb3B1cExlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2RlY29yLWxlZnRcIilcbiAgICAgICAgY29uc3QgcG9wdXBSaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fZGVjb3ItcmlnaHRcIilcbiAgICAgICAgc3RyZWFrQm9udXMgPyBwb3B1cEJvZHkuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpIDogcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9pbmNvbXBsZXRlXCIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIikuY2xhc3NMaXN0LnJlbW92ZShcImJnU2NhbGVcIilcbiAgICAgICAgZnVuY3Rpb24gYWRkQW5pbShhcnIsIGNsYXNzQW5pbSl7XG4gICAgICAgICAgICBhcnIuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChgJHtjbGFzc0FuaW19YCkgKVxuICAgICAgICB9XG4gICAgICAgIC8vcG9wdXAgYW5pbWF0aW9uc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgcG9wdXBCb2R5LmNsYXNzTGlzdC5hZGQoXCJwb3B1cE1haW5BbmltXCIpXG4gICAgICAgICAgICBhZGRBbmltKHBlcnMsIFwicG9wdXBQZXJzQW5pbVwiKVxuICAgICAgICAgICAgYWRkQW5pbShidWJsZSwgXCJwb3B1cEJ1YmxlQW5pbVwiKVxuICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGFkZEFuaW0ocHJpemUsIFwicG9wdXBQcml6ZUFuaW1cIilcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInBvcHVwVGl0bGVBbmltXCIpKVxuXG4gICAgICAgIH0sIDYwMClcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgcG9wdXBMZWZ0QXJyb3cuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInBvcHVwTGVmdEFyckFuaW1cIikpXG4gICAgICAgICAgICBwb3B1cFJpZ2h0QXJyb3cuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInBvcHVwUmlnaHRBcnJBbmltXCIpKVxuICAgICAgICB9LCAxMjAwKVxuICAgICAgICAvL3BvcHVwIGFuaW1hdGlvbnNcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdfbm90aGluZycpID09PSB0cnVlID8gbnVsbCA6IGFkZEZpcmV3b3JrcyhcIi53aGVlbFwiLCA3KVxuICAgICAgICAgICAgd2hlZWwuY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICAgICAgd2hlZWwuY2xhc3NMaXN0LnJlbW92ZShcIndoZWVsU2l6ZUluY3JlYXNlXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIilcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoYCR7c2hvd0NsYXNzfWAsICdfZG9uZScsICdfaW5jb21wbGV0ZScpXG4gICAgICAgICAgICByZW1vdmVGaXJld29ya3MoXCIucG9wdXBzXCIpO1xuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2J0bicpLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdfbm90aGluZycpID09PSB0cnVlID8gbnVsbCA6IGFkZEZpcmV3b3JrcyhcIi53aGVlbFwiLCA3KVxuICAgICAgICAgICAgd2hlZWwuY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICAgICAgd2hlZWwuY2xhc3NMaXN0LnJlbW92ZShcIndoZWVsU2l6ZUluY3JlYXNlXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIilcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoYCR7c2hvd0NsYXNzfWAsICdfZG9uZScsICdfaW5jb21wbGV0ZScpXG4gICAgICAgICAgICByZW1vdmVGaXJld29ya3MoXCIucG9wdXBzXCIpO1xuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzcGluV2hlZWwocG9zaXRpb24sIGFuaW1hdGlvbiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dCl7XG4gICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT57XG4gICAgICAgICAgICBzZWN0aW9ucy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgke3Bvc2l0aW9ufWRlZylgXG4gICAgICAgICAgICBzZWN0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKGAke2FuaW1hdGlvbn1gKVxuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pXG4gICAgICAgIHNlY3Rpb25zLmNsYXNzTGlzdC5hZGQoYCR7YW5pbWF0aW9ufWApXG4gICAgICAgIGFycm93LnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgICB3aGVlbC5jbGFzc0xpc3QuYWRkKFwid2hlZWxTaXplSW5jcmVhc2VcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKS5jbGFzc0xpc3QuYWRkKFwiYmdTY2FsZVwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rvci1wcml6ZVwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcbiAgICAgICAgc3BpbkJnLmNsYXNzTGlzdC5hZGQoXCJzaG93U3BpbkJnXCIpXG4gICAgICAgIGlmKGFuaW1hdGlvbiAhPT0gXCJyZXNwaW5BbmltXCIpe1xuICAgICAgICAgICAgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBpbml0U3BpbihzZWN0aW9ucywgYnRuLCB3aGVlbCwgYXJyb3csIHNwaW5CZywgc2FsdXQsIHByaXplLCBzdHJlYWtCb251cykge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgLy8gc2VuZFNwaW5SZXF1ZXN0KCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAvLyAgICAgaWYgKCFyZXMgfHwgISFyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgYnRuV2hlZWwuY2xhc3NMaXN0LmFkZCgncHVsc2UtYnRuJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJ0bldoZWVsLmNsYXNzTGlzdC5yZW1vdmUoJ19kaXNhYmxlZCcpXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KTtcblxuXG4gICAgICAgICAgICAvLyBjb25zdCBwcml6ZSA9IHJlcy5udW1iZXI7XG4gICAgICAgICAgICAvLyBjb25zdCBzdHJlYWtCb251cyA9IHJlcy5zdHJlYWtCb251cyB8fCBkZWJ1ZztcbiAgICAgICAgICAgIC8vIGNvbnN0IHN0cmVha0JvbnVzID0gdHJ1ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyZWFrQm9udXMpXG4gICAgICAgICAgICBpZihwcml6ZSA9PT0gXCJub3RoaW5nXCIpe1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfbm90aGluZ1wiKVxuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCxcIl9ub3RoaW5nXCIsIHN0cmVha0JvbnVzLCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCksIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICBzcGluV2hlZWwoMTg3MiwgXCJub3RoaW5nUHJpemVcIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcImZzMjBcIil7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLCBcIl9ib251c1wiLCBzdHJlYWtCb251cywgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXAsIFwiZnMyMFwiKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbCgxODAwLCBcImZzMjBhbmltXCIsIHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdywgcHJpemUsIHNwaW5CZywgc2FsdXQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcml6ZSA9PT0gXCJmczI1XCIpe1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgXCJfYm9udXNcIiwgc3RyZWFrQm9udXMsIHNwaW5CZywgcG9wdXBDbG9zZUJ0biwgcG9wdXBDb250YWluZXIsIHBvcHVwLCBcImZzMjVcIiksIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICBzcGluV2hlZWwoMTc2MiwgXCJmczI1YW5pbVwiLCBzZWN0aW9ucywgYnRuLCB3aGVlbCwgYXJyb3csIHByaXplLCBzcGluQmcsIHNhbHV0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJpemUgPT09IFwiZnM0MFwiKXtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIFwiX2JvbnVzXCIsIHN0cmVha0JvbnVzLCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCwgXCJmczQwXCIpLCB7b25jZTogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgc3BpbldoZWVsKDIwODgsIFwiZnM0MGFuaW1cIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcImZzNTBcIil7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLCBcIl9ib251c1wiLCBzdHJlYWtCb251cywgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXAsIFwiZnM1MFwiKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbCgyMDUyLjUsIFwiZnM1MGFuaW1cIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcImZzNzVcIil7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLCBcIl9ib251c1wiLCBzdHJlYWtCb251cywgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXAsIFwiZnM3NVwiKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbCgyMDE2LjUsIFwiZnM3NWFuaW1cIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcImxlaTE1XCIpe1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgXCJfYm9udXNcIiwgc3RyZWFrQm9udXMsIHNwaW5CZywgcG9wdXBDbG9zZUJ0biwgcG9wdXBDb250YWluZXIsIHBvcHVwLCBcImxlaTE1XCIpLCB7b25jZTogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgc3BpbldoZWVsKDE5ODAsIFwibGVpMTVhbmltXCIsIHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdywgcHJpemUsIHNwaW5CZywgc2FsdXQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcml6ZSA9PT0gXCJsZWkyMFwiKXtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIFwiX2JvbnVzXCIsIHN0cmVha0JvbnVzLCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCwgXCJsZWkyMFwiKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbCgxOTQyLCBcImxlaTIwYW5pbVwiLCBzZWN0aW9ucywgYnRuLCB3aGVlbCwgYXJyb3csIHByaXplLCBzcGluQmcsIHNhbHV0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJpemUgPT09IFwibGVpMjVcIil7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLCBcIl9ib251c1wiLCBzdHJlYWtCb251cywgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXAsIFwibGVpMjVcIiksIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICBzcGluV2hlZWwoMTkwOCwgXCJsZWkzMGFuaW1cIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcInJlc3BpblwiKXtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIFwiX2JvbnVzXCIsIHN0cmVha0JvbnVzLCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCwgXCJyZXNwaW5cIiksIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICBzcGluV2hlZWwoNzIuNSwgXCJyZXNwaW5BbmltXCIsIHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdywgcHJpemUsIHNwaW5CZywgc2FsdXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIHdoZWVsQnRuLCB3aGVlbFdyYXAsIHdoZWVsQXJyb3csIHNwaW5CZywgc2FsdXQsIFwibGVpMzBcIiwgc3RyZWFrQm9udXMpXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiByZWZyZXNoVXNlckluZm8odXNlckluZm8pIHtcbiAgICAvLyAgICAgcmVmcmVzaERhaWx5UG9pbnRzU2VjdGlvbih1c2VySW5mbyk7XG4gICAgLy8gICAgIHJlZnJlc2hXaGVlbCh1c2VySW5mbyk7XG4gICAgLy8gICAgIHJlZnJlc2hTdHJlYWsodXNlckluZm8pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIHJlZnJlc2hXaGVlbCh1c2VySW5mbykge1xuICAgIC8vICAgICBpZiAodXNlckluZm8uc3BpbkFsbG93ZWQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodXNlckluZm8ucG9pbnRzUGVyRGF5ID49IDUwKSB7XG4gICAgLy8gICAgICAgICB3aGVlbFdyYXAuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHdoZWVsV3JhcC5jbGFzc0xpc3QuYWRkKCdfYmxvY2snKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIHJlZnJlc2hEYWlseVBvaW50c1NlY3Rpb24odXNlckluZm8pIHtcbiAgICAvLyAgICAgY29uc3QgcG9pbnRzID0gTWF0aC5taW4odXNlckluZm8ucG9pbnRzUGVyRGF5IHx8IDAsIDUwKTtcbiAgICAvLyAgICAgY29uc3QgcHJvZ3Jlc3NTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NfX2Jhci1zdGF0dXMnKTtcbiAgICAvLyAgICAgcHJvZ3Jlc3NTdGF0dXMuaW5uZXJIVE1MID0gYCR7cG9pbnRzfSDigqxgO1xuICAgIC8vICAgICBjb25zdCBjdXJyZW50U3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50Jyk7XG4gICAgLy8gICAgIGN1cnJlbnRTcGFuLmlubmVySFRNTCA9IGAke3BvaW50c33igqxgO1xuICAgIC8vICAgICBjb25zdCBwcm9ncmVzc0xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NfX2Jhci1saW5lJyk7XG4gICAgLy8gICAgIGNvbnN0IHByb2dyZXNzID0gcG9pbnRzIC8gNTAuMCAqIDEwMDtcbiAgICAvLyAgICAgcHJvZ3Jlc3NMaW5lLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3N9JWA7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gcmVmcmVzaFN0cmVhayh1c2VySW5mbykge1xuICAgIC8vICAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGVlbF9fZGF5cy1pdGVtJyk7XG4gICAgLy8gICAgIGxldCBpID0gMDtcbiAgICAvLyAgICAgbGV0IHN0cmVhayA9IHVzZXJJbmZvLnNwaW5zU3RyZWFrO1xuICAgIC8vICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgLy8gICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Bhc3QnKTtcbiAgICAvLyAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmV4dCcpO1xuICAgIC8vICAgICAgICAgaWYgKGkgPCBzdHJlYWspIHtcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Bhc3QnKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCduZXh0Jyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpKys7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBwb3B1cERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2RheXMtaXRlbScpO1xuICAgIC8vICAgICBsZXQgaiA9IDA7XG4gICAgLy8gICAgIGZvciAobGV0IGl0ZW0gb2YgcG9wdXBEYXlzKSB7XG4gICAgLy8gICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIC8vICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwYXN0Jyk7XG4gICAgLy8gICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25leHQnKTtcbiAgICAvLyAgICAgICAgIGlmIChqIDwgc3RyZWFrKSB7XG4gICAgLy8gICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwYXN0Jyk7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaisrO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgbW9iaWxlRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXlzX19pdGVtJyk7XG4gICAgLy8gICAgIGxldCBrID0gMDtcbiAgICAvLyAgICAgZm9yIChsZXQgaXRlbSBvZiBtb2JpbGVEYXlzKSB7XG4gICAgLy8gICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Bhc3QnKTtcbiAgICAvLyAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmV4dCcpO1xuICAgIC8vICAgICAgICAgaWYgKGsgPCBzdHJlYWspIHtcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Bhc3QnKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCduZXh0Jyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBrKys7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cblxuLy8vLyBhY2NvcmRpb25cbiAgICBjb25zdCBhY2NvcmRpb25IZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faGVhZGVyJyk7XG4gICAgYWNjb3JkaW9uSGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fY29udGVudCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yIHRlc3RcblxuICAgIGNvbnN0IGZzMjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnMyMCcpXG4gICAgY29uc3QgZnMyNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mczI1JylcbiAgICBjb25zdCBmczQwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZzNDAnKVxuICAgIGNvbnN0IGZzNTAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnM1MCcpXG4gICAgY29uc3QgZnM3NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mczc1JylcbiAgICBjb25zdCBsZWkxNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWkxNScpXG4gICAgY29uc3QgbGVpMjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVpMjAnKVxuICAgIGNvbnN0IGxlaTI1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlaTI1JylcbiAgICBjb25zdCBkb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmVhaycpXG4gICAgY29uc3QgZHJvcEJvbnVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3AtYm9udXMnKTtcbiAgICBjb25zdCBkcm9wTm90aGluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wLW5vdGhpbmcnKTtcblxuICAgIGNvbnN0IGRyb3BMb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2snKTtcbiAgICBjb25zdCBkcm9wU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWduJyk7XG5cbiAgICB2YXIgc3RyZWFrQm9udXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdHJlYWtCb251cycpKSB8fCBmYWxzZTtcblxuICAgIGlmKHN0cmVha0JvbnVzKXtcbiAgICAgICAgZG9uZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJncmVlblwiXG4gICAgfVxuICAgIGlmKCFzdHJlYWtCb251cyl7XG4gICAgICAgIGRvbmUuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCJcbiAgICB9XG5cbiAgICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHN0cmVha0JvbnVzID0gIXN0cmVha0JvbnVzO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RyZWFrQm9udXMnLCBKU09OLnN0cmluZ2lmeShzdHJlYWtCb251cykpO1xuICAgICAgICBzdHJlYWtCb251cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0cmVha0JvbnVzJykpIHx8IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhzdHJlYWtCb251cylcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG5cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3AtbWVudVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiX2hpZGRlblwiKVxuICAgIH0pXG5cblxuICAgIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIGZzMjAsIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgc3BpbkJnLCBzYWx1dCwgXCJmczIwXCIsIHN0cmVha0JvbnVzKVxuICAgIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIGZzMjUsIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgc3BpbkJnLCBzYWx1dCwgXCJmczI1XCIsIHN0cmVha0JvbnVzKVxuICAgIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIGZzNDAsIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgc3BpbkJnLCBzYWx1dCwgXCJmczQwXCIsIHN0cmVha0JvbnVzKVxuICAgIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIGZzNTAsIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgc3BpbkJnLCBzYWx1dCwgXCJmczUwXCIsIHN0cmVha0JvbnVzKVxuICAgIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIGZzNzUsIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgc3BpbkJnLCBzYWx1dCwgXCJmczc1XCIsIHN0cmVha0JvbnVzKVxuICAgIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIGxlaTE1LCB3aGVlbFdyYXAsIHdoZWVsQXJyb3csIHNwaW5CZywgc2FsdXQsIFwibGVpMTVcIiwgc3RyZWFrQm9udXMpXG4gICAgaW5pdFNwaW4od2hlZWxTZWN0aW9ucywgbGVpMjAsIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgc3BpbkJnLCBzYWx1dCwgXCJsZWkyMFwiLCBzdHJlYWtCb251cylcbiAgICBpbml0U3Bpbih3aGVlbFNlY3Rpb25zLCBsZWkyNSwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBzcGluQmcsIHNhbHV0LCBcImxlaTI1XCIsIHN0cmVha0JvbnVzKVxuICAgIC8vIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIGRyb3BCb251c0J1dHRvbiwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBzcGluQmcsIHNhbHV0KVxuICAgIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIGRyb3BOb3RoaW5nQnV0dG9uLCB3aGVlbFdyYXAsIHdoZWVsQXJyb3csIHNwaW5CZywgc2FsdXQsIFwibm90aGluZ1wiLCBzdHJlYWtCb251cylcblxuICAgIGRyb3BMb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoZWVsV3JhcC5jbGFzc0xpc3QudG9nZ2xlKFwiX2xvY2tcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIikuY2xhc3NMaXN0LnRvZ2dsZShcIl9sb2NrXCIpO1xuICAgICAgICB3aGVlbFdyYXAuY2xhc3NMaXN0LnJlbW92ZShcIl9zaWduXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2lnblwiKTtcbiAgICB9KTtcbiAgICBkcm9wU2lnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGVlbFdyYXAuY2xhc3NMaXN0LnRvZ2dsZShcIl9zaWduXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJfc2lnblwiKTtcbiAgICAgICAgd2hlZWxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvY2tcIik7XG4gICAgfSk7XG5cblxufSkoKTtcbiJdfQ==
