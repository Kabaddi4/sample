const apikey = 'DEMO_KEY';

$(function () {
    $('#update').click(function (event) {
        let param = {
            date: $('#image-date').val(),
            api_key: apikey
        };
        console.log(param);

        $.ajax({
            type: 'GET',
            data: param,
            url: 'https://api.nasa.gov/planetary/apod',
            dataType: 'json',
        })
        //成功
        .done(function (res) {
            console.log(res.core);       
            $('#apod-image').attr('src', res.url);
            $('#apod-title').html(res.title);
            $('#apod-desc').html(res.explanation);
            $('#apod-date').html(res.date);
            $('#apod-copy').html(res.copyright);          
        })
        //失敗
        .fail(function (res) {
            $('#apod').html('対象外の日付を入力したか通信エラーです<br>ブラウザをリロードしてきてください。');
        });
    });
})