! function(e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(a, r, function(t) {
                return e[t]
            }.bind(null, r));
        return a
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    n.r(t);
    n(19);
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var r = function() {
            function e(t) {
                var n = t.el;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.el = n
            }
            return a(e, [{
                key: "render",
                value: function() {
                    this.el.classList.add("chat"), this.el.innerHTML = '\n      <div class="chat-header">\n        <h1 class="chat-header__name">Mangosteen Chat</h1>\n      </div>\n    '
                }
            }]), e
        }(),
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.events = {}
            }
            return i(e, [{
                key: "emit",
                value: function(e, t) {
                    var n = this;
                    (this.events[e.type] || []).forEach(function(e) {
                        e.call(n, t)
                    })
                }
            }, {
                key: "subscribe",
                value: function(e, t) {
                    var n = this;
                    return this.events[e] || (this.events[e] = []), this.events[e].push(t),
                        function() {
                            n.events[e] = n.events[e].filter(function(e) {
                                return t !== e
                            })
                        }
                }
            }]), e
        }(),
        o = (n(17), function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }());
    var c = function(e) {
        function t(e) {
            var n = e.el;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var a = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return a.el = n, a.init(), a
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, s), o(t, [{
            key: "render",
            value: function() {
                this.el.classList.add("chat-controls"), this.el.innerHTML = '\n      <form>\n        <div contenteditable="true" class="chat-controls__textarea" placeholder="Type a message"></div>\n        <div class="chat-controls-buttons">\n          <input type="submit" value="Send" class="chat-controls-buttons__send">\n          <div class="spinner"></div>\n          <div class="chat-controls-buttons-wrapper">\n            <div class="emoji"></div>\n            <div class="files"></div>\n          </div>\n        </div>\n      </form>\n    '
            }
        }, {
            key: "init",
            value: function() {
                this.el.addEventListener("submit", this.onSubmit.bind(this))
            }
        }, {
            key: "onSubmit",
            value: function(e) {
                e.preventDefault();
                var n = e.target.querySelector(".chat-controls__textarea");
                if (this.msg = n.innerHTML, -1 === this.msg.indexOf("message__newImg") && (this.msg = n.textContent.trim().replace(/<\/?[^>]+>/g, "")), "" !== this.msg) {
                    var a = new Event(t.MSG_SEND_EVENT, {
                        bubbles: !0
                    });
                    this.emit(a)
                }
                n.innerHTML = ""
            }
        }]), t
    }();
    c.MSG_SEND_EVENT = "message:send";
    n(15);
    var l = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var u = function() {
            function e(t) {
                var n = t.el,
                    a = t.parent;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.el = n, this.parent = a
            }
            return l(e, [{
                key: "render",
                value: function() {
                    this.el.classList.add("spinner-loader__wrapper"), this.parent.querySelector(".spinner").append(this.el)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this.parent.querySelector(".chat-controls__textarea"),
                        t = this.parent.querySelector(".spinner-loader__wrapper");

                    function n() {
                        t.classList.remove("spinner-loader")
                    }
                    e.addEventListener("keypress", function() {
                        t.classList.add("spinner-loader"), setTimeout(n, 3e3)
                    })
                }
            }]), e
        }(),
        f = (n(13), function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }());
    var h = function() {
            function e(t) {
                var n = t.el,
                    a = t.parent;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.el = n, this.parent = a
            }
            return f(e, [{
                key: "render",
                value: function() {
                    this.el.classList.add("chat-controls-buttons__smiles"), this.el.innerHTML = '\n      <img src="../src/assets/img/smile.png">\n        <div class="chat-controls-buttons__smiles-menu">\n          <div class="chat-controls-buttons__smile" data-emoji>😑</div>\n          <div class="chat-controls-buttons__smile" data-emoji>😕</div>\n          <div class="chat-controls-buttons__smile" data-emoji>😊</div>\n          <div class="chat-controls-buttons__smile" data-emoji>😎</div>\n          <div class="chat-controls-buttons__smile" data-emoji>💪</div>\n        </div>\n    ', this.parent.querySelector(".emoji").append(this.el)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this.parent.querySelector(".chat-controls__textarea");
                    this.el.querySelectorAll("[data-emoji]").forEach(function(t) {
                        return t.addEventListener("click", function() {
                            e.innerHTML += this.innerHTML
                        })
                    })
                }
            }]), e
        }(),
        d = (n(11), function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }());
    var m = function() {
            function e(t) {
                var n = t.el,
                    a = t.parent;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.el = n, this.parent = a
            }
            return d(e, [{
                key: "render",
                value: function() {
                    this.el.innerHTML = '\n      <input type="file" id="chat-controls-buttons__upload" multiple accept="file_extension">\n      <label class="chat-controls-buttons__attach" for="chat-controls-buttons__upload">\n        <i class="fa fa-paperclip"></i>\n      </label>\n    ', this.parent.querySelector(".files").append(this.el)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this.parent.querySelector(".chat-controls__textarea"),
                        t = this.el.querySelector("#chat-controls-buttons__upload");

                    function n(t) {
                        var n = new FileReader;
                        n.readAsDataURL(t), n.onloadend = function() {
                            if ("image/jpeg" === t.type || "image/png" === t.type || "image/gif" === t.type) {
                                var a = document.createElement("img");
                                a.src = n.result, a.classList.add("message__newImg"), e.appendChild(a)
                            } else {
                                var r = document.createElement("img");
                                r.src = "../src/assets/img/doc.png", r.classList.add("message__newImg"), e.appendChild(r)
                            }
                        }
                    }
                    t.addEventListener("change", function(e) {
                        (e = [].concat(function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                            return Array.from(e)
                        }(e.target.files))).forEach(n)
                    }.bind(t.files))
                }
            }]), e
        }(),
        p = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var v = function() {
            function e(t) {
                var n = t.el,
                    a = t.msg;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.el = n, this.msg = a, this.optionsDate = {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: !1
                }, this.obj = {
                    type: "me",
                    author: "Mark Bennington",
                    time: "" + (new Date).toLocaleString("en-US", this.optionsDate),
                    avatar: "../src/assets/img/mark.png"
                }
            }
            return p(e, [{
                key: "template",
                value: function() {
                    return '\n      <div class="chat-item chat-item-me">\n        <img class="chat-item__img" src="' + this.obj.avatar + '" alt="avatar">\n        <div class="message">\n          <span class="message__user-name">' + this.obj.author + '</span>\n          <i class="fa fa-clock-o"></i>\n          <time class="message__time">' + this.obj.time + '</time>\n          <p class="message__text">' + this.msg.msg + "</p>\n        </div>\n      </div>\n    "
                }
            }, {
                key: "render",
                value: function() {
                    this.el.innerHTML += this.template()
                }
            }, {
                key: "scroll",
                value: function() {
                    this.el.scrollIntoView(!1)
                }
            }]), e
        }(),
        b = (n(9), function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }());
    var y = function() {
            function e(t) {
                var n = t.el,
                    a = t.data;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.el = n, this.data = a, this.arr = []
            }
            return b(e, [{
                key: "template",
                value: function(e) {
                    var t = this;
                    return e.stack.forEach(function(e, n) {
                        "me" === e.type && t.arr.push('\n          <div class="chat-item chat-item-me">\n            <img class="chat-item__img" src="' + t.data.stack[n].avatar + '" alt="avatar">\n            <div class="message">\n              <span class="message__user-name">' + t.data.stack[n].author + '</span>\n              <i class="fa fa-clock-o"></i>\n              <time class="message__time">' + t.data.stack[n].time + '</time>\n              <p class="message__text">' + t.data.stack[n].msg + "</p>\n            </div>\n          </div>\n        "), "other" === e.type && t.arr.push('\n          <div class="chat-item chat-item-other">\n            <div class="message">\n              <span class="message__user-name">' + t.data.stack[n].author + '</span>\n              <i class="fa fa-clock-o"></i>\n              <time class="message__time">' + t.data.stack[n].time + '</time>\n              <p class="message__text">' + t.data.stack[n].msg + '</p>\n            </div>\n            <img class="chat-item__img" src="' + t.data.stack[n].avatar + '" alt="avatar">\n          </div>\n        ')
                    }), this.arr.join("")
                }
            }, {
                key: "render",
                value: function() {
                    this.el.classList.add("chat-history"), this.el.innerHTML = this.template(this.data)
                }
            }]), e
        }(),
        g = (n(7), n(5), n(3), function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }());
    var _ = function() {
            function e(t) {
                var n = this,
                    a = t.el,
                    i = t.data;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.el = a, this.chat = new r({
                    el: document.createElement("div")
                }), this.field = new c({
                    el: document.createElement("div")
                }), this.field.subscribe(c.MSG_SEND_EVENT, function() {
                    n.message.render(), n.messages.el.append(n.message.el), n.message.scroll()
                }), this.spinner = new u({
                    el: document.createElement("div"),
                    parent: this.field.el
                }), this.emoji = new h({
                    el: document.createElement("div"),
                    parent: this.field.el
                }), this.files = new m({
                    el: document.createElement("div"),
                    parent: this.field.el
                }), this.message = new v({
                    el: document.createElement("div"),
                    msg: this.field
                }), this.messages = new y({
                    el: document.createElement("div"),
                    data: {
                        stack: i.stack
                    }
                })
            }
            return g(e, [{
                key: "render",
                value: function() {
                    this.chat.render(), this.messages.render(), this.field.render(), this.spinner.render(), this.emoji.render(), this.files.render(), this.el.append(this.chat.el), this.chat.el.append(this.messages.el, this.field.el)
                }
            }, {
                key: "init",
                value: function() {
                    this.spinner.init(), this.emoji.init(), this.files.init()
                }
            }, {
                key: "run",
                value: function() {
                    this.render(), this.init()
                }
            }]), e
        }(),
        w = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var k = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.url = t
            }
            return w(e, [{
                key: "getMessages",
                value: function() {
                    return fetch(this.url).then(function(e) {
                        if (200 === e.status) return e.json();
                        console.error("Looks like there was a problem. Status Code: " + e.status)
                    }).then(function(e) {
                        return e
                    })
                }
            }]), e
        }(),
        j = {
            el: document.querySelector("#chat"),
            data: {
                stack: []
            }
        };
    new k("https://mangosteen-chat.firebaseio.com/chat.json").getMessages().then(function(e) {
        return j.data.stack = e, j
    }).then(function(e) {
        new _(e).run()
    })
}, , , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}]);
//# sourceMappingURL=bundle.ee53b4cd773cd6772237.js.map