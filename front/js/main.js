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
    const debug = true;
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
    const days = document.querySelectorAll(".wheel__days-item")
    const popupDays = document.querySelectorAll(".popup__days-item");
    const popupDaysMob = document.querySelectorAll(".days__item");
    let currentDay = 5
    function setDays(days, currentDay){
        days.forEach((day, i) =>{
            ++i
            day.classList.toggle("next", i > currentDay);
            day.classList.toggle("past", i < currentDay);
            day.classList.toggle("active", i === currentDay);
        })
    }
    function daysRemind(days, classAnim) {
        let delay = 900;
        days.forEach((day, i) => {
            setTimeout(() => {
                day.classList.add(classAnim);
                setTimeout(() => day.classList.remove(classAnim), 1200)
            }, delay * i);
        });
    }
    // const randomInterval = Math.random() * (6000 - 4000) + 4000;
    function addFireworks(containerSelector, numberOfFireworks) {
        const fireworksWrap = document.createElement('div');
        fireworksWrap.className = 'fireworks-wrap';
        for (let i = 0; i < numberOfFireworks; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework';
            fireworksWrap.appendChild(firework);
        }
        const container = document.querySelector(containerSelector);
        if (container) {
            container.appendChild(fireworksWrap);
        } else {
            console.error(`Контейнер з селектором "${containerSelector}" не знайдено.`);
        }
    }
    function removeFireworks(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (container) {
            const fireworksWrap = container.querySelector('.fireworks-wrap');
            if (fireworksWrap) {
                fireworksWrap.remove();
            } else {
                console.error(`Елемент з класом ".fireworks-wrap" не знайдено в контейнері ${containerSelector}.`);
            }
        } else {
            console.error(`Контейнер з селектором "${containerSelector}" не знайдено.`);
        }
    }
    function startRandomInterval() {
        const randomInterval = Math.random() * (20000 - 10000) + 10000; // Випадковий інтервал між 10 і 20 секундами
        daysRemind(days, "remind");
        daysRemind(popupDays, "remind");
        daysRemind(popupDaysMob, "remind");
        setTimeout(startRandomInterval, randomInterval);
    }
    startRandomInterval();
    daysRemind(days, "remind")
    setDays(days, currentDay)
    setDays(popupDays, currentDay)
    setDays(popupDaysMob, currentDay)

