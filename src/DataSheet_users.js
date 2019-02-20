import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_users extends DataSheetBase {

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
    item['ethics'] = "0";
    item['empathy'] = "0";
    item['username'] = "user01";
    item['curiosity'] = "1";
    item['thinking'] = "0";
    item['collaboration'] = "1";
    item['humility'] = "1";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['ethics'] = "0";
    item['empathy'] = "0";
    item['username'] = "user02";
    item['curiosity'] = "0";
    item['thinking'] = "0";
    item['collaboration'] = "0";
    item['humility'] = "0";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['ethics'] = "1";
    item['empathy'] = "1";
    item['username'] = "user03";
    item['curiosity'] = "1";
    item['thinking'] = "1";
    item['collaboration'] = "1";
    item['humility'] = "1";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['ethics'] = "1";
    item['empathy'] = "1";
    item['username'] = "user04";
    item['curiosity'] = "1";
    item['thinking'] = "1";
    item['collaboration'] = "0";
    item['humility'] = "1";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['ethics'] = "0";
    item['empathy'] = "0";
    item['username'] = "user05";
    item['curiosity'] = "0";
    item['thinking'] = "0";
    item['collaboration'] = "0";
    item['humility'] = "1";
    item.key = key++;
  }

}
