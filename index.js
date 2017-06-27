$(function(){
   setTimeout(function(){
    $.get('./songs.json').then(function(Response){
    let items = Response
    items.forEach((i)=>{
        let $li = $(`
            <li>
                <a href="./song.html?id=${i.id}">
                    <h3>${i.name}<span>${i.singer}</span></h3>
                    <div class="songInfo">
                        <svg class="sq">
                            <use xlink:href="#icon-sq">
                            </use>
                        </svg>
                        <p>${i.songInfo}</p>
                        <svg class="playcircled">
                            <use xlink:href="#icon-play-circled">
                            </use>
                        </svg>
                    </div>
                </a>
            </li>
            `)
            $('#newsong').append($li)
    })
    $('#newsongloading').remove()
    }, function(){
    })
},500)
})