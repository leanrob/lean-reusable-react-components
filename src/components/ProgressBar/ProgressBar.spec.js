import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {

  test('ProgressBar should render to the screen with percent and width', () => {
    const wrapper = shallow(<ProgressBar percent={10} width={600}/>);
    expect(wrapper.find("div").length).toBeGreaterThan(0);
  });

  describe('The getWidthAsPercentageOfTotalWidth function should be performing as expected', () => {
    test('getWidthAsPercentageOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
      const wrapper = shallow(<ProgressBar percent={50} width={500}/>);
      const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
      expect(width).toEqual(250);
    });
  });

  describe('The getColor function be performing as expected', () => {
    test('getColor should return `green` with a percent below 50%', () => {
      const wrapper = shallow(<ProgressBar percent={100} width={500}/>);
      const color = wrapper.instance().getColor();
      expect(color).toEqual("green");
    });

    test('getColor should return `lightgreen` with a percent above 50%', () => {
      const wrapper = shallow(<ProgressBar percent={60} width={500}/>);
      const color = wrapper.instance().getColor();
      expect(color).toEqual("lightgreen");
    });

    test('getColor should return `red` with a percent below 50%', () => {
      const wrapper = shallow(<ProgressBar percent={20} width={500}/>);
      const color = wrapper.instance().getColor();
      expect(color).toEqual("red");
    });
  });

});