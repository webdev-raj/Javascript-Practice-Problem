const animeQuotes = [
    {
        character: "Naruto Uzumaki",
        quote: "I’m not gonna run away, I never go back on my word! That’s my nindō: my ninja way!"
    },
    {
        character: "Luffy (One Piece)",
        quote: "If you don’t take risks, you can’t create a future!"
    },
    {
        character: "Itachi Uchiha",
        quote: "People live their lives bound by what they accept as correct and true. That’s how they define reality."
    },
    {
        character: "Gojou Satoru",
        quote: "Don’t worry, I’m the strongest."
    },
    {
        character: "Levi Ackerman",
        quote: "The only thing we’re allowed to do is believe that we won’t regret the choice we made."
    },
    {
        character: "Light Yagami",
        quote: "You can’t ever win if you’re always on the defensive. To win, you have to attack!"
    },
    {
        character: "Asta (Black Clover)",
        quote: "I don’t care if I die trying, I’ll never give up!"
    },
    {
        character: "Killua Zoldyck",
        quote: "When I say it doesn’t hurt me, that means I can bear it."
    },
    {
        character: "Gon Freecss",
        quote: "I’m not going to die. Because I’m going to get stronger."
    },
    {
        character: "Sasuke Uchiha",
        quote: "My dream doesn’t exist in the future. It lies in the past. That’s the only place it exists."
    },
    {
        character: "Jiraiya",
        quote: "A person grows up when he's able to overcome hardships. Protection is important, but there are some things a person must learn on his own."
    },
    {
        character: "Kakashi Hatake",
        quote: "In the ninja world, those who break the rules are scum, but those who abandon their friends are worse than scum."
    },
    {
        character: "Yami Sukehiro",
        quote: "Push past your limits. That’s my magic."
    },
    {
        character: "Goku",
        quote: "Power comes in response to a need, not a desire. You have to create that need."
    },
    {
        character: "Tanjiro Kamado",
        quote: "The bond between Nezuko and me can't be severed by anyone!"
    },
    {
        character: "Roronoa Zoro",
        quote: "Scars on the back are a swordsman's shame."
    },
    {
        character: "Eren Yeager",
        quote: "If you win, you live. If you lose, you die. If you don’t fight, you can’t win!"
    },
    {
        character: "Roy Mustang",
        quote: "It’s not wrong to dream. But you have to work hard to make it come true."
    },
    {
        character: "Edward Elric",
        quote: "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something else."
    },
    {
        character: "Shoto Todoroki",
        quote: "Never forget who you want to become."
    },
    {
        character: "Might Guy",
        quote: "A hero is not one who never falls. He is the one who gets up, again and again, never losing sight of his dreams."
    },
    {
        character: "Madara Uchiha",
        quote: "Wake up to reality. Nothing ever goes as planned in this accursed world."
    },
    {
        character: "Obito Uchiha",
        quote: "In the ninja world, those who break the rules are scum, that's true. But those who abandon their friends are worse than scum."
    },
    {
        character: "Shanks (One Piece)",
        quote: "By experiencing both victory and defeat, running away and shedding tears, a man will become a man."
    },
    {
        character: "Ken Kaneki",
        quote: "Never trust anyone too much, remember the devil was once an angel."
    }
]
const specker = document.querySelector("#specker")
const copy = document.querySelector("#copy")
const messageBox = document.querySelector("#messageBox")
const btn = document.querySelector("#btn")
let randomerNumber 
btn.addEventListener("click",()=>{
   randomerNumber = Math.floor(Math.random() * animeQuotes.length)
   messageBox.innerHTML = `<div class="h-full w-full"><p class="text-2xl"><span>"</span><span class="quoteMessage">${animeQuotes[randomerNumber].quote}</span><span>"</span></p>
        <h2 class="text-right mt-2">-- <span class="authorName">${animeQuotes[randomerNumber].character}</span>
        </h2></div>`
})
specker.addEventListener("click", () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = animeQuotes[randomerNumber].quote;
    window.speechSynthesis.speak(msg);
})
copy.addEventListener("click",()=>{
    window.navigator.clipboard.writeText(animeQuotes[randomerNumber].quote).then(()=>{
        console.log("copyied")
    }).catch(()=>{
        console.log("not able to copy")
    })
})