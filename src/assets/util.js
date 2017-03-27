export default{
    moneyFormat: function(money, refix, precision, n) {
        var prefix;
        if (isFinite(money)) {
            money = parseFloat(money);
        } else {
            money = 0;
        }
        if (money < 0) {
            money = money * -1;
            prefix = '-';
        }
        if (refix) {
            if (money >= 10000 * 10000) {
                money = toFloat(money / (10000 * 10000), precision) + '亿';
            } else if (money >= 10000) {
                money = toFloat(money / 10000, precision) + '万';
            } else {
                money = toFloat(money, precision);
            }
        } else {
            money = splitMoney(toFloat(money, precision), isFinite(n) ? n : 3);
        }
        if (prefix && parseFloat(money) > 0) {
            money = prefix + money;
        }
        return money;

        function splitMoney(money, n) {
            var i, tmp = money.split('.');
            n = parseInt(n);
            if (tmp.length > 1) {
                money = '.' + tmp[1];
            } else {
                money = '';
            }
            for (i = 0; i < tmp[0].length; i += n) {
                if (i < tmp[0].length - n) {
                    money = ',' + tmp[0].substr(-n - i, n) + money;
                } else {
                    money = tmp[0].substr(0, tmp[0].length - i) + money;
                }
            }
            return money;
        }

        function toFloat(money, precision) {
            if (!isFinite(precision)) {
                if (money % 1) {
                    precision = 2;
                } else {
                    precision = 0;
                }
            }
            var i, p = Math.pow(10, precision);
            money = (Math.round(money * p) / p).toString();
            if (precision > 0) {
                i = money.split('.')[1];
                for (i = i ? i.length : 0; i < precision; i++) {
                    if (i === 0) {
                        money += '.';
                    }
                    money += '0';
                }
            }
            return money;
        }
    },
    formatDate: function(time) {
        if (time <= 0) return '';
        var t, y, m, d, h, i, s;
        t = new Date(time * 1000);
        y = t.getFullYear();
        m = t.getMonth() + 1;
        if (m < 10) m = '0' + m;
        d = t.getDate();
        if (d < 10) d = '0' + d;
        return y + '-' + m + '-' + d;
    },
    formatTime: function(time) {
        if (time <= 0) return '';
        var t, y, m, d, h, i, s;
        t = new Date(time * 1000);
        y = t.getFullYear();
        m = t.getMonth() + 1;
        if (m < 10) m = '0' + m;
        d = t.getDate();
        if (d < 10) d = '0' + d;
        h = t.getHours();
        if (h < 10) h = '0' + h;
        i = t.getMinutes();
        if (i < 10) i = '0' + i;
        s = t.getSeconds();
        if (s < 10) s = '0' + s;
        return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
    }
}
