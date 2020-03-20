window.onload = function(){

    // var greet = function(){
    //     console.log("Hello World")
    // }
    // greet()

    // var newGreet = () => console.log("The Same Hello World")
    // newGreet()

    // var nameGreet=(name)=>console.log(`hello ${name}`)
    // nameGreet("sulthan")

    // var student = {
    //     name: "Sulthan",
    //     score(x){
    //         var _this = this
    //         window.setInterval(function(){
    //             if (x > 0){
    //                 console.log(_this.name + " got 100")
    //                 x--
    //             }
    //         }, 1000)
    //     }
    // }
    // student.score(100)

    var student = {
        name: "Sulthan",
        score(x){
            window.setInterval(() => {
                if (x > 0){
                    console.log(this.name + " got 100")
                    x--
                }
            }, 1000)
        }
    }
    student.score(5)

}