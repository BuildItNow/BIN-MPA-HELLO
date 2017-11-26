define(
[], 
function()
{
	var Super = bin.ui.NaviPageView;
	var Class = {};

    Class.vmData = 
    {
        content:
        {
            mine: "view!mine/index",
            work: "view!work/index"
        },
        tab: bin.queryParams.tab || "work"
    }

	Class.vmMethod_tabTo = function(name)
    {
        if(this.vm.tab === name)
        {
            return ;
        }

        bin.naviController.push("", {tab:name});
    }

    Class.onLeft = function()
    {
        window.open("http://github.com/BuildItNow/BIN");
    }

    Class.onRight = function()
    {
        window.open("http://101.200.215.114/apps/bin/document.html");
    }

	return Super.extend(Class);
});