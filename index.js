
var uriRe = /^([A-Za-z][A-Za-z0-9+\-.]*:)?([\/\\][\/\\](([^:/\\]*)?(:[^/\\]*)?@)?((\[[^\]]*\]|[^\[:/\\][^:/\\]*)?(:[^/\\]*)?))?([^?#]+)?(\?[^#]*)?(#.*)?$/;
// 1: scheme:
// 2: authority(//user:password@host:port)
// 3: user:password@
// 4: user
// 5: :password
// 6: host:port
// 7: host
// 8: :port
// 9: path
// 10: ?query
// 11: #fragment

function parseUriSimple(uri) {
    // console.log(uri);
    // var uriWk = uri.replace(/^[ \t\n]+/, "");
    // var uriWk = uri;
    // console.log(uriWk);
    var matches = uriRe.exec(uri);
    if (!matches) {
        // console.log("no match");
        return null;
    }
    // for (i = 1; i <= 10; i++) {
    //     console.log("[" + i + "]:\"" + matches[i] + "\"");    
    // }

    var r = {};
    r.href = uri;
    if (matches[1]) {
        r.scheme = matches[1].slice(0, -1);
    }

    if (matches[2]) {
        r.authority = matches[2].slice(2);
    }

    if (matches[3]) {
        r.userinfo = matches[3].slice(0, -1);
    }

    if (matches[4]) {
        r.username = matches[4];
    }

    if (matches[5]) {
        r.password = matches[5].slice(1);
        if (!("username" in r)) {
            r.username = "";
        }
    }

    if (matches[6]) {
        r.host = matches[6];
    }

    if (matches[7]) {
        r.hostname = matches[7];
    }

    if (matches[8]) {
        r.port = matches[8].slice(1);
    }

    if (matches[9]) {
        r.path = matches[9];
    }

    if (matches[10]) {
        r.query = matches[10].slice(1);
    }

    if (matches[11]) {
        r.fragment = matches[11].slice(1);
    }

    return r;
}

module.exports = parseUriSimple;
