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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationController = void 0;
const common_1 = require("@nestjs/common");
const station_service_1 = require("./station.service");
const Station_1 = require("./Station");
let StationController = class StationController {
    constructor(stationService) {
        this.stationService = stationService;
    }
    create(station) {
        return this.stationService.create(station);
    }
    findAll() {
        return this.stationService.findAll();
    }
    addRemoveFavorite(id) {
        return this.stationService.addRemoveFavorite(id);
    }
};
exports.StationController = StationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Station_1.Station]),
    __metadata("design:returntype", void 0)
], StationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/fav'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Array)
], StationController.prototype, "addRemoveFavorite", null);
exports.StationController = StationController = __decorate([
    (0, common_1.Controller)('/stations'),
    __metadata("design:paramtypes", [station_service_1.StationService])
], StationController);
//# sourceMappingURL=station.controller.js.map