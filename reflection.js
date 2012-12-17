/* Get the image source */
Reflect3D = Class.create();

Reflect3D.prototype = {
	initialize : function(p_sTarget) {
		/* Some config */
		this.m_iMarginXFactor = 0.2;
		this.m_iMarginYFactor = 0.2;
		this.m_iReflectFrom   = 0.8;

		this.m_eTarget     = $(p_sTarget);
		this.m_eImage = this.m_eTarget.select('img')[0];
		if(this.m_eImage.complete)
		{
			this._createReflectionDivs(this.m_eImage);
		}
		else
		{
			$(this.m_eImage).observe('load',this._onLoad.bind(this));
		}
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
		var dims = p_eImage.getDimensions();
		l_iImageHeight = dims.height;
		l_iImageWidth = dims.width;
		l_iReflectionHeight = Math.round(l_iImageHeight*this.m_iMarginYFactor)+1;

		for(i=0;i<l_iReflectionHeight;i++) {
			l_eLineDiv = new Element('div').update(new Element('img',{'src':p_eImage.src,'class':'lineimg'}));
			l_eLineDiv.setStyle({'position':'relative','height':'1px','overflow':'hidden','fontSize':'1px','lineHeight':'0px','clear':'both','marginLeft':(this.m_iMargin-(i*(this.m_iMargin/l_iReflectionHeight)))+'px','opacity':(this.m_iReflectFrom -(i*(this.m_iReflectFrom /l_iReflectionHeight)))});
			l_eLineDiv.down().setStyle({'position':'relative','top':(i-l_iImageHeight)+'px','width':(l_iImageWidth+(2*(i*(this.m_iMargin/l_iReflectionHeight))))+'px'});
			this.m_eTarget.insert(l_eLineDiv);
		}    
	}
};