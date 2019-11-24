const config = {
  dateFormat: ['%H:%M:%S', '%Y-%m-%d', '%I:%M:%S %p', '%D'],
  fontSize: '11px 12px 14px 16px 18px 24px 36px 48px',
  toolbarStyles: '.tox-tinymce { right: 64px }',
  contentStyle: './oxide/content.min.css',
  plugins: 'lists insertdatetime table searchreplace charmap code advlist link',
  toolbar:
    'undo redo | bold italic underline | fontselect fontsizeselect | forecolor backcolor | ' +
    'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | superscript subscript' +
    '| link insertdatetime searchreplace charmap code',
  fontFamily:
    'Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;' +
    'Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier;' +
    'Georgia=georgia, palatino; Helvetica=helvetica; Impact=impact, chicago; Open Sans= Open Sans;' +
    'Sans- Serif=sans-serif; Symbol = symbol; Tahoma = tahoma, arial, helvetica, sans - serif;' +
    'Terminal = terminal, monaco;Times New Roman = times new roman, times; Trebuchet MS = trebuchet ms,' +
    'geneva; Verdana = verdana, geneva;Webdings = webdings; Wingdings = wingdings, zapf dingbats'
};
export default config;