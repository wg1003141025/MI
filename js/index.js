window.onload = function () {
    //内容选项卡
    let  bigcard=document.getElementsByClassName('brick_nav');				//获取标题大块
    let  card_con=document.getElementsByClassName('content_one');			//获取内容大块
    for(i=0;i<bigcard.length;i++) {											//遍历标题大块
        let span = bigcard[i].getElementsByTagName('span');					//获取标题块里的每一个span
        let nei = card_con[i].getElementsByClassName('con_one_xin');		//获取每一个内容
        for (let j = 0; j < span.length; j++) {								//遍历标题
            span[j].onmouseover = function () {								//添加鼠标移入事件
                for (let a = 0; a < span.length; a++) {						//遍历标题
                    span[a].classList.remove('active');						//移除标题的active
                    nei[a].classList.remove('con_one_r_active');			//移除内容的active
                }
                span[j].classList.add('active');							//标题添加active
                nei[j].classList.add('con_one_r_active');					//内容添加active
            }
        }
    }


    //banner的轮播
    let banner_zong = document.getElementsByClassName("banner")[0];
    let banner_tu = document.querySelectorAll(".banner_link>img");
    let dian = document.querySelectorAll(".yuandian_son");
    let now = 0;
    let banner_zuo = document.getElementsByClassName("zhiyinjianl")[0];
    let banner_you = document.getElementsByClassName("zhiyinjianr")[0];
    let time = setInterval(move,1000);
    function move(way){
        way = way || "right";
        if(way == "right"){
            now++;
            if(now == banner_tu.length){
                now = 0;
            }
        }else if(way == "left"){
            now--;
            if(now < 0){
                now = banner_tu.length-1;
            }
        }
        banner_tu.forEach(function(ysu,index){
            ysu.style.opacity = 0;
            dian[index].style.backgroundColor = "rgba(0,0,0,0.7)";
        })
        banner_tu[now].style.opacity = 1;
        dian[now].style.backgroundColor = "red";
        //now++;
    }
    banner_zong.onmousemove = function () {
        clearInterval(time);
    }
    banner_zong.onmouseout = function () {
        time = setInterval(move,1000);
    }
    dian.forEach(function(ddian,index1){
        ddian.addEventListener('click', function () {
            banner_tu.forEach(function(ysu,index){
                ysu.style.opacity = 0;
                dian[index].style.backgroundColor = "rgba(0,0,0,0.7)";
            })
            banner_tu[index1].style.opacity = 1;
            this.style.backgroundColor = "red";
            now = index1;
        })
    })
    banner_zuo.onclick = function () {
        move("left");
        console.log(1);
    }
    banner_you.onclick = function () {
        move("right");
        console.log(2);
    }



    //banner侧导航的onmouseover
    let kuai = document.getElementsByClassName("kuaii");
    let children = document.getElementsByClassName("children");
    for(let i = 0;i < kuai.length;i++){
        kuai[i].onmouseover = function () {
            children[i].classList.add("children_active");
        }
        kuai[i].onmouseout = function () {
            for(let j = 0;j < children.length;j++){
                children[j].classList.remove("children_active");
            }
        }
    }


    //nav的onmouseover
    let titbei = document.getElementsByClassName("dao")[0];
    let conbei = document.getElementsByClassName("header_menuzong")[0];
    let cen = document.getElementsByClassName("ceny");
    let navmenu = document.getElementsByClassName("header_nav_menu");
    let kong = document.getElementsByClassName("cenk");
    for(k = 0;k < kong.length;k++){
        kong[k].onmousemove = function(){
            conbei.style.height = 0;
        }
    }
    titbei.onmouseover = function(){
        conbei.style.height = 230+'px';
    }
    titbei.onmouseout = function(){
        conbei.style.height = 0;
    }
    for(let i = 0;i < cen.length;i++){
        cen[i].onmouseover = function(){
            for(let j = 0;j < navmenu.length;j++){
                navmenu[j].classList.remove("header_nav_menu_active");
            }
            navmenu[i].classList.add("header_nav_menu_active");
        }
    }

    //按需加载
    var agg = document.getElementsByClassName("ag");
    window.onscroll = function () {
        var bar = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || window.pageYOffset;
        for(var i = 0;i < agg.length;i++){
            var top = agg[i].offsetTop - 500;
            var imgg = agg[i].getElementsByTagName("img");
            if (bar > top){
                for(var j = 0;j <imgg.length;j++){
                    var dizhi = imgg[j].getAttribute("attr");
                    imgg[j].src = dizhi;
                }
            }
        }
    }

    //小米明星单品
    let star_con = document.querySelectorAll("rainbow");
    let star_anjian = document.getElementsByClassName("lrj_son");
    let star_zuoaj = star_anjian[0];
    let star_zuoaj = star_anjian[1];
}