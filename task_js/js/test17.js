function htmlString(prefcode, address1, address2) {
    let html = ''
    html += '<ul>';
    html += '<li>都道府県コード:' + prefcode + '</li>';
    html += '<li>都道府県:' + address1 + '</li>';
    html += '<li>都道府県:' + address2 + '</li>';
    return html;
}

$(function () {
    $('.search').click(function(event){
        let param = {zipcode:$('#zipcode').val()}

        $.ajax({
            type: 'GET',

            data: param,

            url: 'https://zipcloud.ibsnet.co.jp/api/search',

            dataType: 'jsonp',
        })
        .done(function(res) {
            if (res.status == 200) {

                let html = '';
                for (let i = 0; i< res.results.length; i++) {
                    let r = res.results[i];
                    console.log(r);
                    html += '<h3>住所' + (i + 1) + '</h3>';
                    html += htmlString(r.prefcode, r.address1, r.address2);
                }
            } else {
                $("#zip_result").html(res.message);
            }
        })
        .fail(function(res){
            $("#zip_result").html('通信エラー');
        });
    });
});