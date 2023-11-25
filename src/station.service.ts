/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Station, StationAPI } from './Station';
import { HttpService } from '@nestjs/axios';
import {  map } from 'rxjs';

@Injectable()
export class StationService implements OnModuleInit {
  constructor(private readonly httpService: HttpService) {}

  private stations: Station[] = [];

  create(station: Station) {
    this.stations.push(station);
    return station;
  }

  findAll(): Station[] {
    return this.stations;
  }

  addRemoveFavorite(id: number): Station[] {

    //console.log("TEST : " + id);
   
    this.stations[id].isFavorite = !this.stations[id].isFavorite;
    return this.stations;
    
  }

  searchStation(name: string)
  {
    return this.stations.filter((station)=>station.n_station.includes(name));
  }


  onModuleInit() {
    Promise.all([this.loadStationsFromServer()]);
  }

  async loadStationsFromServer()
  {
    const data = this.httpService.get<{ total_count: number; results: StationAPI[] }>('https://odre.opendatasoft.com/api/explore/v2.1/catalog/datasets/bornes-irve/records?limit=100');

    data.pipe(
      map((response) => {

          let i: number = 0;
          response.data.results.forEach((element) => {
          const station = new Station();
          
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
      })
    )
    .subscribe(
      (success) => {
        console.log('Création des stations réussie !', success);
      },
      (error) => {
        console.error('Erreur lors de la création des stations :', error);
      }
    );
  }
}
