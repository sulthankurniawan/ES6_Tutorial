window.onload = function(){

    // var names = new Set()
    // names.add("Sulthan").add("Suparman").add("Robin") // add
    // console.log("hapus Sulthan: " + names.delete("Sulthan")) // delete
    // console.log(names.size) // size
    // console.log(names)
    // names.delete("Sulthan")
    // console.log("apa ada Suparman? " + names.has("Suparman"))
    // names.clear()
    // console.log(names.size)
    // console.log(names) 

    var names = ["Sulthan", "Ilham", "Izzul", "Sulthan", "Ilham"]
    var singleNames = new Set(names)
    console.log(singleNames)
    names = [...singleNames]
    console.log(names)



}