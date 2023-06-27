import { IsNotEmpty, IsNumber } from "class-validator";

export class RdAccount {
    @IsNotEmpty()
    @IsNumber()
    totalMaturityAmount: number;

    @IsNotEmpty()
    @IsNumber()
    totalDepositedAmount: number;

    @IsNotEmpty()
    @IsNumber()
    totalInterest: number;
}