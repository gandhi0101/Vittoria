import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { Component } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  panelOpenState = false;
  id: string = '';
  user: string = '';
  link = "kDtpVBzKhhE";
  
  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;

  ngAfterViewInit() {

    switch (this.id) {
      case 'gandhi':
        this.panels.toArray()[0].open();
        break;
      case 'juan':
        this.panels.toArray()[1].open();
        break;
      case 'brayan':
        this.panels.toArray()[2].open();
        break;
      case 'gerardo':
        this.panels.toArray()[3].open();
        break;
    }
  }


  constructor(private rout: ActivatedRoute) { }

  ngOnInit() {
    this.rout.params.subscribe(params => {
      this.id = params['id'];
      this.user = `https://github.com/${params['user']}`;
      console.log(params);
    });
  }

}
