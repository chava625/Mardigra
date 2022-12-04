class Trivia {
  constructor(_parent, _question, _answers_ar, _onAnswer) {
    this.parent = _parent;
    this.question = _question;
    this.trueAnswer = _answers_ar[0];
    this.answers = _answers_ar;
    this.onAnswer = _onAnswer;
  }

  shuffleItems(items) {
    items.forEach(() => {
      let i = Math.floor(Math.random() * items.length);
      let j = Math.floor(Math.random() * items.length);
      let temp = items[i];
      items[i] = items[j];
      items[j] = temp;
    });
  }
  render() {
    let newDiv = document.createElement('div');
    newDiv.className = 'qTriviaIn';
    document.querySelector(this.parent).append(newDiv);
    newDiv.innerHTML += `
    <img src="img/qMark.jpg"  width="100%" class="d-none d-md-block">
      <h3>${this.question}</h3>
    `;
    this.shuffleItems(this.answers);
   this.answers.forEach((answer) => {
      let answerDiv = document.createElement("div");
      answerDiv.className = "answerDiv";

      let label = document.createElement("label");
      label.innerHTML = answer;
      label.htmlFor = answer;
      let input = document.createElement("input");
      input.type = "radio";
      input.id = answer;
      input.value = answer;
      input.name = this.question;
      input.addEventListener("change", (event) => {
        let isTrue = this.trueAnswer == event.target.value;
        const color = isTrue ? 'greenYellow' : 'red';
        answerDiv.style.color = color;
        setTimeout(() => {
          this.onAnswer(isTrue);
        }, 750);
      });
      answerDiv.append(input);
      answerDiv.append(label);
      newDiv.append(answerDiv);
    });
  }
}
