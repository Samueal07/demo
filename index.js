

const video = document.querySelector('video');
const speedControl = document.querySelector('.speedControl');
const indicator = document.querySelector('.indicator');
const hidden=document.querySelectorAll(".hidden");
const video1=document.querySelector(".video1");
const video2=document.querySelector(".video2");
const video3=document.querySelector(".video3");
const buttons=document.querySelectorAll(".toggle");
console.log(buttons);
let mousedown = false;

speedControl.addEventListener('mousedown', () => mousedown = true);
speedControl.addEventListener('mouseup', () => mousedown = false);
speedControl.addEventListener('mouseleave', () => mousedown = false);

speedControl.addEventListener('mousemove', function(e) {
  if (!mousedown) return;
  const min = 0.5;
  const max = 2;
  const position = e.pageY - this.offsetTop;
  const percent = position / this.offsetHeight;
  const height = Math.floor(percent * 1000) / 10 + '%';
  const playbackRate = percent * (max - min) + min;
  if (playbackRate < 0.5) playbackRate = 0.5;
  
  indicator.style.height = height;
  indicator.innerText = playbackRate.toFixed(1) + 'x';
  video.playbackRate = playbackRate;
});


video2.addEventListener("click",()=>{

  video1.src="https://dualite.s3.ap-south-1.amazonaws.com/collages/2ec8a8fc-9c0c-464d-a456-d8bc3d553d37.mp4";
  video.play();
  
})

video3.addEventListener("click",()=>{
  video1.src="https://dualite.s3.ap-south-1.amazonaws.com/collages/e46d49bc-d346-46c5-842a-b3c265818771.mp4";
  video.play();

})

var shot = $('#shot');
video.addEventListener("timeupdate", function(){
    
    if(this.currentTime >= 1.29 * 60) {
        console.log("uo");
        this.pause();

      buttons.forEach((button)=>{


        button.style.display="block";
        
      });
        
        
    }


});




