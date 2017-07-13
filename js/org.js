var i9X = {
    'P': function (e, c) {
        return e < c;
    },
    'b3': (function (F3) {
        return (function (k3, A3) {
            return (function (G3) {
                return {
                    s3: G3
                };
            })(function (y3) {
                var g3, M3 = 0;
                for (var u3 = k3; M3 < y3["length"]; M3++) {
                    var q3 = A3(y3, M3);
                    g3 = M3 === 0 ? q3 : g3 ^ q3;
                }
                return g3 ? u3 : !u3;
            });
        })((function (H3, Y3, h3, O3) {
            var x3 = 31;
            return 1;
        })(parseInt, Date, (function (Y3) {
            return ('' + Y3)["substring"](1, (Y3 + '')["length"] - 1);
        })('_getTime2'), function (Y3, h3) {
            return new Y3()[h3]();
        }), function (y3, M3) {
            var I3 = parseInt(y3["charAt"](M3), 16)["toString"](2);
            return I3["charAt"](I3["length"] - 1);
        });
    })('1l5obtqhg'),
    'b7': "length",
    'M': function (e, c) {
        return e - c;
    },
    'A7': 0,
    'F': function (e, c) {
        return e - c;
    },
    'C': function (e, c) {
        return e >= c;
    },
    'A': function (e, c, V) {
        return e - c - V;
    },
    'w': function (e, c, V) {
        return e - c - V;
    },
    's': function (e, c) {
        return e > c;
    }
};
 
function trace() {
    var e = i9X.b3.s3("6db3") ? "P" : "data",
        c = i9X.b3.s3("d521") ? "apply" : "call",
        V = i9X.b3.s3("1fcb") ? "log" : "Math",
        L = i9X.b3.s3("3354") ? "console" : "arguments";
    if (window[L]) console[V][c](window[L], arguments);
    else for (var f = i9X.A7; i9X[e](f, arguments[i9X.b7]); f++) alert(arguments[f]);
}(function (X, r7) {
    var m = i9X.b3.s3("f2f8") ? "addClass" : "Main",
        E = i9X.b3.s3("1b61") ? "resize" : "fadeOut",
        v = i9X.b3.s3("8a") ? "a" : "bind",
        N = i9X.b3.s3("34a") ? "#nav" : "scroll",
        Z = i9X.b3.s3("bca5") ? "resize" : "#header",
        X7 = i9X.b3.s3("bb3c") ? "addClass" : "unbind",
        K = i9X.b3.s3("f6d") ? "h" : "removeClass",
        H = "open",
        e7 = i9X.b3.s3("d278") ? "h" : "click",
        Q = "on",
        L7 = "subPMain",
        O = i9X.b3.s3("d1") ? "scroll" : "page",
        o = "height",
        G = 1,
        j = "show",
        c7 = "remove",
        S7 = "scrollLoad",
        C7 = "components",
        f7 = function (e) {
            var c = "YY";
            window[c] = e;
        }, y = {
            data: {},
            page: {},
            components: {}
        };
    y[O][m] = function () {
        var T = i9X.b3.s3("5a") ? "head script" : "e",
            B = i9X.b3.s3("e26d") ? "attach" : "d",
            i = i9X.b3.s3("b7e") ? "attach" : "call",
            t = i9X.b3.s3("8f86") ? "data-main" : "maxpage",
            a = "script[data-main]",
            z = "A",
            q = i9X.b3.s3("ad") ? "#openlc" : "",
            n = "rgba(0,0,0,.5)",
            D = "css",
            r = "body",
            I = "attr",
            b = "#bgmask",
            u = "",
            k = i9X.b3.s3("af1b") ? u : "b",
            Y = function (c) {
                var V = "off";
                var L = i9X.b3.s3("78") ? "hide" : "apply";
                var f = "click.open";
                var S = "style";
                c ? (k = i9X.b3.s3("87") ? X(b)[I](S) : "c", X(q)[X7](H), X(r)[X7](H), X(b)[j]()[Q](f, function (
                    e) {
                    Y(!G);
                }),X(q)[Q](f, function (
                    e) {
                    Y(!G);
                })) : (X(q)[K](H), X(r)[K](H), X(b)[L]()[V](f), X(b)[I](S, k),X(q)[Q](f, function (
                    e) {
                    Y(G);
                }));
            };
        X(b)[D]({
            background: n
        });
        if (X(q)[i9X.b7]) X(q)[Q](e7, function (e) {
                Y(!i9X.A7);
            });
        var h = X(a)[I](t);
        h && y[O][h] && y[O][h][i]();
        //FastClick[B](document[r]);
        X(T)[c7]();
    };
    f7(y);
    X(y[O][m]);
})(jQuery);