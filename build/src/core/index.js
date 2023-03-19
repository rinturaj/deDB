"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseAdaptor_1 = require("./database/DatabaseAdaptor");
class DeDB {
    static async init() {
        console.log('Loading from deDB');
        await DatabaseAdaptor_1.default.initIonic();
        DatabaseAdaptor_1.default.store.set('test', 'get');
        return null;
    }
}
exports.default = DeDB;
//# sourceMappingURL=index.js.map