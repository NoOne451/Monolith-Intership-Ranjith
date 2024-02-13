import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeaveitemComponent } from './leaveitem/leaveitem.component';

export type leaveDetails = {
  name: string;
  leaveType: 'Personal Leave' | 'Sick Leave';
  days: number;
  status: 'Approved' | 'Rejected' | 'Pending';
  profileImg: string;
  leaveTypeShort?: string;
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LeaveitemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  LeaveLists: leaveDetails[] = [
    {
      name: 'Ranji',
      leaveType: 'Personal Leave',
      leaveTypeShort: 'PL',
      days: 2,
      status: 'Approved',
      profileImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Ranji',
      leaveType: 'Personal Leave',
      leaveTypeShort: 'PL',
      days: 2,
      status: 'Approved',
      profileImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Ranji',
      leaveType: 'Personal Leave',
      leaveTypeShort: 'PL',
      days: 2,
      status: 'Approved',
      profileImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Ranji',
      leaveType: 'Personal Leave',
      leaveTypeShort: 'PL',
      days: 2,
      status: 'Approved',
      profileImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    },

    {
      name: 'Pooja Kumari',
      leaveType: 'Personal Leave',
      leaveTypeShort: 'PL',
      days: 2,
      status: 'Pending',
      profileImg: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Vimal kanth',
      leaveType: 'Personal Leave',
      leaveTypeShort: 'PL',
      days: 2,
      status: 'Rejected',
      profileImg: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      name: 'Sathish',
      leaveType: 'Sick Leave',
      leaveTypeShort: 'SL',
      days: 2,
      status: 'Approved',
      profileImg: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
  ];
}
