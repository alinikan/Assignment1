const labels = document.querySelectorAll(".section--histogram .label");
const studentRanges = document.getElementsByClassName("student-range");
const addGradeBtn = document.querySelector(".btn");
const record = document.querySelector(".add-record");
const lowerBoundsInputs = document.getElementsByClassName("marks-box");
let grades = [
  65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.0, 81.43, 86.22, 88.33,
  9.03, 49.93, 52.34, 53.11, 50.1, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54,
  90.0, 71.11, 80.01,
];

const updateHistogram = function () {
  const gradesCount = {
    "A+": 0,
    A: 0,
    "A-": 0,
    "B+": 0,
    B: 0,
    "B-": 0,
    "C+": 0,
    C: 0,
    "C-": 0,
    D: 0,
    F: 0,
  };

  grades.forEach(function (grade) {
    if (grade >= Number(lowerBoundsInputs[1].value)) {
      gradesCount["A+"]++;
    } else if (grade >= Number(lowerBoundsInputs[2].value)) {
      gradesCount.A++;
    } else if (grade >= Number(lowerBoundsInputs[3].value)) {
      gradesCount["A-"]++;
    } else if (grade >= Number(lowerBoundsInputs[4].value)) {
      gradesCount["B+"]++;
    } else if (grade >= Number(lowerBoundsInputs[5].value)) {
      gradesCount.B++;
    } else if (grade >= Number(lowerBoundsInputs[6].value)) {
      gradesCount["B-"]++;
    } else if (grade >= Number(lowerBoundsInputs[7].value)) {
      gradesCount["C+"]++;
    } else if (grade >= Number(lowerBoundsInputs[8].value)) {
      gradesCount.C++;
    } else if (grade >= Number(lowerBoundsInputs[9].value)) {
      gradesCount["C-"]++;
    } else if (grade >= Number(lowerBoundsInputs[10].value)) {
      gradesCount.D++;
    } else {
      gradesCount.F++;
    }
  });

  for (let i = 0; i < labels.length; i++) {
    const grade = labels[i].textContent;
    const studentRange = studentRanges[i];

    studentRange.style.width = gradesCount[grade] * 4 + "%";
    studentRange.textContent = gradesCount[grade];
  }
};

updateHistogram();

addGradeBtn.addEventListener("click", function () {
  const newGrade = Number(record.value);
  if (newGrade >= 0 && newGrade <= 100 && record.value !== "") {
    grades.push(newGrade);
    updateHistogram();
  } else {
    alert("Please enter a valid grade between 0 and 100.");
  }
  record.value = "";
});

record.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const newGrade = Number(record.value);
    if (newGrade >= 0 && newGrade <= 100 && record.value !== "") {
      grades.push(newGrade);
      updateHistogram();
    } else {
      alert("Please enter a valid grade between 0 and 100.");
    }
    record.value = "";
  }
});

for (let i = 0; i < lowerBoundsInputs.length; i++) {
  lowerBoundsInputs[i].addEventListener("change", function (e) {
    console.log(e.value);
    const value = lowerBoundsInputs[i].value;
    if (value === "" || isNaN(value) || value < 0 || value > 100) {
      alert("Please enter a valid grade between 0 and 100.");
    } else {
      updateHistogram();
    }
  });
}
