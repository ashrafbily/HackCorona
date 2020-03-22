date = new Date();
document.getElementById("date").innerHTML = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();;

var slider = document.getElementById("rangeDays");
var additionalDays = document.getElementById("additionalDays");
var socialDistancing = document.getElementById("socialDistancing");
additionalDays.innerHTML = slider.value - 1;
var day = 0;
var socialDist = 0;

slider.onchange = function() {
    day = slider.value - 1;
    socialDist = socialDistancing.value === 'on' ? 1 : 0;
    app.refreshMap(day, socialDist);
    additionalDays.innerHTML = day;
};

socialDistancing.onchange = function () {
    app.refreshMap(slider.value - 1, socialDistancing.value === 'on' ? 1 : 0);
};