import * as React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RichTextEditor, RichTextEditorProps } from './richtext-editor.component';

beforeEach(() => {
    configure({ adapter: new Adapter() });
});
const richTextProps: RichTextEditorProps = {
    label: 'test'
};
describe('Rich Text Editor', () => {

    it('RichTextEditor component should render', () => {
        const component = mount(<RichTextEditor {...richTextProps} />);
        expect(component.find('RichTextEditor').length).toEqual(1);
    });
    it('should Match the snapshot', () => {
        // arrange / act, use static data for snapshot matching
        const component = shallow(<RichTextEditor {...richTextProps} />);
        // assert
        expect(component).toMatchSnapshot();
    });
    it('should Exist', () => {
        // arrange / act, use static data for snapshot matching
        const component = mount(<RichTextEditor {...richTextProps} />);
        // assert
        expect(component.exists()).toEqual(true);
    });
    it('should render with a label and langId', () => {
        const component = mount(<RichTextEditor {...richTextProps} />);
        // act
        component.update();
        // assert
        expect(component.props()).toHaveProperty('label');
    });
    it('should find the toolbar on click', () => {
        const wrapper = shallow(<RichTextEditor {...richTextProps} />);
        expect(wrapper.find('.rich-textarea').length).toEqual(1);
        wrapper.simulate('click');
        expect(wrapper.find('.tox-toolbar').exists).toBeTruthy();
    });
});