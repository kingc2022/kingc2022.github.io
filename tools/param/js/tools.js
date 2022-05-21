function title(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

function ChangeTdValueById(id, value) {
    if (id == "rf" && document.referrer == '') {
        document.getElementById(id).innerHTML = '<td class="text-center" id=' + id + ' >' + 'Undefined' + '</td>';
    } else {
        document.getElementById(id).innerHTML = '<td class="text-center" id=' + id + ' >' + value + '</td>';
    }
}

function getOS() {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.userAgentData.platform == "Win32") || (navigator.userAgentData.platform == "Windows");
    var isMac = (navigator.userAgentData.platform == "Mac68K") || (navigator.userAgentData.platform == "MacPPC") || (navigator.userAgentData.platform == "Macintosh") || (navigator.userAgentData.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.userAgentData.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.userAgentData.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "XP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "2003";
        var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "Vista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "7";
        var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10) return "10";
    }
    return "other";
}

function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();
    var arr = [];
    var system = agent.split(' ')[1].split(' ')[0].split('(')[1];
    arr.push(system);
    var regStr_edge = /edge\/[\d.]+/gi;
    var regStr_ie = /trident\/[\d.]+/gi;
    var regStr_ff = /firefox\/[\d.]+/gi;
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;
    var regStr_opera = /opr\/[\d.]+/gi;
    //IE
    if (agent.indexOf("trident") > 0) {
        arr.push(agent.match(regStr_ie)[0].split('/')[0]);
        arr.push(agent.match(regStr_ie)[0].split('/')[1]);
        return arr;
    }
    //Edge
    if (agent.indexOf('edge') > 0) {
        arr.push(agent.match(regStr_edge)[0].split('/')[0]);
        arr.push(agent.match(regStr_edge)[0].split('/')[1]);
        return arr;
    }
    //firefox
    if (agent.indexOf("firefox") > 0) {
        arr.push(agent.match(regStr_ff)[0].split('/')[0]);
        arr.push(agent.match(regStr_ff)[0].split('/')[1]);
        return arr;
    }
    //Opera
    if (agent.indexOf("opr") > 0) {
        arr.push(agent.match(regStr_opera)[0].split('/')[0]);
        arr.push(agent.match(regStr_opera)[0].split('/')[1]);
        return arr;
    }
    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        arr.push(agent.match(regStr_saf)[0].split('/')[0]);
        arr.push(agent.match(regStr_saf)[0].split('/')[1]);
        return arr;
    }
    //Chrome
    if (agent.indexOf("chrome") > 0) {
        arr.push(agent.match(regStr_chrome)[0].split('/')[0]);
        arr.push(agent.match(regStr_chrome)[0].split('/')[1]);
        return arr;
    } else {
        arr.push('Undefined')
        return arr;
    }
}

function getBrowserLang() {
    var currentLang = navigator.language;
    if (!currentLang) {
        currentLang = navigator.browserLanguage;
    }
    return currentLang;
}

function get_ios_version() {
    var ua = navigator.userAgent.toLowerCase();
    var version = null;
    if (ua.indexOf("like mac os x") > 0) {
        var reg = /os [\d._]+/gi;
        var v_info = ua.match(reg);
        version = (v_info + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, "."); //得到版本号9.3.2或者9.0
        version = parseInt(version.split('.')[0]); // 得到版本号第一位
    }

    return version;
}

function get_android_version() {
    var ua = navigator.userAgent.toLowerCase();
    var version = null;
    if (ua.indexOf("android") > 0) {
        var reg = /android [\d._]+/gi;
        var v_info = ua.match(reg);
        version = (v_info + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, "."); //得到版本号4.2.2
        version = parseInt(version.split('.')[0]); // 得到版本号第一位
    }

    return version;
}

function clipboard(str) {
    var text = str;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        // 隐藏此输入框
        textarea.style.position = 'fixed';
        textarea.style.clip = 'rect(0 0 0 0)';
        textarea.style.top = '10px';
        // 赋值
        textarea.value = text;
        // 选中
        textarea.select();
        // 复制
        document.execCommand('copy', true);
        // 移除输入框
        document.body.removeChild(textarea);
    }
    console.clear();
}