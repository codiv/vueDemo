/**
 * Created by codiv on 2017/6/6.
 */
export function saveToLocal(id, key, value) {
    let seller = window.localStorage.__seller__;
    if (!seller) {
        seller = {};
        seller[id] = {};
    } else {
        seller = JSON.parse(seller);
        if (!seller[id]) {
            seller[id] = {};
        }
    }
    seller[id][key] = value;
    window.localStorage.__seller__ = JSON.stringify(seller);
};

export function loadFromLocal(id, key, def) {
    let seller = window.localStorage.__seller__;
    if (!seller) {
        return def;
    }
    // console.log(JSON.parse(seller)[1026]['favorite'])
    seller = JSON.parse(seller)[id];
    if (!seller) {
        return def;
    }
    let ret = seller[key];
    return ret || def;
};
