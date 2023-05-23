import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  @Input() category: any;
  panelOpenState = false;
  // task: any = {
  //   name: 'Indeterminate',
  //   completed: false,
  //   color: 'primary',
  //   subtasks: [
  //     { name: 'Primary', completed: false, color: 'primary' },
  //     { name: 'Primary', completed: false, color: 'primary' },
  //     { name: 'Primary', completed: false, color: 'primary' },
  //   ],
  // };

  // task: any = category;

  allComplete: boolean = false;

  updateAllComplete() {
    // this.allComplete =
    //   this.task.subtasks != null &&
    //   this.task.subtasks.every((t: any) => t.completed);
  }

  setAll(completed: boolean) {
    // this.allComplete = completed;
    // if (this.task.subtasks == null) {
    //   return;
    // }
  }
}
