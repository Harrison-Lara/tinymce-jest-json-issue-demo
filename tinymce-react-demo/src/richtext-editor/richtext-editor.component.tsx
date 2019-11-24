import './tinymce-imports';
import * as React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import config from './richtext-editor.component.config';
export interface RichTextEditorProps {
  label?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLBaseElement>;
}
const style = {
  root: {
    background: '#fafafa',
    fontWeight: 500,
    color: 'black',
    minWidth: 200,
    height: 100,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 10,
    lineHeight: 1,
    borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
    overflow: 'auto',
    outline: '0px solid transparent',
    wordBreak: 'break-all' as 'break-all'
  },
  labelText: {
    color: 'black',
    fontSize: '12px',
    fontWeight: 500
  }
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({ label, value, onChange }) => {
  return (
    <>
      {/* eslint-disable */}
      <label style={style.labelText}>{label}</label>
      {/* eslint-enable */}
      <div className="rich-textarea" style={style.root}>
        <Editor
          init={{
            /* eslint-disable */
            skin: false,
            selector: '.rich-textarea',
            menubar: false,
            browser_spellcheck: true,
            insertdatetime_formats: config.dateFormat,
            fontsize_formats: config.fontSize,
            content_style: config.toolbarStyles,
            forced_root_block: true,
            force_br_newlines: true,
            force_p_newlines: false,
            font_formats: config.fontFamily,
            theme: 'silver'
            /* eslint-enable */
          }}
          inline
          plugins={config.plugins}
          toolbar={config.toolbar}
          onEditorChange={onChange}
          value={value}
          initialValue="click here"
        />
      </div>
    </>
  );
};

export { RichTextEditor };

// ADA
// Alt + F10	Focus / jump to toolbar
// Alt + F11	Focus / jump to element path
// Esc	Close menu / submenu / dialog(also gets you back to editor area)
// Tab / Arrow	Navigate left / right through menu / toolbar