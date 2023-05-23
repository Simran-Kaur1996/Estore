import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  opened = false;
  @Input() sidebarToggleStatus: string | any;

  @Output() toggleStatus = new EventEmitter<string>();

  toggleSidebar() {
    this.toggleStatus.emit('true');
  }
}
