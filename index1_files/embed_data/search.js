google.maps.__gjsload__('search', function(_){var Zua=function(){},jB=function(a){this.setValues(a);_.Xi("search_impl")},ava=function(a){let b=_.Al,c=-1;a.tiles.forEach(e=>{e.zoom>c&&(b=e.oi,c=e.zoom)});if(c===-1)return[];const d=[];a.dv().forEach(e=>{e.a&&e.a.length>=2&&d.push(new $ua(e,b,c))});return d},bva=function(a){const b=[];a.data.forEach(c=>{b.push(...ava(c))});return b};_.Ea(Zua,_.xk);var cva={["1"]:{}},$ua=class{constructor(a,b,c){this.wn=b;this.zoom=c;this.bounds=this.anchor=null;this.Eg=cva;this.source=a;this.featureId=this.source.id||"0";this.infoWindowOffset=(this.source.io||[]).length===2?new google.maps.Point(this.source.io[0],this.source.io[1]):null}getAnchor(){if(!this.anchor){const a=1<<this.zoom;this.anchor=_.Yl(new _.jm((this.wn.x*256+this.source.a[0])/a,(this.wn.y*256+this.source.a[1])/a)).toJSON()}return this.anchor}getCompleteBounds(){return this.getBounds().reduce((a,
b)=>{a.extendByBounds(b);return a},_.bm(0,0,0,0))}getBounds(){if(this.bounds===null){this.bounds=[];const a=this.source.bb||[];if(a.length%4===0)for(let b=0;b<a.length;b+=4){const c=this.bounds[this.bounds.length-1],d=_.bm(a[b],a[b+1],a[b+2],a[b+3]);c&&c.equals(d)||this.bounds.push(d)}}return[...this.bounds]}getExtendedContent(a){if(this.Eg===cva)try{this.Eg=this.source.c?JSON.parse(this.source.c):{}}catch(b){this.Eg={}}return this.Eg[a]??{}}getFeatureName(){return this.getExtendedContent("1")?.title??
null}isTransitStation(){return this.getExtendedContent("1")?.is_transit_station??!1}};var dva=new WeakSet;_.Ea(jB,Zua);jB.prototype.changed=function(){const a=this;var b=this.get("map");let c=null;b&&(c=b.__gm,b=c.get("blockingLayerCount")||0,c.set("blockingLayerCount",b+1),c.set("disableLabelingHysteresis",this.get("disableLabelingHysteresis")),c.set("tilePrefetchEnabled",this.get("tilePrefetchEnabled")));_.Xi("search_impl").then(d=>{d.Eg(a);c&&(d=c.get("blockingLayerCount")||0,c.set("blockingLayerCount",d-1))})};
jB.enableFeatureMapEventsRasterOnly=function(a){if(_.Om[15]){var b=a.__gm.Xg;if(!dva.has(a)){dva.add(a);var c=[],d=(f,g)=>{f=ava(f);f.length&&_.P(a,g,f)},e=()=>{for(;c.length>0;)c.pop().remove();b.forEach(f=>{if(f=f.data)c.push(_.jk(f,"insert",g=>d(g,"addfeatures"))),c.push(_.jk(f,"remove",g=>d(g,"removefeatures")))})};b.addListener("insert_at",e);b.addListener("remove_at",e);b.addListener("set_at",e);e()}(()=>{const f=[];b.forEach(g=>{f.push(...bva(g))});f.length&&_.P(a,"addfeatures",f)})()}};
_.ya("module$contents$mapsapi$onionLayers$search$googleLayer_GoogleLayer.enableFeatureMapEventsRasterOnly",jB.enableFeatureMapEventsRasterOnly);_.Wk(jB.prototype,{map:_.Vo});_.ja.google.maps.search={GoogleLayer:jB};_.Yi("search",{});});
