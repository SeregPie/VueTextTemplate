export default function() {
	return this.template.split(/{\s*([^\s{}]+)\s*}/g);
}
