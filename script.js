// منع كليك يمين
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("عذرًا! لا يمكنك استخدام الزر الأيمن.");
});

// منع اختصارات النسخ
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 'c') || 
        (e.ctrlKey && e.key === 'u') || 
        (e.key === 'F12')) {
        e.preventDefault();
        alert("تم تعطيل النسخ وفحص العناصر.");
    }
});
