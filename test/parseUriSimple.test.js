var parseUriSimple = require("../index");
test("input: \"http://example\\t.\\norg\"", () => {
    expect(parseUriSimple("http://example\t.\norg")).toMatchSnapshot();
});
test("input: \"http://user:pass@foo:21/bar;par?b#c\"", () => {
    expect(parseUriSimple("http://user:pass@foo:21/bar;par?b#c")).toMatchSnapshot();
});
test("input: \"https://test:@test\"", () => {
    expect(parseUriSimple("https://test:@test")).toMatchSnapshot();
});
test("input: \"https://:@test\"", () => {
    expect(parseUriSimple("https://:@test")).toMatchSnapshot();
});
test("input: \"non-special://test:@test/x\"", () => {
    expect(parseUriSimple("non-special://test:@test/x")).toMatchSnapshot();
});
test("input: \"non-special://:@test/x\"", () => {
    expect(parseUriSimple("non-special://:@test/x")).toMatchSnapshot();
});
test("input: \"http:foo.com\"", () => {
    expect(parseUriSimple("http:foo.com")).toMatchSnapshot();
});
test("input: \"\\t   :foo.com   \\n\"", () => {
    expect(parseUriSimple("\t   :foo.com   \n")).toMatchSnapshot();
});
test("input: \" foo.com  \"", () => {
    expect(parseUriSimple(" foo.com  ")).toMatchSnapshot();
});
test("input: \"a:\\t foo.com\"", () => {
    expect(parseUriSimple("a:\t foo.com")).toMatchSnapshot();
});
test("input: \"http://f:21/ b ? d # e \"", () => {
    expect(parseUriSimple("http://f:21/ b ? d # e ")).toMatchSnapshot();
});
test("input: \"lolscheme:x x#x x\"", () => {
    expect(parseUriSimple("lolscheme:x x#x x")).toMatchSnapshot();
});
test("input: \"http://f:/c\"", () => {
    expect(parseUriSimple("http://f:/c")).toMatchSnapshot();
});
test("input: \"http://f:0/c\"", () => {
    expect(parseUriSimple("http://f:0/c")).toMatchSnapshot();
});
test("input: \"http://f:00000000000000/c\"", () => {
    expect(parseUriSimple("http://f:00000000000000/c")).toMatchSnapshot();
});
test("input: \"http://f:00000000000000000000080/c\"", () => {
    expect(parseUriSimple("http://f:00000000000000000000080/c")).toMatchSnapshot();
});
test("input: \"http://f:b/c\"", () => {
    expect(parseUriSimple("http://f:b/c")).toMatchSnapshot();
});
test("input: \"http://f: /c\"", () => {
    expect(parseUriSimple("http://f: /c")).toMatchSnapshot();
});
test("input: \"http://f:\\n/c\"", () => {
    expect(parseUriSimple("http://f:\n/c")).toMatchSnapshot();
});
test("input: \"http://f:fifty-two/c\"", () => {
    expect(parseUriSimple("http://f:fifty-two/c")).toMatchSnapshot();
});
test("input: \"http://f:999999/c\"", () => {
    expect(parseUriSimple("http://f:999999/c")).toMatchSnapshot();
});
test("input: \"non-special://f:999999/c\"", () => {
    expect(parseUriSimple("non-special://f:999999/c")).toMatchSnapshot();
});
test("input: \"http://f: 21 / b ? d # e \"", () => {
    expect(parseUriSimple("http://f: 21 / b ? d # e ")).toMatchSnapshot();
});
test("input: \"\"", () => {
    expect(parseUriSimple("")).toMatchSnapshot();
});
test("input: \"  \\t\"", () => {
    expect(parseUriSimple("  \t")).toMatchSnapshot();
});
test("input: \":foo.com/\"", () => {
    expect(parseUriSimple(":foo.com/")).toMatchSnapshot();
});
test("input: \":foo.com\\\\\"", () => {
    expect(parseUriSimple(":foo.com\\")).toMatchSnapshot();
});
test("input: \":\"", () => {
    expect(parseUriSimple(":")).toMatchSnapshot();
});
test("input: \":a\"", () => {
    expect(parseUriSimple(":a")).toMatchSnapshot();
});
test("input: \":/\"", () => {
    expect(parseUriSimple(":/")).toMatchSnapshot();
});
test("input: \":\\\\\"", () => {
    expect(parseUriSimple(":\\")).toMatchSnapshot();
});
test("input: \":#\"", () => {
    expect(parseUriSimple(":#")).toMatchSnapshot();
});
test("input: \"#\"", () => {
    expect(parseUriSimple("#")).toMatchSnapshot();
});
test("input: \"#/\"", () => {
    expect(parseUriSimple("#/")).toMatchSnapshot();
});
test("input: \"#\\\\\"", () => {
    expect(parseUriSimple("#\\")).toMatchSnapshot();
});
test("input: \"#;?\"", () => {
    expect(parseUriSimple("#;?")).toMatchSnapshot();
});
test("input: \"?\"", () => {
    expect(parseUriSimple("?")).toMatchSnapshot();
});
test("input: \"/\"", () => {
    expect(parseUriSimple("/")).toMatchSnapshot();
});
test("input: \":23\"", () => {
    expect(parseUriSimple(":23")).toMatchSnapshot();
});
test("input: \"/:23\"", () => {
    expect(parseUriSimple("/:23")).toMatchSnapshot();
});
test("input: \"::\"", () => {
    expect(parseUriSimple("::")).toMatchSnapshot();
});
test("input: \"::23\"", () => {
    expect(parseUriSimple("::23")).toMatchSnapshot();
});
test("input: \"foo://\"", () => {
    expect(parseUriSimple("foo://")).toMatchSnapshot();
});
test("input: \"http://a:b@c:29/d\"", () => {
    expect(parseUriSimple("http://a:b@c:29/d")).toMatchSnapshot();
});
test("input: \"http::@c:29\"", () => {
    expect(parseUriSimple("http::@c:29")).toMatchSnapshot();
});
test("input: \"http://&a:foo(b]c@d:2/\"", () => {
    expect(parseUriSimple("http://&a:foo(b]c@d:2/")).toMatchSnapshot();
});
test("input: \"http://::@c@d:2\"", () => {
    expect(parseUriSimple("http://::@c@d:2")).toMatchSnapshot();
});
test("input: \"http://foo.com:b@d/\"", () => {
    expect(parseUriSimple("http://foo.com:b@d/")).toMatchSnapshot();
});
test("input: \"http://foo.com/\\\\@\"", () => {
    expect(parseUriSimple("http://foo.com/\\@")).toMatchSnapshot();
});
test("input: \"http:\\\\\\\\foo.com\\\\\"", () => {
    expect(parseUriSimple("http:\\\\foo.com\\")).toMatchSnapshot();
});
test("input: \"http:\\\\\\\\a\\\\b:c\\\\d@foo.com\\\\\"", () => {
    expect(parseUriSimple("http:\\\\a\\b:c\\d@foo.com\\")).toMatchSnapshot();
});
test("input: \"foo:/\"", () => {
    expect(parseUriSimple("foo:/")).toMatchSnapshot();
});
test("input: \"foo:/bar.com/\"", () => {
    expect(parseUriSimple("foo:/bar.com/")).toMatchSnapshot();
});
test("input: \"foo://///////\"", () => {
    expect(parseUriSimple("foo://///////")).toMatchSnapshot();
});
test("input: \"foo://///////bar.com/\"", () => {
    expect(parseUriSimple("foo://///////bar.com/")).toMatchSnapshot();
});
test("input: \"foo:////://///\"", () => {
    expect(parseUriSimple("foo:////://///")).toMatchSnapshot();
});
test("input: \"c:/foo\"", () => {
    expect(parseUriSimple("c:/foo")).toMatchSnapshot();
});
test("input: \"//foo/bar\"", () => {
    expect(parseUriSimple("//foo/bar")).toMatchSnapshot();
});
test("input: \"http://foo/path;a??e#f#g\"", () => {
    expect(parseUriSimple("http://foo/path;a??e#f#g")).toMatchSnapshot();
});
test("input: \"http://foo/abcd?efgh?ijkl\"", () => {
    expect(parseUriSimple("http://foo/abcd?efgh?ijkl")).toMatchSnapshot();
});
test("input: \"http://foo/abcd#foo?bar\"", () => {
    expect(parseUriSimple("http://foo/abcd#foo?bar")).toMatchSnapshot();
});
test("input: \"[61:24:74]:98\"", () => {
    expect(parseUriSimple("[61:24:74]:98")).toMatchSnapshot();
});
test("input: \"http:[61:27]/:foo\"", () => {
    expect(parseUriSimple("http:[61:27]/:foo")).toMatchSnapshot();
});
test("input: \"http://[1::2]:3:4\"", () => {
    expect(parseUriSimple("http://[1::2]:3:4")).toMatchSnapshot();
});
test("input: \"http://2001::1\"", () => {
    expect(parseUriSimple("http://2001::1")).toMatchSnapshot();
});
test("input: \"http://2001::1]\"", () => {
    expect(parseUriSimple("http://2001::1]")).toMatchSnapshot();
});
test("input: \"http://2001::1]:80\"", () => {
    expect(parseUriSimple("http://2001::1]:80")).toMatchSnapshot();
});
test("input: \"http://[2001::1]\"", () => {
    expect(parseUriSimple("http://[2001::1]")).toMatchSnapshot();
});
test("input: \"http://[::127.0.0.1]\"", () => {
    expect(parseUriSimple("http://[::127.0.0.1]")).toMatchSnapshot();
});
test("input: \"http://[0:0:0:0:0:0:13.1.68.3]\"", () => {
    expect(parseUriSimple("http://[0:0:0:0:0:0:13.1.68.3]")).toMatchSnapshot();
});
test("input: \"http://[2001::1]:80\"", () => {
    expect(parseUriSimple("http://[2001::1]:80")).toMatchSnapshot();
});
test("input: \"http:/example.com/\"", () => {
    expect(parseUriSimple("http:/example.com/")).toMatchSnapshot();
});
test("input: \"ftp:/example.com/\"", () => {
    expect(parseUriSimple("ftp:/example.com/")).toMatchSnapshot();
});
test("input: \"https:/example.com/\"", () => {
    expect(parseUriSimple("https:/example.com/")).toMatchSnapshot();
});
test("input: \"madeupscheme:/example.com/\"", () => {
    expect(parseUriSimple("madeupscheme:/example.com/")).toMatchSnapshot();
});
test("input: \"file:/example.com/\"", () => {
    expect(parseUriSimple("file:/example.com/")).toMatchSnapshot();
});
test("input: \"file://example:1/\"", () => {
    expect(parseUriSimple("file://example:1/")).toMatchSnapshot();
});
test("input: \"file://example:test/\"", () => {
    expect(parseUriSimple("file://example:test/")).toMatchSnapshot();
});
test("input: \"file://example%/\"", () => {
    expect(parseUriSimple("file://example%/")).toMatchSnapshot();
});
test("input: \"file://[example]/\"", () => {
    expect(parseUriSimple("file://[example]/")).toMatchSnapshot();
});
test("input: \"ftps:/example.com/\"", () => {
    expect(parseUriSimple("ftps:/example.com/")).toMatchSnapshot();
});
test("input: \"gopher:/example.com/\"", () => {
    expect(parseUriSimple("gopher:/example.com/")).toMatchSnapshot();
});
test("input: \"ws:/example.com/\"", () => {
    expect(parseUriSimple("ws:/example.com/")).toMatchSnapshot();
});
test("input: \"wss:/example.com/\"", () => {
    expect(parseUriSimple("wss:/example.com/")).toMatchSnapshot();
});
test("input: \"data:/example.com/\"", () => {
    expect(parseUriSimple("data:/example.com/")).toMatchSnapshot();
});
test("input: \"javascript:/example.com/\"", () => {
    expect(parseUriSimple("javascript:/example.com/")).toMatchSnapshot();
});
test("input: \"mailto:/example.com/\"", () => {
    expect(parseUriSimple("mailto:/example.com/")).toMatchSnapshot();
});
test("input: \"http:example.com/\"", () => {
    expect(parseUriSimple("http:example.com/")).toMatchSnapshot();
});
test("input: \"ftp:example.com/\"", () => {
    expect(parseUriSimple("ftp:example.com/")).toMatchSnapshot();
});
test("input: \"https:example.com/\"", () => {
    expect(parseUriSimple("https:example.com/")).toMatchSnapshot();
});
test("input: \"madeupscheme:example.com/\"", () => {
    expect(parseUriSimple("madeupscheme:example.com/")).toMatchSnapshot();
});
test("input: \"ftps:example.com/\"", () => {
    expect(parseUriSimple("ftps:example.com/")).toMatchSnapshot();
});
test("input: \"gopher:example.com/\"", () => {
    expect(parseUriSimple("gopher:example.com/")).toMatchSnapshot();
});
test("input: \"ws:example.com/\"", () => {
    expect(parseUriSimple("ws:example.com/")).toMatchSnapshot();
});
test("input: \"wss:example.com/\"", () => {
    expect(parseUriSimple("wss:example.com/")).toMatchSnapshot();
});
test("input: \"data:example.com/\"", () => {
    expect(parseUriSimple("data:example.com/")).toMatchSnapshot();
});
test("input: \"javascript:example.com/\"", () => {
    expect(parseUriSimple("javascript:example.com/")).toMatchSnapshot();
});
test("input: \"mailto:example.com/\"", () => {
    expect(parseUriSimple("mailto:example.com/")).toMatchSnapshot();
});
test("input: \"/a/b/c\"", () => {
    expect(parseUriSimple("/a/b/c")).toMatchSnapshot();
});
test("input: \"/a/ /c\"", () => {
    expect(parseUriSimple("/a/ /c")).toMatchSnapshot();
});
test("input: \"/a%2fc\"", () => {
    expect(parseUriSimple("/a%2fc")).toMatchSnapshot();
});
test("input: \"/a/%2f/c\"", () => {
    expect(parseUriSimple("/a/%2f/c")).toMatchSnapshot();
});
test("input: \"#β\"", () => {
    expect(parseUriSimple("#β")).toMatchSnapshot();
});
test("input: \"data:text/html,test#test\"", () => {
    expect(parseUriSimple("data:text/html,test#test")).toMatchSnapshot();
});
test("input: \"tel:1234567890\"", () => {
    expect(parseUriSimple("tel:1234567890")).toMatchSnapshot();
});
test("input: \"ssh://example.com/foo/bar.git\"", () => {
    expect(parseUriSimple("ssh://example.com/foo/bar.git")).toMatchSnapshot();
});
test("input: \"file:c:\\\\foo\\\\bar.html\"", () => {
    expect(parseUriSimple("file:c:\\foo\\bar.html")).toMatchSnapshot();
});
test("input: \"  File:c|////foo\\\\bar.html\"", () => {
    expect(parseUriSimple("  File:c|////foo\\bar.html")).toMatchSnapshot();
});
test("input: \"C|/foo/bar\"", () => {
    expect(parseUriSimple("C|/foo/bar")).toMatchSnapshot();
});
test("input: \"/C|\\\\foo\\\\bar\"", () => {
    expect(parseUriSimple("/C|\\foo\\bar")).toMatchSnapshot();
});
test("input: \"//C|/foo/bar\"", () => {
    expect(parseUriSimple("//C|/foo/bar")).toMatchSnapshot();
});
test("input: \"//server/file\"", () => {
    expect(parseUriSimple("//server/file")).toMatchSnapshot();
});
test("input: \"\\\\\\\\server\\\\file\"", () => {
    expect(parseUriSimple("\\\\server\\file")).toMatchSnapshot();
});
test("input: \"/\\\\server/file\"", () => {
    expect(parseUriSimple("/\\server/file")).toMatchSnapshot();
});
test("input: \"file:///foo/bar.txt\"", () => {
    expect(parseUriSimple("file:///foo/bar.txt")).toMatchSnapshot();
});
test("input: \"file:///home/me\"", () => {
    expect(parseUriSimple("file:///home/me")).toMatchSnapshot();
});
test("input: \"//\"", () => {
    expect(parseUriSimple("//")).toMatchSnapshot();
});
test("input: \"///\"", () => {
    expect(parseUriSimple("///")).toMatchSnapshot();
});
test("input: \"///test\"", () => {
    expect(parseUriSimple("///test")).toMatchSnapshot();
});
test("input: \"file://test\"", () => {
    expect(parseUriSimple("file://test")).toMatchSnapshot();
});
test("input: \"file://localhost\"", () => {
    expect(parseUriSimple("file://localhost")).toMatchSnapshot();
});
test("input: \"file://localhost/\"", () => {
    expect(parseUriSimple("file://localhost/")).toMatchSnapshot();
});
test("input: \"file://localhost/test\"", () => {
    expect(parseUriSimple("file://localhost/test")).toMatchSnapshot();
});
test("input: \"test\"", () => {
    expect(parseUriSimple("test")).toMatchSnapshot();
});
test("input: \"file:test\"", () => {
    expect(parseUriSimple("file:test")).toMatchSnapshot();
});
test("input: \"http://example.com/././foo\"", () => {
    expect(parseUriSimple("http://example.com/././foo")).toMatchSnapshot();
});
test("input: \"http://example.com/./.foo\"", () => {
    expect(parseUriSimple("http://example.com/./.foo")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/.\"", () => {
    expect(parseUriSimple("http://example.com/foo/.")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/./\"", () => {
    expect(parseUriSimple("http://example.com/foo/./")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/bar/..\"", () => {
    expect(parseUriSimple("http://example.com/foo/bar/..")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/bar/../\"", () => {
    expect(parseUriSimple("http://example.com/foo/bar/../")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/..bar\"", () => {
    expect(parseUriSimple("http://example.com/foo/..bar")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/bar/../ton\"", () => {
    expect(parseUriSimple("http://example.com/foo/bar/../ton")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/bar/../ton/../../a\"", () => {
    expect(parseUriSimple("http://example.com/foo/bar/../ton/../../a")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/../../..\"", () => {
    expect(parseUriSimple("http://example.com/foo/../../..")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/../../../ton\"", () => {
    expect(parseUriSimple("http://example.com/foo/../../../ton")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/%2e\"", () => {
    expect(parseUriSimple("http://example.com/foo/%2e")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/%2e%2\"", () => {
    expect(parseUriSimple("http://example.com/foo/%2e%2")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/%2e./%2e%2e/.%2e/%2e.bar\"", () => {
    expect(parseUriSimple("http://example.com/foo/%2e./%2e%2e/.%2e/%2e.bar")).toMatchSnapshot();
});
test("input: \"http://example.com////../..\"", () => {
    expect(parseUriSimple("http://example.com////../..")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/bar//../..\"", () => {
    expect(parseUriSimple("http://example.com/foo/bar//../..")).toMatchSnapshot();
});
test("input: \"http://example.com/foo/bar//..\"", () => {
    expect(parseUriSimple("http://example.com/foo/bar//..")).toMatchSnapshot();
});
test("input: \"http://example.com/foo\"", () => {
    expect(parseUriSimple("http://example.com/foo")).toMatchSnapshot();
});
test("input: \"http://example.com/%20foo\"", () => {
    expect(parseUriSimple("http://example.com/%20foo")).toMatchSnapshot();
});
test("input: \"http://example.com/foo%\"", () => {
    expect(parseUriSimple("http://example.com/foo%")).toMatchSnapshot();
});
test("input: \"http://example.com/foo%2\"", () => {
    expect(parseUriSimple("http://example.com/foo%2")).toMatchSnapshot();
});
test("input: \"http://example.com/foo%2zbar\"", () => {
    expect(parseUriSimple("http://example.com/foo%2zbar")).toMatchSnapshot();
});
test("input: \"http://example.com/foo%2Â©zbar\"", () => {
    expect(parseUriSimple("http://example.com/foo%2Â©zbar")).toMatchSnapshot();
});
test("input: \"http://example.com/foo%41%7a\"", () => {
    expect(parseUriSimple("http://example.com/foo%41%7a")).toMatchSnapshot();
});
test("input: \"http://example.com/foo\\t%91\"", () => {
    expect(parseUriSimple("http://example.com/foo\t%91")).toMatchSnapshot();
});
test("input: \"http://example.com/foo%00%51\"", () => {
    expect(parseUriSimple("http://example.com/foo%00%51")).toMatchSnapshot();
});
test("input: \"http://example.com/(%28:%3A%29)\"", () => {
    expect(parseUriSimple("http://example.com/(%28:%3A%29)")).toMatchSnapshot();
});
test("input: \"http://example.com/%3A%3a%3C%3c\"", () => {
    expect(parseUriSimple("http://example.com/%3A%3a%3C%3c")).toMatchSnapshot();
});
test("input: \"http://example.com/foo\\tbar\"", () => {
    expect(parseUriSimple("http://example.com/foo\tbar")).toMatchSnapshot();
});
test("input: \"http://example.com\\\\\\\\foo\\\\\\\\bar\"", () => {
    expect(parseUriSimple("http://example.com\\\\foo\\\\bar")).toMatchSnapshot();
});
test("input: \"http://example.com/%7Ffp3%3Eju%3Dduvgw%3Dd\"", () => {
    expect(parseUriSimple("http://example.com/%7Ffp3%3Eju%3Dduvgw%3Dd")).toMatchSnapshot();
});
test("input: \"http://example.com/@asdf%40\"", () => {
    expect(parseUriSimple("http://example.com/@asdf%40")).toMatchSnapshot();
});
test("input: \"http://example.com/你好你好\"", () => {
    expect(parseUriSimple("http://example.com/你好你好")).toMatchSnapshot();
});
test("input: \"http://example.com/‥/foo\"", () => {
    expect(parseUriSimple("http://example.com/‥/foo")).toMatchSnapshot();
});
test("input: \"http://example.com/﻿/foo\"", () => {
    expect(parseUriSimple("http://example.com/﻿/foo")).toMatchSnapshot();
});
test("input: \"http://example.com/‮/foo/‭/bar\"", () => {
    expect(parseUriSimple("http://example.com/‮/foo/‭/bar")).toMatchSnapshot();
});
test("input: \"http://www.google.com/foo?bar=baz#\"", () => {
    expect(parseUriSimple("http://www.google.com/foo?bar=baz#")).toMatchSnapshot();
});
test("input: \"http://www.google.com/foo?bar=baz# »\"", () => {
    expect(parseUriSimple("http://www.google.com/foo?bar=baz# »")).toMatchSnapshot();
});
test("input: \"data:test# »\"", () => {
    expect(parseUriSimple("data:test# »")).toMatchSnapshot();
});
test("input: \"http://www.google.com\"", () => {
    expect(parseUriSimple("http://www.google.com")).toMatchSnapshot();
});
test("input: \"http://192.0x00A80001\"", () => {
    expect(parseUriSimple("http://192.0x00A80001")).toMatchSnapshot();
});
test("input: \"http://www/foo%2Ehtml\"", () => {
    expect(parseUriSimple("http://www/foo%2Ehtml")).toMatchSnapshot();
});
test("input: \"http://www/foo/%2E/html\"", () => {
    expect(parseUriSimple("http://www/foo/%2E/html")).toMatchSnapshot();
});
test("input: \"http://user:pass@/\"", () => {
    expect(parseUriSimple("http://user:pass@/")).toMatchSnapshot();
});
test("input: \"http://%25DOMAIN:foobar@foodomain.com/\"", () => {
    expect(parseUriSimple("http://%25DOMAIN:foobar@foodomain.com/")).toMatchSnapshot();
});
test("input: \"http:\\\\\\\\www.google.com\\\\foo\"", () => {
    expect(parseUriSimple("http:\\\\www.google.com\\foo")).toMatchSnapshot();
});
test("input: \"http://foo:80/\"", () => {
    expect(parseUriSimple("http://foo:80/")).toMatchSnapshot();
});
test("input: \"http://foo:81/\"", () => {
    expect(parseUriSimple("http://foo:81/")).toMatchSnapshot();
});
test("input: \"httpa://foo:80/\"", () => {
    expect(parseUriSimple("httpa://foo:80/")).toMatchSnapshot();
});
test("input: \"http://foo:-80/\"", () => {
    expect(parseUriSimple("http://foo:-80/")).toMatchSnapshot();
});
test("input: \"https://foo:443/\"", () => {
    expect(parseUriSimple("https://foo:443/")).toMatchSnapshot();
});
test("input: \"https://foo:80/\"", () => {
    expect(parseUriSimple("https://foo:80/")).toMatchSnapshot();
});
test("input: \"ftp://foo:21/\"", () => {
    expect(parseUriSimple("ftp://foo:21/")).toMatchSnapshot();
});
test("input: \"ftp://foo:80/\"", () => {
    expect(parseUriSimple("ftp://foo:80/")).toMatchSnapshot();
});
test("input: \"gopher://foo:70/\"", () => {
    expect(parseUriSimple("gopher://foo:70/")).toMatchSnapshot();
});
test("input: \"gopher://foo:443/\"", () => {
    expect(parseUriSimple("gopher://foo:443/")).toMatchSnapshot();
});
test("input: \"ws://foo:80/\"", () => {
    expect(parseUriSimple("ws://foo:80/")).toMatchSnapshot();
});
test("input: \"ws://foo:81/\"", () => {
    expect(parseUriSimple("ws://foo:81/")).toMatchSnapshot();
});
test("input: \"ws://foo:443/\"", () => {
    expect(parseUriSimple("ws://foo:443/")).toMatchSnapshot();
});
test("input: \"ws://foo:815/\"", () => {
    expect(parseUriSimple("ws://foo:815/")).toMatchSnapshot();
});
test("input: \"wss://foo:80/\"", () => {
    expect(parseUriSimple("wss://foo:80/")).toMatchSnapshot();
});
test("input: \"wss://foo:81/\"", () => {
    expect(parseUriSimple("wss://foo:81/")).toMatchSnapshot();
});
test("input: \"wss://foo:443/\"", () => {
    expect(parseUriSimple("wss://foo:443/")).toMatchSnapshot();
});
test("input: \"wss://foo:815/\"", () => {
    expect(parseUriSimple("wss://foo:815/")).toMatchSnapshot();
});
test("input: \"http:@www.example.com\"", () => {
    expect(parseUriSimple("http:@www.example.com")).toMatchSnapshot();
});
test("input: \"http:/@www.example.com\"", () => {
    expect(parseUriSimple("http:/@www.example.com")).toMatchSnapshot();
});
test("input: \"http://@www.example.com\"", () => {
    expect(parseUriSimple("http://@www.example.com")).toMatchSnapshot();
});
test("input: \"http:a:b@www.example.com\"", () => {
    expect(parseUriSimple("http:a:b@www.example.com")).toMatchSnapshot();
});
test("input: \"http:/a:b@www.example.com\"", () => {
    expect(parseUriSimple("http:/a:b@www.example.com")).toMatchSnapshot();
});
test("input: \"http://a:b@www.example.com\"", () => {
    expect(parseUriSimple("http://a:b@www.example.com")).toMatchSnapshot();
});
test("input: \"http://@pple.com\"", () => {
    expect(parseUriSimple("http://@pple.com")).toMatchSnapshot();
});
test("input: \"http::b@www.example.com\"", () => {
    expect(parseUriSimple("http::b@www.example.com")).toMatchSnapshot();
});
test("input: \"http:/:b@www.example.com\"", () => {
    expect(parseUriSimple("http:/:b@www.example.com")).toMatchSnapshot();
});
test("input: \"http://:b@www.example.com\"", () => {
    expect(parseUriSimple("http://:b@www.example.com")).toMatchSnapshot();
});
test("input: \"http:/:@/www.example.com\"", () => {
    expect(parseUriSimple("http:/:@/www.example.com")).toMatchSnapshot();
});
test("input: \"http://user@/www.example.com\"", () => {
    expect(parseUriSimple("http://user@/www.example.com")).toMatchSnapshot();
});
test("input: \"http:@/www.example.com\"", () => {
    expect(parseUriSimple("http:@/www.example.com")).toMatchSnapshot();
});
test("input: \"http:/@/www.example.com\"", () => {
    expect(parseUriSimple("http:/@/www.example.com")).toMatchSnapshot();
});
test("input: \"http://@/www.example.com\"", () => {
    expect(parseUriSimple("http://@/www.example.com")).toMatchSnapshot();
});
test("input: \"https:@/www.example.com\"", () => {
    expect(parseUriSimple("https:@/www.example.com")).toMatchSnapshot();
});
test("input: \"http:a:b@/www.example.com\"", () => {
    expect(parseUriSimple("http:a:b@/www.example.com")).toMatchSnapshot();
});
test("input: \"http:/a:b@/www.example.com\"", () => {
    expect(parseUriSimple("http:/a:b@/www.example.com")).toMatchSnapshot();
});
test("input: \"http://a:b@/www.example.com\"", () => {
    expect(parseUriSimple("http://a:b@/www.example.com")).toMatchSnapshot();
});
test("input: \"http::@/www.example.com\"", () => {
    expect(parseUriSimple("http::@/www.example.com")).toMatchSnapshot();
});
test("input: \"http:a:@www.example.com\"", () => {
    expect(parseUriSimple("http:a:@www.example.com")).toMatchSnapshot();
});
test("input: \"http:/a:@www.example.com\"", () => {
    expect(parseUriSimple("http:/a:@www.example.com")).toMatchSnapshot();
});
test("input: \"http://a:@www.example.com\"", () => {
    expect(parseUriSimple("http://a:@www.example.com")).toMatchSnapshot();
});
test("input: \"http://www.@pple.com\"", () => {
    expect(parseUriSimple("http://www.@pple.com")).toMatchSnapshot();
});
test("input: \"http:@:www.example.com\"", () => {
    expect(parseUriSimple("http:@:www.example.com")).toMatchSnapshot();
});
test("input: \"http:/@:www.example.com\"", () => {
    expect(parseUriSimple("http:/@:www.example.com")).toMatchSnapshot();
});
test("input: \"http://@:www.example.com\"", () => {
    expect(parseUriSimple("http://@:www.example.com")).toMatchSnapshot();
});
test("input: \"http://:@www.example.com\"", () => {
    expect(parseUriSimple("http://:@www.example.com")).toMatchSnapshot();
});
test("input: \"/test.txt\"", () => {
    expect(parseUriSimple("/test.txt")).toMatchSnapshot();
});
test("input: \".\"", () => {
    expect(parseUriSimple(".")).toMatchSnapshot();
});
test("input: \"..\"", () => {
    expect(parseUriSimple("..")).toMatchSnapshot();
});
test("input: \"test.txt\"", () => {
    expect(parseUriSimple("test.txt")).toMatchSnapshot();
});
test("input: \"./test.txt\"", () => {
    expect(parseUriSimple("./test.txt")).toMatchSnapshot();
});
test("input: \"../test.txt\"", () => {
    expect(parseUriSimple("../test.txt")).toMatchSnapshot();
});
test("input: \"../aaa/test.txt\"", () => {
    expect(parseUriSimple("../aaa/test.txt")).toMatchSnapshot();
});
test("input: \"../../test.txt\"", () => {
    expect(parseUriSimple("../../test.txt")).toMatchSnapshot();
});
test("input: \"中/test.txt\"", () => {
    expect(parseUriSimple("中/test.txt")).toMatchSnapshot();
});
test("input: \"http://www.example2.com\"", () => {
    expect(parseUriSimple("http://www.example2.com")).toMatchSnapshot();
});
test("input: \"//www.example2.com\"", () => {
    expect(parseUriSimple("//www.example2.com")).toMatchSnapshot();
});
test("input: \"file:...\"", () => {
    expect(parseUriSimple("file:...")).toMatchSnapshot();
});
test("input: \"file:..\"", () => {
    expect(parseUriSimple("file:..")).toMatchSnapshot();
});
test("input: \"file:a\"", () => {
    expect(parseUriSimple("file:a")).toMatchSnapshot();
});
test("input: \"http://ExAmPlE.CoM\"", () => {
    expect(parseUriSimple("http://ExAmPlE.CoM")).toMatchSnapshot();
});
test("input: \"http://example example.com\"", () => {
    expect(parseUriSimple("http://example example.com")).toMatchSnapshot();
});
test("input: \"http://Goo%20 goo%7C|.com\"", () => {
    expect(parseUriSimple("http://Goo%20 goo%7C|.com")).toMatchSnapshot();
});
test("input: \"http://[]\"", () => {
    expect(parseUriSimple("http://[]")).toMatchSnapshot();
});
test("input: \"http://[:]\"", () => {
    expect(parseUriSimple("http://[:]")).toMatchSnapshot();
});
test("input: \"http://GOO 　goo.com\"", () => {
    expect(parseUriSimple("http://GOO 　goo.com")).toMatchSnapshot();
});
test("input: \"http://GOO​⁠﻿goo.com\"", () => {
    expect(parseUriSimple("http://GOO​⁠﻿goo.com")).toMatchSnapshot();
});
test("input: \"\\u0000\\u001b\\u0004\\u0012 http://example.com/\\u001f \\r \"", () => {
    expect(parseUriSimple("\u0000\u001b\u0004\u0012 http://example.com/\u001f \r ")).toMatchSnapshot();
});
test("input: \"http://www.foo。bar.com\"", () => {
    expect(parseUriSimple("http://www.foo。bar.com")).toMatchSnapshot();
});
test("input: \"http://﷐zyx.com\"", () => {
    expect(parseUriSimple("http://﷐zyx.com")).toMatchSnapshot();
});
test("input: \"http://%ef%b7%90zyx.com\"", () => {
    expect(parseUriSimple("http://%ef%b7%90zyx.com")).toMatchSnapshot();
});
test("input: \"https://�\"", () => {
    expect(parseUriSimple("https://�")).toMatchSnapshot();
});
test("input: \"https://%EF%BF%BD\"", () => {
    expect(parseUriSimple("https://%EF%BF%BD")).toMatchSnapshot();
});
test("input: \"https://x/�?�#�\"", () => {
    expect(parseUriSimple("https://x/�?�#�")).toMatchSnapshot();
});
test("input: \"http://Ｇｏ.com\"", () => {
    expect(parseUriSimple("http://Ｇｏ.com")).toMatchSnapshot();
});
test("input: \"http://％４１.com\"", () => {
    expect(parseUriSimple("http://％４１.com")).toMatchSnapshot();
});
test("input: \"http://%ef%bc%85%ef%bc%94%ef%bc%91.com\"", () => {
    expect(parseUriSimple("http://%ef%bc%85%ef%bc%94%ef%bc%91.com")).toMatchSnapshot();
});
test("input: \"http://％００.com\"", () => {
    expect(parseUriSimple("http://％００.com")).toMatchSnapshot();
});
test("input: \"http://%ef%bc%85%ef%bc%90%ef%bc%90.com\"", () => {
    expect(parseUriSimple("http://%ef%bc%85%ef%bc%90%ef%bc%90.com")).toMatchSnapshot();
});
test("input: \"http://你好你好\"", () => {
    expect(parseUriSimple("http://你好你好")).toMatchSnapshot();
});
test("input: \"https://faß.ExAmPlE/\"", () => {
    expect(parseUriSimple("https://faß.ExAmPlE/")).toMatchSnapshot();
});
test("input: \"sc://faß.ExAmPlE/\"", () => {
    expect(parseUriSimple("sc://faß.ExAmPlE/")).toMatchSnapshot();
});
test("input: \"http://%zz%66%a.com\"", () => {
    expect(parseUriSimple("http://%zz%66%a.com")).toMatchSnapshot();
});
test("input: \"http://%25\"", () => {
    expect(parseUriSimple("http://%25")).toMatchSnapshot();
});
test("input: \"http://hello%00\"", () => {
    expect(parseUriSimple("http://hello%00")).toMatchSnapshot();
});
test("input: \"http://%30%78%63%30%2e%30%32%35%30.01\"", () => {
    expect(parseUriSimple("http://%30%78%63%30%2e%30%32%35%30.01")).toMatchSnapshot();
});
test("input: \"http://%30%78%63%30%2e%30%32%35%30.01%2e\"", () => {
    expect(parseUriSimple("http://%30%78%63%30%2e%30%32%35%30.01%2e")).toMatchSnapshot();
});
test("input: \"http://192.168.0.257\"", () => {
    expect(parseUriSimple("http://192.168.0.257")).toMatchSnapshot();
});
test("input: \"http://%3g%78%63%30%2e%30%32%35%30%2E.01\"", () => {
    expect(parseUriSimple("http://%3g%78%63%30%2e%30%32%35%30%2E.01")).toMatchSnapshot();
});
test("input: \"http://192.168.0.1 hello\"", () => {
    expect(parseUriSimple("http://192.168.0.1 hello")).toMatchSnapshot();
});
test("input: \"https://x x:12\"", () => {
    expect(parseUriSimple("https://x x:12")).toMatchSnapshot();
});
test("input: \"http://０Ｘｃ０．０２５０．０１\"", () => {
    expect(parseUriSimple("http://０Ｘｃ０．０２５０．０１")).toMatchSnapshot();
});
test("input: \"http://./\"", () => {
    expect(parseUriSimple("http://./")).toMatchSnapshot();
});
test("input: \"http://../\"", () => {
    expect(parseUriSimple("http://../")).toMatchSnapshot();
});
test("input: \"http://0..0x300/\"", () => {
    expect(parseUriSimple("http://0..0x300/")).toMatchSnapshot();
});
test("input: \"http://[www.google.com]/\"", () => {
    expect(parseUriSimple("http://[www.google.com]/")).toMatchSnapshot();
});
test("input: \"http://[google.com]\"", () => {
    expect(parseUriSimple("http://[google.com]")).toMatchSnapshot();
});
test("input: \"http://[::1.2.3.4x]\"", () => {
    expect(parseUriSimple("http://[::1.2.3.4x]")).toMatchSnapshot();
});
test("input: \"http://[::1.2.3.]\"", () => {
    expect(parseUriSimple("http://[::1.2.3.]")).toMatchSnapshot();
});
test("input: \"http://[::1.2.]\"", () => {
    expect(parseUriSimple("http://[::1.2.]")).toMatchSnapshot();
});
test("input: \"http://[::1.]\"", () => {
    expect(parseUriSimple("http://[::1.]")).toMatchSnapshot();
});
test("input: \"http://foo:💩@example.com/bar\"", () => {
    expect(parseUriSimple("http://foo:💩@example.com/bar")).toMatchSnapshot();
});
test("input: \"#x\"", () => {
    expect(parseUriSimple("#x")).toMatchSnapshot();
});
test("input: \"https://@test@test@example:800/\"", () => {
    expect(parseUriSimple("https://@test@test@example:800/")).toMatchSnapshot();
});
test("input: \"https://@@@example\"", () => {
    expect(parseUriSimple("https://@@@example")).toMatchSnapshot();
});
test("input: \"http://`{}:`{}@h/`{}?`{}\"", () => {
    expect(parseUriSimple("http://`{}:`{}@h/`{}?`{}")).toMatchSnapshot();
});
test("input: \"http://host/?'\"", () => {
    expect(parseUriSimple("http://host/?'")).toMatchSnapshot();
});
test("input: \"notspecial://host/?'\"", () => {
    expect(parseUriSimple("notspecial://host/?'")).toMatchSnapshot();
});
test("input: \"/some/path\"", () => {
    expect(parseUriSimple("/some/path")).toMatchSnapshot();
});
test("input: \"i\"", () => {
    expect(parseUriSimple("i")).toMatchSnapshot();
});
test("input: \"../i\"", () => {
    expect(parseUriSimple("../i")).toMatchSnapshot();
});
test("input: \"/i\"", () => {
    expect(parseUriSimple("/i")).toMatchSnapshot();
});
test("input: \"?i\"", () => {
    expect(parseUriSimple("?i")).toMatchSnapshot();
});
test("input: \"#i\"", () => {
    expect(parseUriSimple("#i")).toMatchSnapshot();
});
test("input: \"about:/../\"", () => {
    expect(parseUriSimple("about:/../")).toMatchSnapshot();
});
test("input: \"data:/../\"", () => {
    expect(parseUriSimple("data:/../")).toMatchSnapshot();
});
test("input: \"javascript:/../\"", () => {
    expect(parseUriSimple("javascript:/../")).toMatchSnapshot();
});
test("input: \"mailto:/../\"", () => {
    expect(parseUriSimple("mailto:/../")).toMatchSnapshot();
});
test("input: \"sc://ñ.test/\"", () => {
    expect(parseUriSimple("sc://ñ.test/")).toMatchSnapshot();
});
test("input: \"sc://\\u0000/\"", () => {
    expect(parseUriSimple("sc://\u0000/")).toMatchSnapshot();
});
test("input: \"sc:// /\"", () => {
    expect(parseUriSimple("sc:// /")).toMatchSnapshot();
});
test("input: \"sc://%/\"", () => {
    expect(parseUriSimple("sc://%/")).toMatchSnapshot();
});
test("input: \"sc://@/\"", () => {
    expect(parseUriSimple("sc://@/")).toMatchSnapshot();
});
test("input: \"sc://te@s:t@/\"", () => {
    expect(parseUriSimple("sc://te@s:t@/")).toMatchSnapshot();
});
test("input: \"sc://:/\"", () => {
    expect(parseUriSimple("sc://:/")).toMatchSnapshot();
});
test("input: \"sc://:12/\"", () => {
    expect(parseUriSimple("sc://:12/")).toMatchSnapshot();
});
test("input: \"sc://[/\"", () => {
    expect(parseUriSimple("sc://[/")).toMatchSnapshot();
});
test("input: \"sc://\\\\/\"", () => {
    expect(parseUriSimple("sc://\\/")).toMatchSnapshot();
});
test("input: \"sc://]/\"", () => {
    expect(parseUriSimple("sc://]/")).toMatchSnapshot();
});
test("input: \"x\"", () => {
    expect(parseUriSimple("x")).toMatchSnapshot();
});
test("input: \"sc:\\\\../\"", () => {
    expect(parseUriSimple("sc:\\../")).toMatchSnapshot();
});
test("input: \"sc::a@example.net\"", () => {
    expect(parseUriSimple("sc::a@example.net")).toMatchSnapshot();
});
test("input: \"wow:%NBD\"", () => {
    expect(parseUriSimple("wow:%NBD")).toMatchSnapshot();
});
test("input: \"wow:%1G\"", () => {
    expect(parseUriSimple("wow:%1G")).toMatchSnapshot();
});
test("input: \"wow:￿\"", () => {
    expect(parseUriSimple("wow:￿")).toMatchSnapshot();
});
test("input: \"http://a<b\"", () => {
    expect(parseUriSimple("http://a<b")).toMatchSnapshot();
});
test("input: \"http://a>b\"", () => {
    expect(parseUriSimple("http://a>b")).toMatchSnapshot();
});
test("input: \"http://a^b\"", () => {
    expect(parseUriSimple("http://a^b")).toMatchSnapshot();
});
test("input: \"non-special://a<b\"", () => {
    expect(parseUriSimple("non-special://a<b")).toMatchSnapshot();
});
test("input: \"non-special://a>b\"", () => {
    expect(parseUriSimple("non-special://a>b")).toMatchSnapshot();
});
test("input: \"non-special://a^b\"", () => {
    expect(parseUriSimple("non-special://a^b")).toMatchSnapshot();
});
test("input: \"http://\\u001f!\\\"$&'()*+,-.;=_`{}~/\"", () => {
    expect(parseUriSimple("http://\u001f!\"$&'()*+,-.;=_`{}~/")).toMatchSnapshot();
});
test("input: \"sc://\\u001f!\\\"$&'()*+,-.;=_`{}~/\"", () => {
    expect(parseUriSimple("sc://\u001f!\"$&'()*+,-.;=_`{}~/")).toMatchSnapshot();
});
test("input: \"ftp://example.com%80/\"", () => {
    expect(parseUriSimple("ftp://example.com%80/")).toMatchSnapshot();
});
test("input: \"ftp://example.com%A0/\"", () => {
    expect(parseUriSimple("ftp://example.com%A0/")).toMatchSnapshot();
});
test("input: \"https://example.com%80/\"", () => {
    expect(parseUriSimple("https://example.com%80/")).toMatchSnapshot();
});
test("input: \"https://example.com%A0/\"", () => {
    expect(parseUriSimple("https://example.com%A0/")).toMatchSnapshot();
});
test("input: \"ftp://%e2%98%83\"", () => {
    expect(parseUriSimple("ftp://%e2%98%83")).toMatchSnapshot();
});
test("input: \"https://%e2%98%83\"", () => {
    expect(parseUriSimple("https://%e2%98%83")).toMatchSnapshot();
});
test("input: \"http://127.0.0.1:10100/relative_import.html\"", () => {
    expect(parseUriSimple("http://127.0.0.1:10100/relative_import.html")).toMatchSnapshot();
});
test("input: \"http://facebook.com/?foo=%7B%22abc%22\"", () => {
    expect(parseUriSimple("http://facebook.com/?foo=%7B%22abc%22")).toMatchSnapshot();
});
test("input: \"https://localhost:3000/jqueryui@1.2.3\"", () => {
    expect(parseUriSimple("https://localhost:3000/jqueryui@1.2.3")).toMatchSnapshot();
});
test("input: \"h\\tt\\nt\\rp://h\\to\\ns\\rt:9\\t0\\n0\\r0/p\\ta\\nt\\rh?q\\tu\\ne\\rry#f\\tr\\na\\rg\"", () => {
    expect(parseUriSimple("h\tt\nt\rp://h\to\ns\rt:9\t0\n0\r0/p\ta\nt\rh?q\tu\ne\rry#f\tr\na\rg")).toMatchSnapshot();
});
test("input: \"?a=b&c=d\"", () => {
    expect(parseUriSimple("?a=b&c=d")).toMatchSnapshot();
});
test("input: \"??a=b&c=d\"", () => {
    expect(parseUriSimple("??a=b&c=d")).toMatchSnapshot();
});
test("input: \"http:\"", () => {
    expect(parseUriSimple("http:")).toMatchSnapshot();
});
test("input: \"sc:\"", () => {
    expect(parseUriSimple("sc:")).toMatchSnapshot();
});
test("input: \"http://foo.bar/baz?qux#foo\\bbar\"", () => {
    expect(parseUriSimple("http://foo.bar/baz?qux#foo\bbar")).toMatchSnapshot();
});
test("input: \"http://foo.bar/baz?qux#foo\\\"bar\"", () => {
    expect(parseUriSimple("http://foo.bar/baz?qux#foo\"bar")).toMatchSnapshot();
});
test("input: \"http://foo.bar/baz?qux#foo<bar\"", () => {
    expect(parseUriSimple("http://foo.bar/baz?qux#foo<bar")).toMatchSnapshot();
});
test("input: \"http://foo.bar/baz?qux#foo>bar\"", () => {
    expect(parseUriSimple("http://foo.bar/baz?qux#foo>bar")).toMatchSnapshot();
});
test("input: \"http://foo.bar/baz?qux#foo`bar\"", () => {
    expect(parseUriSimple("http://foo.bar/baz?qux#foo`bar")).toMatchSnapshot();
});
test("input: \"http://192.168.257\"", () => {
    expect(parseUriSimple("http://192.168.257")).toMatchSnapshot();
});
test("input: \"http://192.168.257.com\"", () => {
    expect(parseUriSimple("http://192.168.257.com")).toMatchSnapshot();
});
test("input: \"http://256\"", () => {
    expect(parseUriSimple("http://256")).toMatchSnapshot();
});
test("input: \"http://256.com\"", () => {
    expect(parseUriSimple("http://256.com")).toMatchSnapshot();
});
test("input: \"http://999999999\"", () => {
    expect(parseUriSimple("http://999999999")).toMatchSnapshot();
});
test("input: \"http://999999999.com\"", () => {
    expect(parseUriSimple("http://999999999.com")).toMatchSnapshot();
});
test("input: \"http://10000000000\"", () => {
    expect(parseUriSimple("http://10000000000")).toMatchSnapshot();
});
test("input: \"http://10000000000.com\"", () => {
    expect(parseUriSimple("http://10000000000.com")).toMatchSnapshot();
});
test("input: \"http://4294967295\"", () => {
    expect(parseUriSimple("http://4294967295")).toMatchSnapshot();
});
test("input: \"http://4294967296\"", () => {
    expect(parseUriSimple("http://4294967296")).toMatchSnapshot();
});
test("input: \"http://0xffffffff\"", () => {
    expect(parseUriSimple("http://0xffffffff")).toMatchSnapshot();
});
test("input: \"http://0xffffffff1\"", () => {
    expect(parseUriSimple("http://0xffffffff1")).toMatchSnapshot();
});
test("input: \"http://256.256.256.256\"", () => {
    expect(parseUriSimple("http://256.256.256.256")).toMatchSnapshot();
});
test("input: \"http://256.256.256.256.256\"", () => {
    expect(parseUriSimple("http://256.256.256.256.256")).toMatchSnapshot();
});
test("input: \"https://0x.0x.0\"", () => {
    expect(parseUriSimple("https://0x.0x.0")).toMatchSnapshot();
});
test("input: \"https://0x100000000/test\"", () => {
    expect(parseUriSimple("https://0x100000000/test")).toMatchSnapshot();
});
test("input: \"https://256.0.0.1/test\"", () => {
    expect(parseUriSimple("https://256.0.0.1/test")).toMatchSnapshot();
});
test("input: \"file:///C%3A/\"", () => {
    expect(parseUriSimple("file:///C%3A/")).toMatchSnapshot();
});
test("input: \"file:///C%7C/\"", () => {
    expect(parseUriSimple("file:///C%7C/")).toMatchSnapshot();
});
test("input: \"file://%43%3A\"", () => {
    expect(parseUriSimple("file://%43%3A")).toMatchSnapshot();
});
test("input: \"file://%43%7C\"", () => {
    expect(parseUriSimple("file://%43%7C")).toMatchSnapshot();
});
test("input: \"file://%43|\"", () => {
    expect(parseUriSimple("file://%43|")).toMatchSnapshot();
});
test("input: \"file://C%7C\"", () => {
    expect(parseUriSimple("file://C%7C")).toMatchSnapshot();
});
test("input: \"file://%43%7C/\"", () => {
    expect(parseUriSimple("file://%43%7C/")).toMatchSnapshot();
});
test("input: \"https://%43%7C/\"", () => {
    expect(parseUriSimple("https://%43%7C/")).toMatchSnapshot();
});
test("input: \"asdf://%43|/\"", () => {
    expect(parseUriSimple("asdf://%43|/")).toMatchSnapshot();
});
test("input: \"asdf://%43%7C/\"", () => {
    expect(parseUriSimple("asdf://%43%7C/")).toMatchSnapshot();
});
test("input: \"pix/submit.gif\"", () => {
    expect(parseUriSimple("pix/submit.gif")).toMatchSnapshot();
});
test("input: \"//d:\"", () => {
    expect(parseUriSimple("//d:")).toMatchSnapshot();
});
test("input: \"//d:/..\"", () => {
    expect(parseUriSimple("//d:/..")).toMatchSnapshot();
});
test("input: \"file:\"", () => {
    expect(parseUriSimple("file:")).toMatchSnapshot();
});
test("input: \"?x\"", () => {
    expect(parseUriSimple("?x")).toMatchSnapshot();
});
test("input: \"file:?x\"", () => {
    expect(parseUriSimple("file:?x")).toMatchSnapshot();
});
test("input: \"file:#x\"", () => {
    expect(parseUriSimple("file:#x")).toMatchSnapshot();
});
test("input: \"file:\\\\\\\\//\"", () => {
    expect(parseUriSimple("file:\\\\//")).toMatchSnapshot();
});
test("input: \"file:\\\\\\\\\\\\\\\\\"", () => {
    expect(parseUriSimple("file:\\\\\\\\")).toMatchSnapshot();
});
test("input: \"file:\\\\\\\\\\\\\\\\?fox\"", () => {
    expect(parseUriSimple("file:\\\\\\\\?fox")).toMatchSnapshot();
});
test("input: \"file:\\\\\\\\\\\\\\\\#guppy\"", () => {
    expect(parseUriSimple("file:\\\\\\\\#guppy")).toMatchSnapshot();
});
test("input: \"file://spider///\"", () => {
    expect(parseUriSimple("file://spider///")).toMatchSnapshot();
});
test("input: \"file:\\\\\\\\localhost//\"", () => {
    expect(parseUriSimple("file:\\\\localhost//")).toMatchSnapshot();
});
test("input: \"file:///localhost//cat\"", () => {
    expect(parseUriSimple("file:///localhost//cat")).toMatchSnapshot();
});
test("input: \"file://\\\\/localhost//cat\"", () => {
    expect(parseUriSimple("file://\\/localhost//cat")).toMatchSnapshot();
});
test("input: \"file://localhost//a//../..//\"", () => {
    expect(parseUriSimple("file://localhost//a//../..//")).toMatchSnapshot();
});
test("input: \"/////mouse\"", () => {
    expect(parseUriSimple("/////mouse")).toMatchSnapshot();
});
test("input: \"\\\\//pig\"", () => {
    expect(parseUriSimple("\\//pig")).toMatchSnapshot();
});
test("input: \"\\\\/localhost//pig\"", () => {
    expect(parseUriSimple("\\/localhost//pig")).toMatchSnapshot();
});
test("input: \"//localhost//pig\"", () => {
    expect(parseUriSimple("//localhost//pig")).toMatchSnapshot();
});
test("input: \"/..//localhost//pig\"", () => {
    expect(parseUriSimple("/..//localhost//pig")).toMatchSnapshot();
});
test("input: \"file://\"", () => {
    expect(parseUriSimple("file://")).toMatchSnapshot();
});
test("input: \"/rooibos\"", () => {
    expect(parseUriSimple("/rooibos")).toMatchSnapshot();
});
test("input: \"/?chai\"", () => {
    expect(parseUriSimple("/?chai")).toMatchSnapshot();
});
test("input: \"C|\"", () => {
    expect(parseUriSimple("C|")).toMatchSnapshot();
});
test("input: \"C|#\"", () => {
    expect(parseUriSimple("C|#")).toMatchSnapshot();
});
test("input: \"C|?\"", () => {
    expect(parseUriSimple("C|?")).toMatchSnapshot();
});
test("input: \"C|/\"", () => {
    expect(parseUriSimple("C|/")).toMatchSnapshot();
});
test("input: \"C|\\n/\"", () => {
    expect(parseUriSimple("C|\n/")).toMatchSnapshot();
});
test("input: \"C|\\\\\"", () => {
    expect(parseUriSimple("C|\\")).toMatchSnapshot();
});
test("input: \"C\"", () => {
    expect(parseUriSimple("C")).toMatchSnapshot();
});
test("input: \"C|a\"", () => {
    expect(parseUriSimple("C|a")).toMatchSnapshot();
});
test("input: \"/c:/foo/bar\"", () => {
    expect(parseUriSimple("/c:/foo/bar")).toMatchSnapshot();
});
test("input: \"/c|/foo/bar\"", () => {
    expect(parseUriSimple("/c|/foo/bar")).toMatchSnapshot();
});
test("input: \"file:\\\\c:\\\\foo\\\\bar\"", () => {
    expect(parseUriSimple("file:\\c:\\foo\\bar")).toMatchSnapshot();
});
test("input: \"file://example.net/C:/\"", () => {
    expect(parseUriSimple("file://example.net/C:/")).toMatchSnapshot();
});
test("input: \"file://1.2.3.4/C:/\"", () => {
    expect(parseUriSimple("file://1.2.3.4/C:/")).toMatchSnapshot();
});
test("input: \"file://[1::8]/C:/\"", () => {
    expect(parseUriSimple("file://[1::8]/C:/")).toMatchSnapshot();
});
test("input: \"/C:/\"", () => {
    expect(parseUriSimple("/C:/")).toMatchSnapshot();
});
test("input: \"file:C:/\"", () => {
    expect(parseUriSimple("file:C:/")).toMatchSnapshot();
});
test("input: \"file:/C:/\"", () => {
    expect(parseUriSimple("file:/C:/")).toMatchSnapshot();
});
test("input: \"//C:/\"", () => {
    expect(parseUriSimple("//C:/")).toMatchSnapshot();
});
test("input: \"file://C:/\"", () => {
    expect(parseUriSimple("file://C:/")).toMatchSnapshot();
});
test("input: \"///C:/\"", () => {
    expect(parseUriSimple("///C:/")).toMatchSnapshot();
});
test("input: \"file:///C:/\"", () => {
    expect(parseUriSimple("file:///C:/")).toMatchSnapshot();
});
test("input: \"file:/C|/\"", () => {
    expect(parseUriSimple("file:/C|/")).toMatchSnapshot();
});
test("input: \"file://C|/\"", () => {
    expect(parseUriSimple("file://C|/")).toMatchSnapshot();
});
test("input: \"file:?q=v\"", () => {
    expect(parseUriSimple("file:?q=v")).toMatchSnapshot();
});
test("input: \"file:#frag\"", () => {
    expect(parseUriSimple("file:#frag")).toMatchSnapshot();
});
test("input: \"file:///Y:\"", () => {
    expect(parseUriSimple("file:///Y:")).toMatchSnapshot();
});
test("input: \"file:///Y:/\"", () => {
    expect(parseUriSimple("file:///Y:/")).toMatchSnapshot();
});
test("input: \"file:///./Y\"", () => {
    expect(parseUriSimple("file:///./Y")).toMatchSnapshot();
});
test("input: \"file:///./Y:\"", () => {
    expect(parseUriSimple("file:///./Y:")).toMatchSnapshot();
});
test("input: \"\\\\\\\\\\\\.\\\\Y:\"", () => {
    expect(parseUriSimple("\\\\\\.\\Y:")).toMatchSnapshot();
});
test("input: \"file:///y:\"", () => {
    expect(parseUriSimple("file:///y:")).toMatchSnapshot();
});
test("input: \"file:///y:/\"", () => {
    expect(parseUriSimple("file:///y:/")).toMatchSnapshot();
});
test("input: \"file:///./y\"", () => {
    expect(parseUriSimple("file:///./y")).toMatchSnapshot();
});
test("input: \"file:///./y:\"", () => {
    expect(parseUriSimple("file:///./y:")).toMatchSnapshot();
});
test("input: \"\\\\\\\\\\\\.\\\\y:\"", () => {
    expect(parseUriSimple("\\\\\\.\\y:")).toMatchSnapshot();
});
test("input: \"file://localhost//a//../..//foo\"", () => {
    expect(parseUriSimple("file://localhost//a//../..//foo")).toMatchSnapshot();
});
test("input: \"file://localhost////foo\"", () => {
    expect(parseUriSimple("file://localhost////foo")).toMatchSnapshot();
});
test("input: \"file:////foo\"", () => {
    expect(parseUriSimple("file:////foo")).toMatchSnapshot();
});
test("input: \"file:///one/two\"", () => {
    expect(parseUriSimple("file:///one/two")).toMatchSnapshot();
});
test("input: \"file:////one/two\"", () => {
    expect(parseUriSimple("file:////one/two")).toMatchSnapshot();
});
test("input: \"//one/two\"", () => {
    expect(parseUriSimple("//one/two")).toMatchSnapshot();
});
test("input: \"///one/two\"", () => {
    expect(parseUriSimple("///one/two")).toMatchSnapshot();
});
test("input: \"////one/two\"", () => {
    expect(parseUriSimple("////one/two")).toMatchSnapshot();
});
test("input: \"file:///.//\"", () => {
    expect(parseUriSimple("file:///.//")).toMatchSnapshot();
});
test("input: \"file:.//p\"", () => {
    expect(parseUriSimple("file:.//p")).toMatchSnapshot();
});
test("input: \"file:/.//p\"", () => {
    expect(parseUriSimple("file:/.//p")).toMatchSnapshot();
});
test("input: \"http://[1:0::]\"", () => {
    expect(parseUriSimple("http://[1:0::]")).toMatchSnapshot();
});
test("input: \"http://[0:1:2:3:4:5:6:7:8]\"", () => {
    expect(parseUriSimple("http://[0:1:2:3:4:5:6:7:8]")).toMatchSnapshot();
});
test("input: \"https://[0::0::0]\"", () => {
    expect(parseUriSimple("https://[0::0::0]")).toMatchSnapshot();
});
test("input: \"https://[0:.0]\"", () => {
    expect(parseUriSimple("https://[0:.0]")).toMatchSnapshot();
});
test("input: \"https://[0:0:]\"", () => {
    expect(parseUriSimple("https://[0:0:]")).toMatchSnapshot();
});
test("input: \"https://[0:1:2:3:4:5:6:7.0.0.0.1]\"", () => {
    expect(parseUriSimple("https://[0:1:2:3:4:5:6:7.0.0.0.1]")).toMatchSnapshot();
});
test("input: \"https://[0:1.00.0.0.0]\"", () => {
    expect(parseUriSimple("https://[0:1.00.0.0.0]")).toMatchSnapshot();
});
test("input: \"https://[0:1.290.0.0.0]\"", () => {
    expect(parseUriSimple("https://[0:1.290.0.0.0]")).toMatchSnapshot();
});
test("input: \"https://[0:1.23.23]\"", () => {
    expect(parseUriSimple("https://[0:1.23.23]")).toMatchSnapshot();
});
test("input: \"http://?\"", () => {
    expect(parseUriSimple("http://?")).toMatchSnapshot();
});
test("input: \"http://#\"", () => {
    expect(parseUriSimple("http://#")).toMatchSnapshot();
});
test("input: \"http://f:4294967377/c\"", () => {
    expect(parseUriSimple("http://f:4294967377/c")).toMatchSnapshot();
});
test("input: \"http://f:18446744073709551697/c\"", () => {
    expect(parseUriSimple("http://f:18446744073709551697/c")).toMatchSnapshot();
});
test("input: \"http://f:340282366920938463463374607431768211537/c\"", () => {
    expect(parseUriSimple("http://f:340282366920938463463374607431768211537/c")).toMatchSnapshot();
});
test("input: \"sc://ñ\"", () => {
    expect(parseUriSimple("sc://ñ")).toMatchSnapshot();
});
test("input: \"sc://ñ?x\"", () => {
    expect(parseUriSimple("sc://ñ?x")).toMatchSnapshot();
});
test("input: \"sc://ñ#x\"", () => {
    expect(parseUriSimple("sc://ñ#x")).toMatchSnapshot();
});
test("input: \"sc://?\"", () => {
    expect(parseUriSimple("sc://?")).toMatchSnapshot();
});
test("input: \"sc://#\"", () => {
    expect(parseUriSimple("sc://#")).toMatchSnapshot();
});
test("input: \"////\"", () => {
    expect(parseUriSimple("////")).toMatchSnapshot();
});
test("input: \"////x/\"", () => {
    expect(parseUriSimple("////x/")).toMatchSnapshot();
});
test("input: \"tftp://foobar.com/someconfig;mode=netascii\"", () => {
    expect(parseUriSimple("tftp://foobar.com/someconfig;mode=netascii")).toMatchSnapshot();
});
test("input: \"telnet://user:pass@foobar.com:23/\"", () => {
    expect(parseUriSimple("telnet://user:pass@foobar.com:23/")).toMatchSnapshot();
});
test("input: \"ut2004://10.10.10.10:7777/Index.ut2\"", () => {
    expect(parseUriSimple("ut2004://10.10.10.10:7777/Index.ut2")).toMatchSnapshot();
});
test("input: \"redis://foo:bar@somehost:6379/0?baz=bam&qux=baz\"", () => {
    expect(parseUriSimple("redis://foo:bar@somehost:6379/0?baz=bam&qux=baz")).toMatchSnapshot();
});
test("input: \"rsync://foo@host:911/sup\"", () => {
    expect(parseUriSimple("rsync://foo@host:911/sup")).toMatchSnapshot();
});
test("input: \"git://github.com/foo/bar.git\"", () => {
    expect(parseUriSimple("git://github.com/foo/bar.git")).toMatchSnapshot();
});
test("input: \"irc://myserver.com:6999/channel?passwd\"", () => {
    expect(parseUriSimple("irc://myserver.com:6999/channel?passwd")).toMatchSnapshot();
});
test("input: \"dns://fw.example.org:9999/foo.bar.org?type=TXT\"", () => {
    expect(parseUriSimple("dns://fw.example.org:9999/foo.bar.org?type=TXT")).toMatchSnapshot();
});
test("input: \"ldap://localhost:389/ou=People,o=JNDITutorial\"", () => {
    expect(parseUriSimple("ldap://localhost:389/ou=People,o=JNDITutorial")).toMatchSnapshot();
});
test("input: \"git+https://github.com/foo/bar\"", () => {
    expect(parseUriSimple("git+https://github.com/foo/bar")).toMatchSnapshot();
});
test("input: \"urn:ietf:rfc:2648\"", () => {
    expect(parseUriSimple("urn:ietf:rfc:2648")).toMatchSnapshot();
});
test("input: \"tag:joe@example.org,2001:foo/bar\"", () => {
    expect(parseUriSimple("tag:joe@example.org,2001:foo/bar")).toMatchSnapshot();
});
test("input: \"non-spec:/.//\"", () => {
    expect(parseUriSimple("non-spec:/.//")).toMatchSnapshot();
});
test("input: \"non-spec:/..//\"", () => {
    expect(parseUriSimple("non-spec:/..//")).toMatchSnapshot();
});
test("input: \"non-spec:/a/..//\"", () => {
    expect(parseUriSimple("non-spec:/a/..//")).toMatchSnapshot();
});
test("input: \"non-spec:/.//path\"", () => {
    expect(parseUriSimple("non-spec:/.//path")).toMatchSnapshot();
});
test("input: \"non-spec:/..//path\"", () => {
    expect(parseUriSimple("non-spec:/..//path")).toMatchSnapshot();
});
test("input: \"non-spec:/a/..//path\"", () => {
    expect(parseUriSimple("non-spec:/a/..//path")).toMatchSnapshot();
});
test("input: \"/.//path\"", () => {
    expect(parseUriSimple("/.//path")).toMatchSnapshot();
});
test("input: \"/..//path\"", () => {
    expect(parseUriSimple("/..//path")).toMatchSnapshot();
});
test("input: \"..//path\"", () => {
    expect(parseUriSimple("..//path")).toMatchSnapshot();
});
test("input: \"a/..//path\"", () => {
    expect(parseUriSimple("a/..//path")).toMatchSnapshot();
});
test("input: \"path\"", () => {
    expect(parseUriSimple("path")).toMatchSnapshot();
});
test("input: \"../path\"", () => {
    expect(parseUriSimple("../path")).toMatchSnapshot();
});
test("input: \"non-special://%E2%80%A0/\"", () => {
    expect(parseUriSimple("non-special://%E2%80%A0/")).toMatchSnapshot();
});
test("input: \"non-special://H%4fSt/path\"", () => {
    expect(parseUriSimple("non-special://H%4fSt/path")).toMatchSnapshot();
});
test("input: \"non-special://[1:2:0:0:5:0:0:0]/\"", () => {
    expect(parseUriSimple("non-special://[1:2:0:0:5:0:0:0]/")).toMatchSnapshot();
});
test("input: \"non-special://[1:2:0:0:0:0:0:3]/\"", () => {
    expect(parseUriSimple("non-special://[1:2:0:0:0:0:0:3]/")).toMatchSnapshot();
});
test("input: \"non-special://[1:2::3]:80/\"", () => {
    expect(parseUriSimple("non-special://[1:2::3]:80/")).toMatchSnapshot();
});
test("input: \"non-special://[:80/\"", () => {
    expect(parseUriSimple("non-special://[:80/")).toMatchSnapshot();
});
test("input: \"blob:https://example.com:443/\"", () => {
    expect(parseUriSimple("blob:https://example.com:443/")).toMatchSnapshot();
});
test("input: \"blob:d3958f5c-0777-0845-9dcf-2cb28783acaf\"", () => {
    expect(parseUriSimple("blob:d3958f5c-0777-0845-9dcf-2cb28783acaf")).toMatchSnapshot();
});
test("input: \"http://0177.0.0.0189\"", () => {
    expect(parseUriSimple("http://0177.0.0.0189")).toMatchSnapshot();
});
test("input: \"http://0x7f.0.0.0x7g\"", () => {
    expect(parseUriSimple("http://0x7f.0.0.0x7g")).toMatchSnapshot();
});
test("input: \"http://0X7F.0.0.0X7G\"", () => {
    expect(parseUriSimple("http://0X7F.0.0.0X7G")).toMatchSnapshot();
});
test("input: \"http://[::127.0.0.0.1]\"", () => {
    expect(parseUriSimple("http://[::127.0.0.0.1]")).toMatchSnapshot();
});
test("input: \"http://[0:1:0:1:0:1:0:1]\"", () => {
    expect(parseUriSimple("http://[0:1:0:1:0:1:0:1]")).toMatchSnapshot();
});
test("input: \"http://[1:0:1:0:1:0:1:0]\"", () => {
    expect(parseUriSimple("http://[1:0:1:0:1:0:1:0]")).toMatchSnapshot();
});
test("input: \"http://example.org/test?\\\"\"", () => {
    expect(parseUriSimple("http://example.org/test?\"")).toMatchSnapshot();
});
test("input: \"http://example.org/test?#\"", () => {
    expect(parseUriSimple("http://example.org/test?#")).toMatchSnapshot();
});
test("input: \"http://example.org/test?<\"", () => {
    expect(parseUriSimple("http://example.org/test?<")).toMatchSnapshot();
});
test("input: \"http://example.org/test?>\"", () => {
    expect(parseUriSimple("http://example.org/test?>")).toMatchSnapshot();
});
test("input: \"http://example.org/test?⌣\"", () => {
    expect(parseUriSimple("http://example.org/test?⌣")).toMatchSnapshot();
});
test("input: \"http://example.org/test?%23%23\"", () => {
    expect(parseUriSimple("http://example.org/test?%23%23")).toMatchSnapshot();
});
test("input: \"http://example.org/test?%GH\"", () => {
    expect(parseUriSimple("http://example.org/test?%GH")).toMatchSnapshot();
});
test("input: \"http://example.org/test?a#%EF\"", () => {
    expect(parseUriSimple("http://example.org/test?a#%EF")).toMatchSnapshot();
});
test("input: \"http://example.org/test?a#%GH\"", () => {
    expect(parseUriSimple("http://example.org/test?a#%GH")).toMatchSnapshot();
});
test("input: \"a\"", () => {
    expect(parseUriSimple("a")).toMatchSnapshot();
});
test("input: \"a/\"", () => {
    expect(parseUriSimple("a/")).toMatchSnapshot();
});
test("input: \"a//\"", () => {
    expect(parseUriSimple("a//")).toMatchSnapshot();
});
test("input: \"test-a-colon.html\"", () => {
    expect(parseUriSimple("test-a-colon.html")).toMatchSnapshot();
});
test("input: \"test-a-colon-b.html\"", () => {
    expect(parseUriSimple("test-a-colon-b.html")).toMatchSnapshot();
});
test("input: \"test-a-colon-slash.html\"", () => {
    expect(parseUriSimple("test-a-colon-slash.html")).toMatchSnapshot();
});
test("input: \"test-a-colon-slash-slash.html\"", () => {
    expect(parseUriSimple("test-a-colon-slash-slash.html")).toMatchSnapshot();
});
test("input: \"test-a-colon-slash-b.html\"", () => {
    expect(parseUriSimple("test-a-colon-slash-b.html")).toMatchSnapshot();
});
test("input: \"test-a-colon-slash-slash-b.html\"", () => {
    expect(parseUriSimple("test-a-colon-slash-slash-b.html")).toMatchSnapshot();
});
test("input: \"http://example.org/test?a#b\\u0000c\"", () => {
    expect(parseUriSimple("http://example.org/test?a#b\u0000c")).toMatchSnapshot();
});
test("input: \"non-spec://example.org/test?a#b\\u0000c\"", () => {
    expect(parseUriSimple("non-spec://example.org/test?a#b\u0000c")).toMatchSnapshot();
});
test("input: \"non-spec:/test?a#b\\u0000c\"", () => {
    expect(parseUriSimple("non-spec:/test?a#b\u0000c")).toMatchSnapshot();
});
test("input: \"10.0.0.7:8080/foo.html\"", () => {
    expect(parseUriSimple("10.0.0.7:8080/foo.html")).toMatchSnapshot();
});
test("input: \"a!@$*=/foo.html\"", () => {
    expect(parseUriSimple("a!@$*=/foo.html")).toMatchSnapshot();
});
test("input: \"a1234567890-+.:foo/bar\"", () => {
    expect(parseUriSimple("a1234567890-+.:foo/bar")).toMatchSnapshot();
});
test("input: \"file://a­b/p\"", () => {
    expect(parseUriSimple("file://a­b/p")).toMatchSnapshot();
});
test("input: \"file://a%C2%ADb/p\"", () => {
    expect(parseUriSimple("file://a%C2%ADb/p")).toMatchSnapshot();
});
test("input: \"file://­/p\"", () => {
    expect(parseUriSimple("file://­/p")).toMatchSnapshot();
});
test("input: \"file://%C2%AD/p\"", () => {
    expect(parseUriSimple("file://%C2%AD/p")).toMatchSnapshot();
});
test("input: \"file://xn--/p\"", () => {
    expect(parseUriSimple("file://xn--/p")).toMatchSnapshot();
});
test("input: \"#link\"", () => {
    expect(parseUriSimple("#link")).toMatchSnapshot();
});
test("input: \"non-special:cannot-be-a-base-url-\\u0000\\u0001\\u001f\\u001e~\"", () => {
    expect(parseUriSimple("non-special:cannot-be-a-base-url-\u0000\u0001\u001f\u001e~")).toMatchSnapshot();
});
test("input: \"https://www.example.com/path{path.html?query'=query#fragment<fragment\"", () => {
    expect(parseUriSimple("https://www.example.com/path{path.html?query'=query#fragment<fragment")).toMatchSnapshot();
});
test("input: \"https://user:pass[@foo/bar\"", () => {
    expect(parseUriSimple("https://user:pass[@foo/bar")).toMatchSnapshot();
});
test("input: \"foo:// !\\\"$%&'()*+,-.;<=>@[\\\\]^_`{|}~@host/\"", () => {
    expect(parseUriSimple("foo:// !\"$%&'()*+,-.;<=>@[\\]^_`{|}~@host/")).toMatchSnapshot();
});
test("input: \"wss:// !\\\"$%&'()*+,-.;<=>@[]^_`{|}~@host/\"", () => {
    expect(parseUriSimple("wss:// !\"$%&'()*+,-.;<=>@[]^_`{|}~@host/")).toMatchSnapshot();
});
test("input: \"foo://joe: !\\\"$%&'()*+,-.:;<=>@[\\\\]^_`{|}~@host/\"", () => {
    expect(parseUriSimple("foo://joe: !\"$%&'()*+,-.:;<=>@[\\]^_`{|}~@host/")).toMatchSnapshot();
});
test("input: \"wss://joe: !\\\"$%&'()*+,-.:;<=>@[]^_`{|}~@host/\"", () => {
    expect(parseUriSimple("wss://joe: !\"$%&'()*+,-.:;<=>@[]^_`{|}~@host/")).toMatchSnapshot();
});
test("input: \"foo://!\\\"$%&'()*+,-.;=_`{}~/\"", () => {
    expect(parseUriSimple("foo://!\"$%&'()*+,-.;=_`{}~/")).toMatchSnapshot();
});
test("input: \"wss://!\\\"$&'()*+,-.;=_`{}~/\"", () => {
    expect(parseUriSimple("wss://!\"$&'()*+,-.;=_`{}~/")).toMatchSnapshot();
});
test("input: \"foo://host/ !\\\"$%&'()*+,-./:;<=>@[\\\\]^_`{|}~\"", () => {
    expect(parseUriSimple("foo://host/ !\"$%&'()*+,-./:;<=>@[\\]^_`{|}~")).toMatchSnapshot();
});
test("input: \"wss://host/ !\\\"$%&'()*+,-./:;<=>@[\\\\]^_`{|}~\"", () => {
    expect(parseUriSimple("wss://host/ !\"$%&'()*+,-./:;<=>@[\\]^_`{|}~")).toMatchSnapshot();
});
test("input: \"foo://host/dir/? !\\\"$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~\"", () => {
    expect(parseUriSimple("foo://host/dir/? !\"$%&'()*+,-./:;<=>?@[\\]^_`{|}~")).toMatchSnapshot();
});
test("input: \"wss://host/dir/? !\\\"$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~\"", () => {
    expect(parseUriSimple("wss://host/dir/? !\"$%&'()*+,-./:;<=>?@[\\]^_`{|}~")).toMatchSnapshot();
});
test("input: \"foo://host/dir/# !\\\"#$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~\"", () => {
    expect(parseUriSimple("foo://host/dir/# !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")).toMatchSnapshot();
});
test("input: \"wss://host/dir/# !\\\"#$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~\"", () => {
    expect(parseUriSimple("wss://host/dir/# !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")).toMatchSnapshot();
});
