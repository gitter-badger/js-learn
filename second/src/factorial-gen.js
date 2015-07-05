/**
 * Created by YGREK on 24.06.2015.
 */
var factStart = prompt('введите начало диапазона'),
    factS = parseInt(factStart, 10),
    factEnd = prompt('введите конец диапазона'),
    factE = parseInt(factEnd, 10),
    factOri = 1;
if (factS > factE){
    alert ('Начало диапазона должно быть меньше конца диапазона!'); /** выход при кривом вводе*/
    /**do stop;
    else keep going*/
}
    else {
        for (i = 1; i <= factS - 1; ++i) {
            factOri = factOri * i;
        }

        for (i = factS; i <= factE; ++i) {/** разные счетчики?*/
            factOri = factOri * i;
            /** if (factOri = Infinity) {                //** выход при достижении бесконечности
            do stop;
            else keep going */
            document.write(i + '! =' + factOri + '<br>');
        }
    }
