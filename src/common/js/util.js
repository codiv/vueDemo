/**
 * 解析url参数
 * @example ?id=1056&&shop=sp
 * @return Object {id:1056,shop:sp}
 */
export function urlParse() {
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
//["?id=1056", "&shop=sp"]
    if (arr) {
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        })
    }
    return obj;
};
