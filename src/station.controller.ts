import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
