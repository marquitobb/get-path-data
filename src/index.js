
const getPathData = (dataPath) => {
    let url = dataPath

    let init = false;
    let dataUrl = "";
    for (const key in url) {
        if (url[key] === "/") {
            init = true;
        } else if (url[key] === "?") {
            init = false;
        } else {
            if (!init) {
                dataUrl = dataUrl + url[key];
            }
        }
    }

    let keyString = "",
        dtString = "";
    let keyDt = [];
    let dt = [];
    let accept = false;
    for (const k in dataUrl) {
        if (
            !accept &&
            dataUrl[k] !== "=" &&
            dataUrl[k] !== "&" &&
            dataUrl[k] !== "&&"
        ) {
            keyString = keyString + dataUrl[k];
        } else if (
            accept &&
            dataUrl[k] !== "=" &&
            dataUrl[k] !== "&" &&
            dataUrl[k] !== "&&"
        ) {
            dtString = dtString + dataUrl[k];
        } else if (dataUrl[k] === "=") {
            keyDt.push(keyString);
            keyString = "";
            accept = true;
        } else if (dataUrl[k] === "&" || dataUrl[k] === "&&") {
            dt.push(dtString);
            dtString = "";
            accept = false;
        }

        if (dataUrl.length - 1 === parseInt(k)) {
            dt.push(dtString);
        }
    }

    let dtFinal = [];
    let fer = {};
    if (keyDt.length == dt.length) {
        for (const kk in dt) {
            let a = keyDt[kk];
            let b = dt[kk];
            let dd = { a: b };
            fer[a] = b;
            dtFinal.push(dd);
        }
    }

    return fer
};

module.exports={
    getPathData
}