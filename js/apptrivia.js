let current = 0;
let last = q_ar.length - 1;
// let startTime = Date.now() / 1000;

window.onload = () => {
  console.log(q_ar);
  createQ(q_ar[current]);
};
const createQ = (item) => {
  let q = new Trivia("#qTrivia", item.q, item.a, onAnswer);
  q.render();
};

let answers = [];
let point = 0;

const onAnswer = (answer) => {
  answers.push(answer);
  document.querySelector("#qTrivia").innerHTML = "";
  if (current == last) {
    console.log(answers);
    // let totalTime = Date.now() / 1000 - startTime;
    // let fTotalTime = Math.floor(totalTime);
    // document.querySelector("#qTrivia").innerHTML =`<h2>In ${fTotalTime} seconds </h2>&nbsp&nbsp `  ;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === true) {
        point+=10;
      }
    }

    document.querySelector("#qTrivia").innerHTML += `<h2>you get:<strong class="h1"> ${point}</strong>  /100 points.</h2>`;
  } else {
    current++;
    createQ(q_ar[current]);
  }
};
