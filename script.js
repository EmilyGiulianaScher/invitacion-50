const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const targetDate = new Date("September 26, 2025 21:30:00").getTime();

function updateCountdown() {
  if (!daysSpan || !hoursSpan || !minutesSpan || !secondsSpan) {
    console.error('Countdown elements not found');
    return;
  }

  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    daysSpan.innerHTML = "¡Es hoy!";
    hoursSpan.innerHTML = "";
    minutesSpan.innerHTML = "";
    secondsSpan.innerHTML = "🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysSpan.innerHTML = String(days).padStart(2, '0');
  hoursSpan.innerHTML = String(hours).padStart(2, '0');
  minutesSpan.innerHTML = String(minutes).padStart(2, '0');
  secondsSpan.innerHTML = String(seconds).padStart(2, '0');

  requestAnimationFrame(updateCountdown);
}

if (daysSpan && hoursSpan && minutesSpan && secondsSpan) {
  updateCountdown();
}

//rutas al form
const path = window.location.pathname;
const rsvpBtn = document.getElementById("rsvpBtn");

function setFavicon(iconUrl) {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = iconUrl;
}
if (rsvpBtn) {
  if (path === "/f") {
    rsvpBtn.href = "https://docs.google.com/forms/d/e/1FAIpQLSczbOuCg2nNLyH19PapmlWBZDSjy9f0Mkx4ohV3phInSPsekA/viewform";
    setFavicon("/icons/f-icon.jpg"); 
  } else if (path === "/2") {
    rsvpBtn.href = "https://docs.google.com/forms/d/e/1FAIpQLScPJVC14IkA48gyqb1Zl9UJiSX8ahBIQ1DoELnUtzCcPArOQQ/viewform";
    setFavicon("/icons/pareja-icon.jpg"); 
  } else {
    rsvpBtn.href = "https://docs.google.com/forms/d/e/1FAIpQLSfA2OHhAmo7ktULvXav1eOCbu__mteizcoiL3RSbdUDLBnVUQ/viewform";
    setFavicon("/icons/default-icon.jpg"); 
  }
}


