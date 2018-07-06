import Function_identity from '/utils/Function/identity';

export default {
	name: 'VueTextTemplate',

	props: {
		tag: {
			type: String,
			default: 'div',
		},

		template: {
			type: String,
			default: '',
		},
	},

	computed: {
		splittedTemplate() {
			return this.template.split(/{\s*([^\s{}]+)\s*}/g);
		},
	},

	render(createElement) {
		let {
			$scopedSlots,
			splittedTemplate,
			tag,
		} = this;
		$scopedSlots = {
			default: Function_identity,
			...$scopedSlots,
		};
		return createElement(
			tag,
			splittedTemplate.map((v, i) =>
				(i % 2) ? $scopedSlots.default(v) : v
			),
		);
	},
};
