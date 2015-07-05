/**
 * Created by igor on 24.06.15.
 */
var agecur = prompt('введи возраст'),
     age = parseInt(agecur, 10);
if (age < 10) {
    alert('уходи!');
} else if (age > 70) {
    alert('старый!');
} else {
    alert('привет!');
}
