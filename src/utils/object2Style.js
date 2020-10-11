export default function(obj) {
    return Object.keys(obj).reduce((acc, cur) => {
        acc += `${cur}: ${obj[cur]};`;
        return acc
    }, "")
}