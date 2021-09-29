function digitalClock() {
    // initial clock variable
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');
    // inital data variable
    const years = document.querySelector('.year');
    const months = document.querySelector('.month');
    const days = document.querySelector('.day');

    const time = new Date();
    // get time
    let Hours = time.getHours(); //0-23
    let Minute = time.getMinutes(); //0-59 min
    let Second = time.getSeconds(); // 0-59 sec
    // get date
    let Day = time.getDay(); //0-6
    let Month = time.getMonth(); //0-30
    let Year = time.getFullYear();
    const monthName = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];
    // shot clock 12 hours
    if (Hours > 12) {
        hours.innerHTML = Hours - 12;
    } else {
        hours.innerHTML = Hours;
    }
    // show zero for minute<10
    if (Minute < 10) {
        minutes.innerHTML = `0${Minute}`;
    } else {
        minutes.innerHTML = Minute;
    }
    // show zero for second<10
    if (Second < 10) {
        seconds.innerHTML = `0${Second}`;
    } else {
        seconds.innerHTML = Second;
    }
    days.innerHTML = Day;
    // show month on based arry name
    months.innerHTML = monthName[Month];
    // show year
    years.innerHTML = Year;
}
setInterval(digitalClock, 1000);