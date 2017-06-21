$(function(){
    $.get('/lyric.json').then(function(object){
        let {lyric} = object    //let lyric = object.lyric
        let {tlyric} = object  
        console.log(lyric.split('\n'))
        console.log(tlyric.split('\n'))

    })
})