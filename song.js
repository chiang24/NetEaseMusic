$(function () {
    $.get('./lyric.json').then(function (object) {
        let {lyric} = object //let lyric = object.lyric
        let {tlyric} = object
        let array = lyric.split('\n')
        let tarray = tlyric.split('\n')
        let regex = /^\[(.+)\](.*)$/
        array = array.map(function (string, index) {
            let matches = string.match(regex)
            if (matches) {
                return {
                    time: matches[1],
                    words: matches[2]
                }
            }
        })
        tarray = tarray.map(function (string, index) {
            let matches = string.match(regex)
            if (matches) {
                return {
                    time: matches[1],
                    words: matches[2]
                }
            }
        })

        // console.log(array)
        //  console.log(tarray)
        let $lyric = $('.lyric')
        array.map(function(object){
            if(!object){
                return
            }
            let $p = $('<p/>')
            $p.attr('data-time',object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
            tarray.map(function(object){
            if(!object){
                return
            }
            let $p = $('<p/>')
            $p.attr('data-time',object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })
    let audio = document.createElement('audio')
    audio.src = 'http://os08tn3ud.bkt.clouddn.com/C400000JNfAG4SlZTV.m4a'
    	audio.oncanplay = function(){
		audio.play()
		$('.disc-container').addClass('playing')
	}
    	$('.icon-pause').on('touchstart', function(){
		audio.pause()	
		$('.disc-container').removeClass('playing')
	})
	$('.icon-play').on('touchstart', function(){
		audio.play()	
		$('.disc-container').addClass('playing')
	})
})