import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableData: [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * @name handleRowClick
   * @description Handles click on table rows and opens the url param in a new tab
   * @param url external url to open
   */
  public handleRowClick(url) {
    window.open(
      url,
      '_blank'
    );
  }
}
