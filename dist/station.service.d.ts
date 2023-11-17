import { OnModuleInit } from '@nestjs/common';
import { Station } from './Station';
import { HttpService } from '@nestjs/axios';
export declare class StationService implements OnModuleInit {
    private readonly httpService;
    constructor(httpService: HttpService);
    private stations;
    create(station: Station): Station;
    findAll(): Station[];
    addRemoveFavorite(id: number): Station[];
    onModuleInit(): void;
    loadStationsFromServer(): Promise<void>;
}
