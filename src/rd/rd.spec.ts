import { openRdAccount } from './rd';

describe('Recurring Deposit', () => {
    it('Open RD account', () => {
        const result = openRdAccount(5000, 12, 8.5);
        expect(result.totalMaturityAmount).toEqual(62762.5);
        expect(result.totalInterest).toEqual(2762.5);
    });

    it('Try to open RD account if period is negative', () => {
        expect(() => openRdAccount(5000, -12, 8.5)).toThrow('Period needs to be greater than 0');
    });

    it('Try to open RD account if period is 0', () => {
        expect(() => openRdAccount(5000, 0, 8.5)).toThrow('Period needs to be greater than 0');
    });

    it('Try to open RD account if period is not an integer', () => {
        expect(() => openRdAccount(5000, 12.6, 8.5)).toThrow('Period needs to be an integer value');
    });

    it('Try to open RD account if roi is negative', () => {
        expect(() => openRdAccount(5000, 12, -8.5)).toThrow('Rate of interest needs to be greater than 0');
    });

    it('Try to open RD account if roi is 0', () => {
        expect(() => openRdAccount(5000, 12, 0)).toThrow('Rate of interest needs to be greater than 0');
    });

    it('Try to open RD account if prinicpal amount is negative', () => {
        expect(() => openRdAccount(-5000, 12, 8.5)).toThrow('Principal amount needs to be greater than 0');
    });

    it('Try to open RD account if prinicpal amount is 0', () => {
        expect(() => openRdAccount(0, 12, 8.5)).toThrow('Principal amount needs to be greater than 0');
    });
});