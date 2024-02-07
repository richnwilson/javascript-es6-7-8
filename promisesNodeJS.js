const fs = require('fs');
try {
    let totals = [];

    const updateCount = (file) => {
        return new Promise ((res,rej)=> {
            try {
                fs.readFile(`./data/${file}`,'utf8',((err,info) => {
                    if (err) rej(err);
                    console.log(`${file} has ${info.toLowerCase().split("gotya").length - 1 } occurence(s) of gotYa`);
                    res({key: file, count: info.toLowerCase().split("gotya").length - 1});
                }))
            } catch(e) {
                rej("failed")
            }
        })
    }

    fs.readdir('./data',(err,files) => {
        const buildCounts = files.map(file => {
            return updateCount(file)
        })
        Promise.all(buildCounts).then(alldata => {
            for (const data of alldata) {
                totals = [...totals, data]
            }
            totals.sort((a,b) => a.count - b.count)
            console.log(totals)
        }).catch(e => {
            console.log(e)
        })
    })
} catch(e) {
    console.log(e);
}