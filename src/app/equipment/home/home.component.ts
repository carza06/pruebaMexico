import { Component } from '@angular/core';
import { EquipmentService } from '../equipment.service';
import { Equipment } from '../equipment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = localStorage.getItem('email');
  equipment: Equipment[] = [];

  constructor(public equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.equipmentService.getAll().subscribe((data: Equipment[])=>{
      this.equipment = data;
      console.log(this.equipment);
    })
  }

  deleteUser(id:string){
    this.equipmentService.delete(id).subscribe(res => {
         this.equipment = this.equipment.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }
}
