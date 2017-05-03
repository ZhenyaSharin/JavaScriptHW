var hour = document.createElement('div');
hour.className = 'hour col-0';
document.body.appendChild(hour);

var minute = document.createElement('div');
minute.className = 'minute col-0';
document.body.appendChild(minute);

var second = document.createElement('div');
second.className = 'second col-0';
document.body.appendChild(second);

function timeShift() {
	hour.innerHTML = (new Date).getHours() + ':'
	minute.innerHTML = (new Date).getMinutes() + ':';
	second.innerHTML = (new Date).getSeconds();
}

setInterval(timeShift, 1000);