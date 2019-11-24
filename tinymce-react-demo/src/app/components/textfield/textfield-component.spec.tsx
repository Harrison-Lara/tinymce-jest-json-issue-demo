import * as React from 'react';
import Chance from 'chance';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextFieldProps, TextField } from './textfield-component';

describe('Text Field', () => {
    const chance = new Chance();
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });
    it('should render the text field disabled', () => {
        // arrange
        const props: TextFieldProps = {
            disabled: true
        };
        const component = shallow(<TextField {...props} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('disabled');
    });
    it('should render the text field not disabled', () => {
        // arrange
        const props: TextFieldProps = {
            disabled: false
        };
        const component = shallow(<TextField {...props} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('disabled', false);
    });
    it('should render the text field filled', () => {
        // arrange
        const props: TextFieldProps = {
            variant: 'filled'
        };
        const component = shallow(<TextField {...props} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('variant', 'filled');
    });
    it('should render the text field in error state', () => {
        // arrange
        const props: TextFieldProps = {
            error: true
        };
        const component = shallow(<TextField {...props} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('error');
    });
    it('should render the text field not in error state', () => {
        // arrange
        const props: TextFieldProps = {
            error: false
        };
        const component = shallow(<TextField {...props} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('error', false);
    });
    it('should render the text field with normal width', () => {
        // arrange
        const props: TextFieldProps = {
            fullWidth: false
        };
        const component = shallow(<TextField {...props} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('fullWidth', false);
    });
    it('should render the text field with full screen width', () => {
        // arrange
        const props: TextFieldProps = {
            fullWidth: false
        };
        const component = shallow(<TextField {...props} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('fullWidth');
    });
    it('should render a text field with helper text', () => {
        // arrange
        const component = shallow(<TextField helperText={chance.word()} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('helperText');
    });
    it('should render a text field with label text', () => {
        // arrange
        const component = shallow(<TextField label={chance.word()} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('label');
    });
    it('should render a text field with placeholder text', () => {
        // arrange
        const component = shallow(<TextField placeholder={chance.word()} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('placeholder');
    });
});
