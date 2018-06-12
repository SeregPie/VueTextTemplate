import VueTextTemplate from './VueTextTemplate';

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component(VueTextTemplate.name, VueTextTemplate);
}

export default VueTextTemplate;
