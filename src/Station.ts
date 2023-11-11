/* eslint-disable prettier/prettier */
import {IsDateString, IsNotEmpty, IsString} from 'class-validator';

export class Station {
    @IsString()
    n_amenageur: string;
    @IsString()
    n_operateur: string;
    @IsString()
    id_station: string;
    @IsString()
    n_station: string;
    @IsString()
    ad_station: string;
    @IsNotEmpty()
    code_insee: number;
    @IsNotEmpty()
    xlongitude: number;
    @IsNotEmpty()
    ylatitude: number;
    @IsNotEmpty()
    nbre_pdc: number;
    @IsString()
    id_pdc: string;
    @IsNotEmpty()
    puiss_max: number;
    @IsString()
    type_prise: string;
    @IsString()
    acces_recharge: string;
    @IsString()
    accessibilite: string;
    @IsString()
    observations: string;
    @IsDateString()
    date_maj: string;
    @IsString()
    region: string;
    @IsString()
    departement: string;
}

export interface StationAPI {
    n_amenageur: string;
    n_operateur: string;
    n_enseigne: string;
    id_station: string;
    n_station: string;
    ad_station: string;
    code_insee: number;
    xlongitude: number;
    ylatitude: number;
    nbre_pdc: number;
    id_pdc: string;
    puiss_max: number;
    type_prise: string;
    acces_recharge: string;
    accessibilite: string;
    observations: string;
    date_maj: string;
    source: string;
    geo_point_borne: GeoPoint;
    code_insee_commune: string;
    region: string;
    departement: string;
}

export interface GeoPoint {
    lon: number;
    lat: number;
}
