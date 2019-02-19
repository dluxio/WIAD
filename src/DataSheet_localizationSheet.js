import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_754385";
    item['en'] = "AR\nScanner";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_1016931";
    item['en'] = "Collected\nVirtues";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_756557";
    item['en'] = "Leader\nBoard";
    
    item = {};
    this.items.push(item);
    item['key'] = "createaccount_button_1033867";
    item['en'] = "Start Scanning Badges";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
