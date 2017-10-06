var templateItem = Handlebars.compile($('#item-full-template').html());
var templateCategory = Handlebars.compile($('#item-item-template').html());
var $itemsList = $('#items_full');
var $itemsCategpries = $('#items_list');
$.getJSON('data/news.json').done( function (d) {
    var result = '';
    var categories = '';
    for (var i=0;i<d.data.length;++i){
        d.data[i].id=i;
        result += templateItem(d.data[i]);
        categories += templateCategory({id:i, header:d.data[i].header});
    }
    $itemsList.html(result);
    $itemsCategpries.html(categories);
}).fail(function(e) {
    console.log( "error",e );
});