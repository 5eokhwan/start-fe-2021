import render from "./utils.js";
const lectureAllBtn = document.getElementById("Lecture-Filter-All");
const lectureHelplinkBtn = document.getElementById("Lecture-Filter-Helplink");
const lectureGitBtn = document.getElementById("Lecture-Filter-Git");
const lectureRecentBtn = document.getElementById("Lecture-Filter-Recent");

const quizAllBtn = document.getElementById("Quiz-Filter-All");
const quizGitBtn = document.getElementById("Quiz-Filter-Git");

let Lectures,
  select_lecture = lectureAllBtn;

let Quizs,
  select_quiz = quizAllBtn;

fetch("class.json")
  .then((data) => data.json())
  .then((data) => {
    const spin = document.getElementById("LectureLoadingSpin");
    spin.parentNode.removeChild(spin);
    data.forEach((v, i) => {
      v["week"] = i + 1;
      console.log(v);
    });
    console.log(data);
    Lectures = data;
    render.renderLecture(data);
  });
fetch("quiz.json")
  .then((data) => data.json())
  .then((data) => {
    const spin = document.getElementById("QuizLoadingSpin");
    spin.parentNode.removeChild(spin);
    render.renderQuiz(data);
    Quizs = data;
  });

function selectLecture(e) {
  const el = e.target;
  if (el.classList.contains("class-btn")) {
    select_lecture.classList.remove("active");
    select_lecture = el;
  } else {
    select_quiz.classList.remove("active");
    select_quiz = el;
  }
  el.classList.add("active");
}

function addEvent() {
  const filterBtns = document.querySelectorAll(".btn-outline-primary");
  console.log(filterBtns);
  filterBtns.forEach((btn) => btn.addEventListener("click", selectLecture));
}
addEvent();

lectureAllBtn.addEventListener("click", (e) => {
  render.renderLecture(Lectures, "All");
});

lectureHelplinkBtn.addEventListener("click", (e) => {
  render.renderLecture(Lectures, "Helplink");
  e.target.classList.add("active");
});

lectureGitBtn.addEventListener("click", (e) =>
  render.renderLecture(Lectures, "Git")
);

lectureRecentBtn.addEventListener("click", (e) =>
  render.renderLecture(Lectures, "Recent")
);

quizAllBtn.addEventListener("click", (e) => {
  render.renderQuiz(Quizs, "All");
});

quizGitBtn.addEventListener("click", (e) => {
  render.renderQuiz(Quizs, "Git");
});
