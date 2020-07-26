/*
    Title: Course Project - Phase Two - browserApi.js(webcam and microphone)
    By: Tim Aryavong
    Date: Saturday July 25, 2020
    Description: Gives browser the ability to access(with permission) the users camera and microphone.
*/

let body = document.getElementById("mainBody"); // since it was kind of modular i just moved the code from lab 9

let videoHead = document.getElementById('vidHeader'); // declare elements and attributes

let video = document.createElement("video");
video.autoplay = true;
video.setAttribute('id', 'video');

let videoBtn = document.createElement("button");
videoBtn.innerText = "get video";
videoBtn.setAttribute('class', 'vidBtn btn btn-dark');

let pictureBtn = document.createElement("button");
pictureBtn.innerText = " take picture";
pictureBtn.setAttribute('class', 'picBtn btn btn-dark');

let img = document.createElement("img");
img.setAttribute('id', 'picture');

let div = document.querySelector('#vidBox');

let supports = navigator.mediaDevices.getSupportedConstraints(); // view supported constraints in the console
console.log(supports);

const constraints = { // constraints for video stream size(tried to keep it minimal)
    width: {
        min: 352,
        max: 640
    },
    height: {
        min: 240,
        max: 480
    },
    frameRate: { // cap the framerate of video
        max: 30
    }
};

function getVideo() { // Returns a promise to resolve with media stream object.
    navigator.mediaDevices.getUserMedia({ //prompts the user for permission to use a media input
        video: true //if permissions are true
    }).then(mediaStream => {
        console.log(mediaStream.getVideoTracks()); //allows me to view track attributes
        const track = mediaStream.getVideoTracks()[0]; //stream from users pc camera to a variable
        track.applyConstraints(constraints).then(() => { //apply constraints(per above), if constraints were successful then continue
            video.srcObject = mediaStream; // show the stream here
        }).catch((error) => { // if constraints didn't work show the arror
            console.log(error);
        });
    });
}

function takePicture() { // Returns a promise to resolve with media stream object.
    navigator.mediaDevices.getUserMedia({ //prompts the user for permission to use a media input
        video: true //if permissions are true
    }).then(mediaStream => {
        let imageCapture = new ImageCapture(mediaStream.getVideoTracks()[0]); // instantiate an image capture from the video stream
        imageCapture.takePhoto().then(function (photo) { // takes a photo from the stream
            console.log('Took photo:', photo); // show a console message (photo is a blob? i guess that's true for a computer)
            img.src = URL.createObjectURL(photo); // set the photo into an image element
        });
    }).catch((error) => { // if media stream failed, show the error
        console.log(error);
    });
}

body.appendChild(videoHead); //place into the content on the index page
div.appendChild(video);
div.appendChild(img);
div.appendChild(videoBtn);
div.appendChild(pictureBtn);
body.appendChild(div);

pictureBtn.addEventListener('click', takePicture); // bind buttons
videoBtn.addEventListener('click', getVideo);