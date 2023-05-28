var splashimg
var gameState="wait"
var storybutton, mutebutton, musicbutton, nextbutton, playbutton,infobutton,bglevel1



function preload(){
splashimg=loadImage("assets/splash.gif")
bglevel1=loadImage("assets/skybackground.gif")





}

function setup(){
createCanvas(windowWidth,windowHeight)

playbutton = createImg("assets/startbutton.gif")
playbutton.position(0,0)
playbutton.size(300,300)

musicbutton = createImg("assets/startbutton.gif")
musicbutton.position(width - 300, 0)
musicbutton.size(300,300)


mutebutton = createImg("assets/startbutton.gif")
mutebutton.position(width - 300, 0)
mutebutton.size(300,300)

// replace with information image
infobutton = createImg("assets/startbutton.gif")
infobutton.position(0, 0)
infobutton.size(500, 500)
 infobutton.hide()


}

function draw(){
    if (gameState=="wait"){
background(splashimg)
infobutton.hide()

}

playbutton.mousePressed(() => {
       gameState="info"
    playbutton.hide()
    infobutton.show()

})
if(gameState==="info"){
    infobutton.show()
}

infobutton.mousePressed(() => {
    background(bglevel1)

    gameState = "level1"
    playbutton.hide()
    infobutton.hide()
    mutebutton.hide()
    musicbutton.hide()
})
if (gameState === "level1") {
    background(bglevel1)


    mutebutton.hide()
    musicbutton.hide()
    
}


}