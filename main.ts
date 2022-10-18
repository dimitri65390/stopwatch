input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    elapsed = input.runningTime() - start
    basic.showNumber(Math.idiv(elapsed, 1000))
})
let elapsed = 0
let start = 0
start = 0
