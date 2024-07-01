const menu = document.querySelector('#menu');
const steve = document.querySelector('#Kayleboo');
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hlinks = document.querySelectorAll("#hlink")

menu.addEventListener("click", () => {
  steve.classList.toggle("hidden")
  menu.classList.toggle("bg-white")
})

hlinks.forEach(link => {
    link.addEventListener("click", () => {
        steve.classList.toggle("hidden")
        menu.classList.toggle("bg-white")
      }) 

})

moon.addEventListener("click", () => {
    body.classList.toggle("dark")
  })

  // document.addEventListener("DOMContentLoaded", () => {
  //   const moon = document.getElementById('moon')
  //   moon.addEventListener('click', function() {
  //     if (document.documentElement.classList.includes('dark')){
  //       document.documentElement.classList.remove('dark')
  //     }
  //     else{
  //       document.documentElement.classList.add('dark')
  //     }
  //     alert("click!")
  //   })
  // })

