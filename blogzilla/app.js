( function(){
    var bApp = angular.module('BloggerApp',['ngMaterial']);
    
    bApp.config( function($mdIconProvider){
        $mdIconProvider.defaultIconSet('./svg/avatars.svg',128);
        $mdIconProvider.icon('share','./svg/share.svg',24);
            
          
    });
    
    
    bApp.run(function(){
        console.log("you can start blogging");
    });     
})();
