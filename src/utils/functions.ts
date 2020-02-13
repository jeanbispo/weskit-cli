import { Paths as paths } from "./paths";


export let Functions: any = {

    listBundle:(group: any, filter: any) => {
        return Object.keys(paths[group])
            .filter(bundle => paths[group][bundle].bundle.length)
            .filter(bundle => filter ? filter == bundle : true);
    }

}