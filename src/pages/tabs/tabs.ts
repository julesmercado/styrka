import { Component } from '@angular/core';

import { Calculator } from '../calculator/calculator';
import { Settings } from '../settings/settings';
import { Gunlist } from '../gunlist/gunlist';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Gunlist;
  tab2Root = Calculator;
  tab3Root = Settings;

  constructor() {

  }
}
