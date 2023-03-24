// instagram feed
    var userFeed = new Instafeed({
      get: 'user',
      userId: 'self',
      accessToken: '6910901930.2e2acce.9a9135d097104f14850da99690ad5f95',
      limit: 12,
      sortBy: 'none',
      resolution: 'low_resolution',
      template: '<div class="image-hover col-md-2"><div class="hover-overlay"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="" style="height: 298px;"></a></div></div>'
    });
    userFeed.run();

// end instagram feed