let body = document.getElementById("body");
let nav = document.createElement("nav");
nav.classList.add("navigationcontent");
body.append(nav);
let img = document.createElement("img");
img.src = "./assets/bar.svg";
img.classList.add("navigationcontent--img");
img.setAttribute("menu-icon-btn", "");
nav.append(img);
let img1 = document.createElement("img");
img1.src = "./assets/logo.png";
img1.classList.add("navigationcontent--img2");
nav.append(img1);
let navigationcontentpara = document.createElement("p");
navigationcontentpara.innerHTML = "Mouli Bhaskaran's workspace";
navigationcontentpara.classList.add("navigationcontent--para");
nav.append(navigationcontentpara);
let navigationcontentbtn = document.createElement("button");
navigationcontentbtn.innerHTML = "UPGRADE";
navigationcontentbtn.classList.add("navigationcontent--btn");
nav.append(navigationcontentbtn);
let navigationcontentimg3 = document.createElement("img");
navigationcontentimg3.src = "https://app.clockify.me/assets/nav-icons/help.svg";
navigationcontentimg3.classList.add("navigationcontent--img3");
nav.append(navigationcontentimg3);
let navigationcontentimg4 = document.createElement("img");
navigationcontentimg4.src =
  "https://app.clockify.me/assets/nav-icons/notification.svg";
navigationcontentimg4.classList.add("navigationcontent--img4");
nav.append(navigationcontentimg4);
let navigationcontentbtn2 = document.createElement("button");
navigationcontentbtn2.innerHTML = "MB";
navigationcontentbtn2.classList.add("navigationcontent-btn2");
nav.append(navigationcontentbtn2);
let navigationcontentline = document.createElement("hr");
navigationcontentline.classList.add("navigationcontent--line");
nav.append(navigationcontentline);

let sidenavbar = document.createElement("div");
sidenavbar.classList.add("sidenavbar");
sidenavbar.setAttribute("data-sidebar", "");
body.append(sidenavbar);

let sidenavbardiv = document.createElement("div");
sidenavbardiv.classList.add("sidenavbar--div");
sidenavbar.append(sidenavbardiv);
let sidenavbarimg = document.createElement("img");
sidenavbarimg.src = "https://app.clockify.me/assets/nav-icons/timesheet.svg";
sidenavbarimg.classList.add("sidenavbarimg");
sidenavbardiv.append(sidenavbarimg);
let sidenavbarpara = document.createElement("span");
sidenavbarpara.innerHTML = "TIMESHEET";
sidenavbarpara.classList.add("sidenavbarpara");
sidenavbarpara.classList.add("hidden-sidebar");
sidenavbardiv.append(sidenavbarpara);

let sidenavbardiv1 = document.createElement("div");
sidenavbardiv1.classList.add("sidenavbar--div");
sidenavbar.append(sidenavbardiv1);
let sidenavbarimg1 = document.createElement("img");
sidenavbarimg1.src =
  "https://app.clockify.me/assets/nav-icons/time-tracker.svg";
sidenavbarimg1.classList.add("sidenavbarimg");
sidenavbardiv1.append(sidenavbarimg1);
let sidenavbarpara1 = document.createElement("span");
sidenavbarpara1.innerHTML = "TIMETRACKER";
sidenavbarpara1.classList.add("sidenavbarpara");
sidenavbarpara1.classList.add("hidden-sidebar");
sidenavbardiv1.append(sidenavbarpara1);

let sidenavbardiv2 = document.createElement("div");
sidenavbardiv2.classList.add("sidenavbar--div");
sidenavbar.append(sidenavbardiv2);
let sidenavbarimg2 = document.createElement("img");
sidenavbarimg2.src = "https://app.clockify.me/assets/nav-icons/calendar.svg";
sidenavbarimg2.classList.add("sidenavbarimg");
sidenavbardiv2.append(sidenavbarimg2);
let sidenavbarpara2 = document.createElement("span");
sidenavbarpara2.innerHTML = "CALENDAR";
sidenavbarpara2.classList.add("sidenavbarpara");
sidenavbarpara2.classList.add("hidden-sidebar");
sidenavbardiv2.append(sidenavbarpara2);

let head1 = document.createElement("div");
sidenavbar.append(head1);
let sidenavbarheading = document.createElement("p");
sidenavbarheading.innerHTML = "ANALYZE";
sidenavbarheading.classList.add("sidenavbar--heading");
head1.append(sidenavbarheading);

