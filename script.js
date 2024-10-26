function clock() {
    const $ = (id) => {
        return document.getElementById(id);
    };
    const $hours = $('hours');
    const $minutes = $('minutes');
    const $seconds = $('seconds');
    const $ampm = $('ampm');
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    if (hours >12) {
        hours = hours - 12;
    }

    const updateValue = ($ele, value) => {
        $ele.innerHTML = String(value).padStart(2, '0');
    }
    updateValue($hours, hours);
    updateValue($minutes, minutes);
    updateValue($seconds, seconds);
    updateValue($ampm, ampm);
}

setInterval(clock, 1000);