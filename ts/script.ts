// script ts
interface Icon {
  [key: string]: string;
  submit: string;
  failed: string;
  warning: string;
  info: string;
}
let icon: Icon = {
  submit: "<span class='material-symbols-outlined'>task_alt</span>",
  failed: "<span class='material-symbols-outlined'>error</span>",
  warning: "<span class='material-symbols-outlined'>warning</span>",
  info: "<span class='material-symbols-outlined'>info</span>",
};

const toastShow = (
  message: string = "Sample message",
  toastType: string = "info",
  duration: number = 5000
) => {
  if (Object.keys(icon).indexOf(toastType) === -1) {
    toastType = "info";
  }

  let box = document.createElement("div") as HTMLDivElement;
  box.classList.add("box", `box-${toastType}`);
  box.innerHTML = ` 
      <div class="box-content-wrapper">
        <div class="box-icon">${icon[toastType]}</div>
       <div class="box-message">${message}</div>
       <div class="box-progress"></div>
      </div>
    `;
  duration = duration || 5000;
  const progressElement = box.querySelector(".box-progress") as HTMLDivElement;

  if (progressElement) {
    progressElement.style.animationDuration = `${duration / 1000}s`;
  }

  let toastAlready = document.body.querySelector(".box");
  if (toastAlready) {
    toastAlready.remove();
  }
  document.body.appendChild(box);
};

document.addEventListener("DOMContentLoaded", () => {
  let submit = document.querySelector(
    ".custom-toast.submit-toast"
  ) as HTMLButtonElement;
  let failed = document.querySelector(
    ".custom-toast.failed-toast"
  ) as HTMLButtonElement;
  let info = document.querySelector(
    ".custom-toast.info-toast"
  ) as HTMLButtonElement;
  let warn = document.querySelector(
    ".custom-toast.warning-toast"
  ) as HTMLButtonElement;

  if (submit) {
    submit.addEventListener("click", (e: Event) => {
      e.preventDefault();
      toastShow("Article Submitted Successfully", "submit", 5000);
    });
  }
  if (failed) {
    failed.addEventListener("click", (e: Event) => {
      e.preventDefault();
      toastShow("Failed unexpected error", "failed", 5000);
    });
  }
  if (info) {
    info.addEventListener("click", (e: Event) => {
      e.preventDefault();
      toastShow("Do POTD and Earn Coins", "info", 5000);
    });
  }
  if (warn) {
    warn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      toastShow("!warning! server error", "warning", 5000);
    });
  }
});
