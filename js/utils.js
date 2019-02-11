/**
 * Created by qiujun on 15/10/17.
 */
var Utils = {
    checkDevice: function() {
        var ua = navigator.userAgent;
        var device = 'ios';
        if (ua.match(/android/i)) {
            device = 'android';
        } else if(ua.match(/iphone|ipad|ipod/i)) {
            device = 'ios';
        } else {
            device = 'ios';
        }

        return device;
    },
    setCookie: function(name, value, expires) {
        var date;

        if (typeof value !== 'undefined') {
            if (value === null) {
                value = '';
                expires = -1;
            }

            if (expires &&
                (typeof expires === 'number' || expires.toUTCString)) {
                if (typeof expires === 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
                } else {
                    date = expires;
                }
                expires = '; expires=' + date.toUTCString();
            } else {
                date = new Date();
                expires = '; expires=' + date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
            }
            document.cookie = [name, '=', encodeURIComponent(value), expires].join('');
        }
    },
    getCookie: function(name) {
        var arr,
            reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if (arr = document.cookie.match(reg)) {
            return decodeURIComponent(arr[2]);
        } else {
            return null;
        }
    },
    delCookie: function(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval !== null && cval !== undefined) {
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    },
    setlocalData: function(name, value) {
        if (this.checkDevice() === 'ios') {
            localStorage.setItem(name, value);
        }
        if (this.checkDevice() === 'android') {
            this.setCookie(name, value);
        }
    },
    getlocalData: function(name) {
        var value = '';
        if (this.checkDevice() === 'ios') {
            value = localStorage.getItem(name);
        }
        if (this.checkDevice() === 'android') {
            value = this.getCookie(name)
        }
        return value;
    },
    dellocalData: function(name) {
        if (this.checkDevice() === 'ios') {
            localStorage.removeItem(name);
        }
        if (this.checkDevice() === 'android') {
            this.delCookie(name);
        }
    },
    manageQueryString: function() {
        var loc = document.location.href;
        var variables = '';
        var variableArr = [];
        var finalArr = [];

        if(loc.indexOf('?') > 0) {
            variables = loc.split('?')[1];
        }

        if(variables.length > 0) {
            variableArr = variables.split('&');
        }

        for (var i = 0; i < variableArr.length; i ++) {
            var obj = {};
            obj.name = variableArr[i].split('=')[0];
            obj.value = variableArr[i].split('=')[1];
            finalArr.push(obj);
        }

        return finalArr;
    },
    getQueryObj: function() {
        var query_arr = this.manageQueryString();
        var query_obj = {};
        for(var i = 0; i < query_arr.length; i ++) {
            query_obj[query_arr[i].name] = query_arr[i].value;
        }

        return query_obj;
    },
    /**
     * 把地址栏参数转换成对象(有货的方法)
     * @param str
     * @returns {{}}
     */
    getQueryStringObject: function(str) {
        var vars = {},
            hashes,
            hash,
            i;

        str = str || '';

        if (str) {
            hashes = str.split('&');
            for (i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars[hash[0]] = hash[1];
            }
        }
        return vars;
    },
    /**
     * 获取webkitTransform中的参数对象
     * @param transform
     * @returns {{}}
     */
    getTransform: function(transform) {
        var tArr = transform.split(' ');
        var transObj = {};
        if (tArr.length > 0) {
            for (var i = 0; i < tArr.length; i++) {
                var obj = {};
                var itemArr = tArr[i].split('(');
                //console.log(itemArr);
                var trans_name = itemArr[0];
                var trans_value = itemArr[1].replace(')', '');
                //console.log(trans_name,trans_value);
                if (trans_name == 'translateX') {
                    transObj.translateX = trans_value;
                }
                else if (trans_name == 'translateY') {
                    transObj.translateY = trans_value;
                }
                else if (trans_name == 'rotate') {
                    transObj.rotate = trans_value;
                }
                else if (trans_name == 'rotateY') {
                    transObj.rotateY = trans_value;
                }
            }
        }
        //console.log(transObj);
        return transObj;
    },
    /**
     * 获得字符串实际长度，中文2，英文1
     * @param str 输入的字符串
     */
    getStrLength: function(str) {
        var realLength = 0, len = str.length, charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) realLength += 1;
            else realLength += 2;
        }
        return realLength;
    },
    /**
     * js截取字符串，中英文都能用
     * @param str：需要截取的字符串
     * @param len: 需要截取的长度
     */
    cutStr: function(str, len) {
        var str_length = 0;
        var str_len = 0;
        str_cut = '';
        str_len = str.length;
        for (var i = 0; i < str_len; i++) {
            a = str.charAt(i);
            str_length++;
            if (encodeURIComponent(a).length > 4) {
                //中文字符的长度经编码之后大于4
                str_length++;
            }
            str_cut = str_cut.concat(a);
            if (str_length >= len) {
                // str_cut = str_cut.concat("...");
                return str_cut;
            }
        }
        //如果给定字符串小于指定长度，则返回源字符串；
        if (str_length < len) {
            return str;
        }
    },
    /**
     * 创建一个视频html
     * @param id
     * @param src
     * @returns {string}
     */
    getVideo: function(id, src) {
        var video_html =
            '<video id="' + id + '" style="width:1px;height:1px;" preload="auto" webkit-playsinline playsinline controls="controls">' +
            '<source src="' + src + '" type="video/mp4">' +
            '</video>';

        return video_html;
    },
    initRequestAnimationFrames: function() {
        var prefix;
        //通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
        for (var i = 0; i < prefixes.length; i++) {
            if (requestAnimationFrame && cancelAnimationFrame) {
                break;
            }
            prefix = prefixes[i];
            requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
            cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
        }

        //如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
        if (!requestAnimationFrame || !cancelAnimationFrame) {
            requestAnimationFrame = function (callback) {
                var currTime = new Date().getTime();
                //为了使setTimteout的尽可能的接近每秒60帧的效果
                var timeToCall = Math.max(0, 16 - ( currTime - lastTime ));
                var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

            cancelAnimationFrame = function (id) {
                window.clearTimeout(id);
            };
        }

        //得到兼容各浏览器的API
        window.requestAnimationFrame = requestAnimationFrame;
        window.cancelAnimationFrame = cancelAnimationFrame;
    }
};