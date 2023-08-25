import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RegisterPetComponent } from './register-pet.component'

describe('RegisterPetComponent', () => {
  let component: RegisterPetComponent
  let fixture: ComponentFixture<RegisterPetComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPetComponent],
    })
    fixture = TestBed.createComponent(RegisterPetComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
