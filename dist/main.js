"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const station_module_1 = require("./station.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(station_module_1.StationModule);
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map