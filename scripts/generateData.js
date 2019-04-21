"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Client_1 = require("../routes/model/Client");
const Project_1 = require("../routes/model/Project");
const Schedule_1 = require("../routes/model/Schedule");
const User_1 = require("../routes/model/User");
const UserRole_1 = require("../routes/model/UserRole");
const Block_1 = require("../routes/model/Block");
const COE_1 = require("../routes/model/COE");
const Holiday_1 = require("../routes/model/Holiday");
const Notification_1 = require("../routes/model/Notification");
const localData = require("./localData.json");
const testData = require("./testData.json");
const prodData = require("./prodData.json");
if (process.argv[2] === undefined) {
    console.log("local generation....");
    typeorm_1.createConnection()
        .then((connection) => __awaiter(this, void 0, void 0, function* () {
        //Drops all data and re-creates new data
        yield connection.synchronize(true);
        //Creates all data
        yield connection.getRepository(COE_1.COE).save(localData.COE);
        yield connection.getRepository(UserRole_1.UserRole).save(localData.userRole);
        yield connection.getRepository(Client_1.Client).save(localData.client);
        yield connection.getRepository(User_1.User).save(localData.user);
        yield connection.getRepository(Project_1.Project).save(localData.project);
        yield connection.getRepository(Block_1.Block).save(localData.block);
        yield connection.getRepository(Schedule_1.Schedule).save(localData.schedule);
        yield connection.getRepository(Project_1.Project).save(localData.project);
        yield connection.getRepository(Holiday_1.Holiday).save(localData.holiday);
        yield connection
            .getRepository(Notification_1.Notification)
            .save(localData.notification);
        yield connection.close();
    }))
        .then(() => {
        console.log("Finished Creating Local Tables....");
    });
}
else if (process.argv[2] === "test") {
    console.log("test generation....");
    typeorm_1.createConnection()
        .then((connection) => __awaiter(this, void 0, void 0, function* () {
        //Drops all data and re-creates new data
        yield connection.synchronize(true);
        //Creates all data
        yield connection.getRepository(COE_1.COE).save(testData.COE);
        yield connection.getRepository(UserRole_1.UserRole).save(testData.userRole);
        yield connection.getRepository(Client_1.Client).save(testData.client);
        yield connection.getRepository(User_1.User).save(testData.user);
        yield connection.getRepository(Project_1.Project).save(testData.project);
        yield connection.getRepository(Block_1.Block).save(testData.block);
        yield connection.getRepository(Schedule_1.Schedule).save(testData.schedule);
        yield connection.getRepository(Project_1.Project).save(testData.project);
        yield connection.getRepository(Holiday_1.Holiday).save(testData.holiday);
        yield connection
            .getRepository(Notification_1.Notification)
            .save(testData.notification);
        yield connection.close();
    }))
        .then(() => {
        console.log("Finished Creating Test Tables....");
    });
}
else if (process.argv[2] === "prod") {
    console.log("prod generation....");
    typeorm_1.createConnection()
        .then((connection) => __awaiter(this, void 0, void 0, function* () {
        //Drops all data and re-creates new data
        yield connection.synchronize(true);
        //Creates all data
        yield connection.getRepository(COE_1.COE).save(prodData.COE);
        yield connection.getRepository(UserRole_1.UserRole).save(prodData.userRole);
        yield connection.getRepository(User_1.User).save(prodData.user);
        yield connection.close();
    }))
        .then(() => {
        console.log("Finished Creating Prod Tables....");
    });
}
else {
    console.log("No data has been generated....");
}
//# sourceMappingURL=generateData.js.map