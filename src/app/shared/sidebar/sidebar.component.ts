import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categoriesData } from '../../db/catgeory';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnChanges {
  @Input() sidebarToggleStatus: string | undefined;

  @Output() toggleStatus = new EventEmitter<string>();
  openCloseToggleStatus = false;

  categories: any;

  ngOnInit() {
    this.getCategories();
  }

  constructor(private http: HttpClient) {}

  getCategories() {
    this.categories = categoriesData;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['sidebarToggleStatus'] &&
      changes['sidebarToggleStatus'].currentValue === 'true'
    ) {
      this.openCloseToggleStatus = true;

      console.log('sidebarToggleStatus changed to true');
    }
  }

  toggleSidebar() {
    this.toggleStatus.emit('false');
    this.openCloseToggleStatus = false;
  }
}
