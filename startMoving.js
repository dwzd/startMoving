
var oBox1 = document.getElementById('box1');
var oBox2 = document.getElementById('box2');
var oBox3 = document.getElementById('box3');
var oBox4 = document.getElementById('box4');
var oBox5 = document.getElementById('box5');

    oBox1.onmouseover = function () {
        // alert(9);
        startMove(this, 'width', 300);
    }
    oBox1.onmouseout = function () {
        startMove(this, 'width', 120);
    }

    oBox2.onmouseover = function () {

        startMove(this, 'height', 300);
    }
    oBox2.onmouseout = function () {
        startMove(this, 'height', 100);
    }

    oBox3.onmouseover = function () {
        startMove(this, 'fontSize', 30);
    }
    oBox3.onmouseout = function () {
        startMove(this, 'fontSize', 12);
    }

    oBox4.onclick = function () {
        startMove(this, 'left', 200);
    }

    oBox5.onclick = function () {
        startMove(this, 'top', 600);
    }
    function startMove(obj, att, target) {
        clearInterval(obj.timer);

        var speed = 0;
        //操作的属性
        var currentValue = 0;
        
        obj.timer = setInterval(function () {
            //当前值
            currentValue = getStyle(obj, att);
            //设速度
            speed = (target - currentValue)/7;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //运动处理
            currentValue += speed;
            if(currentValue == target){
                clearInterval(obj.timer);
            }else {
                obj.style[att] = currentValue + 'px';
            }
        }, 60);
    }

    function getStyle(obj, att) {
        return parseInt(window.getComputedStyle ? getComputedStyle(obj)[att] : obj.currentStyle[att]);
    }