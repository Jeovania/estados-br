import { estados, estadoPorSigla, estadoPorId } from './dist/index';

const LISTA_ESTADOS = [
    {
        "_id": "1",
        "nome": "Acre",
        "sigla": "AC",
        "sigla_slug": "ac",
        "slug": "acre"
    },
    {
        "_id": "2",
        "nome": "Alagoas",
        "sigla": "AL",
        "sigla_slug": "al",
        "slug": "alagoas"
    },
    {
        "_id": "3",
        "nome": "Amazonas",
        "sigla": "AM",
        "sigla_slug": "am",
        "slug": "amazonas"
    },
    {
        "_id": "4",
        "nome": "Amapá",
        "sigla": "AP",
        "sigla_slug": "ap",
        "slug": "amapa"
    },
    {
        "_id": "5",
        "nome": "Bahia",
        "sigla": "BA",
        "sigla_slug": "ba",
        "slug": "bahia"
    },
    {
        "_id": "6",
        "nome": "Ceará",
        "sigla": "CE",
        "sigla_slug": "ce",
        "slug": "ceara"
    },
    {
        "_id": "7",
        "nome": "Distrito Federal",
        "sigla": "DF",
        "sigla_slug": "df",
        "slug": "distrito-federal"
    },
    {
        "_id": "8",
        "nome": "Espírito Santo",
        "sigla": "ES",
        "sigla_slug": "es",
        "slug": "espirito-santo"
    },
    {
        "_id": "9",
        "nome": "Goiás",
        "sigla": "GO",
        "sigla_slug": "go",
        "slug": "goias"
    },
    {
        "_id": "10",
        "nome": "Maranhão",
        "sigla": "MA",
        "sigla_slug": "ma",
        "slug": "maranhao"
    },
    {
        "_id": "11",
        "nome": "Minas Gerais",
        "sigla": "MG",
        "sigla_slug": "mg",
        "slug": "minas-gerais"
    },
    {
        "_id": "12",
        "nome": "Mato Grosso do Sul",
        "sigla": "MS",
        "sigla_slug": "ms",
        "slug": "mato-grosso-do-sul"
    },
    {
        "_id": "13",
        "nome": "Mato Grosso",
        "sigla": "MT",
        "sigla_slug": "mt",
        "slug": "mato-grosso"
    },
    {
        "_id": "14",
        "nome": "Pará",
        "sigla": "PA",
        "sigla_slug": "pa",
        "slug": "para"
    },
    {
        "_id": "15",
        "nome": "Paraíba",
        "sigla": "PB",
        "sigla_slug": "pb",
        "slug": "paraiba"
    },
    {
        "_id": "16",
        "nome": "Pernambuco",
        "sigla": "PE",
        "sigla_slug": "pe",
        "slug": "pernambuco"
    },
    {
        "_id": "17",
        "nome": "Piauí",
        "sigla": "PI",
        "sigla_slug": "pi",
        "slug": "piaui"
    },
    {
        "_id": "18",
        "nome": "Paraná",
        "sigla": "PR",
        "sigla_slug": "pr",
        "slug": "parana"
    },
    {
        "_id": "19",
        "nome": "Rio de Janeiro",
        "sigla": "RJ",
        "sigla_slug": "rj",
        "slug": "rio-de-janeiro"
    },
    {
        "_id": "20",
        "nome": "Rio Grande do Norte",
        "sigla": "RN",
        "sigla_slug": "rn",
        "slug": "rio-grande-do-norte"
    },
    {
        "_id": "21",
        "nome": "Rondônia",
        "sigla": "RO",
        "sigla_slug": "ro",
        "slug": "rondonia"
    },
    {
        "_id": "22",
        "nome": "Roraima",
        "sigla": "RR",
        "sigla_slug": "rr",
        "slug": "roraima"
    },
    {
        "_id": "23",
        "nome": "Rio Grande do Sul",
        "sigla": "RS",
        "sigla_slug": "rs",
        "slug": "rio-grande-do-sul"
    },
    {
        "_id": "24",
        "nome": "Santa Catarina",
        "sigla": "SC",
        "sigla_slug": "sc",
        "slug": "santa-catarina"
    },
    {
        "_id": "25",
        "nome": "Sergipe",
        "sigla": "SE",
        "sigla_slug": "se",
        "slug": "sergipe"
    },
    {
        "_id": "25",
        "nome": "São Paulo",
        "sigla": "SP",
        "sigla_slug": "sp",
        "slug": "sao-paulo"
    },
    {
        "_id": "27",
        "nome": "Tocantins",
        "sigla": "TO",
        "sigla_slug": "to",
        "slug": "tocantins"
    }
];

describe('estados', () => {
    it('deve retornar um objeto com vários estados', () => {
        expect(estados).toEqual(LISTA_ESTADOS);
    });
});

describe('estadosPorId', () => {
    it('deve retornar um objeto estado', () => {
        expect(estadoPorId(22)).toEqual({ _id: '22', nome: 'Roraima', sigla: 'RR', sigla_slug: 'rr', slug: 'roraima' });
        expect(estadoPorId(30)).toEqual(undefined);
        expect(estadoPorId('RR')).toEqual(undefined);
        expect(estadoPorId()).toEqual(undefined);
    });
});

describe('estadosPorSigla', () => {
    it('deve retornar um objeto estado', () => {
        expect(estadoPorSigla('RR')).toEqual({ _id: '22', nome: 'Roraima', sigla: 'RR', sigla_slug: 'rr', slug: 'roraima' });
        expect(estadoPorSigla('ABC')).toEqual(undefined);
        expect(estadoPorSigla('')).toEqual(undefined);
        expect(estadoPorSigla()).toEqual(undefined);
    });
});