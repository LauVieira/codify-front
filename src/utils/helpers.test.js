import Helpers from './Helpers';

describe('capitalizeAllAndTrim', () => {
    it('should return undefined when the parameter is not a string', () => {
        const result = Helpers.capitalizeAllAndTrim(23);

        expect(result).toBeUndefined();
    });

    it('should return a string with trim', () => {
        const expect = 'Aline Batista Oliveira';
        const result = Helpers.capitalizeAllAndTrim('  Aline Batista Oliveira   ');

        expect(result).toEqual(expect);
    });

    it('should return a string without spaces between words', () => {
        const expect = 'Aline Batista Oliveira';
        const result = Helpers.capitalizeAllAndTrim('Aline    Batista Oliveira');

        expect(result).toEqual(expect);
    });

    it('should return a string with all words capitalized and the rest lowercase', () => {
        const expect = 'Aline Batista Oliveira';
        const result = Helpers.capitalizeAllAndTrim('aLInE bAtIsTa oLiVeIrA');

        expect(result).toEqual(expect);
    });

    it(`should return a string with all cases (not working 'de' and d'Ávila`, () => {
        const expect= `Aline Batista De Oliveira D'ávila`;
        const result = Helpers.capitalizeAllAndTrim(`  aLinE   bAtiStA  dE  oLivEIrA   D'AVíLa  `);

        expect(result).toEqual(expect);
    });
});