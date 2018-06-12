import Function_identity from './utils/Function/identity';

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

	render(createElement) {
		let {
			$scopedSlots,
			tag,
			template,
		} = this;

		$scopedSlots = {
			default: Function_identity,
			...$scopedSlots,
		};

		return createElement(
			tag,
			template
				.split(/{\s*([^\s{}]+)\s*}/g)
				.map((token, index) =>
					(index % 2)
						? $scopedSlots.default(token)
						: token
				),
		);
	},
};
