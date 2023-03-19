import {Drivers, Storage} from '@ionic/storage';

class DbAdaptor {
  static store: Storage;
  constructor() {}
  static async initIonic(): Promise<void> {
    this.store = new Storage({
      name: '__mydb',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    });
    await this.store.create();
  }
}

export default DbAdaptor;
