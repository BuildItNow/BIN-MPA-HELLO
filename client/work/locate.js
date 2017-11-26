define(
[], 
function()
{
	var Super = bin.ui.NaviPageView;
	var Class = {};

    Class.posGenHTML = function()
	{
        var data = bin.queryParams;

        if(data && data.name)
        {
            this.setTitle(data.addr+" "+data.name);
        }

        var self = this;
        this.request(new Promise(function(res, rej)
        {
            bin.mapManager.require(function(error)
            {   
                if(error)
                {
                    rej(error);
                    return ;
                }

                res();
            });
        })).then(function()
        {
            var map = new BMap.Map("mapContainer");

            var lat = 106.558721;
            var lng = 29.569247;

            var lvl = 12;

            if(data && data.locate)
            {
                lat = data.locate.lat;
                lng = data.locate.lng;
                lvl = 14;
            }

            map.centerAndZoom(new BMap.Point(lat, lng), lvl);
        }).catch(function(error)
        {
            bin.hudManager.showStatus("加载地图失败");
        });
	}

	return Super.extend(Class);
});