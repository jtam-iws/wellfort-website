import sanitizeHtml from 'sanitize-html';

// ckeditor.js
module.exports = {
	// Override toolbar config to leave a few buttons
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			"link",
			'bulletedList',
			'numberedList',
			'imageInsert',
			'strapiMediaLib',
			'|',
			'alignment',
			'indent',
			'outdent',
			'|',
			'|',
			'horizontalLine',
			'|',
			"undo",
			"redo",
			'|',
			"removeFormat",
		],
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
			{ model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
			{ model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
		]
	},
	sanitizeHtml: (inputHtml) => {
		const outputHtml = sanitizeHtml(inputHtml);
		return {
			html: outputHtml,
			hasChanged: true
		};
	},
};
