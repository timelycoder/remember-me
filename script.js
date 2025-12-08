function checkName() {
  const input = document.getElementById("nameBox").value.toLowerCase();
  const feedback = document.getElementById("feedback");
  const photo = document.getElementById("myPhoto"); // 🔴 Photo element

  const myName = "sumon"; // 🔴 আপনার নাম এখানে রাখবেন (English letters)

  if (input === "") {
    feedback.textContent =
      "🙈 আপনি কিছু টাইপ করুন, আপনার last name এর প্রথম অক্ষরের মতো আমার নামের শুরুটা অনুমান করুন!";
    photo.classList.remove("show"); // Photo লুকিয়ে রাখুন
  } else if (input !== myName && input.length !== 0) {
    feedback.textContent =
      "🤔 ভুল হয়েছে? সূত্র: আমার নাম ৫ অক্ষরের এবং শেষ অক্ষর হলো 'n'. আবার চেষ্টা করুন!";
    photo.classList.remove("show"); // Photo লুকিয়ে রাখুন
  } else {
    feedback.textContent = "🎉 ঠিক আছে! আপনি সঠিকভাবে অনুমান করেছেন!";

    // 🔴 Photo দেখানোর জন্য
    photo.classList.add("show");

    // // 🔴 Optional: যদি Facebook লিংক দিতে চান uncomment করুন
    // /*
    setTimeout(() => {
      window.location.href =
        "https://www.facebook.com/moham.mada.samasujjamana.sumana";
    }, 4500);
  }
}
