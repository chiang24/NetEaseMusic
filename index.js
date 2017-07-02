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
    $('.siteNav').on('click','ol.tab-items>li',function(e){
        let $li =$(e.currentTarget).addClass('active')
        $li.siblings().removeClass('active')
        let index = $li.index()
        $li.trigger('tabChange',index)
        $('.tab-content>li').eq(index).addClass('active').siblings().removeClass('active')
    })

    $('.siteNav').on('tabChange',function(e,index){
        let $li = $('.tab-content>li').eq(index)
        if($li.attr('data-downloaded') === 'yes'){
            return
        }
        if(index === 1){
            $.get('./hotsongs.json').then((response)=>{
                // $li.text(response.content)
                $li.attr('data-downloaded','yes')
            })
        }else if(index === 2){
            $.get('./search.json').then((response)=>{
                //$li.text(response.content)
                $li.attr('data-downloaded','yes')
            })
        }
    })
    setTimeout(function(){
    $.get('./hotsongs.json').then(function(Response){
    let items = Response
    items.forEach((i)=>{
        let $li = $(`
                 <li>
                   <a href="./song.html?id=${i.id}">
                        <div class="number">${i.number}</div>
                        <div class="hotsongInfo">
                            <h3>${i.name}<span>${i.singer}</span></h3>
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
            $('#hotlist').append($li)
    })
    $('#hotsongloading').remove()
    }, function(){
    })
},1000)
})