(function($){
	$.fn.vieWymeditor = function() {
		this.each(function() {
			var containerInstance = VIE.ContainerManager.getInstanceForContainer(jQuery(this));
			containerInstance.editables = {};
			jQuery(containerInstance.view.el).find('[property]').each(function() {
				var containerProperty = jQuery(this);
				var propertyName = containerProperty.attr('property');
				if (containerProperty.is('div')) {
					containerProperty.wymeditor({
						html: containerProperty.html(),
						postInit: function (wym) {
							containerInstance.editables[propertyName] = wym;
							wym.vieContainerInstance = containerInstance;
						}
					});
				}
			});
		})
	}
})(jQuery);
