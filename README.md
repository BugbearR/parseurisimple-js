# parseurisimple-js

Simple URL parser

- String decomposition only.
- No trimming.
- No decoding.
- No encoding.
- No validation.

```
            userinfo           host
           ____|_______   ______|_______
          /            \ /              \
       username password   hostname  port
           _|_   __|___   ____|____   |_
          /   \ /      \ /         \ /  \
    foo://alice:passw0rd@example.com:8042/over/there?name=ferret#nose
    \_/   \_____________________________/\_________/ \_________/ \__/
     |           |                            |           |       |
   scheme     authority      path           path       query   fragment
     |   _____________________|__
    / \ /                        \
    urn:example:animal:ferret:nose
```

```
// const parseUriSimple = require("@bugbearr/parseurisimple");
import parseUriSimple from "@bugbearr/parseurisimple";

console.log(parseUriSimple("foo://alice:passw0rd@example.com:8042/over/there?name=ferret#nose"));
// {
//   href: 'foo://alice:passw0rd@example.com:8042/over/there?name=ferret#nose',
//   scheme: 'foo',
//   authority: 'alice:passw0rd@example.com:8042',
//   userinfo: 'alice:passw0rd',
//   username: 'alice',
//   password: 'passw0rd',
//   host: 'example.com:8042',
//   hostname: 'example.com',
//   port: '8042',
//   path: '/over/there',
//   query: 'name=ferret',
//   fragment: 'nose'
// }

console.log(parseUriSimple("urn:example:animal:ferret:nose"));
// {
//   href: 'urn:example:animal:ferret:nose',
//   scheme: 'urn',
//   path: 'example:animal:ferret:nose'
// }
```

## Refer
- [RFC3986](https://www.rfc-editor.org/rfc/rfc3986.html) Uniform Resource Identifier (URI): Generic Syntax
