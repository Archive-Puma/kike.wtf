'use strict';
window.onload = function() {
    // Drag 'n drop
    var desktop = document.getElementById('desktop');
    $('.desktop__icon').each(function(index) {
        this.style.top = `${10 * index + 10}px`;
        this.style.left = '10px';
        $(this).draggable({ containment: desktop });
    });
    $('.desktop__window').draggable({ containment: desktop });


    // Time & Date
    var pad2 = (n) => (n < 10 ? '0' : '') + n;
    function setTime() {
        var time = new Date();
        document.getElementById('hour').innerText = `${pad2(time.getHours())}:${pad2(time.getMinutes())}`;
        document.getElementById('date').innerText = `${pad2(time.getDate())}/${pad2(time.getMonth()+1)}/${time.getFullYear()}`;
    }
    setInterval(setTime, 60000);
    setTime();
}

