export declare class Station {
    id: number;
    n_amenageur: string;
    n_operateur: string;
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
    region: string;
    departement: string;
    isFavorite: boolean;
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
