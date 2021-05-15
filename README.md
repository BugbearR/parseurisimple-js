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

## Refer
- [RFC3986](https://www.rfc-editor.org/rfc/rfc3986.html) Uniform Resource Identifier (URI): Generic Syntax