let sidenavbardiv3 = document.createElement("div");
sidenavbardiv3.classList.add("sidenavbar--div");
sidenavbar.append(sidenavbardiv3);
let sidenavbarimg3 = document.createElement("img");
sidenavbarimg3.src = "https://app.clockify.me/assets/nav-icons/dashboard.svg";
sidenavbarimg3.classList.add("sidenavbarimg");
sidenavbardiv3.append(sidenavbarimg3);
let sidenavbarpara3 = document.createElement("span");
sidenavbarpara3.innerHTML = " DASHBOARD";
sidenavbarpara3.classList.add("sidenavbarpara");
sidenavbarpara3.classList.add("hidden-sidebar");
sidenavbardiv3.append(sidenavbarpara3);

let sidenavbardiv4 = document.createElement("div");
sidenavbardiv4.classList.add("sidenavbar--div");
sidenavbar.append(sidenavbardiv4);
let sidenavbarimg4 = document.createElement("img");
sidenavbarimg4.src = "https://app.clockify.me/assets/nav-icons/reports.svg";
sidenavbarimg4.classList.add("sidenavbarimg");
sidenavbardiv4.append(sidenavbarimg4);
let sidenavbarpara4 = document.createElement("span");
sidenavbarpara4.innerHTML = " REPORTS";
sidenavbarpara4.classList.add("sidenavbarpara");
sidenavbarpara4.classList.add("hidden-sidebar");
sidenavbardiv4.append(sidenavbarpara4);

let head2 = document.createElement("div");
sidenavbar.append(head2);
let sidenavbarheading1 = document.createElement("p");
sidenavbarheading1.innerHTML = "MANAGE";
sidenavbarheading1.classList.add("sidenavbar--heading");
head2.append(sidenavbarheading1);

let sidenavbardiv5 = document.createElement("div");
sidenavbardiv5.classList.add("sidenavbar--div");
sidenavbar.append(sidenavbardiv5);
let sidenavbarimg5 = document.createElement("img");
sidenavbarimg5.src = "https://app.clockify.me/assets/nav-icons/projects.svg";
sidenavbarimg5.classList.add("sidenavbarimg");
sidenavbardiv5.append(sidenavbarimg5);
let sidenavbarpara5 = document.createElement("span");
sidenavbarpara5.innerHTML = " PROJECT";
sidenavbarpara5.classList.add("sidenavbarpara");
sidenavbarpara5.classList.add("hidden-sidebar");
sidenavbardiv5.append(sidenavbarpara5);

let sidenavbardiv6 = document.createElement("div");
sidenavbardiv6.classList.add("sidenavbar--div");
sidenavbar.append(sidenavbardiv6);
let sidenavbarimg6 = document.createElement("img");
sidenavbarimg6.src = "https://app.clockify.me/assets/nav-icons/teams.svg";
sidenavbarimg6.classList.add("sidenavbarimg");
sidenavbardiv6.append(sidenavbarimg6);
let sidenavbarpara6 = document.createElement("span");
sidenavbarpara6.innerHTML = " TEAM";
sidenavbarpara6.classList.add("sidenavbarpara");
sidenavbarpara6.classList.add("hidden-sidebar");
sidenavbardiv6.append(sidenavbarpara6);

let sidenavbardiv7 = document.createElement("div");
sidenavbardiv7.classList.add("sidenavbar--div");
sidenavbar.append(sidenavbardiv7);
let sidenavbarimg7 = document.createElement("img");
sidenavbarimg7.src = "https://app.clockify.me/assets/nav-icons/clients.svg";
sidenavbarimg7.classList.add("sidenavbarimg");
sidenavbardiv7.append(sidenavbarimg7);
let sidenavbarpara7 = document.createElement("span");
sidenavbarpara7.innerHTML = " CLIENT";
sidenavbarpara7.classList.add("sidenavbarpara");
sidenavbarpara7.classList.add("hidden-sidebar");
sidenavbardiv7.append(sidenavbarpara7);

