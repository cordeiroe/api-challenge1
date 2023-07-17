import { Injectable } from '@nestjs/common';
import { DepositionsDto } from '../dtos/createDepo.dto';

@Injectable()
export class CreateDepoRepository {
    private readonly depos: DepositionsDto[] = [];

    createDepo(depoData: DepositionsDto): DepositionsDto {
        const newDeposition = { ...depoData };
        this.depos.push(newDeposition);
        return newDeposition;
    }

    findAllDepositions(): DepositionsDto[] {
        return this.depos;
    }
}
