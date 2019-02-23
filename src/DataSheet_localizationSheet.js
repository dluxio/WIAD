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
    item['key'] = "login_button_733831";
    item['en'] = "Continue";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_468923";
    item['en'] = "Already have Steem?\nLog in here";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_841526";
    item['en'] = "Welcome to\nWorld IA Day\n2019";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_168394";
    item['en'] = "You need a Steem account to participate.\n\nRedeem the voucher code included with your ticket.";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_871771";
    item['en'] = "AR\nSCANNER";
    
    item = {};
    this.items.push(item);
    item['key'] = "arbutton2_text_1046871";
    item['en'] = "COLLECTED\nVIRTUES";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventorybutton2_text_874492";
    item['en'] = "AR\nSCANNER";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventorybutton2_text_360165";
    item['en'] = "LEADER\nBOARD";
    
    item = {};
    this.items.push(item);
    item['key'] = "button1_title_8833";
    item['en'] = "Part X";
    
    item = {};
    this.items.push(item);
    item['key'] = "arscanner_button_747870";
    item['en'] = "AR SCANNER";
    
    item = {};
    this.items.push(item);
    item['key'] = "arscanner_buttoncopy_205650";
    item['en'] = "COLLECTED";
    
    item = {};
    this.items.push(item);
    item['key'] = "arscanner_inventorybuttoncopy_675644";
    item['en'] = "LEADERBOARD";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventory_arbutton_750666";
    item['en'] = "AR\nSCANNER";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventory_inventorybutton_1007145";
    item['en'] = "COLLECTED\nVIRTUES";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventory_leaderbutton_620369";
    item['en'] = "LEADER\nBOARD";
    
    item = {};
    this.items.push(item);
    item['key'] = "leaderboard_arbutton_699726";
    item['en'] = "AR\nSCANNER";
    
    item = {};
    this.items.push(item);
    item['key'] = "leaderboard_inventorybutton_232127";
    item['en'] = "COLLECTED\nVIRTUES";
    
    item = {};
    this.items.push(item);
    item['key'] = "leaderboard_leaderbutton_782556";
    item['en'] = "LEADER\nBOARD";
    
    item = {};
    this.items.push(item);
    item['key'] = "useritem_text_292967";
    item['en'] = "username1234";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text_787265";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_nextcopy_9690";
    item['en'] = "SKIP";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_skip_583707";
    item['en'] = "SKIP";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_next_1011298";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_next_458435";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_next_636295";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text_1040641";
    item['en'] = "EMERGENT VIRTUES";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text2_171596";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_textcopy_244310";
    item['en'] = "An AR Scavenger Hunt that Explores the Qualities that Will Shape Our Future";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text2_50999";
    item['en'] = "Get friendly…";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text2_554126";
    item['en'] = "Get friendly…";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_textcopy2_649023";
    item['en'] = "Meet your neighbors.";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text3_371298";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text3_623545";
    item['en'] = "EMERGENT VIRTUES";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text2_186454";
    item['en'] = "Get friendly…";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_textcopy2_348719";
    item['en'] = "Meet your neighbors.";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text2_246824";
    item['en'] = "Get friendly…";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_textcopy2_726489";
    item['en'] = "Meet your neighbors.";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_button_356210";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_button_301283";
    item['en'] = "Start Scanning Badges";
    
    item = {};
    this.items.push(item);
    item['key'] = "arapp_text3_474049";
    item['en'] = "EMERGENT VIRTUES";
    
    item = {};
    this.items.push(item);
    item['key'] = "arapp_text3_99537";
    item['en'] = "EMERGENT VIRTUES";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventoryitem_text_960490";
    item['en'] = "COLLABORATION\n& EMERGENCE";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventoryitem_text_962334";
    item['en'] = "???";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventoryitem_text_354864";
    item['en'] = "Empathy";
    
    item = {};
    this.items.push(item);
    item['key'] = "useritem2_text_225163";
    item['en'] = "username1234";
    
    item = {};
    this.items.push(item);
    item['key'] = "empathyslot2_text_177941";
    item['en'] = "???";
    
    item = {};
    this.items.push(item);
    item['key'] = "empathyslot2_text_888129";
    item['en'] = "Collaboration\n& Emergence";
    
    item = {};
    this.items.push(item);
    item['key'] = "collaborationslot2_text_627933";
    item['en'] = "???";
    
    item = {};
    this.items.push(item);
    item['key'] = "collaborationslot2_text_499924";
    item['en'] = "Ethics";
    
    item = {};
    this.items.push(item);
    item['key'] = "ethicsslot2_text_273580";
    item['en'] = "???";
    
    item = {};
    this.items.push(item);
    item['key'] = "ethicsslot2_text_856517";
    item['en'] = "Curiosity\n& Grit";
    
    item = {};
    this.items.push(item);
    item['key'] = "curiosityslot2_text_294225";
    item['en'] = "???";
    
    item = {};
    this.items.push(item);
    item['key'] = "curiosityslot2_text_432756";
    item['en'] = "Critical\nThinking";
    
    item = {};
    this.items.push(item);
    item['key'] = "thinkingslot2_text_246858";
    item['en'] = "???";
    
    item = {};
    this.items.push(item);
    item['key'] = "thinkingslot2_text_1026601";
    item['en'] = "Humility";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_421110";
    item['en'] = "Create a Steem account with Steem Ninja. You will need to choose a user name and enter the voucher code that was emailed to  you.\n\nCopy the password they provide. The 4 additional keys are derrived from your password and are not neccessary to save.";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_242419";
    item['en'] = "Create a Steem account with Steem Ninja by redeeming the voucher code emailed to you.\nSave your password, there is no reset option.";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_388018";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_textcopy_79541";
    item['en'] = "Once you’ve created your account, \nclick here to log in.";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_814022";
    item['en'] = "Login";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button2_278146";
    item['en'] = "Get Steem";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_559853";
    item['en'] = "Steem Username:";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_textcopy_878391";
    item['en'] = "Steem Password:";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_795274";
    item['en'] = "WELCOME TO\nWORLD IA DAY 2019";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text3_229860";
    item['en'] = "We are proud to present an augmented reality location based experience built on blockchain.";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_textcopy2_851444";
    item['en'] = "A Steem account is required";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text4_1004875";
    item['en'] = "Briefly describe why you chose that quality";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_textcopy3_147469";
    item['en'] = "Briefly describe why you chose that quality";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text4_14386";
    item['en'] = "Briefly describe why";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_textcopy3_855997";
    item['en'] = "Select a quality";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_624214";
    item['en'] = "REDEEM YOUR STEEM NINJA VOUCHER";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text4_1015666";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text3_417618";
    item['en'] = "Steem is a social media blockchain and crypto currency.\n\nAn account voucher is included with your World IA Day ticket, and can be redeemed through Steem.Ninja\n\nIf you don’t know your voucher code, enter the email address you used to register and look it up.";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_1030765";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_451164";
    item['en'] = "Lookup Voucher";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_textcopy3_463005";
    item['en'] = "Email address used to register:";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button2_422396";
    item['en'] = "Steem.Ninja";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text4_804817";
    item['en'] = "< BACK";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text4_85650";
    item['en'] = "BACK";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button2_182743";
    item['en'] = "Redeem (Steem.Ninja)";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventorystatus_text3_467979";
    item['en'] = "EMERGENT VIRTUES";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventorystatus_text_779623";
    item['en'] = "Rank #";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventorystatus_textcopy_723620";
    item['en'] = "Collected";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventorystatus_text2_39687";
    item['en'] = "001";
    
    item = {};
    this.items.push(item);
    item['key'] = "inventorystatus_textcopy2_830887";
    item['en'] = "0"
    
    item = {};
    this.items.push(item);
    item['key'] = "inventorystatus_textcopy3_348248";
    item['en'] = "/6";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_skip_413376";
    item['en'] = "BACK";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_skip_585382";
    item['en'] = "BACK";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text2_45669";
    item['en'] = "Collect all six qualities";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_textcopy2_300855";
    item['en'] = "to be eligible for prizes\nand giveaways.";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text_103826";
    item['en'] = "EMERGENT VIRTUES";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text_349469";
    item['en'] = "JOIN THE HUNT";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button3_737351";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button3_684463";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_body_833488";
    item['en'] = "Steem is a social media blockchain and crypto currency.\n\nAn account voucher is included with your World IA Day ticket, and can be redeemed through Steem.Ninja\n\nIf you don’t know your voucher code, talk to one of the dlux team members.";
    
    item = {};
    this.items.push(item);
    item['key'] = "loginfail_text_649192";
    item['en'] = "FAILURE";
    
    item = {};
    this.items.push(item);
    item['key'] = "useritem_text2_375956";
    item['en'] = "001";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_text2_33707";
    item['en'] = "001";
    
    item = {};
    this.items.push(item);
    item['key'] = "rank_text2_41278";
    item['en'] = "001";
    
    item = {};
    this.items.push(item);
    item['key'] = "useritem_text2_535380";
    item['en'] = "999";
    
    item = {};
    this.items.push(item);
    item['key'] = "useritem_text2_686756";
    item['en'] = "999";
    
    item = {};
    this.items.push(item);
    item['key'] = "useritem_text_923834";
    item['en'] = "username1234";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_507620";
    item['en'] = "New text. Double-click to edit";
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
