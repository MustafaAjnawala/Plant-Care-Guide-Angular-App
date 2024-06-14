import { Component } from '@angular/core';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css'
})
export class PlantsComponent {
  plants = [
    { name: 'Snake Plant', description: 'The Snake Plant, also known as Sansevieria, is a hardy and low-maintenance indoor plant. It is known for its air-purifying qualities and ability to thrive in low light conditions.\nWatering Frequency: Once every 2-6 weeks, depending on the soil moisture level.\nFertilizer Frequency: Monthly during the growing season (spring and summer), and bi-monthly during the dormant season (fall and winter).',
     imageUrl: 'assets/images/SnakePlant.jpg' },
    { name: 'Spider Plant', description: 'The Spider Plant, scientifically known as Chlorophytum comosum, is a popular indoor plant characterized by its long, arching leaves and small white flowers. It is easy to care for and is known for its air-purifying properties.Watering Frequency: Once per week during the growing season, and less frequently during the dormant season (winter).\nFertilizer Frequency: Bi-weekly during the growing season, and monthly during the dormant season.',
     imageUrl: 'assets/images/spiderPlant.jpeg' },
     { name: 'Money Plant', description: 'The Money Plant, also known as Epipremnum aureum or Devils Ivy, is a fast-growing vine that is often grown indoors for its attractive foliage. It is believed to bring good luck and prosperity according to Feng Shui.Watering Frequency: Once every 1-2 weeks, allowing the soil to partially dry out between waterings.Fertilizer Frequency: Monthly during the growing season, and every 6-8 weeks during the dormant season.',
     imageUrl: 'assets/images/moneyPlant.jpeg' },
     { name: 'Bonsai', description: 'Bonsai is the art of cultivating miniature trees in containers, originating from Japan. These carefully trained and pruned trees evoke the appearance of mature, full-sized trees in nature, despite their small size. Bonsai trees require meticulous care, including regular pruning, watering, and repotting, to maintain their compact size and aesthetic beauty. Watering Frequency: Varied depending on the species and size of the bonsai tree. Generally, bonsai trees require frequent watering, but the frequency can range from daily to every few days. Fertilizer Frequency: Weekly during the growing season (spring and summer), and monthly during the dormant season (fall and winter).',
     imageUrl: 'assets/images/bonsai.jpeg'},
     {name: 'Ferns', description: 'Ferns are a diverse group of non-flowering plants known for their graceful, feathery leaves and lush green foliage. They thrive in moist, shady environments and are commonly grown as indoor plants to add a touch of natural beauty to homes and offices. Watering Frequency: Regular watering is essential to keep the soil consistently moist but not waterlogged. Water ferns when the top inch of soil feels dry. Fertilizer Frequency: Monthly during the growing season, and every 6-8 weeks during the dormant season. Use a balanced liquid fertilizer diluted to half-strength.',
     imageUrl:'assets/images/fern.jpg'},
  ];

  hoveredPlant: any;

  onMouseEnter(plant: any) {
    this.hoveredPlant = plant;
  }

  onMouseLeave() {
    this.hoveredPlant = null;
  }

}
