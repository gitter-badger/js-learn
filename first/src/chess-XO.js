/**
 * Created by YGREK on 26.06.2015.
 */
var str = '',
    c = 8,
    d = 8,
    sc = 8;
while (sc) {
    if (sc) {
        while (c) {
            if (c % 2) {
                str += '[X]';
            }
            else {
                str += '[O]';
            }
            --c;
        }
        --sc;
        str += '<br>';

        while (d) {
            if (d % 2) {
                str += '[O]';
            }
            else {
                str += '[X]';
            }
            --d;
        }
        str += '<br>';
        --sc;
    }
    else {
        document.write(str);
    }
}