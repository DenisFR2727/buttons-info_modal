var icon = {
    submit: "<span class='material-symbols-outlined'>task_alt</span>",
    failed: "<span class='material-symbols-outlined'>error</span>",
    warning: "<span class='material-symbols-outlined'>warning</span>",
    info: "<span class='material-symbols-outlined'>info</span>",
};
var toastShow = function (message, toastType, duration) {
    if (message === void 0) { message = "Sample message"; }
    if (toastType === void 0) { toastType = "info"; }
    if (duration === void 0) { duration = 5000; }
    if (Object.keys(icon).indexOf(toastType) === -1) {
        toastType = "info";
    }
    var box = document.createElement("div");
    box.classList.add("box", "box-".concat(toastType));
    box.innerHTML = " \n      <div class=\"box-content-wrapper\">\n        <div class=\"box-icon\">".concat(icon[toastType], "</div>\n       <div class=\"box-message\">").concat(message, "</div>\n       <div class=\"box-progress\"></div>\n      </div>\n    ");
    duration = duration || 5000;
    var progressElement = box.querySelector(".box-progress");
    if (progressElement) {
        progressElement.style.animationDuration = "".concat(duration / 1000, "s");
    }
    var toastAlready = document.body.querySelector(".box");
    if (toastAlready) {
        toastAlready.remove();
    }
    document.body.appendChild(box);
};
document.addEventListener("DOMContentLoaded", function () {
    var submit = document.querySelector(".custom-toast.submit-toast");
    var failed = document.querySelector(".custom-toast.failed-toast");
    var info = document.querySelector(".custom-toast.info-toast");
    var warn = document.querySelector(".custom-toast.warning-toast");
    if (submit) {
        submit.addEventListener("click", function (e) {
            e.preventDefault();
            toastShow("Article Submitted Successfully", "submit", 5000);
        });
    }
    if (failed) {
        failed.addEventListener("click", function (e) {
            e.preventDefault();
            toastShow("Failed unexpected error", "failed", 5000);
        });
    }
    if (info) {
        info.addEventListener("click", function (e) {
            e.preventDefault();
            toastShow("Do POTD and Earn Coins", "info", 5000);
        });
    }
    if (warn) {
        warn.addEventListener("click", function (e) {
            e.preventDefault();
            toastShow("!warning! server error", "warning", 5000);
        });
    }
});
