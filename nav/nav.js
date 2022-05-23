var baidu = true;
var google = false;

function changeSearch(search) {
    if (search == "baidu") {
        google = true;
        baidu = false;
    } else if (search == "google") {
        baidu = true;
        google = false;
    }
    $("#baidu").toggle();
    $("#google").toggle();
}

function search() {
    if (baidu == true) {
        var base_url = "https://www.baidu.com/s?wd=";
        var content = document.getElementById("content").value;
        var search_url = base_url + content;
        window.open(search_url);
    } else if (google == true) {
        var base_url = "https://www.google.com.hk/search?q=";
        var content = document.getElementById("content").value;
        var search_url = base_url + content + "&newwindow=1";
        window.open(search_url);
    }
}

function urlchange(url) {
    if (url == "code-nav") {
        window.open("https://www.code-nav.cn/");
    } else if (url == "bilibili") {
        window.open("https://www.bilibili.com/");
    } else if (url == "github") {
        window.open("https://github.com");
    } else if (url == "cnblogs") {
        window.open("https://www.cnblogs.com");
    } else if (url == "w3school") {
        window.open("https://www.w3school.com.cn");
    } else if (url == "csdn") {
        window.open("https://www.csdn.net");
    } else if (url == "jianshu") {
        window.open("https://www.jianshu.com");
    } else if (url == "dashi") {
        window.open("https://dashi.163.com/login");
    } else if (url == "zhihu") {
        window.open("https://www.zhihu.com");
    }
}

$(document).ready(function() {
    $("#content").keypress(function(e) {
        if (e.keyCode == 13)
            search();
    });
});