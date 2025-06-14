import "remixicon/fonts/remixicon.css";
const inputSearch = document.querySelector("input[type='text']");
const searchBtn = document.querySelector("#searchBtn");
const clearBtn = document.querySelector("#clearBtn");
const submitForm = document.querySelector("form");
const card = document.querySelector(".card")
card.classList.add("hidden")
const token = "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";

const formHandler = (e) => {
  e.preventDefault();
};

submitForm.addEventListener("submit", (e) => {
  formHandler(e);
});

searchBtn.addEventListener("click", () => {
  if (inputSearch.value == "") {
    console.warn("make sure you enter user name");
  } else {
    getResponce(inputSearch.value);
    inputSearch.value = "";
    card.innerHTML = ""
  }
});



const getResponce = async (userName) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    updateUI(data, userName)
  } catch (error) {
    console.error("Fetch failed:", error);
    alert("User not found or something went wrong.");
  }
};

const updateUI = (data, user) => {
  const userNoFound = document.querySelector("#userNoFound")
  const main = document.querySelector("#main")
  const profileContainer = document.createElement("div")
  const statsContainer = document.createElement("div")
  console.log(data.status, data)

  if (data.status == 404) {
    userNoFound.textContent = `No user found "${user}"`
    card.classList.add("hidden")
    userNoFound.classList.remove("hidden")
    main.classList.add("border-2")
  } else {
    userNoFound.classList.add("hidden")
    main.classList.remove("border-2")
    card.classList.replace("hidden", "flex")
    statsContainer.classList.add("bg-zinc-950", "w-2/3", "p-3", "rounded-xl", "border-2", "border-zinc-600")
    profileContainer.classList.add("bg-zinc-950", "w-72", "p-3", "rounded-xl", "border-2", "border-zinc-600")
    profileContainer.innerHTML = `
      <div id="img_Container" class="h-60 bg-zinc-700 rounded-lg overflow-hidden">
                        <img class="h-full w-full object-center"
                            src="${data.avatar_url}" alt="profileImg">
                    </div>
                    <div
                        class="relative h-[36vh] w-full mt-2 text-left flex flex-col justify-between items-start gap-3">
                        <div class="py-1.5 w-full">
                            <h1 class="text-3xl tracking-tighter">${data.login}</h1>
                            <p class="mb-2 mt-2 leading-tight text-zinc-400 font-light">${data.bio}
                            </p>
                            <div>
                                <div class="flex items-start">
                                    <h1 class="text-sm text-zinc-400 pl-1"><span><i class="ri-group-line"></i></span>
                                        <span>${data.followers}</span> followers</h1> <span class="px-1 text-sm text-zinc-400"> ·
                                    </span>
                                    <h1 class="text-sm text-zinc-400"><span>${data.following}</span> following</h1>
                                </div>
                                <div>
                                    <h1 class="text-sm text-zinc-400 pl-1"><span><i
                                                class="ri-map-pin-2-line"></i></span> ${data.location || "-"}</h1>
                                    <h1 class="text-sm text-zinc-400 pl-1"><span><i class="ri-global-line"></i></span>
  ${data.blog || "-"}</h1>
                                </div>
                            </div>
                        </div>

                        <button id="redirect"
                            class="w-full bg-zinc-800 border border-zinc-600 hover:bg-zinc-700 text-lg rounded-xl py-2 mt-4">Visit
                            Profile</button>
                    </div>
    `
    statsContainer.innerHTML = `
      <div id="stats" class="w-full flex flex-col gap-3">
                        <img class="w-full rounded-lg"
                        src="https://github-readme-stats.vercel.app/api?username=${user}&hide_border=true&theme=dark&show_icons=true"
                        alt="">
                        <img class="w-full rounded-lg"
                        src="https://streak-stats.demolab.com/?user=${user}&theme=dark&hide_border=true&mode=weekly"
                        alt="">
                        <img class="w-full h-40 rounded-lg"
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&hide_progress=true&theme=dark&hide_border=true"
                            alt="">
                    </div>
    `
    card.append(profileContainer)
    card.append(statsContainer)
    const redirect = profileContainer.querySelector("#redirect")
    redirect.addEventListener("click",()=>{
      window.open(data.html_url)
    })

  }
}