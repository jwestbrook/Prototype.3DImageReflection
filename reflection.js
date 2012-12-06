Element.addMethods({
	getHeight : function (p_eElement) {
		return p_eElement.offsetHeight;	
	},
	getWidth : function (p_eElement) {
		return p_eElement.offsetWidth;	
	}
});

/* Get the image source */
Reflect3D = Class.create();

Reflect3D.prototype = {
	initialize : function(p_sTarget) {
		/* Some config */
		this.m_iMarginXFactor = .2;
		this.m_iMarginYFactor = .2;
		this.m_iReflectFrom   = .8;
		
		this.m_eTarget 	= $(p_sTarget);
		this.m_eImage = this.m_eTarget.getElementsByTagName('img')[0];
		
		var eImage = this.m_eImage;
		Event.observe( eImage, 'load',  this._onLoad.bindAsEventListener( null, this, eImage));
	
	},
	setMargin : function() {
		/* add the margin-left to the image to create space for the 3d reflectionm */
		this.m_iMargin = ($(this.m_eImage).getWidth()*this.m_iMarginXFactor);
		this.m_eImage.setStyle({marginLeft : this.m_iMargin + 'px', cssFloat:'left'});
	},
	_onLoad: function( p_eEvent, p_oRef, p_eImage) {
		p_oRef._createReflectionDivs( p_eImage);
	},
	_createReflectionDivs : function( p_eImage) {
		this.setMargin();
		l_iImageHeight 		= p_eImage.getHeight();
		l_iImageWidth 		= p_eImage.getWidth();
		l_iReflectionHeight = Math.round(l_iImageHeight*this.m_iMarginYFactor)+1;

		for(i=0;i<l_iReflectionHeight;i++) {
			l_eLineDiv = Builder.node('div',[Builder.node('img', {src:p_eImage.src,className:'lineimg'})]);
			$(l_eLineDiv).setStyle({position:'relative',height:'1px', overflow:'hidden',fontSize:'1px', lineHeight:'0px', clear:'both', marginLeft:(this.m_iMargin-(i*(this.m_iMargin/l_iReflectionHeight)))+'px', opacity:(this.m_iReflectFrom -(i*(this.m_iReflectFrom /l_iReflectionHeight)))});	
			$(l_eLineDiv.firstChild).setStyle({position:'relative', top:(i-l_iImageHeight)+'px', width:(l_iImageWidth+(2*(i*(this.m_iMargin/l_iReflectionHeight))))+'px'});
			this.m_eTarget.appendChild(l_eLineDiv);
		}	
	}
}