/// wheel logic
    const wheelSections = document.querySelector(".wheel__sections"),
          wheelWrap = document.querySelector(".wheel__wrap"),
          wheelArrow = document.querySelector(".wheel__arrow"),
          wheelBtn = document.querySelector(".wheel__btn"),
          spinBg = document.querySelector(".spin-bg"),
          salut = document.querySelector(".fireworks-wrap"),
          bubleBtn = document.querySelector(".wheel__days-icons"),
          wheelBuble = document.querySelector(".wheel__buble"),
          popupContainer = document.querySelector(".popups"),
          popup = document.querySelector(".popup"),
          popupCloseBtn = document.querySelector(".popup__close")

    bubleBtn.addEventListener("mouseover", (e) =>{
        wheelBuble.classList.remove("_hidden")
    })
    bubleBtn.addEventListener("mouseout", (e) =>{
        wheelBuble.classList.add("_hidden")
    })
    document.addEventListener("click", e => e.target === bubleBtn ? null : wheelBuble.classList.add("_hidden"))
    let prizes = ['iphone', 'ecoflow', 'merch', 'nothing', "bonuses"]
    function getRandomPrize(arr) {
        return arr[Math.floor(Math.random() * prizes.length)];
    }
    function showPopup(sections, wheel, showClass, streakBonus, spinBg, closeBtn, popupContainer, popup, classPrize){
        // document.querySelector(".fav-page").classList.add("popupBg")
        if(classPrize){
            popup.classList.add(`${classPrize}`);
        }
        if(classPrize === "respin") return
        popup.classList.add(`${showClass}`)
        popup.classList.contains('_nothing') === true ? null : addFireworks(".popups", 7)
        streakBonus ? popup.classList.add("_done") : popup.classList.add("_incomplete")
        popupContainer.classList.add("_opacity", "_zIndex")
        document.body.style.overflow = "hidden"
        spinBg.classList.remove("showSpinBg")
        const pers = document.querySelectorAll(".popup__pers")
        const prize = document.querySelectorAll(".popup__prize")
        const buble = document.querySelectorAll(".popup__buble")
        const popupBody = document.querySelector(".popup__main")
        const popupTitle = document.querySelectorAll(".popup__title")
        const popupLeftArrow = document.querySelectorAll(".popup__decor-left")
        const popupRightArrow = document.querySelectorAll(".popup__decor-right")
        streakBonus ? popupBody.classList.add("_done") : popup.classList.add("_incomplete")
        document.querySelector(".fav-page").classList.remove("bgScale")
        function addAnim(arr, classAnim){
            arr.forEach(item => item.classList.add(`${classAnim}`) )
        }
        //popup animations
        setTimeout(() =>{
            popupBody.classList.add("popupMainAnim")
            addAnim(pers, "popupPersAnim")
            addAnim(buble, "popupBubleAnim")
        }, 100)

        setTimeout(() =>{
            addAnim(prize, "popupPrizeAnim")
            popupTitle.forEach(item => item.classList.add("popupTitleAnim"))

        }, 600)
        setTimeout( () => {
            popupLeftArrow.forEach(item => item.classList.add("popupLeftArrAnim"))
            popupRightArrow.forEach(item => item.classList.add("popupRightArrAnim"))
        }, 1200)
        //popup animations
        closeBtn.addEventListener("click", () =>{
            popup.classList.contains('_nothing') === true ? null : addFireworks(".wheel", 7)
            wheel.classList.add("_lock")
            document.querySelector(".progress").classList.add("_lock")
            wheel.classList.remove("wheelSizeIncrease")
            document.body.style.overflow = "auto"
            popupContainer.classList.remove("_opacity", "_zIndex")
            popup.classList.remove(`${showClass}`, '_done', '_incomplete')
            removeFireworks(".popups");
        }, {once: true});
        document.querySelectorAll('.popup__btn').forEach(btn => btn.addEventListener("click", () => {
            popup.classList.contains('_nothing') === true ? null : addFireworks(".wheel", 7)
            wheel.classList.add("_lock")
            document.querySelector(".progress").classList.add("_lock")
            wheel.classList.remove("wheelSizeIncrease")
            document.body.style.overflow = "auto"
            popupContainer.classList.remove("_opacity", "_zIndex")
            popup.classList.remove(`${showClass}`, '_done', '_incomplete')
            removeFireworks(".popups");
        }, {once: true}));
    }

    function spinWheel(position, animation, sections, btn, wheel, arrow, prize, spinBg, salut){
        sections.addEventListener("animationend", () =>{
            sections.style.transform = `translate(-50%, -50%) rotate(${position}deg)`
            sections.classList.remove(`${animation}`)
        }, {once: true})
        sections.classList.add(`${animation}`)
        arrow.style.opacity = "0"
        wheel.classList.add("wheelSizeIncrease")
        document.querySelector(".fav-page").classList.add("bgScale")
        document.querySelector(".sector-prize").style.opacity = "1"
        spinBg.classList.add("showSpinBg")
        if(animation !== "respinAnim"){
            btn.style.pointerEvents = "none"
        }
    }


    function initSpin(sections, btn, wheel, arrow, spinBg, salut, prize, streakBonus) {
        btn.addEventListener("click", () =>{
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
            console.log(streakBonus)
            if(prize === "nothing"){
                popup.classList.add("_nothing")
                sections.addEventListener("animationend", () => showPopup(sections, wheel,"_nothing", streakBonus, spinBg, popupCloseBtn, popupContainer, popup), {once: true})
                spinWheel(1872, "nothingPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "fs20"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs20"), {once: true})
                spinWheel(1800, "fs20anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "fs25"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs25"), {once: true})
                spinWheel(1762, "fs25anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "fs40"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs40"), {once: true})
                spinWheel(2088, "fs40anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "fs50"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs50"), {once: true})
                spinWheel(2052.5, "fs50anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "fs75"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs75"), {once: true})
                spinWheel(2016.5, "fs75anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "lei15"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "lei15"), {once: true})
                spinWheel(1980, "lei15anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "lei20"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "lei20"), {once: true})
                spinWheel(1942, "lei20anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "lei25"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "lei25"), {once: true})
                spinWheel(1908, "lei30anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "respin"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "respin"), {once: true})
                spinWheel(72.5, "respinAnim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
        })
    }
    initSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow, spinBg, salut, "lei30", streakBonus)
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
    const accordionHeaders = document.querySelectorAll('.accordion__header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            document.querySelectorAll('.accordion__content').forEach(item => {
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

    const fs20 = document.querySelector('.fs20')
    const fs25 = document.querySelector('.fs25')
    const fs40 = document.querySelector('.fs40')
    const fs50 = document.querySelector('.fs50')
    const fs75 = document.querySelector('.fs75')
    const lei15 = document.querySelector('.lei15')
    const lei20 = document.querySelector('.lei20')
    const lei25 = document.querySelector('.lei25')
    const done = document.querySelector('.streak')
    const dropBonusButton = document.querySelector('.drop-bonus');
    const dropNothingButton = document.querySelector('.drop-nothing');

    const dropLock = document.querySelector('.lock');
    const dropSign = document.querySelector('.sign');

    var streakBonus = JSON.parse(localStorage.getItem('streakBonus')) || false;

    if(streakBonus){
        done.style.background = "green"
    }
    if(!streakBonus){
        done.style.background = "red"
    }

    done.addEventListener("click", () => {
        streakBonus = !streakBonus;
        localStorage.setItem('streakBonus', JSON.stringify(streakBonus));
        streakBonus = JSON.parse(localStorage.getItem('streakBonus')) || false;
        console.log(streakBonus)
        window.location.reload()

    });

    document.querySelector(".drop-btn").addEventListener("click", () =>{
        document.querySelector(".drop-menu").classList.toggle("_hidden")
    })


    initSpin(wheelSections, fs20, wheelWrap, wheelArrow, spinBg, salut, "fs20", streakBonus)
    initSpin(wheelSections, fs25, wheelWrap, wheelArrow, spinBg, salut, "fs25", streakBonus)
    initSpin(wheelSections, fs40, wheelWrap, wheelArrow, spinBg, salut, "fs40", streakBonus)
    initSpin(wheelSections, fs50, wheelWrap, wheelArrow, spinBg, salut, "fs50", streakBonus)
    initSpin(wheelSections, fs75, wheelWrap, wheelArrow, spinBg, salut, "fs75", streakBonus)
    initSpin(wheelSections, lei15, wheelWrap, wheelArrow, spinBg, salut, "lei15", streakBonus)
    initSpin(wheelSections, lei20, wheelWrap, wheelArrow, spinBg, salut, "lei20", streakBonus)
    initSpin(wheelSections, lei25, wheelWrap, wheelArrow, spinBg, salut, "lei25", streakBonus)
    // initSpin(wheelSections, dropBonusButton, wheelWrap, wheelArrow, spinBg, salut)
    initSpin(wheelSections, dropNothingButton, wheelWrap, wheelArrow, spinBg, salut, "nothing", streakBonus)

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
