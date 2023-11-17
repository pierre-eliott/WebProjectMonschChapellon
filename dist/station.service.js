"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationService = void 0;
const common_1 = require("@nestjs/common");
const Station_1 = require("./Station");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let StationService = class StationService {
    constructor(httpService) {
        this.httpService = httpService;
        this.stations = [];
    }
    create(station) {
        this.stations.push(station);
        return station;
    }
    findAll() {
        return this.stations;
    }
    addRemoveFavorite(id) {
        console.log("TEST : " + id);
        this.stations[id].isFavorite = !this.stations[id].isFavorite;
        return this.stations;
    }
    onModuleInit() {
        Promise.all([this.loadStationsFromServer()]);
    }
    async loadStationsFromServer() {
        const data = this.httpService.get('https://odre.opendatasoft.com/api/explore/v2.1/catalog/datasets/bornes-irve/records?limit=100');
        data.pipe((0, rxjs_1.map)((response) => {
            let i = 0;
            response.data.results.forEach((element) => {
                const station = new Station_1.Station();
                station.id = i;
                station.n_amenageur = element.n_amenageur;
                station.n_operateur = element.n_operateur;
                station.id_station = element.id_station;
                station.n_station = element.n_station;
                station.ad_station = element.ad_station;
                station.code_insee = element.code_insee;
                station.xlongitude = element.xlongitude;
                station.ylatitude = element.ylatitude;
                station.nbre_pdc = element.nbre_pdc;
                station.id_pdc = element.id_pdc;
                station.puiss_max = element.puiss_max;
                station.type_prise = element.type_prise;
                station.acces_recharge = element.acces_recharge;
                station.accessibilite = element.accessibilite;
                station.observations = element.observations;
                station.date_maj = element.date_maj;
                station.region = element.region;
                station.departement = element.departement;
                station.isFavorite = false;
                this.create(station);
                i++;
            });
        }))
            .subscribe((success) => {
            console.log('Création des stations réussie !', success);
        }, (error) => {
            console.error('Erreur lors de la création des stations :', error);
        });
    }
};
exports.StationService = StationService;
exports.StationService = StationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], StationService);
//# sourceMappingURL=station.service.js.map