'use strict';
module.exports = (function() {

	var vaultObject={};

	vaultObject['getValue']=function(key)  {
		
		return (vaultObject[key])?vaultObject[key]:null;
	};


	vaultObject['setValue']=function(key,value)  {
	vaultObject[key]=value;
};

return vaultObject;

});