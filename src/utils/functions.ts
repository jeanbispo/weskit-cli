

let Functions = {
    paths: require('./paths'),

    listBundle:(group: any, filter: any) => {
        return Object.keys(Functions.paths[group])
            .filter(bundle => Functions.paths[group][bundle].bundle.length)
            .filter(bundle => filter ? filter == bundle : true);
    }

}


module.exports = Functions;