import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RegisterPetFormComponent } from './register-pet-form.component'

describe('RegisterPetFormComponent', () => {
  let component: RegisterPetFormComponent
  let fixture: ComponentFixture<RegisterPetFormComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPetFormComponent],
    })
    fixture = TestBed.createComponent(RegisterPetFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
