
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.ara1').addEventListener('click', function() {
        document.querySelector('.ara').scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.ara2').addEventListener('click', function() {
        document.querySelector('.ara').scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.anime1').addEventListener('click', function() {
        document.querySelector('.anime').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.anime2').addEventListener('click', function() {
        document.querySelector('.anime').scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.ro3b1').addEventListener('click', function() {
        document.querySelector('.ro3b').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.ro3b2').addEventListener('click', function() {
        document.querySelector('.ro3b').scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.action1').addEventListener('click', function() {
        document.querySelector('.action').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.action2').addEventListener('click', function() {
        document.querySelector('.action').scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tawa1').addEventListener('click', function() {
        document.querySelector('.container2').scrollIntoView({ behavior: 'smooth' });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tawa2').addEventListener('click', function() {
        document.querySelector('.container2').scrollIntoView({ behavior: 'smooth' });
    });
});



const menu = document.getElementById('menu');
const profPic = document.getElementById('prof-pic');

// اجعل القائمة مخفية في البداية
menu.style.display = 'none';

profPic.addEventListener('click', function (event) {
    event.stopPropagation(); // لمنع تنفيذ حدث النقر على الوثيقة
    if (menu.style.display === 'none') {
        menu.style.display = 'block'; // عرض القائمة عند الضغط على الصورة
        menu.classList.add('fade-in');
        menu.classList.remove('fade-out');
    } else {
        menu.style.display = 'none'; // إخفاء القائمة إذا كانت مفتوحة
        menu.classList.remove('fade-in');
        menu.classList.add('fade-out');
    }
});

document.addEventListener('click', function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none'; // إخفاء القائمة إذا تم النقر خارجها
        menu.classList.remove('fade-in');
        menu.classList.add('fade-out');
    }
});

// لمنع إغلاق القائمة إذا تم النقر داخل القائمة
menu.addEventListener('click', function (event) {
    event.stopPropagation(); // منع تنفيذ حدث النقر على الوثيقة
});


// نحصل على جميع الأزرار التي لديها class باسم messageButton
const buttons = document.querySelectorAll(".button-with-icon");

// نضيف حدث "click" لكل زر
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // نعرض نفس الرسالة لجميع الأزرار
        alert("    ما تريد الان غير متوفر. سيكون جاهزا قريبا    ");
    });
});