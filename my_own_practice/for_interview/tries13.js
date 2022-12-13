const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favouriteColor=light%20Blue&experiments.them=dark";

function queryObjectify(str) {
    let res = {}
    str = str.split('&');
    str = str.map(i => i.split('.'));
    console.log(str);
    // return res
    for (let i = 0; i < str.length; i += 1) {
        let cur = res
        for (let key = 0; key < str[i].length; key += 1) {
            let name = str[i][key]
                // console.log(name)
            if (key == str[i].length - 1) {
                name = name.split('=');
                cur[name[0]] = name[1]

                break

            }
            if (cur[name]) {
                cur = cur[name]

            } else {
                cur[name] = {}
                cur = cur[name]

            }
        }
    }

    return res
}
queryObjectify(inData)
console.log(queryObjectify(inData));