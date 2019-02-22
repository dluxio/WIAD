import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_qualities extends DataSheetBase {

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
    item['column1'] = "Critical Thinking";
    item['column2'] = "thinking";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "Empathy";
    item['column2'] = "empathy";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "Ethics";
    item['column2'] = "ethics";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "Collaboration & Emergence";
    item['column2'] = "collaboration";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "Curiosity & Grit";
    item['column2'] = "curiosity";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "Humility";
    item['column2'] = "humility";
    item.key = key++;
  }

}
