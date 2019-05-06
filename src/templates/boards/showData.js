//функции выводящие данные, кратую информацию при наведение на дом и подробную, при клике
(function() {
  const hous = document.querySelectorAll('.charts__hous'),
        info = document.querySelector('.detailed'),
        adress = document.getElementById('adress');

  let tooltip = undefined,
      currentInner = '',
      dataNumber = { //эмуляция базв данных
                    'д. 12': [ 75, 45 ],
                    'д. 13': [ 50, 0 ],
                    'д. 14': [ 90, 55 ], 
                    'д. 15': [ 60, 30 ], 
                    'д. 15б': [ 60, 0 ],
                    'д. 34': [ 60, 30 ]
                  };

  

  hous.forEach( (i) => {
    
    i.addEventListener( 'mouseenter',  showTooltip );
    i.addEventListener( 'mouseleave', closeTooltip );
  });

  hous.forEach( (i) => {

    i.addEventListener( 'click', showInfo );
  });
  
  function showTooltip(e) {
    let elem = e.target,
        numberHous =  e.target.lastChild.previousElementSibling.firstElementChild.innerHTML,
        indexAll = dataNumber[numberHous][0] * 5000,
        indexFact = dataNumber[numberHous][1] * 5000,
        classTooltip = undefined;

    
    if ( getCoorditnateElem(e) ) {
      classTooltip = 'tool tool--right';
    } else {
      classTooltip = 'tool tool--left';
    }
          

    tooltip = `<div class="${classTooltip}"><div class="tool__wrap"><div class="tool__title">План</div><span class="tool__data">${indexAll} м<sup>2</sup></span></div><div class="tool__wrap"><div class="tool__title">Факт</div><span class="tool__data">${indexFact} м<sup>2</sup></span></div><div class="tool__wrap"><div class="tool__title">СОИ</div><span class="tool__data">0 м<sup>2</sup></span></div></div>`;
    currentInner = elem.innerHTML;
    
    elem.firstElementChild.firstElementChild.innerHTML += tooltip;

  }

  function closeTooltip(e) {
    e.target.innerHTML = currentInner; 
  }

  function showInfo(e) {
    let elem =  e.target;
    var adressNum = undefined;

    if ( elem.classList.contains('charts__hous') !== true) {
      while ( elem.classList.contains('charts__hous') === false ) {
        elem = elem.parentElement;
      }      
    }

    adressNum = elem.lastChild.previousElementSibling.firstElementChild.innerHTML;
    info.classList.add( 'detailed--open');
    adress.innerHTML = `Корабельная, ${adressNum}`;
  }
  
  //определяю на которой половине находится кликнутый дом
  function getCoorditnateElem(e) {

    let xElem = e.target.getBoundingClientRect().x,
        widthScreen = document.body.clientWidth;

    if ( xElem > widthScreen/2) {
      console.log( 'правая часть');
      return true;
    } else {
      console.log( 'левая часть');
      return false;
    }
  }
  
}());