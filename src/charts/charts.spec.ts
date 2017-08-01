/// <reference types="jest" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BaseChartDirective } from './charts.directive';
import { TestComponent } from '../test/test.component';

describe('BaseChartDirective', () => {

  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, BaseChartDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
  });

  it('Should be false', () => {
    expect(false).toBe(true);
  });
});
