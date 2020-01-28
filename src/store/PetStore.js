import { observable, decorate } from 'mobx'

class PetStore {
 @observable
 pets = []

  addPet (data) {
    let pet = new Pet(this)
    for (const key in data) {
      let value = data[key];
      pet[key] = value
    }
    this.pets.push(pet)
  }
}

export class Pet {
  name = ''
  breed = ''
  isPetOwner = false
}

decorate(Pet, {
  name: observable,
  breed: observable,
  isPetOwner: observable
})

const petStore = new PetStore()
export default petStore