import estados from './Estados.json';

function estadoPor(key, val) {
    const res = estados.find(el => (el[key] === val));
    return res;
}

function estadoPorId(id) {
    return estadoPor('_id', String(id));
}

function estadoPorSigla(sigla_slug='') {
    const sigla = sigla_slug.toLowerCase();
    return estadoPor('sigla_slug', String(sigla));
}

export { estados, estadoPorId, estadoPorSigla };