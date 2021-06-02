"use strict";
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

addSubmission(submissions, "Luke", 100, "2021-06-01");

console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 1);

console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};

deleteSubmissionByName(submissions, "Jack");

console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 0, 40);
console.log(submissions);

const findSubmissionByName = (array, name) => {
  let found = array.find((item) => (item.name = name));
  return found;
};

console.log(findSubmissionByName(submissions, "Jack"));

const findLowestScore = (array) => {
  let lowestCurrentScore = array[0];
  array.forEach((item) => {
    if (item.score < lowestCurrentScore.score) {
      lowestCurrentScore = item;
    }
  });
  return lowestCurrentScore;
};

console.group(findLowestScore(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  for (let submission of array) {
    sum += submission.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  return array.filter((item) => {
    return item.passed;
  });
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};

console.log(filterPassing(submissions));
