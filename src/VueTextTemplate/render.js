import Function_identity from '../utils/Function/identity';

export default function(createElement) {
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
}
