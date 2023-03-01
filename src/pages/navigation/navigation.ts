import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'navigation-detail.html',
})
export class NavigationDetail {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
    templateUrl: 'navigation.html'
})
export class Navigation {
  items = [];

  constructor(public nav: NavController) {
    this.items = [
      {
        'title': 'Angular',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'HTML5',
        'icon': 'html5',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'JavaScript',
        'icon': 'javascript',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      }
    ]
  }

  openDetail(item) {
    this.nav.push(NavigationDetail, { item: item });
  }

}