let sidenavbardiv8 = document.createElement("div");
sidenavbardiv8.classList.add("sidenavbar--div");
sidenavbar.append(sidenavbardiv8);
let sidenavbarimg8 = document.createElement("img");
sidenavbarimg8.src = "https://app.clockify.me/assets/nav-icons/tags.svg";
sidenavbarimg8.classList.add("sidenavbarimg");
sidenavbardiv8.append(sidenavbarimg8);
let sidenavbarpara8 = document.createElement("span");
sidenavbarpara8.innerHTML = " TAGS";
sidenavbarpara8.classList.add("sidenavbarpara");
sidenavbarpara8.classList.add("hidden-sidebar");
sidenavbardiv8.append(sidenavbarpara8);

let sidenavbardiv9 = document.createElement("div");
sidenavbardiv9.classList.add("sidenavbar--div");
sidenavbar.append(sidenavbardiv9);
let sidenavbarimg9 = document.createElement("img");
sidenavbarimg9.src = "https://app.clockify.me/assets/nav-icons/settings.svg";
sidenavbarimg9.classList.add("sidenavbarimg");
sidenavbardiv9.append(sidenavbarimg9);
let sidenavbarpara9 = document.createElement("span");
sidenavbarpara9.innerHTML = "  SETTINGS";
sidenavbarpara9.classList.add("sidenavbarpara");
sidenavbarpara9.classList.add("hidden-sidebar");
sidenavbardiv9.append(sidenavbarpara9);

let head3 = document.createElement("div");
sidenavbar.append(head3);
let sidenavbarheading2 = document.createElement("p");
sidenavbarheading2.innerHTML = " SHOW MORE";
sidenavbarheading2.classList.add("showmore");
sidenavbarheading2.classList.add("hidden-sidebar");
head3.append(sidenavbarheading2);

let vl = document.createElement("div");
vl.classList.add("vl");
body.append(vl);

let tracker = document.createElement("div");
tracker.classList.add("tracker");
body.append(tracker);

let heading1 = document.createElement("div");
heading1.classList.add("heading1");
tracker.append(heading1);

let trackerinput = document.createElement("input");
trackerinput.placeholder = "What have you worked on?";
trackerinput.type = "text";
trackerinput.classList.add("tracker__input");
heading1.append(trackerinput);

let heading2 = document.createElement("a");
heading2.classList.add("heading2");
tracker.append(heading2);

let tracker__img1 = document.createElement("img");
tracker__img1.src = "https://app.clockify.me/assets/ui-icons/plus-blue.svg";
tracker__img1.classList.add("tracker__img1");
heading2.append(tracker__img1);

let tracker__para = document.createElement("span");
tracker__para.innerHTML = "Project";
tracker__para.classList.add("tracker__para");
heading2.append(tracker__para);

// Project modal
let modal = document.createElement("section");
modal.classList.add("modal");
modal.id = "projectmodal";
tracker.append(modal);

let inputborder = document.createElement("input");
inputborder.placeholder = "Find project or client...";
inputborder.type = "text";
inputborder.classList.add("input");
inputborder.classList.add("input-border");
inputborder.id = "project-name";
modal.append(inputborder);

let dash = document.createElement("span");
dash.classList.add("dash");
modal.append(dash);

let projectsavailable = document.createElement("ul");
projectsavailable.classList.add("projects-available");
modal.append(projectsavailable);

let projectlink = document.createElement("a");
projectlink.classList.add("project-link");
projectlink.text = "Create new Project";
projectlink.id = "createProject";
modal.append(projectlink);

let image = document.createElement("img");
image.id = "img-createnew";
image.classList.add("image-create");
image.src = "https://app.clockify.me/assets/ui-icons/plus-blue.svg";
projectlink.append(image);

let createProjectModal = document.createElement("div");
createProjectModal.classList.add("createProjectModal");
createProjectModal.id = "createProjectModal";
body.append(createProjectModal);

let inputborder1 = document.createElement("input");
inputborder1.placeholder = "Enter New Project Name";
inputborder1.type = "text";
inputborder1.classList.add("input");
inputborder1.classList.add("input-border");
inputborder1.id = "project-name";
createProjectModal.append(inputborder1);

let dash1 = document.createElement("span");
dash1.classList.add("dash");
createProjectModal.append(dash1);

let startbutton = document.createElement("button");
startbutton.innerHTML = "Create";
startbutton.classList.add("tracker--btn1");
startbutton.id = "close-createprojectmodal";
createProjectModal.append(startbutton);

// let startbuttonredbutton = document.createElement("button");
// startbuttonredbutton.innerHTML = "CLOSE";

