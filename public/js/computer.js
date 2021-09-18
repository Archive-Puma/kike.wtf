'use strict';
window.onload = () => {
    // Drag 'n drop
    let desktop = $('#desktop');
    $('.desktop__window').draggable({ containment: desktop });
    $('.desktop__icon').each((index, element) => {
        $(element).css('top', `${10 * index + 10}px`);
        $(element).css('left', '10px');
        $(element).draggable({ containment: desktop });
    });

    // Time & Date
    let pad2 = (n) => (n < 10 ? '0' : '') + n;
    let setTime = () => {
        let time = new Date();
        $('#hour').text(`${pad2(time.getHours())}:${pad2(time.getMinutes())}`);
        $('#date').text(`${pad2(time.getDate())}/${pad2(time.getMonth()+1)}/${time.getFullYear()}`);
    }
    setInterval(setTime, 60000);
    setTime();
}

