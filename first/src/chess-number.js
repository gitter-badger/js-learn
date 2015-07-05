/**
 * Created by YGREK on 25.06.2015.
 */
var str ='';
var c = 8;
while(c)
{
    str += 'клетка ' + c + '<br />';
    --c;
}
str +='<br />';
var d = 0;
while(d<8)
{
    ++d; /**d++*/
str += 'клетка ' + d + '<br />';
}
/**str +='<br />';*/
document.write (str);