// startbuttonredbutton.classList.add("tracker--btn2");
// createProjectModal.append(startbuttonredbutton);

// tag

let heading3 = document.createElement("div");
heading3.classList.add("heading3");
tracker.append(heading3);

let tracker__img2 = document.createElement("img");
tracker__img2.src = "https://app.clockify.me/assets/ui-icons/tag-gray.svg";
tracker__img2.classList.add("tracker__img2");
heading3.append(tracker__img2);

// dollar

let heading4 = document.createElement("div");
heading4.classList.add("heading4");
tracker.append(heading4);

let dollar = document.createElement("p");
dollar.innerHTML = "$";
dollar.classList.add("dollar");
heading4.append(dollar);

// timer

let heading5 = document.createElement("div");
heading5.classList.add("timer");
heading5.innerHTML = "00:00:00";
tracker.append(heading5);

// start

let heading6 = document.createElement("div");
heading6.classList.add("heading6");
tracker.append(heading6);

let trackerbtn = document.createElement("button");
trackerbtn.innerHTML = "START";
trackerbtn.classList.add("tracker--btn");
trackerbtn.onclick = "starttime()";
trackerbtn.id = "mixBut";
heading6.append(trackerbtn);

// tracker clock and line button

let heading7 = document.createElement("div");
heading7.classList.add("heading7");
tracker.append(heading7);

let tracker__img3 = document.createElement("img");
tracker__img3.src = "https://app.clockify.me/assets/ui-icons/clock-blue.svg";
tracker__img3.classList.add("tracker__img3");
heading7.append(tracker__img3);

let tracker__img4 = document.createElement("img");
tracker__img4.src = "https://app.clockify.me/assets/ui-icons/list-blue.svg";
tracker__img4.classList.add("tracker__img4");
heading7.append(tracker__img4);

// result from timer

let result = document.createElement("div");
result.classList.add("result");
body.append(result);

let paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.innerHTML = "This week";
result.append(paragraph);

let resulttable = document.createElement("div");
resulttable.classList.add("resulttable");
result.append(resulttable);

let result__para1 = document.createElement("p");
result__para1.classList.add("result__para1");
const currentDate = new Date();
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const currentDay = daysOfWeek[currentDate.getDay()];
const currentMonth = monthsOfYear[currentDate.getMonth()];
const currentDateOfMonth = currentDate.getDate();

const formattedDate = `${currentDay}, ${currentMonth} ${currentDateOfMonth}`;

console.log(formattedDate);

result__para1.innerHTML = `${formattedDate}`;
resulttable.append(result__para1);

// let result__para2 = document.createElement('p');
// result__para2.classList.add('result__para2');
// result__para2.innerHTML = "Total:";
// resulttable.append(result__para2);

// let result_timer1 = document.createElement('div');
// result_timer1.classList.add('result_timer1');
// result_timer1.innerHTML = "00:00:00";
// resulttable.append(result_timer1);

// icon
let result__img = document.createElement("img");
result__img.src = "https://app.clockify.me/assets/ui-icons/bulk-edit.svg";
result__img.classList.add("result__img");
resulttable.append(result__img);

function clear() {
  del = document.getElementsByClassName("timertabel")[0];
  del.remove();
  console.log("hi");
}
function resume() {
  var element = document.getElementsByClassName("result_timer3")[0];
  let [hrs, mins, secs] = element.innerText.split(":");
  hrs = Number(hrs);
  // console.log(element.innerText.split(':'));
  resumewatch();
}
function recountWatch() {
  if (running == 1) {
    if (sec === 60) {
      sec = 0;
      min = min + 1;
    }
    mins = min < 10 ? "0" + min + ": " : min + ": ";
    if (min === 60) {
      min = 0;
      hrs = hrs + 1;
    }

    gethrs = hrs < 10 ? "0" + hrs + ": " : hrs + ": ";
    secss = sec < 10 ? "0" + sec : sec;
    var another = document.getElementsByClassName("result_timer3")[0];
    another.textContent = gethrs + mins + secss;

    sec++;
    clearTime = setTimeout("resumewatch()", 1000);
  }
}
function resumewatch() {
  if (running == 0) {
    running = 1;
    console.log("start");
    recountWatch();
  } else {
    running = 0;
    console.log("stop");
  }
}

var tasklist = [];

var time = 0;
var running = 0;
var startTime = 0;
var endTime = 0;

