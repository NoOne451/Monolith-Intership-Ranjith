import { Component, Input } from '@angular/core';
import { leaveDetails } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaveitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaveitem.component.html',
  styleUrl: './leaveitem.component.css',
})
export class LeaveitemComponent {
  @Input() item: leaveDetails = {
    name: '',
    leaveType: 'Personal Leave',
    days: 0,
    status: 'Approved',
    profileImg: '',
  };
}
