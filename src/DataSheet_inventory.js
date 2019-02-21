import DataSheetBase from './DataSheetBase.js';
import datasheet_inventory_row0_thumb from './images/datasheet_inventory_row0_thumb.png';
import datasheet_inventory_row1_thumb from './images/datasheet_inventory_row1_thumb.png';
import datasheet_inventory_row3_thumb from './images/datasheet_inventory_row3_thumb.png';

export default class DataSheet_inventory extends DataSheetBase {

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
    item['thumb'] = datasheet_inventory_row0_thumb;
    item['state'] = "1";
    item['name'] = "EMPATHY";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['thumb'] = datasheet_inventory_row1_thumb;
    item['state'] = "1";
    item['name'] = "ETHICS";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "COLLABORATION & EMERGENCE";
    item['state'] = "1";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['thumb'] = datasheet_inventory_row3_thumb;
    item['state'] = "1";
    item['name'] = "CURIOSITY & GRIT";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "CRITICAL THINKING";
    item['state'] = "0";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "HUMILITY";
    item['state'] = "0";
    item.key = key++;
  }

}
