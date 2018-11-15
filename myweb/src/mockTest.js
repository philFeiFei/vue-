var Mock = require("mockjs")

var r = Mock.Random
var aaa = Mock.mock({
    ddrq: +r.date('T'),
    ddbh: 'K' + r.natural(629001, 629003),
    'sh': r.natural(1, 9) + r.character('upper') + '-' + r.natural(1, 9),
    sl: 1,
    fhrq: r.datetime(),
    fhr: '丹东' + '-' + r.cname(),
    ks: 'Q66*8',
    gz: r.datetime(),
    gzr: r.cname(),
    zj: r.datetime(),
    zjr: r.cname(),
    dj: r.datetime(),
    djr: r.cname(),
    zx: r.datetime(),
    zxr: r.cname(),
    zxyz: r.datetime(),
    zxyzr: r.cname(),
    fh: r.cname(['a', 'a', 'a']),
    lhsj: r.datetime(),
})
console.log(aaa);
