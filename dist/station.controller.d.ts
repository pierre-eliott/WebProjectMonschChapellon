import { StationService } from './station.service';
import { Station } from './Station';
export declare class StationController {
    private readonly stationService;
    constructor(stationService: StationService);
    create(station: Station): Station;
    findAll(): Station[];
    searchStation(body: {
        name: string;
    }): Station[];
    addRemoveFavorite(id: number): Station[];
}
