// функция, заносит данные из импровизированной БД (dataNumber-номер дома, dataAll-запланированное значение, dataFact- фактическое значение), 
(function() {

  const fact = document.querySelectorAll('.charts__hous-fact'),
        all = document.querySelectorAll('.charts__hous-all'),
        number = document.querySelectorAll('.charts__hous-number-text');

  let  dataNumber = [ 'д. 12', 'д. 13', 'д. 14', 'д. 15', 'д. 15б', 'д. 34'],
       dataAll = [ 75, 50, 90, 60, 60, 60 ],
       dataFact = [45, 0, 55, 30, 0, 30 ];


  printNumber();
  printFact();
  printAll();

  function printNumber() {
    let index = 0;

   number.forEach( (i) => {
      i.innerHTML =  dataNumber[index];
      index++;
    });
  }

  function printAll() {
    let index = 0;

    all.forEach( (i) => {
      i.style.height = `${dataAll[index]}%`;
      index++;
    });
  }

  function printFact() {
    let index = 0;

    fact.forEach( (i) => {
      i.style.height = `${dataFact[index]}%`;
      index++;
    });
  }

}());