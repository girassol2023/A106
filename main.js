function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/URTt9K7LV/model.json", modeloPronto)
}
function modeloPronto() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("resultado carregado")
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("canListen").innerHTML = "posso ouvir:" + results[0].label
        document.getElementById("porcent").innerHTML = "precisão:" + (results[0].confidence * 100).toFixed(2) + "%"
        document.getElementById("canListen").style.color = "rgb(" + r + "," + g + "," + b + ")"
        document.getElementById("porcent").style.color = "rgb(" + r + "," + g + "," + b + ")"
        img = document.getElementById("alien1")
        img2 = document.getElementById("alien2")
        img3 = document.getElementById("alien3")
        img4 = document.getElementById("alien4")

        if (results[0].label == "palmas") {
            img.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"

        }

        if (results[0].label == "barulho com a boca") {
            img.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"

        }
        if (results[0].label == "Ruído de fundo") {
            img.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"

        }

        if (results[0].label == "fala") {
            img.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"

        }

    }
}
