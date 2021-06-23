const lectureTableBody = document.getElementById("LectureTableBody");
const quizTableBody = document.getElementById("QuizTableBody");

function renderLecture(data, filter = "All") {
  data = data.slice();
  switch (filter) {
    case "Helplink":
      data = data.filter((lec) => lec.links.length > 0);
      break;
    case "Git":
      data = data.filter((lec) => lec.gitUrl);
      break;
    case "Recent":
      data = data.sort((a, b) => {
        a = Number(a.date.replace(/-/g, ""));
        b = Number(b.date.replace(/-/g, ""));
        return b - a;
      });
      break;
  }
  const lectures = data.map(
    (lecture) => `<tr>
        <th scope="row">${lecture.week}</th>
        <td>${lecture.title}</td>
        <td>
        <a href="${lecture.docUrl}" class="badge bg-secondary"
            >${lecture.gitUrl ? "문서" : ""}</a
        >
        </td>
        <td>
        ${lecture.links
          .map(
            (link, i) =>
              "<a href=" +
              link +
              ' class="badge bg-secondary mx-1">' +
              i +
              "</a>"
          )
          .join("")}
      </td>
        <td>${lecture.date}</td>
        <td>
        <a
            href="${lecture.gitUrl}"
            >${lecture.gitUrl ? "git" : ""}</a
        >
        </td>
    </tr>`
  );
  lectureTableBody.innerHTML = lectures.join("");
}
function renderQuiz(data, filter = "All") {
  switch (filter) {
    case "Git":
      data = data.filter((q) => q.gitUrl);
      break;
  }
  const quizs = data.map(
    (quiz) => `<tr>
    <td>${quiz.title}</td>
    <td>
      <a
        class="badge bg-secondary"
        href="${quiz.docUrl}"
        >문서</a
      >
    </td>
    <td><a href="${quiz.previewUrl}">${quiz.previewUrl ? "보기" : ""}</a></td>
    <td><a href="${quiz.gitUrl}">${quiz.gitUrl ? "git" : ""}</a></td>
    </tr>`
  );
  quizTableBody.innerHTML = quizs.join("");
}
export default { renderLecture, renderQuiz };
