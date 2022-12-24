// local reviews data
const reviews = [
  {
    id: 1,
    name: "Sushmita Adhikari",
    job: "Web Developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Hello everyone Iam Sushmita Adhikari and it has been a pleasure working in Bhujel Web Developers.",
  },
  {
    id: 2,
    name: "Sharda Acharya",
    job: "UI/UX Designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Working at Bhujel Web developers is a dream come true for every UI/UX designer",
  },
  {
    id: 3,
    name: "Shyam Bahadur",
    job: "Intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Bhujel Web developers is the best place to work if you are fresh out of the college.",
  },
  {
    id: 4,
    name: "Raj Kumar",
    job: "CEO",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "I have been working with the company since it's establishment. Started from a junior developer now I am a CEO of this company ",
  },
];


// select available items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");
const job = document.getElementById("job");

const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const surpriseButton = document.querySelector(".random-btn");


let currentItem = 0; // starting item in array review

// initial loading 
window.addEventListener('DOMContentLoaded', function () {
  displayPerson(currentItem)
});

// shows person based on review Irem
function displayPerson(per){
  const reviewItem = reviews[per];
  img.src = reviewItem.img;
  author.textContent = reviewItem.name;
  job.textContent = reviewItem.job;
  info.textContent = reviewItem.text;
}

nextButton.addEventListener('click',function(){
  currentItem++;

  if (currentItem>reviews.length-1){
    currentItem=0;
  }
  displayPerson(currentItem);
})

previousButton.addEventListener('click',function(){
  currentItem--;
  if(currentItem<0){
    currentItem=3;
  }
  displayPerson(currentItem);
})

surpriseButton.addEventListener('click',function(){
  const item = Math.floor(Math.random()*(reviews.length)); // create a random number to acess random elements from the array
  displayPerson(item);
})