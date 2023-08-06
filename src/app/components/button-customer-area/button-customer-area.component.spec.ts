import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ButtonCustomerAreaComponent } from './button-customer-area.component'

describe('ButtonCustomerAreaComponent', () => {
  let component: ButtonCustomerAreaComponent
  let fixture: ComponentFixture<ButtonCustomerAreaComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCustomerAreaComponent],
    })
    fixture = TestBed.createComponent(ButtonCustomerAreaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
