document.addEventListener("DOMContentLoaded", function () {

    const mainScreen = document.getElementById("main_screen");
    const boardScreen = document.getElementById("board_screen");
    const equipmentScreen = document.getElementById("equipment_screen");
    const quizScreen = document.getElementById("quiz_screen");
    const soundScreen = document.getElementById("sound_cognition_screen");

    // скрытие информационного поля при клике вне поля
    const infoBg = document.querySelectorAll(".info_bg");
    const questionButs = document.querySelectorAll(".question_but");
    infoBg.forEach(div => {
        div.addEventListener("click", () => {
            div.classList.add("hidden");
            questionButs.forEach(div => {
                div.innerHTML = "?";
            })
        })
    })

    // скрытие и открытие информационного поля для каждого экрана при клике на кнопку "question_but"
    const infoButMainScreen = document.getElementById("q_b_main");
    const infoButBoardScreen = document.getElementById("q_b_board");
    const infoButEquipmentScreen = document.getElementById("q_b_equipment");
    const infoButQuizScreen = document.getElementById("q_b_quiz");
    const infoButSoundScreen = document.getElementById("q_b_sound");

    function hideInfoBox(screenName) {
        screenName.lastElementChild.classList.toggle("hidden");
        questionButs.forEach(div => {
            if (div.textContent === "✖") {
                div.textContent = "?";
            } else {
                div.textContent = "✖";
            }
        })
    }
    infoButMainScreen.addEventListener("click", () => { hideInfoBox(mainScreen) });
    infoButBoardScreen.addEventListener("click", () => { hideInfoBox(boardScreen) });
    infoButEquipmentScreen.addEventListener("click", () => { hideInfoBox(equipmentScreen) });
    infoButQuizScreen.addEventListener("click", () => { hideInfoBox(quizScreen) });
    infoButSoundScreen.addEventListener("click", () => { hideInfoBox(soundScreen) });

    // анимация фонового цвета для кружков внутри информационного окна "о проекте"
    let circles = document.querySelectorAll(".circles");
    circles.forEach(div => {
        let colors = ['#ff5537', '#0C9648', '#0078D3', '#C8C8C8', '#ffffff'];
        setInterval(function () { div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] }, 600);
    })

    // карусель из карточек с практиками
    const carousel = document.querySelector(".carousel")
    const carousel_buttons = document.querySelectorAll(".carousel_button")
    const firstCardWidth = carousel.querySelector(".practice").offsetWidth;
    const carouselChildrens = [...carousel.children];

    // кнопки скролла в лево и вправо
    carousel_buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        })
    })

    // количество карт, которые вмещает в себя карусель (3)
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

    carouselChildrens.slice(0, cardPerView).forEach(li => {
        carousel.insertAdjacentHTML("beforeEnd", li.outerHTML);
        let goToBoardScreen = document.getElementById("board");
        goToBoardScreen.addEventListener("click", () => {
            mainScreen.style.display = "none";
            boardScreen.style.display = "block";
        });

        // переключение на экран с оборудованием
        let goToEquipmentScreen = document.getElementById("equipment");
        goToEquipmentScreen.addEventListener("click", () => {
            mainScreen.style.display = "none";
            equipmentScreen.style.display = "block";
        });

        // переключение на экран с квизом
        let goToQuizScreen = document.getElementById("quiz_imgg");
        goToQuizScreen.addEventListener("click", () => {
            mainScreen.style.display = "none";
            quizScreen.style.display = "block";
        });

        // переключение на экран с изучением звука
        let goToSoundScreen = document.getElementById("sound");
        goToSoundScreen.addEventListener("click", () => {
            mainScreen.style.display = "none";
            soundScreen.style.display = "block";
        });
    });

    carouselChildrens.slice(-cardPerView).reverse().forEach(li => {
        carousel.insertAdjacentHTML("afterbegin", li.outerHTML);
        let goToBoardScreen = document.getElementById("board");
        goToBoardScreen.addEventListener("click", () => {
            mainScreen.style.display = "none";
            boardScreen.style.display = "block";
        });

        // переключение на экран с оборудованием
        let goToEquipmentScreen = document.getElementById("equipment");
        goToEquipmentScreen.addEventListener("click", () => {
            mainScreen.style.display = "none";
            equipmentScreen.style.display = "block";
        });

        // переключение на экран с квизом
        let goToQuizScreen = document.getElementById("quiz_imgg");
        goToQuizScreen.addEventListener("click", () => {
            mainScreen.style.display = "none";
            quizScreen.style.display = "block";
        });

        // переключение на экран с изучением звука
        let goToSoundScreen = document.getElementById("sound");
        goToSoundScreen.addEventListener("click", () => {
            mainScreen.style.display = "none";
            soundScreen.style.display = "block";
        });
    });

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
    };

    carousel.addEventListener("scroll", infiniteScroll)

    // переключение на экран с доской
    let goToBoardScreen = document.getElementById("board");
    goToBoardScreen.addEventListener("click", () => {
        mainScreen.style.display = "none";
        boardScreen.style.display = "block";
    });

    // переключение на экран с оборудованием
    let goToEquipmentScreen = document.getElementById("equipment");
    goToEquipmentScreen.addEventListener("click", () => {
        mainScreen.style.display = "none";
        equipmentScreen.style.display = "block";
    });

    // переключение на экран с квизом
    let goToQuizScreen = document.getElementById("quiz_imgg");
    goToQuizScreen.addEventListener("click", () => {
        mainScreen.style.display = "none";
        quizScreen.style.display = "block";
    });

    // переключение на экран с изучением звука
    let goToSoundScreen = document.getElementById("sound");
    goToSoundScreen.addEventListener("click", () => {
        mainScreen.style.display = "none";
        soundScreen.style.display = "block";
    });

    // вывод спектрограмм на доску по клику на кнопку
    const spgAddBut = document.getElementById("spectrograms_add_but");
    const spaceForSpgs = document.getElementById("spectrograms_adding");
    let spgnum = 2;
    spgAddBut.addEventListener("click", function () {
        spgnum++;
        const spectrogramDiv = document.createElement("div");
        spectrogramDiv.className = "spectrogram";
        spectrogramDiv.id = `spg_${spgnum}`;
        spaceForSpgs.appendChild(spectrogramDiv);
    });

    // добавление пина в форму для оценки настроения от 1 до 5
    const form = document.getElementById("pin_adding");
    form.style.cursor = 'url(./img/pin_cursor.svg), auto';
    let pinImgUrl = "/img/blue_pin.svg";
    let pinImgOptions = ["./img/blue_pin.svg", "./img/red_pin.svg", "./img/green_pin.svg"];
    form.addEventListener("click", function (e) {
        pin = document.createElement("div");
        pin.className = "pin";
        let formrect = form.getBoundingClientRect();
        let x = e.clientX - formrect.left;
        let y = e.clientY - formrect.top;
        console.log(e.clientX, e.clientY, x, y);
        console.log(formrect.left, formrect.top);
        pin.style.top = y + "px";
        pin.style.left = x + "px";
        pin.style.backgroundImage = "url(" + pinImgUrl + ")";
        form.appendChild(pin);
        randomPin = pinImgOptions[Math.floor(Math.random() * pinImgOptions.length)];
        pinImgUrl = randomPin
        form.style.cursor = "url(" + randomPin + "), auto";
    });

    // открытие окна для рисования на стикере
    const addStickerBut = document.getElementById("sticker_add_but");
    const stickerDrawing = document.getElementById("sticker_drawing");
    const stickerBoard = document.getElementById("pinboard");
    addStickerBut.addEventListener("click", function () {
        stickerBoard.style.display = "none";
        stickerDrawing.style.display = "flex";
    });
    // рисование на стикере
    const stickerCanvas = document.getElementById("sticker_canvas");
    let context = stickerCanvas.getContext("2d");
    heightRatio = 0.35;
    stickerCanvas.width = window.innerWidth * heightRatio;
    stickerCanvas.height = window.innerWidth * heightRatio;
    context.fillStyle = "white";
    context.fillRect(0, 0, stickerCanvas.width, stickerCanvas.height);

    let drawColor = "black";
    let drawWidth = "2"
    let isDrawing = false;

    stickerCanvas.addEventListener("touchstart", start, false);
    stickerCanvas.addEventListener("touchmove", draw, false);
    stickerCanvas.addEventListener("mousedown", start, false);
    stickerCanvas.addEventListener("mousemove", draw, false);

    stickerCanvas.addEventListener("touchend", stop, false);
    stickerCanvas.addEventListener("mouseup", stop, false);
    stickerCanvas.addEventListener("mouseout", stop, false);

    function start(e) {
        isDrawing = true;
        context.beginPath();
        context.moveTo(e.clientX - 410,
            e.clientY + 20);
        e.preventDefault();
    }

    function draw(e) {
        if (isDrawing) {
            context.lineTo(e.clientX - 410,
                e.clientY + 20);
            context.strokeStyle = drawColor;
            context.lineWidth = drawWidth;
            context.lineCap = "round";
            context.lineJoin = "round";
            context.stroke();
        }
        e.preventDefault();
    }

    function stop(e) {
        if (isDrawing) {
            context.stroke();
            context.closePath();
            isDrawing = false;
        }
        e.preventDefault();
    }
    // смена цвета рисования
    const colorChangeButs = document.querySelectorAll(".color")
    colorChangeButs.forEach(div => {
        div.addEventListener("click", (e) => {
            drawColor = div.style.background;
            stickerCanvas.style.cursor = "url(../img/" + div.id + "_cursor.svg), auto";
        });
    })
    // крепление стикера на доску
    const goToPinboard = document.getElementById("go_to_pinboard");
    goToPinboard.addEventListener("click", () => {
        stickerBoard.style.display = "block";
        addStickerBut.style.backgroundImage = "url(" + stickerCanvas.toDataURL('image/jpg', 1.0) + ")";
        addStickerBut.style.backgroundSize = "contain";
        addStickerBut.style.backgroundRepeat = "no-repeat";
        addStickerBut.innerHTML = "";
        rot = Math.floor(Math.random() * 10) - 5
        addStickerBut.style.transform = "rotate(" + rot + "deg)";
        context.clearRect(0, 0, stickerCanvas.width, stickerCanvas.height);
        context.fillStyle = "white";
        context.fillRect(0, 0, stickerCanvas.width, stickerCanvas.height);
    });

    // рисование соединения между оборудованием
    const pixels = document.querySelectorAll(".pixels")
    pixels.forEach(td => {
        td.addEventListener("click", () => {
            td.classList.toggle("colored_pixel")
            console.log(td.classList)
        })
    })

    // кручение элементов на экране с настройкой оборудования
    const RotateElements = document.querySelectorAll(".rotate_element")
    let clickcount = 0;
    RotateElements.forEach(td => {
        td.style.transform = "rotate(" + Math.floor(Math.random() * 3) * 90 + "deg)";
        td.addEventListener("click", () => {
            clickcount++;
            let rotateAngle = clickcount * 90;
            td.style.transform = "rotate(" + rotateAngle + "deg)";
            if (clickcount == 4) {
                clickcount = 0;
            }
        })
    })

    // квиз
    const questions = [
        {
            question: "Как называется эта звуковая скульптура?",
            imageUrl: "./img/quiz_img_1.svg",
            answers: [
                { text: "Поющее дерево", correct: true },
                { text: "Свистящий водоворот", correct: false },
                { text: "Плачущий вихрь", correct: false },
                { text: "Воющий рог", correct: false },
            ],
        },
        {
            question: "Кто является автором музыкальной пьесы 4′33″, в&nbsp;которой оркестр не издаёт ни звука, концентрируя внимание слушателей на звуках окружающей среды?",
            imageUrl: "./img/quiz_img_2.svg",
            answers: [
                { text: "Джордж Крамб", correct: false },
                { text: "Роланд Кайн", correct: false },
                { text: "Джон Кейдж", correct: true },
                { text: "Конлон Нанкарроу", correct: false },
            ],
        },
        {
            question: "Какая стихия приводит в действие этот инструмент?",
            imageUrl: "./img/quiz_img_3.svg",
            answers: [
                { text: "Свет", correct: false },
                { text: "Вода", correct: true },
                { text: "Ветер", correct: false },
                { text: "Огонь", correct: false },
            ],
        },
    ]

    const questionNumber = document.getElementById("question_number")
    const questionElement = document.getElementById("quiz_question");
    const answerButtons = document.getElementById("quiz_options");
    const nextButton = document.getElementById("quiz_next_button");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Следующий вопрос";
        showQuestion();
    }

    function showQuestion() {
        // очистка предыдущих вариантов ответа
        resetEstate();
        const currentQuestion = questions[currentQuestionIndex];
        let questionNum = currentQuestionIndex + 1;
        // вывод номера вопроса
        questionNumber.innerHTML = `Вопрос ${questionNum} / ${questions.length}`;
        // вывод текста вопроса
        questionElement.innerHTML = `<p>${currentQuestion.question}</p> <img id="quiz_img" src="${currentQuestion.imageUrl}" alt="question_img">`;
        // вывод вариантов ответа
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = `<span
                        class="custom_radio"></span>${answer.text}`;
            button.classList.add("quiz_option")
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        })
    }

    function resetEstate() {
        // отключить кнопку ввода
        nextButton.disabled = true;
        nextButton.style.color = "#C8C8C8";
        nextButton.style.borderColor = "rgba(200, 200, 200, 1)";
        // очистить поле от кнопок
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    function selectAnswer() {
        let selectedBut = event.target;
        if (selectedBut.className === "custom_radio") {
            selectedBut = selectedBut.parentElement;
        }
        const isCorrect = selectedBut.dataset.correct === "true";
        if (isCorrect) {
            selectedBut.classList.add("selected_but");
            setTimeout(() => { selectedBut.classList.add("correct"); }, 400);
            score++;
        } else {
            selectedBut.classList.add("selected_but");
            setTimeout(() => { selectedBut.classList.add("incorrect"); }, 400);
        }
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                setTimeout(() => { button.classList.add("correct"); }, 400);
            }
            setTimeout(() => {
                button.disabled = true;
                nextButton.style.color = "black";
                nextButton.style.borderColor = "black";
            }, 400);
        })
        nextButton.disabled = false;
    }

    function showScore() {
        resetEstate();
        questionNumber.innerHTML = `Итоги квиза`;
        questionElement.innerHTML = `<p> Вы ответили верно на ${score} из ${questions.length} вопросов </p> 
        <div id="quiz_score_animation"> 
        <div class="quiz_score" id="score0"></div>
        <div class="quiz_score" id="score1"></div> 
        <div class="quiz_score" id="score2"></div> 
        <div class="quiz_score" id="score3"></div> 
        </div>`;
        const quizScore = document.querySelectorAll('.quiz_score');
        quizScore.forEach(div => {
            if (div.id === 'score' + score) {
                div.innerHTML = `${score}`;
                div.id = "exact_score"
                let colors = ['#ff5537', '#0C9648', '#0078D3', '#C8C8C8', '#ffffff'];
                setInterval(function () { div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] }, 600);
            };

        })
        nextButton.disabled = false;
        nextButton.style.color = "black";
        nextButton.style.borderColor = "black";
        nextButton.innerHTML = "Пройти заново";
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })

    startQuiz();

    // практика вслушивания
    const bookCanvas = document.getElementById("book");
    const pepperCanvas = document.getElementById("pepper");
    const pupyrkaCanvas = document.getElementById("pupyrka");
    const spongeCanvas = document.getElementById("sponge");
    const bookTextField = document.getElementById("book_text");
    const pepperTextField = document.getElementById("pepper_text");
    const pupyrkaTextField = document.getElementById("pupyrka_text");
    const spongeTextField = document.getElementById("sponge_text");
    const bookBut = document.getElementById("book_but");
    const pepperBut = document.getElementById("pepper_but");
    const pupyrkaBut = document.getElementById("pupyrka_but");
    const spongeBut = document.getElementById("sponge_but");
    const canvasText = document.getElementById("initial_text");

    function drawing(canvas) {
        let canvasPosition, canvasTop, canvasLeft;
        canvasPosition = canvas.getBoundingClientRect();
        canvasTop = canvasPosition.top;
        canvasLeft = canvasPosition.left;
        scr = canvas.id
        let img = document.createElement('img');
        img.src = "img/" + scr + ".png";
        img.style.left = (event.clientX - canvasLeft) + 'px';
        img.style.top = (event.clientY - canvasTop) + 'px';
        img.style.position = 'absolute';
        img.style.width = '11vw';
        canvas.appendChild(img);

        setTimeout(function () {
            img.style.opacity = 0;
        }, 1000);

        setTimeout(function () {
            img.remove();
        }, 12000);
    }

    function textprint(num, text, textField) {
        if (num++ < text.length - 1) {
            let newText = document.createTextNode(text[num]);
            textField.appendChild(newText);
            setTimeout(textprint, 150, num, text, textField);
        } else {
            num = 0;
            let newText = document.createTextNode(text[num]);
            textField.appendChild(newText);
            setTimeout(textprint, 150, num, text, textField);
        }
    };

    function cleanTextFields() {
        bookTextField.innerHTML = ' ';
        pepperTextField.innerHTML = ' ';
        pupyrkaTextField.innerHTML = ' ';
        spongeTextField.innerHTML = ' ';
        canvasText.innerHTML = ' ';
    }

    bookBut.addEventListener('click', function () {
        bookCanvas.style.zIndex = 3;
        pepperCanvas.style.zIndex = 2;
        pupyrkaCanvas.style.zIndex = 2;
        spongeCanvas.style.zIndex = 2;
        bookCanvas.style.cursor = "url(./img/book.svg), auto";
        cleanTextFields();
        textprint(-1, "пхл-пхщ-пхлы-пх-щ-щ-щ", bookTextField)
        bookCanvas.addEventListener('mousemove', () => {
            drawing(bookCanvas);
        })
    });
    pepperBut.addEventListener('click', function () {
        bookCanvas.style.zIndex = 2;
        pepperCanvas.style.zIndex = 3;
        pupyrkaCanvas.style.zIndex = 2;
        spongeCanvas.style.zIndex = 2;
        pepperCanvas.style.cursor = "url(./img/pepper.svg), auto";
        cleanTextFields();
        pepperRun = true;
        textprint(-1, "хрумхрыщ-хрыщ-хрыщ", pepperTextField);
        pepperCanvas.addEventListener('mousemove', () => { drawing(pepperCanvas) })
    });
    pupyrkaBut.addEventListener('click', function () {
        bookCanvas.style.zIndex = 2;
        pepperCanvas.style.zIndex = 2;
        pupyrkaCanvas.style.zIndex = 3;
        spongeCanvas.style.zIndex = 2;
        pupyrkaCanvas.style.cursor = "url(./img/pupyrka.svg), auto";
        cleanTextFields();
        textprint(-1, "пончк-пончк-пончк", pupyrkaTextField);
        pupyrkaCanvas.addEventListener('mousemove', () => { drawing(pupyrkaCanvas) })
    });
    spongeBut.addEventListener('click', function () {
        bookCanvas.style.zIndex = 2;
        pepperCanvas.style.zIndex = 2;
        pupyrkaCanvas.style.zIndex = 2;
        spongeCanvas.style.zIndex = 3;
        spongeCanvas.style.cursor = "url(./img/sponge.svg), auto";
        cleanTextFields();
        textprint(-1, "шипщщапш-пщп", spongeTextField);
        spongeCanvas.addEventListener('mousemove', () => { drawing(spongeCanvas) })
    });

    // проигрывание звуков
    const soundSwitchBut = document.getElementById("on_off_switch_but")
    let audio = new Audio();
    let soundBut = document.querySelectorAll('.sound_switch_but');
    for (let i = 0; i < soundBut.length; i++) {
        soundBut[i].addEventListener('click', function () {
            audio.src = this.value;
            audio.play();
            soundSwitchBut.innerHTML = "звук вкл";
        })
    }

    soundSwitchBut.addEventListener('click', function () {
        if (soundSwitchBut.innerHTML === "звук вкл") {
            soundSwitchBut.innerHTML = "звук выкл";
            audio.pause();
        } else {
            soundSwitchBut.innerHTML = "звук вкл";
            audio.play();
        }
    });

    // переключение на главный экран
    let goToMainButtons = document.querySelectorAll(".go_to_main_but");
    goToMainButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            mainScreen.style.display = "block";
            boardScreen.style.display = "none";
            equipmentScreen.style.display = "none";
            quizScreen.style.display = "none";
            soundScreen.style.display = "none";
            audio.currentTime = 0;
            audio.pause();
        })
    });
});