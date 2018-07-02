import * as Promise from 'promise';

class Car {
  private name: string;
  private doors: number;

  constructor(name: string, doors: number) {
    this.name = name;
    this.doors = doors;
  }

  public get getName(): string {
    return this.name;
  }

  public get getDoor(): number {
    return this.doors;
  }
}

class PromiseTest {
  promiseCreateCar(name: string, doors: number): Promise<Car> {
    const promised_car = new Promise<Car>((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(new Car(name, doors));
        }, 1000);
      } catch (error) {
        reject(Error(error));
      }
    });
    return promised_car;
  }

  promiseCreateCarFail(name: string, doors: number): Promise<Car> {
    const promised_car = new Promise<Car>((resolve, reject) => {
      try {
        setTimeout(() => {
          const car = new Car(name, doors);
          console.log(`Reject car : name: ${car.getName} - doors : ${car.getDoor}`);
          reject();
        }, 1500);
      } catch (error) {
        reject(Error(error));
      }
    });
    return promised_car;
  }

  private getEvenValue(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      try {
        const random = Math.ceil(Math.random() * 10);
        console.log(random);
        setTimeout(() => {
          if (random % 2 === 0) {
            resolve(random);
          } else {
            reject(random);
          }
        }, 300);
      } catch (error) {
        reject(Error(error));
      }
    });
  }

  promiseAll() {
    const getEven = this.getEvenValue();
    const getEven2 = this.getEvenValue();

    Promise.all([getEven, getEven2]).then((car) => {
      console.log('Promise All success', car);
    }).catch((error) => {
      console.log('Promise All error', error);
    });
  }

  promiseRace() {
    const getEven = this.getEvenValue();
    const getEven2 = this.getEvenValue();

    Promise.race([getEven, getEven2]).then((car) => {
      console.log('Promise Race success', car);
    }).catch((error) => {
      console.log('Promise Race error', error);
    });
  }

  nonPromiseCreateCar(name: string, doors: number): Car {
    let car;
    try {
      setTimeout(() => {
        car = new Car(name, doors);
      }, 3000);
    } catch (error) {
      throw new Error(error);
    }
    return car;
  }
}

export { Car, PromiseTest };
