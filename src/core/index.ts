import DbAdaptor from './database/DatabaseAdaptor';

class DeDB {
  static async init() {
    console.log('Loading from deDB');
    await DbAdaptor.initIonic();

    DbAdaptor.store.set('test', 'get');
    return null;
  }
}

export default DeDB;
