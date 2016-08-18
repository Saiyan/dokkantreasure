
(function treasureCalc(){
    var me = this;
    var _endDate = new Date('Sun Oct 16 2016 08:00:00 GMT+0200');
    var _treasures = new Treasures();
    var _$itemsEle = $('#Calculator .items');
    var _daysLeft;
    var _gemsResult;

    function calcResult(){
        var result = 0;
        _$itemsEle.find('input:checked').each(function(){
            var cost = parseInt($(this).attr('data-cost'));
            result += cost;
        });
        _gemsResult = result;
        $('.result-gems').text(result);
    }

    function init() {
        var html = '';
        _treasures.getAll().forEach(function (t, i) {
            var checked = t.enabled ? ' checked="checked" ' : '';
            html+='<div>' +
                    '<label>' +
                        '<input type="checkbox" data-index="'+i+'" data-cost="'+t.cost+'" '+checked+' />'+
                        t.text +
                    '</label>' +
                '</div>';
        });
        _$itemsEle.html(html);

        _$itemsEle.find('input[type="checkbox"]').change(function(){
            var index = $(this).attr('data-index');
            var checked = $(this).prop('checked');
            _treasures.setEnabled(index, checked);
            calcResult();
            calcGemsPerDay();
        });

        $('.btn-save').click(function(){
            $(this).prop('disabled', true);
            _treasures.save();
            $(this).prop('disabled', false);
        });
    }

    var calcGemsPerDay = function () {
        var gpd =  Math.ceil(_gemsResult / _daysLeft.days);
        $('.gems-per-day').text(gpd);
    };

    function calcDaysLeft(){
        var now = new Date();
        var msec = _endDate - now;
        if(msec < 0)return;

        var days = Math.floor(msec / 1000 / 60 / 60 / 24);
        msec -= days * 1000 * 60 * 60 * 24;
        var hours = Math.floor(msec / 1000 / 60 / 60);
        msec -= hours * 1000 * 60 * 60;
        var mins = Math.floor(msec / 1000 / 60);
        msec -= mins * 1000 * 60;
        var ss = Math.floor(msec / 1000);
        //msec -= ss * 1000;

        _daysLeft = {
            days: days,
            hours: hours,
            min: mins
        };

        $('.days-left').text(days+'d '+hours+'h '+mins+'m');
    }

    _treasures.load();
    init();
    calcResult();
    calcDaysLeft();
    calcGemsPerDay();
})();