import del from 'del'

export let clean: Function = async () => await del('www/**', { force: true });
