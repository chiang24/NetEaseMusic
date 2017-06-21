$(function () {
    $.get('/lyric.json').then(function (object) {
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
    audio.src = 'http://dl.stream.qqmusic.qq.com/C400000JNfAG4SlZTV.m4a?vkey=81568A82E80DC075FA6F0A68E819AB718D7C2077A25610F24E06E51B9096E5D8D80EC13A554B2D5A3223E3334C1C3194DD3E0EB54D77FCEF&guid=2629809800&uin=438085855&fromtag=66'
    	audio.oncanplay = function(){
		audio.play()
		$('.disc-container').addClass('playing')
	}
})