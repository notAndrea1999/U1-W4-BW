const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "&#039;For&#039; loops",
    incorrect_answers: ["&#039;If&#039; Statements", "&#039;Do-while&#039; loops", "&#039;While&#039; loops"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the &quot;MP&quot; stand for in MP3?",
    correct_answer: "Moving Picture",
    incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    incorrect_answers: ["512MB", "5GB", "Unlimited"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "The programming language &#039;Swift&#039; was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "HTML is what type of language?",
    correct_answer: "Markup Language",
    incorrect_answers: ["Macro Language", "Programming Language", "Scripting Language"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linus Torvalds created Linux and Git.",
    correct_answer: "True",
    incorrect_answers: ["False"],
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
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer: "Captures what&#039;s on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
      "Closes all windows",
    ],
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
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    incorrect_answers: [".tu", ".tt", ".tl"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "RAM stands for Random Access Memory.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many kilobytes in one gigabyte (in decimal)?",
    correct_answer: "1000000",
    incorrect_answers: ["1024", "1000", "1048576"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Ada Lovelace is often considered the first computer programmer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
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
    difficulty: "easy",
    question: "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Windows 7 operating system has six main editions.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Windows ME operating system was released in the year 2000.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: ["8", "1", "1024"],
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
    type: "boolean",
    difficulty: "medium",
    question:
      "The common software-programming acronym &quot;I18N&quot; comes from the term &quot;Interlocalization&quot;.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
    correct_answer: "Amazon",
    incorrect_answers: ["eBay", "Overstock", "Shopify"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The very first recorded computer &quot;bug&quot; was a moth found inside a Harvard Mark II computer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "When was the programming language &quot;C#&quot; released?",
    correct_answer: "2000",
    incorrect_answers: ["1998", "1999", "2001"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What five letter word is the motto of the IBM Computer company?",
    correct_answer: "Think",
    incorrect_answers: ["Click", "Logic", "Pixel"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    correct_answer: "C#",
    incorrect_answers: ["Java", "C++", "Objective-C"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
    correct_answer: "Santa Clara",
    incorrect_answers: ["Palo Alto", "Cupertino", "Mountain View"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "&quot;Windows NT&quot; is a monolithic kernel.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
    correct_answer: "Clipper Chip",
    incorrect_answers: ["Enigma Machine", "Skipjack", "Nautilus"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "While Apple was formed in California, in which western state was Microsoft founded?",
    correct_answer: "New Mexico",
    incorrect_answers: ["Washington", "Colorado", "Arizona"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the acronym CDN stand for in terms of networking?",
    correct_answer: "Content Delivery Network",
    incorrect_answers: ["Content Distribution Network", "Computational Data Network", "Compressed Data Network"],
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
    question: "What is the name of the default theme that is installed with Windows XP?",
    correct_answer: "Luna",
    incorrect_answers: ["Neptune", "Whistler", "Bliss"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
    correct_answer: "Heat Sink",
    incorrect_answers: ["CPU Vent", "Temperature Decipator", "Heat Vent"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "Early RAM was directly seated onto the motherboard and could not be easily removed.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: ".rs is the top-level domain for what country?",
    correct_answer: "Serbia",
    incorrect_answers: ["Romania", "Russia", "Rwanda"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The last Windows operating system to be based on the Windows 9x kernel was Windows 98.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is known as &quot;the brain&quot; of the Computer?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Motherboard", "Graphics Processing Unit", "Keyboard"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
    correct_answer: "Motorola 68000",
    incorrect_answers: ["Zilog Z80", "Yamaha YM2612", "Intel 8088"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "Android versions are named in alphabetical order.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these people was NOT a founder of Apple Inc?",
    correct_answer: "Jonathan Ive",
    incorrect_answers: ["Steve Jobs", "Ronald Wayne", "Steve Wozniak"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Laserjet and inkjet printers are both examples of what type of printer?",
    correct_answer: "Non-impact printer",
    incorrect_answers: ["Impact printer", "Daisywheel printer", "Dot matrix printer"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which programming language was developed by Sun Microsystems in 1995?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "Solaris OS", "C++"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In programming, what do you call functions with the same name but different implementations?",
    correct_answer: "Overloading",
    incorrect_answers: ["Overriding", "Abstracting", "Inheriting"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does RAID stand for?",
    correct_answer: "Redundant Array of Independent Disks",
    incorrect_answers: [
      "Rapid Access for Indexed Devices",
      "Range of Applications with Identical Designs",
      "Randomized Abstract Identification Description",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "A Boolean value of &quot;0&quot; represents which of these words?",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the &#039;S&#039; in the RSA encryption algorithm stand for?",
    correct_answer: "Shamir",
    incorrect_answers: ["Secure", "Schottky", "Stable"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What port does HTTP run on?",
    correct_answer: "80",
    incorrect_answers: ["53", "443", "23"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer: "Heartbleed",
    incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is the oldest of these computers by release date?",
    correct_answer: "TRS-80",
    incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: ["Super Dense Coding", "Quantum Entanglement", "Quantum Programming"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What internet protocol was documented in RFC 1459?",
    correct_answer: "IRC",
    incorrect_answers: ["HTTP", "HTTPS", "FTP"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    incorrect_answers: ["Individuals and interactions", "Customer collaboration", "Responding to change"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the first company to use the term &quot;Golden Master&quot;?",
    correct_answer: "Apple",
    incorrect_answers: ["IBM", "Microsoft", "Google"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
    correct_answer: "Game Maker",
    incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    correct_answer: "Injection ",
    incorrect_answers: ["Broken Authentication", "Cross-Site Scripting", "Insecure Direct Object References"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "The acronym &quot;RIP&quot; stands for which of these?",
    correct_answer: "Routing Information Protocol",
    incorrect_answers: ["Runtime Instance Processes", "Regular Interval Processes", "Routine Inspection Protocol"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the name of the first Bulgarian personal computer?",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: ["FM Synthesizer", "Programmable Sound Generator (PSG)", "PCM Sampler"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
    correct_answer: "2005",
    incorrect_answers: ["1999", "2002", "2008"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    correct_answer: "Cherry MX Blue",
    incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
];
let testina = document.querySelector("header");
let principale = document.querySelector("main");
let piedi = document.querySelector("footer");
let difficoltaQuestioni = document.querySelector("#difficulty:checked");

const partireConDomande = () => {
  let numeroQuestioni = document.querySelector("#questionNumber:checked");
  testina.innerHTML = ` <img src="./assets/epicode_logo.png" alt="logoEpicode" />
  <nav class="nav">
  <div class="containerTimer">
  <div class="inContainer">
  <p class="timerSeconds">Seconds</p>
  <p id="countdown"></p>
  <p class="timerRemains">Remaining</p>
  </div>
  </div>
  </nav>`;
  principale.innerHTML = `<h1 class="questionH1"></h1>
  <div class="questionButton">
  <div>
  <button id="primo" class="unselected"></button>
  <button id="secondo" class="unselected selected"></button>
  </div>
  <div>
  <button id="terzo" class="unselected"></button>
  <button id="quarto" class="unselected"></button>
  </div>
  </div>`;
  piedi.innerHTML = `<h3>QUESTION <span id="changingNumber"></span> <span class="pink"> / ${numeroQuestioni.value}</span></h3>`;
  //-----------------------------------------------
  //------------------------------------------------// variabili globali
  const timerEnorme = document.querySelector(".nav");
  let tempo = 60;
  let numberQuest = 0;
  const questNumber = document.getElementById("changingNumber");
  const bottoniTutti = document.querySelectorAll("button");
  let bottoni1 = document.getElementsByTagName("button")[0];
  let bottoni3 = document.getElementsByTagName("button")[2];
  let domandeUscite = [];
  let risposteGiuste = 0;
  let risposteSbagliate = 0;
  const countdown = document.getElementById("countdown");
  //------------------------------------------------------
  let risposteCollection = []; // cicla l'array per ottenere le risposte giuste
  for (let i = 0; i < questions.length; i++) {
    risposteCollection.push(questions[i].correct_answer);
  }

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
      if (numberQuest === parseInt(numeroQuestioni.value)) {
        //-------------------------------calcolo risultati-----------------
        let percSbagliate = (risposteSbagliate * 100) / parseInt(numeroQuestioni.value);
        let percGiuste = (risposteGiuste * 100) / parseInt(numeroQuestioni.value);

        console.log("dopo", numberQuest);
        clearInterval(timer);
        testina.innerHTML = `<img class="resultLogo" src="./assets/epicode_logo.png" alt="logo" />
      <p class="resultH1">Results</p>
      <p class="resultH2">The summary of your answer:</p>`;
        principale.innerHTML = `<div class="result">
      <div class="correct">
        <span class="grosso">Correct</span>
        <span class="medio">${Math.round(percGiuste * 10) / 10}%</span>
        <span class="piccolo">${risposteGiuste}/${parseInt(numeroQuestioni.value)} QUESTIONS</span>
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
        <span class="medio">${Math.round(percSbagliate * 10) / 10}%</span>
        <span class="piccolo">${risposteSbagliate}/${parseInt(numeroQuestioni.value)} QUESTIONS</span>
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
};

//----------------------------------------------------------------
