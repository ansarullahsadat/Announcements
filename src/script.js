"use strict"

const dismiss = document.querySelector(".dismiss")
const jobs = document.querySelector(".jobs")
const add = document.querySelector(".add")
const mainContent = document.querySelector(".main-content")
const user = document.querySelector("#name")
const message = document.querySelector("#message")
const url = document.querySelector("#url")
const form = document.querySelector(".form")
const count = document.querySelector(".count")

let counting = 2

dismiss.addEventListener("click", (e) => {
  e.preventDefault()
  counting = 0
  count.textContent = 0
  jobs.textContent = ""
})

add.addEventListener("click", (e) => {
  e.preventDefault()

  counting++
  count.textContent = counting

  mainContent.classList.add("translate-x-[-200%]", "opacity-0")
  form.classList.remove("translate-x-[200%]", "opacity-0")
})

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const html = `<div class="bg-[#202b47] py-3 px-4 rounded-lg  transition-all duration-500 relative">
            
                <div class="absolute top-2 right-4">
                    <span class="w-2 h-2 rounded-full inline-block bg-[#2f395d]"></span>
                    <span class="w-2 h-2 rounded-full inline-block bg-[#2f395d]"></span>
                    <span class="w-2 h-2 rounded-full inline-block bg-[#2f395d]"></span>
                </div>
            
                <h2 class="text-sm leading-relaxed w-[80%]">${message.value}</h2>
            
            
                <div class="flex items-center justify-between mt-2 text-[#707aa0] text-sm">
            
                    <div class="flex items-center gap-2">
            
                        <img src="${url.value}" class="img  w-8 h-8 rounded-full object-cover border-2 border-blue-500 " alt="random">
                        <span class="">${user.value}</span>
                    </div>
            
                    <span>Now</span>
            
                </div>
            
            </div>`

  jobs.insertAdjacentHTML("beforeend", html)

  user.value = ""
  message.value = ""
  url.value = ""

  form.classList.add("translate-x-[200%]", "opacity-0")
  mainContent.classList.remove("translate-x-[-200%]", "opacity-0")
})
