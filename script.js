function checkName() {
  const input = document.getElementById("nameBox").value.toLowerCase();
  const feedback = document.getElementById("feedback");

  const myName = "sumon";

  if (input === "") {
    feedback.textContent =
      "🙈 আপনি কিছু টাইপ করুন, আপনার last name এর প্রথম অক্ষরের মতো আমার নামের শুরুটা অনুমান করুন!";
  } else if (input !== myName && input.length !== 0) {
    feedback.textContent =
      "🤔 ভুল হয়েছে? সূত্র: আমার নাম ৫ অক্ষরের এবং শেষ অক্ষর হলো 'n'. আবার চেষ্টা করুন!";
  } else {
    feedback.textContent = "🎉 ঠিক আছে! আপনি সঠিকভাবে অনুমান করেছেন!";
    // Redirect বা surprise দেখান
    setTimeout(() => {
      window.location.href =
        "https://www.facebook.com/moham.mada.samasujjamana.sumana";
    }, 1500);
  }
}