var count = 0;
var ClearTime;
var sec = 0,
  min = 0,
  hrs = 0;
var clearState;
var secss, mins, gethrs;

function getTime() {
  let date = new Date();
  return date.toLocaleTimeString();
}

function addTask() {
  let task = {
    name: document.getElementsByClassName("tracker__input")[0].value,
    startTime,
    endTime,
    duration: hrs + ":" + min + ":" + sec,
  };
  (min = 0), (sec = 0), (time = 0);
  tasklist.push(task);
  console.log(tasklist);
  createListItem(task);
  startTime = 0;
  endTime = 0;
  document.getElementsByClassName("timer")[0].innerText = "00:00:00";
}

var mixBut = document.getElementById("mixBut");

mixBut.addEventListener("click", stopwatch);

function stopwatch() {
  let projectvalue1 = document.getElementsByClassName("input-border")[1].value;
  if (projectvalue1) {
    if (running == 0) {
      running = 1;
      console.log("start");
      startTime = getTime();
      Start_Watch();
      mixBut.innerText = "Stop";
      mixBut.classList.add("red-button");
    } else {
      running = 0;
      console.log("stop");
      endTime = getTime();
      mixBut.innerText = "Start";
      mixBut.classList.remove("red-button");
      addTask();
    }
  } else {
    window.alert("Please create a project");
  }
}

function Start_Watch() {
  if (running == 1) {
    if (sec === 60) {
      sec = 0;
      min = min + 1;
    }
    mins = min < 10 ? "0" + min + ": " : min + ": ";
    if (min === 60) {
      min = 0;
      hrs = hrs + 1;
    }

    gethrs = hrs < 10 ? "0" + hrs + ": " : hrs + ": ";
    secss = sec < 10 ? "0" + sec : sec;
    var y = document.getElementsByClassName("timer")[0];
    y.textContent = gethrs + mins + secss;

    sec++;
    clearTime = setTimeout("Start_Watch()", 1000);
  }
}

