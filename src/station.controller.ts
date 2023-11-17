import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { StationService } from './station.service';
import { Station } from './Station';
import { Console } from 'console';

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

  @Post('/fav')
  addRemoveFavorite(@Body('id') id: number): Station[] {
    return this.stationService.addRemoveFavorite(id);
  }
}
