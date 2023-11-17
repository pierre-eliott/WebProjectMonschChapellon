/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import supertest, * as request from 'supertest';
import { StationModule } from '../src/station.module';

describe('Station API ', () => {
  let app: INestApplication;
  let httpRequester: supertest.SuperTest<supertest.Test>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [StationModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    httpRequester = request(app.getHttpServer());
  });

  describe('GET /stations', () => {
    it(`should return a list of stations`, async () => {
      const response = await httpRequester.get('/stations').expect(200);

      expect(response.body).toEqual(expect.any(Array));
    });
    it(`with author query should return all books of author`, async () => {
      // First prepare the data by adding some books

      // Then get the previously stored book
      const response = await httpRequester.get('/stations').expect(200);

      expect(response.body).toEqual([]);
    });
  });

  describe('POST /stations', () => {
    it(`should create a station and return it`, async () => {
      const response = await httpRequester
        .post('/stations')
          .send({
            n_amenageur:"SDE22",
            n_operateur:"IZIVIA",
            id_station:"FR*SDE2*PSDE2*61",
            n_station:"Camlez-Parking du 19 mars 1962",
            ad_station:"Place du 19 Mars, CAMLEZ",
            code_insee:22028,
            xlongitude:-3.305036,
            ylatitude:48.777443,
            nbre_pdc:2,
            id_pdc:"FR*SDE2*ESDE2*61*2*1",
            puiss_max:22,
            type_prise:"T2-E/F",
            acces_recharge:"payant",
            accessibilite:"24h/24",
            observations:"badge, appli et QR code",
            date_maj:"2021-11-06",
            region:"Bretagne",
            departement:"Côtes-d'Armor"
          })
          .expect(201);

      expect(response.body).toEqual({
        n_amenageur:"SDE22",
        n_operateur:"IZIVIA",
        id_station:"FR*SDE2*PSDE2*61",
        n_station:"Camlez-Parking du 19 mars 1962",
        ad_station:"Place du 19 Mars, CAMLEZ",
        code_insee:22028,
        xlongitude:-3.305036,
        ylatitude:48.777443,
        nbre_pdc:2,
        id_pdc:"FR*SDE2*ESDE2*61*2*1",
        puiss_max:22,
        type_prise:"T2-E/F",
        acces_recharge:"payant",
        accessibilite:"24h/24",
        observations:"badge, appli et QR code",
        date_maj:"2021-11-06",
        region:"Bretagne",
        departement:"Côtes-d'Armor"
      });
    });
  });
});
