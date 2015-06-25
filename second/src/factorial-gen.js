/**
 * Created by YGREK on 24.06.2015.
 */
var factStart = prompt('введите начало диапазона'),
    factS = parseInt(factStart, 10),
    factEnd = prompt('введите конец диапазона'),
    factE = parseInt(factEnd, 10);
for (i = 1; i <= factS; i++) {
    factS = factS * i;
}
for (i = factS; i <= factE; i++) {
    factS = factS * i;
    document.write(i + '! =' + factS + '<br>');
}
