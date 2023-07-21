const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    incorrect_answers: [".tu", ".tt", ".tl"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which one of these is not an official development name for a Ubuntu release?",
    correct_answer: "Mystic Mansion",
    incorrect_answers: ["Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In the server hosting industry IaaS stands for...",
    correct_answer: "Infrastructure as a Service",
    incorrect_answers: ["Internet as a Service", "Internet and a Server", "Infrastructure as a Server"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The open source program Redis is a relational database server.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what was the original character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
];

//------------------------------------------------// variabili globali

let risposteCollection = []; // cicla l'array per ottenere le risposte giuste
for (let i = 0; i < questions.length; i++) {
  risposteCollection.push(questions[i].correct_answer);
}
const timerEnorme = document.querySelector(".nav");
const countdown = document.getElementById("countdown");
let tempo = 60;
let numberQuest = 0;
const questNumber = document.getElementById("changingNumber");
const bottoniTutti = document.querySelectorAll("button");
let bottoni1 = document.getElementsByTagName("button")[0];
let bottoni3 = document.getElementsByTagName("button")[2];
let domandeUscite = [];
let risposteGiuste = 0;
let risposteSbagliate = 0;
let testina = document.querySelector("header");
let principale = document.querySelector("main");
let piedi = document.querySelector("footer");

// costruzione timer-------------------------------------
const timer = () => {
  const minutes = Math.floor(tempo / 60);
  let seconds = tempo % 61;
  countdown.innerText = seconds;
  //----------------------------------
  let percTempo = 100 - (seconds * 100) / 60;
  timerEnorme.innerHTML = `<div class="containerTimer" style = "background-image : conic-gradient(from 0deg at 50% 50%, #8080807c ${percTempo}%, #00ffff ${percTempo}%)" >
  <div class="inContainer">
    <p class="timerSeconds">SECONDS</p>
    <p id="countdown">${seconds}</p>
    <p class="timerRemains">REMAINING</p>
  </div>
</div>`;
  //-------------------------------------------
  tempo--;
  if (tempo === -2) {
    risposteSbagliate++;
    tempo = 60;
    domandaRandom();
  }
};
const intervallo = setInterval(timer, 1000);

// per aggiungere la classe al bottone ----------------------------------------
bottoniTutti.forEach((button, index1) => {
  button.addEventListener("click", () => {
    if (risposteCollection.includes(bottoniTutti[index1].innerHTML)) {
      risposteGiuste += 1;
      clearInterval();
      domandaRandom();
      console.log("giuste", risposteGiuste);
    } else {
      risposteSbagliate++;
      clearInterval();
      domandaRandom();
      console.log("sbagliato", risposteSbagliate);
    }
    bottoniTutti.forEach((button, index2) => {
      index1 !== index2 ? button.classList.remove("selected") : button.classList.toggle("selected");
    });
  });
});

//-------------------------------------------------------
let domandaRandom = () => {
  tempo = 60;
  timer();
  let rand = Math.floor(Math.random() * questions.length);
  if (!domandeUscite.includes(rand)) {
    const h1 = document.querySelector("h1"); // mette le risposte in modo casuale
    h1.innerHTML = questions[rand].question;
    const risposte = questions[rand].incorrect_answers;
    risposte.push(questions[rand].correct_answer);
    risposte.sort();
    const bottoneUno = document.getElementById("primo");
    bottoneUno.innerHTML = risposte[3];
    const bottoneDue = document.getElementById("secondo");
    bottoneDue.innerHTML = risposte[1];
    const bottoneTre = document.getElementById("terzo");
    bottoneTre.innerHTML = risposte[2];
    const bottoneQuarto = document.getElementById("quarto");
    bottoneQuarto.innerHTML = risposte[0];
    //--------------------------------rimozione bottoni per due risposte------------------------
    if (bottoni1.innerText === "undefined") {
      //disablita i bottoni se ci sono 2 risposte
      bottoni1.disabled = true;
    } else {
      bottoni1.disabled = false;
    }
    if (bottoni3.innerText === "undefined") {
      bottoni3.disabled = true;
    } else {
      bottoni3.disabled = false;
    }
    //-------------------------------------------------------------------------
    domandeUscite.push(rand);
    //--------------------------------cambio pagina--------------------------------
    if (numberQuest === 10) {
      //-------------------------------calcolo risultati-----------------
      let percSbagliate = risposteSbagliate * 10;
      let percGiuste = risposteGiuste * 10;

      console.log("dopo", numberQuest);
      clearInterval(timer);
      testina.innerHTML = `<img class="resultLogo" src="./assets/epicode_logo.png" alt="logo" />
      <p class="resultH1">Results</p>
      <p class="resultH2">The summary of your answer:</p>`;
      principale.innerHTML = `<div class="result">
      <div class="correct">
        <span class="grosso">Correct</span>
        <span class="medio">${percGiuste}%</span>
        <span class="piccolo">${risposteGiuste}/10 QUESTIONS</span>
      </div>
      <div
        class="punteggioGlobale"
        style="background-image: conic-gradient(from 0deg at 50% 50%, #c2128d ${percSbagliate}%, #00ffff ${percSbagliate}%)"
      >
        <div class="inPunteggio">
        </div>
      </div>
      <div class="wrong">
        <span class="grosso">Wrong</span>
        <span class="medio">${percSbagliate}%</span>
        <span class="piccolo">${risposteSbagliate}/10 QUESTIONS</span>
      </div>
    </div>`;
      piedi.innerHTML = `<footer class="resultFooter">
      <a href="feedbackPage.html"><button class="resultButton">RATE US</button></a>
      </footer>`;
      const inPunteggio = document.querySelector(".inPunteggio");
      const punteggioH4 = document.createElement("h4");
      const punteggioP = document.createElement("p");
      punteggioH4.classList.add("punteggioH4");
      punteggioP.classList.add("punteggioP");
      if (percGiuste >= 60) {
        punteggioH4.innerHTML = `Congratulations! <span class="aqua">You passed the exam</span>`;
        punteggioP.innerHTML = `We'll send you a certificate <br />
        in few minutes. <br />
        check your email (including <br />
        promotion / spam folder)`;
        inPunteggio.append(punteggioH4);
        inPunteggio.append(punteggioP);
      } else {
        punteggioH4.innerHTML = `Unlucky! <span class="red">You didn't pass the exam`;
        punteggioP.innerHTML = `STUDY MORE (idiot) <br />and try next time`;
        inPunteggio.append(punteggioH4);
        inPunteggio.append(punteggioP);
      }
    }
    numberQuest++;
    questNumber.innerText = numberQuest;
  } else {
    domandaRandom();
  }
};
domandaRandom(); // richiamata

//----------------------------------------------------------------
