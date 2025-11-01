// ----------- HEADER DOWNLOAD (ilovani yuklash) -----------
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn1");

  // Yuklab olish tugmasiga bosilganda
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // linkning odatiy harakatini (refresh yoki ochish) to‘xtatadi
    
    // Faylni yuklab olish yoki Google Play sahifasiga yo‘naltirish
    window.location.href = "https://play.google.com/store/apps/details?id=uz.developer.blacar"; 
    // 👉 bu yerga o‘zingizning fayl manzilini ham qo‘yishingiz mumkin
  });
});


// ----------- REAL VAQT SOATNI KO‘RSATISH -----------
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');   // soatni 2 raqam ko‘rinishda chiqaradi
  const minutes = String(now.getMinutes()).padStart(2, '0'); // minutni 2 raqam ko‘rinishda chiqaradi
  document.getElementById("time").textContent = hours + ":" + minutes;
}

// Har 1 soniyada soatni yangilaydi
setInterval(updateClock, 1000);
updateClock(); // sahifa ochilganda ham darrov ko‘rsatadi


// ----------- FORM TUGMALARI -----------
document.getElementById("verifyBtn").addEventListener("click", () => {
  alert("Tasdiqlash kodi yuborildi!"); // verify tugmasi bosilganda
});

document.getElementById("orderBtn").addEventListener("click", () => {
  alert("Buyurtma qabul qilindi!"); // buyurtma tugmasi bosilganda
});


// ----------- VIDEO OCHISH FUNKSIYASI -----------
function openVideo(url) {
  window.open(url, "_blank"); // yangi oynada YouTube yoki boshqa video ochiladi
}


// ----------- FOOTER (telefon linki) -----------
document.addEventListener("DOMContentLoaded", () => {
  const phoneLink = document.querySelector('.footaddres ul li a[href^="tel"]');

  if (phoneLink) {
    phoneLink.addEventListener("click", (e) => {
      alert("Telefon raqamingizga qo‘ng‘iroq qilinmoqda 📞");
    });
  }
});
