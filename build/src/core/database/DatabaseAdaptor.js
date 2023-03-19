"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("@ionic/storage");
class DbAdaptor {
    constructor() { }
    static async initIonic() {
        this.store = new storage_1.Storage({
            name: '__mydb',
            driverOrder: [storage_1.Drivers.IndexedDB, storage_1.Drivers.LocalStorage],
        });
        await this.store.create();
    }
}
exports.default = DbAdaptor;
//# sourceMappingURL=DatabaseAdaptor.js.map