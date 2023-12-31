/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { StationService } from './station.service';
import { Station } from './Station';

@Controller('/stations')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Post()
  create(@Body() station: Station) {
    return this.stationService.create(station);
  }

  @Get()
  findAll() {
    return this.stationService.findAll();
  }

  // Add Endpoint

  @Post('/search')
  @HttpCode(200)
  searchStation(@Body() body: { name: string }) {
    return this.stationService.searchStation(body.name);
  }

  @Post('/fav')
  addRemoveFavorite(@Body('id') id: number): Station[] {
    return this.stationService.addRemoveFavorite(id);
  }
}
