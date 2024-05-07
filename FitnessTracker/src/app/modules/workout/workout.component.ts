import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  time: number;
  activity: string;
  calories: number;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { activity: 'Walk', time:6, calories: 6141, action: 'H' },
  { activity: 'Run', time: 2, calories: 1184, action: 'He' },
  { activity: 'Cycle', time:1, calories: 6941, action: 'Li' },
  { activity: 'Jog', time: 2, calories: 922, action: 'Be' },
  { activity: 'Yoga', time: 1, calories: 1011, action: 'B' },
  { activity: 'Swimming', time: 1, calories: 1207, action: 'C' },
  { activity: 'Dance', time:2 , calories: 1467, action: 'N' },
  { activity: 'Tennis', time:1 , calories: 194, action: 'O' },
  { activity: 'Badminton', time:1 , calories: 1884, action: 'F' },
  
  
];

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.css'
})
export class WorkoutComponent {
  displayedColumns: string[] = ['activity', 'time', 'calories', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  addActivity(){
    console.log('Activity added');
  }
  deleteActivity(){
    console.log('Activity deleted');
  }
  editActivity(){
     console.log('Activity deleted');
  }
}
