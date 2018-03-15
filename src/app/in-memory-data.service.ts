import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Madrid', feria: 'La Romería de San Isidro'},
      { id: 2, name: 'Barcelona', feria: 'Salón del Manga'},
      { id: 3, name: 'Vitoria', feria: 'FreakFestival'},
      { id: 4, name: 'Málaga', feria: 'Feria de Málaga'},
      { id: 5, name: 'Valencia', feria: 'JapanWeekend'},
      { id: 6, name: 'Barcelona', feria: 'Mobile World Congress'}

    ];
    return {heroes};
  }
}
