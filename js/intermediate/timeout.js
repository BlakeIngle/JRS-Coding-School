let t0 = new Date().getTime();

var to = setTimeout(() => {
    console.log("timeout done")
    let t1 = new Date().getTime();

    console.log("time between t0 and t1", t1 - t0)
}, 1000);

