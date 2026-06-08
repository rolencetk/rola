document.addEventListener("DOMContentLoaded", () => {
    // 1. تشغيل أنيميشن الانسحاب عند فتح الموقع مباشرة
    const glassPanel = document.getElementById("glassPanel");
    const rightContent = document.getElementById("rightContent");

    // إضافة الكلاسات لتفعيل التأثير بعد جزء من الثانية ليعطي نعومة وثبات
    setTimeout(() => {
        glassPanel.classList.add("show");
        rightContent.classList.add("show");
    }, 150);


    // 2. كود خاصية رفع الصورة وتغيير الخلفية ديناميكياً
    const imagePicker = document.getElementById("image-picker");
    const bgPreview = document.getElementById("bg-preview");

    imagePicker.addEventListener("change", function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.addEventListener("load", function() {
                // تعيين الصورة كخلفية للقسم الخلفي في الكارت
                bgPreview.style.backgroundImage = `url(${this.result})`;
            });
            
            reader.readAsDataURL(file);
        }
    });
});
