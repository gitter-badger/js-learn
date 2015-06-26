/**
 * Created by YGREK on 24.06.2015.
 */
var factStart = prompt('введите начало диапазона'),
    factS = parseInt(factStart, 10),
    factEnd = prompt('введите конец диапазона'),
    factE = parseInt(factEnd, 10),
    factOri = 1;
for (i = 1; i < (factE - 1); ++i)
    {
    factOri = factOri * i;
        document.write(i + '! =' + factOri + '<br>');
    }
    factS =  factS * factOr;
  /**  (j = factS; j < factE; j++)
{
    factS = factS * j;
    document.write(j + '! =' + factS + '<br>');
}
   /** factOri = factS * factE;
    document.write(factE + '! =' + factOri + '<br>'); */
    document.write(factS);
/**document.write(i + '! =' + factS + '<br>');*/




