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
    item['profile_pic'] = "";
    item['username'] = "user01";
    item['inventory'] = {
"winner": true,
"complete": true,
"empathy": true,
"ethics": true,
"collaboration": true,
"curiosity": true,
"thinking": true,
"humility": true,
}
;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['username'] = "user02";
    item['inventory'] = {
"winner": true,
"complete": true,
"empathy": true,
"ethics": true,
"collaboration": true,
"curiosity": true,
"thinking": true,
"humility": true,
};
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['username'] = "user03";
    item['inventory'] = {
"winner": true,
"complete": true,
"empathy": true,
"ethics": true,
"collaboration": true,
"curiosity": true,
"thinking": true,
"humility": true,
};
    item.key = key++;
  }

}
