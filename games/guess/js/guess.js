var number = random(1, 101);
var guess_num = 0;

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function check() {
    guess_num = guess_num + 1;
    var input_number = document.getElementById("num").value;
    var input_number_int = parseInt(input_number);
    if (input_number_int >= 1 && input_number_int <= 100) {
        if (input_number_int == number) {
            $("#tishi").removeClass("btn-outline-danger");
            $("#tishi").removeClass("btn-outline-primary");
            $("#tishi").addClass("btn-outline-success");
            $("#tishi").html("(*╹▽╹*) 猜对啦! (*╹▽╹*)<br>(*╹▽╹*) 你一共猜了" + guess_num + "次 (*╹▽╹*)");
            $("#num").attr("disabled", "disabled");
            $("#conf").attr("disabled", "disabled");
            $("#rs").show();
            console.clear();
        } else if (input_number_int < number) {
            $("#tishi").removeClass("btn-outline-danger");
            $("#tishi").removeClass("btn-outline-primary");
            $("#tishi").removeClass("btn-outline-success");
            $("#tishi").addClass("btn-outline-danger");
            $("#num").val("");
            $("#tishi").html("(*╹▽╹*) 猜小啦! (*╹▽╹*)");
            console.clear();
        } else if (input_number_int > number) {
            $("#tishi").removeClass("btn-outline-danger");
            $("#tishi").removeClass("btn-outline-primary");
            $("#tishi").removeClass("btn-outline-success");
            $("#tishi").addClass("btn-outline-danger");
            $("#num").val("");
            $("#tishi").html("(*╹▽╹*) 猜大啦! (*╹▽╹*)");
            console.clear();
        }
    } else {
        $("#tishi").removeClass("btn-outline-primary");
        $("#tishi").addClass("btn-outline-danger");
        $("#num").val("");
        $("#tishi").html("你的输入不合法");
        console.clear();
    }
}

function reset() {
    number = random(1, 101);
    guess_num = 0;
    $("#tishi").removeClass("btn-outline-danger");
    $("#tishi").removeClass("btn-outline-primary");
    $("#tishi").removeClass("btn-outline-success");
    $("#tishi").addClass("btn-outline-primary");
    $("#tishi").html("(*╹▽╹*) 提示区 (*╹▽╹*)");
    $("#num").removeAttr("disabled");
    $("#conf").removeAttr("disabled");
    $("#num").val("");
    $("#rs").hide();
    console.clear();
}