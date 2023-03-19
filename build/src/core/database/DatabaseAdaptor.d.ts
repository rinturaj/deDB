import { Storage } from '@ionic/storage';
declare class DbAdaptor {
    static store: Storage;
    constructor();
    static initIonic(): Promise<void>;
}
export default DbAdaptor;
