function updateClock(){
    const joe = new Date();
    let hour = joe.getHours();
    const meridiem = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12
    hour = hour.toString().padStart(2, 0);
    const minutes = joe.getMinutes().toString().padStart(2, 0);
    const seconds = joe.getSeconds().toString().padStart(2, 0);

    const clockContent = `${hour} : ${minutes} : ${seconds} ${meridiem} `

    document.getElementById("clock").textContent = clockContent;
}

updateClock()
setInterval(updateClock, 1000)
