import { isEmpty, isInt, isPositive } from "class-validator";
import { RdAccount } from "../dto/rd-account.dto";

/**
 * @description Calculates
 * @param principalAmount Monthly RD deposit
 * @param period Period (in months)
 * @param roi Interest rate
 * @returns RdAccount
 */
export function openRdAccount(principalAmount: number, period: number, roi: number): RdAccount {
    if (isEmpty(principalAmount)) {
        throw new Error('Principal amount is empty or null');
    }

    if (isEmpty(period)) {
        throw new Error('Period is empty or null');
    }

    if (isEmpty(roi)) {
        throw new Error('Rate of interest is empty or null');
    }

    if (!isPositive(principalAmount)) {
        throw new Error('Principal amount needs to be greater than 0');
    }

    if (!isInt(period)) {
        throw new Error('Period needs to be an integer value');
    }

    if (!isPositive(period)) {
        throw new Error('Period needs to be greater than 0');
    }

    if (!isPositive(roi)) {
        throw new Error('Rate of interest needs to be greater than 0');
    }

    const rateOfInterest = roi / 100.0;
    const T = 1 / 12.0;

    const totalDepositedAmount = principalAmount * period;
    const totalInterest = principalAmount * ((period * (period + 1)) / 2) * T * rateOfInterest;
    const totalMaturityAmount = totalDepositedAmount + totalInterest;

    return {totalDepositedAmount, totalInterest, totalMaturityAmount};
}