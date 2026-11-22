import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakerSpotlight } from './maker-spotlight';

describe('MakerSpotlight', () => {
  let component: MakerSpotlight;
  let fixture: ComponentFixture<MakerSpotlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakerSpotlight],
    }).compileComponents();

    fixture = TestBed.createComponent(MakerSpotlight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