function createListItem(task) {
  let timertabel = document.createElement("div");
  timertabel.classList.add("timertabel");
  result.append(timertabel);

  let result__para3 = document.createElement("p");
  result__para3.classList.add("result__para3");
  result__para3.innerHTML = task.name;
  timertabel.append(result__para3);

  // let resultinput = document.createElement('input');
  // resultinput.placeholder = "add description ?";
  // resultinput.type = "text";
  // resultinput.classList.add('resultinput');
  // timertabel.append(resultinput);

  let resultproject = document.createElement("div");
  let projectvalue = document.getElementsByClassName("input-border")[1].value;
  resultproject.innerText = projectvalue;
  resultproject.id = "resultproject";
  timertabel.append(resultproject);

  let result__img3 = document.createElement("img");
  result__img3.src = "https://app.clockify.me/assets/ui-icons/tag-gray.svg";
  result__img3.classList.add("result__img3");
  timertabel.append(result__img3);

  let result__dolar = document.createElement("p");
  result__dolar.classList.add("result__dolar");
  result__dolar.innerHTML = "$";
  timertabel.append(result__dolar);

  let editinput = document.createElement("input");
  editinput.classList.add("result_timer2");
  editinput.id = "change1";
  editinput.value = `${task.startTime}`;
  console.log(editinput.value);
  timertabel.append(editinput);

  let editinput1 = document.createElement("input");
  editinput1.classList.add("result_timer2");
  editinput1.id = "change2";
  editinput1.value = `${task.endTime}`;
  timertabel.append(editinput1);

  let verticaldottedline = document.createElement("div");
  verticaldottedline.classList.add("verticaldottedline");
  verticaldottedline.id = "verticaldotted";
  timertabel.append(verticaldottedline);

  let verticaldottedline2 = document.createElement("div");
  verticaldottedline2.classList.add("verticaldottedline2");
  verticaldottedline2.id = "verticaldotted";
  timertabel.append(verticaldottedline2);

  let verticaldottedline3 = document.createElement("div");
  verticaldottedline3.classList.add("verticaldottedline3");
  verticaldottedline3.id = "verticaldotted";
  timertabel.append(verticaldottedline3);

  let verticaldottedline4 = document.createElement("div");
  verticaldottedline4.classList.add("verticaldottedline4");
  verticaldottedline4.id = "verticaldotted";
  timertabel.append(verticaldottedline4);

  let verticaldottedline5 = document.createElement("div");
  verticaldottedline5.classList.add("verticaldottedline5");
  verticaldottedline5.id = "verticaldotted";
  timertabel.append(verticaldottedline5);

  let verticaldottedline6 = document.createElement("div");
  verticaldottedline6.classList.add("verticaldottedline6");
  verticaldottedline6.id = "verticaldotted";
  timertabel.append(verticaldottedline6);

  let result__img4 = document.createElement("img");
  result__img4.src =
    "https://app.clockify.me/assets/ui-icons/calendar-gray.svg";
  result__img4.classList.add("result__img4");
  timertabel.append(result__img4);

  let result_timer3 = document.createElement("div");
  result_timer3.classList.add("result_timer3");
  var time = task.duration;
  result_timer3.innerHTML = task.duration;
  timertabel.append(result_timer3);

  let result__img5 = document.createElement("img");
  result__img5.src = "https://app.clockify.me/assets/ui-icons/play.svg";
  result__img5.classList.add("result__img5");
  // result__img5.addEventListener("click", resume);
  timertabel.append(result__img5);

  let result__img6 = document.createElement("img");
  result__img6.src = "./assets/close.png";
  result__img6.classList.add("result__img6");
  result__img6.addEventListener("click", clear);
  timertabel.append(result__img6);

  let resulttable = document.getElementsByClassName("result")[0];
  resulttable.append(timertabel);

  let diff = document.getElementById("change1");

  diff.addEventListener("change", updation);
  let diff2 = document.getElementById("change2");

  diff2.addEventListener("change", updation);
  
  function updation() {
    const startTimeInput = document.getElementById("change1");
    const endTimeInput = document.getElementById("change2");

    // create Date objects with the current date and the input time values
    const currentDate = new Date();
    let startTime = new Date(
      `${currentDate.toDateString()} ${startTimeInput.value}`
    );
    let endTime = new Date(
      `${currentDate.toDateString()} ${endTimeInput.value}`
    );

    // if the end time is earlier than the start time, assume it is on the next day
    if (endTime < startTime) {
      endTime.setDate(endTime.getDate() + 1);
    }

    // convert the Date objects into milliseconds
    const startMs = startTime.getTime();
    const endMs = endTime.getTime();

    // calculate the time difference in milliseconds
    let timeDiff = Math.abs(endMs - startMs);

    // convert the time difference into hours, minutes, and seconds
    const hours = Math.floor(timeDiff / (60 * 60 * 1000));
    timeDiff -= hours * 60 * 60 * 1000;
    const minutes = Math.floor(timeDiff / (60 * 1000));
    timeDiff -= minutes * 60 * 1000;
    const seconds = Math.floor(timeDiff / 1000);

    // format the result in HH:MM:SS format
    const result = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // displaying the result in the tag
    result_timer3.innerHTML = result;
  }
}

var projectModal = document.getElementById("projectmodal");
var addProject = document.getElementsByClassName("heading2")[0];

addProject.addEventListener("click", toggleModal);
function toggleModal() {
  projectModal.classList.toggle("modal-hide");
}

window.addEventListener("load", toggleModal);

var createProjectElement = document.getElementById("createProject");

createProjectElement.addEventListener("click", openModal);

function openModal() {
  let Modal = document.getElementById("createProjectModal");

  Modal.classList.toggle("open-projectModal");

  projectModal.classList.toggle("modal-hide");
}

var closeprojectmodalbutton = document.getElementById(
  "close-createprojectmodal"
);

closeprojectmodalbutton.addEventListener("click", function () {
  let Modal = document.getElementById("createProjectModal");

  Modal.classList.toggle("open-projectModal");

  // mainbar.classList.remove("blur");
});

let create = document.getElementsByClassName("tracker--btn1")[0];
create.addEventListener("click", addto);

function addto() {
  let create2 = document.getElementsByClassName("input-border")[1];
  let entertext = create2.value;
  let create3 = document.getElementsByClassName("heading2")[0];
  create3.innerText = entertext;
  create3.classList.add("modification");
  console.log(create2.textContent);
}

// sidevar open and collapse
const menuIconbutton = document.querySelector("[menu-icon-btn]");

const sidebar = document.querySelector("[data-sidebar]");

menuIconbutton.addEventListener("click", () => {
  // open side bar || close sidebar
  sidebar.classList.toggle("open");
});
