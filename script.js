// NEXT AND BACK BUTTONS

let frames = null;
document.addEventListener('DOMContentLoaded', () => {
    frames = document.querySelectorAll('.frame');
    console.log(frames);
    let nextBtns = document.getElementsByClassName("next");
    for (let button of nextBtns) {
        button.addEventListener("click", nextFrame)
    }
    let backBtns = document.getElementsByClassName("back");
    for (let button of backBtns) {
        button.addEventListener("click", () => { nextFrame("back") })
    }
})
let currentFrame = 0;


function nextFrame(direction) {
    if (direction === "back") {
        currentFrame--;
    } else {
        currentFrame++;
    }
    console.log(currentFrame);
    for (let i = 0; i < frames.length; i++) {
        frames[i].classList = "frame";
        if (i == currentFrame) {
            frames[i].classList.add('show');
            console.log(`Frame ${i} is revealed`)
        }
        else {
            frames[i].classList.add('hide');
            console.log(`Frame ${i} was hidden`)
        }


    }
}
// END OF NEXT AND BACK BUTTONS
// PIE CHART USING CHART.JS

document.addEventListener("DOMContentLoaded", function () {
    new Chart(
        document.getElementById('canvas'),
        {
            type: 'pie',
            options: {
                plugins: {
                    legend: {
                        display: true
                    },
                    tooltip: {
                        enabled: true
                    }
                }
            },
            data: {
                labels: ["Housing", "Transportation", "Entertainment", "Groceries"],
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: ["100", "120", "124", "150"],
                    }
                ]
            }
        }
    );
});

function values(){
    let annualGross = document.getElementById("#annualInput").value; 
    let monthlyInput = document.getElementById("#monthlyInput").value;
    let frameInput = annualGross.value + monthlyInput.value;
    document.getElementbyId("housing").innerHTML = "$ " + frameInput;
}


//gotta get data from form input or user data

// var input = document.getElementById("frameInput");
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("nextBtn").enterKeyHint();
//   }
// });

// function values() {
//    let annualGross = document.getElementById("#annualInput").value; 
//    let monthlyInput = document.getElementById("#monthlyInput").value;
//    let frameInput = annualGross + monthlyInput;
   
// }

   
//     //    if(value.key === "Enter") {
//     //        value.preventDefault();
//     //        focument.
//     //    }

   
   


//    switch(frameInput){

//    }
//    }




