import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

interface Plant {
  name: string;
  waterFrequency: string;
  fertilizerDate: Date;
  fertilizerFrequency: string;
}

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'] // Use styleUrls instead of styleUrl
})
export class CalenderComponent {
  newPlant: Plant = {
    name: '',
    waterFrequency: 'daily',
    fertilizerDate: new Date(),
    fertilizerFrequency: 'monthly'
  };
  plants: Plant[] = [];

  addPlant() {
    this.plants.push({...this.newPlant});
    this.newPlant = {
      name: '',
      waterFrequency: 'daily',
      fertilizerDate: new Date(),
      fertilizerFrequency: 'monthly'
    };
    localStorage.setItem('plants', JSON.stringify(this.plants));
  }

  deletePlant() {
    const plantName = prompt("Enter the name of the plant to delete:");
    if (plantName) {
      const index = this.plants.findIndex(plant => plant.name === plantName);
      if (index !== -1) {
        this.plants.splice(index, 1); // Remove the plant from the list
        localStorage.setItem('plants', JSON.stringify(this.plants)); // Update local storage
      } else {
        alert("Plant not found in the list.");
      }
    }
  }

  removeAllPlants(){
    this.plants=[];
    localStorage.removeItem('plants');
  }

  printPlants() {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Print Plants</title></head><body>');
      printWindow.document.write('<h1>My Plants</h1>');
      printWindow.document.write('<ul>');
      this.plants.forEach(plant => {
        printWindow.document.write('<li><h3>' + plant.name + '</h3><br> Watering: ' + plant.waterFrequency + ', <br>Fertilizer Date: ' + plant.fertilizerDate + ', <br>Fertilizer Frequency: ' + plant.fertilizerFrequency + '</li><br>');
      });
      printWindow.document.write('</ul>');
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    } else {
      console.error('Failed to open print window.');
    }
  }

  constructor() {
    const storedPlants = localStorage.getItem('plants');
    if (storedPlants) {
      this.plants = JSON.parse(storedPlants);
    }
  }

}

@NgModule({
  declarations: [
    CalenderComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [CalenderComponent] 
})
export class AppModule { }
