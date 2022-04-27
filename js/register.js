window.onload = function () { centerObject('loginArea'); };
//验证对象是否为空
function validate_required(traget) {
    if (traget.value == null || traget.value == "") {
        return false;
    }
    return true;
}
//验证码
function validate_research(traget) {
    if (traget.value==96123) {
        return true;
    }
    return false;
}
//验证两字符串内容是否相通
function valid_string_equal(str1, str2) {
    if (str1.value == str2.value) {
        return true;
    }
    return false;
}
//验证字符ch是否均为数字
function valid_character(ch) {
    if (ch >= "0" && ch <= "9") {
        return false;
    }
    return true;
}
//验证字符串长度是否合适
function valid_length(str, min, max) {
    if (str.length >= min && str.length <= max) {
        return true;
    }
    return false;
}
//验证emali是否符合规范
function valid_email(email) {
    var apos = email.indexOf("@");
    if (apos == -1) {
        return false;
    }
    var dotpos = email.lastIndexOf(".");
    if (dotpos - apos < 2) {
        return false;
    }
    else{}
    return true;
}
