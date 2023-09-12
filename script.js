(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_9E59EA84_8A57_B229_41C0_AE5DAE4EEEF2",
 "initialPosition": {
  "hfov": 130,
  "yaw": 88.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_camera",
 "initialPosition": {
  "hfov": 130,
  "yaw": -4.15,
  "class": "PanoramaCameraPosition",
  "pitch": -0.36
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_9E6B4A84_8A57_B229_41DC_64DB7043C266",
 "initialPosition": {
  "hfov": 130,
  "yaw": -154.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "media": "this.panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_camera"
  },
  {
   "media": "this.panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_camera"
  },
  {
   "media": "this.panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_camera"
  },
  {
   "media": "this.panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_camera"
  },
  {
   "media": "this.panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_camera"
  },
  {
   "media": "this.panorama_5C24119B_4D67_C6C8_41CD_667B11333044",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5C24119B_4D67_C6C8_41CD_667B11333044_camera"
  },
  {
   "media": "this.panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_camera"
  },
  {
   "media": "this.panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_camera"
  },
  {
   "media": "this.panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_camera"
  },
  {
   "media": "this.panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_camera"
  },
  {
   "media": "this.media_90417FC4_85F2_C258_41DB_03118653787A",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
   "camera": "this.media_90417FC4_85F2_C258_41DB_03118653787A_camera",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "label": "precarga Tour virtual",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_9B7FFBC3_879E_4258_41D5_2DB1E04C717D_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_9B7FFBC3_879E_4258_41D5_2DB1E04C717D",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_9B7FFBC3_879E_4258_41D5_2DB1E04C717D.mp4"
 }
},
{
 "id": "ImageResource_9D7F1B12_858E_43FB_41D7_0FED36D1061F",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_97A2D240_84FE_4258_419F_FACF6E903332_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_97A2D240_84FE_4258_419F_FACF6E903332_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_97A2D240_84FE_4258_419F_FACF6E903332_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_camera",
 "initialPosition": {
  "hfov": 129,
  "yaw": 175.71,
  "class": "PanoramaCameraPosition",
  "pitch": -0.36
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "yaw": -3.13,
  "class": "PanoramaCameraPosition",
  "pitch": -15.82
 },
 "id": "panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -104.64,
   "backwardYaw": -92.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E",
   "distance": 1
  },
  {
   "yaw": -103.68,
   "backwardYaw": -135.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "id": "panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797",
 "thumbnailUrl": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_t.jpg",
 "label": "rayos X",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_969DA65D_84FF_C268_41D5_522E92022F53",
  "this.popup_97A2D240_84FE_4258_419F_FACF6E903332",
  "this.overlay_9353E5C7_84F2_4659_41E0_043C4AD0ED1C",
  "this.overlay_92EB5948_84F2_CE57_41CA_05AEE10B8963",
  "this.overlay_9DE86785_849E_42D9_41D5_4323284E1045",
  "this.overlay_9DBD0455_8492_4678_4198_AF2843DB31F6"
 ]
},
{
 "rotationY": 0,
 "yaw": 79.22,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupDistance": 100,
 "hfov": 44.62,
 "id": "popup_97A2D240_84FE_4258_419F_FACF6E903332",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 31.97,
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_97A2D240_84FE_4258_419F_FACF6E903332_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hideDuration": 500
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548"
  },
  {
   "yaw": 25.15,
   "backwardYaw": -91.25,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C24119B_4D67_C6C8_41CD_667B11333044",
   "distance": 1
  }
 ],
 "hfov": 360,
 "id": "panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700",
 "thumbnailUrl": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_t.jpg",
 "label": "hospitalizacion",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5F82F711_4D27_CBD9_41A6_7907A09201F7",
  "this.popup_960840FF_84F2_5E28_41D4_B7036C92AB64",
  "this.overlay_921B1226_84F6_5DD8_41A5_367DF62A9D62",
  "this.overlay_92D27C11_84F6_C5F8_41DC_7DEF0274E8A0",
  "this.overlay_922B2C15_8492_45F8_41DB_D623793F9D22",
  "this.overlay_9DEF10B7_8497_DE38_41B2_3527813C8473"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_camera",
 "initialPosition": {
  "hfov": 129,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_9E0F7A74_8A57_B2E9_41CD_C28614119737",
 "initialPosition": {
  "hfov": 130,
  "yaw": -7.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_9E44EAA3_8A57_B26F_41D1_143B04963B8B",
 "initialPosition": {
  "hfov": 129,
  "yaw": 150.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "RotationalCamera",
 "automaticRotationSpeed": 10,
 "id": "media_90417FC4_85F2_C258_41DB_03118653787A_camera",
 "manualZoomSpeed": 1,
 "manualRotationSpeed": 1800,
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "class": "RotationalCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_5C24119B_4D67_C6C8_41CD_667B11333044_camera",
 "initialPosition": {
  "hfov": 130,
  "yaw": 152.67,
  "class": "PanoramaCameraPosition",
  "pitch": -32.73
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_9EA29AB3_8A57_B26F_41CB_ECDD93D9BE52",
 "initialPosition": {
  "hfov": 130,
  "yaw": 44.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "yaw": -121.07,
  "class": "PanoramaCameraPosition",
  "pitch": -0.08
 },
 "id": "panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 5.31,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_9D44CB12_858E_43FB_41DE_AB1E3691C98C",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_961A396E_84F2_CE28_41E0_601CE9992E6B_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_961A396E_84F2_CE28_41E0_601CE9992E6B_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_961A396E_84F2_CE28_41E0_601CE9992E6B_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE"
  },
  {
   "yaw": 15.05,
   "backwardYaw": -135.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED",
 "thumbnailUrl": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_t.jpg",
 "label": "Entrada",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_95B18CD1_8493_C678_41DC_2A32C5485C2B",
  "this.overlay_97422D3A_8491_C628_41D9_F89EF1A4D04C",
  "this.overlay_96D208CA_8496_4E68_41CF_63733BA3F414"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_9E560A93_8A57_B22F_41C7_541B7F9B3DB6",
 "initialPosition": {
  "hfov": 130,
  "yaw": 44.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_9234FCED_8492_C628_41C9_CB82426AF535",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_9234ECED_8492_C628_41B3_E35534CE356E_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_9234ECED_8492_C628_41B3_E35534CE356E_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_9234ECED_8492_C628_41B3_E35534CE356E_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "rotationY": 0,
 "yaw": 94.11,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupDistance": 100,
 "hfov": 61.14,
 "id": "popup_96D56CA0_84F2_C6D8_416C_E34E8D9ACA10",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 21.78,
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_96D56CA0_84F2_C6D8_416C_E34E8D9ACA10_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hideDuration": 500
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_9BFEADD5_8A7B_B62B_41D6_BBD246CA4F23.mp3",
  "oggUrl": "media/audio_9BFEADD5_8A7B_B62B_41D6_BBD246CA4F23.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_9BFEADD5_8A7B_B62B_41D6_BBD246CA4F23",
 "data": {
  "label": "ES_The Jazz Messenger - Vendla"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -29.62,
   "backwardYaw": 172.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "id": "panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548",
 "thumbnailUrl": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_t.jpg",
 "label": "sala-terapia",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5F9EA555_4D25_CE59_41C8_58B060BD6970",
  "this.overlay_9F7E1BDD_8476_4269_41CF_87D54BC82AC3",
  "this.popup_984CB5EA_87B2_462B_41BC_63CE81AFFF40"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_9E819AE2_8A57_B3E9_41DE_C3342A901F58",
 "initialPosition": {
  "hfov": 130,
  "yaw": 90.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_9B6E95C0_89D7_9629_41BF_73BE524F9C28",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_984CB5EA_87B2_462B_41BC_63CE81AFFF40_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_984CB5EA_87B2_462B_41BC_63CE81AFFF40_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_984CB5EA_87B2_462B_41BC_63CE81AFFF40_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "yaw": 76.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9EEE0B14_8A57_B229_41DA_E143ACEEABDC",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_9EFE4AF2_8A57_B3E8_41B9_A3DF7C62948A",
 "initialPosition": {
  "hfov": 129,
  "yaw": -164.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "inicio",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "Entrada",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "consultorio",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "rayos X",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "sala-ecografia",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "laboratorio",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "hospitalizacion",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "sala-terapia",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "titulo del tour",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "quirofano",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  },
  {
   "label": "frente de clinica solopatas",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "rollOverOpacity": 0.8,
 "class": "Menu",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "backgroundColor": "#404040",
 "selectedBackgroundColor": "#202020",
 "opacity": 0.4
},
{
 "rotationY": 0,
 "yaw": -142.53,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupDistance": 100,
 "hfov": 59.8,
 "id": "popup_960840FF_84F2_5E28_41D4_B7036C92AB64",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 24.67,
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_960840FF_84F2_5E28_41D4_B7036C92AB64_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hideDuration": 500
},
{
 "rotationY": 0,
 "yaw": -86.87,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupDistance": 100,
 "hfov": 57.66,
 "id": "popup_984CB5EA_87B2_462B_41BC_63CE81AFFF40",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.67,
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_984CB5EA_87B2_462B_41BC_63CE81AFFF40_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hideDuration": 500
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "yaw": 75.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9E931AC3_8A57_B228_41D8_435AD5B5FD19",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -135.59,
   "backwardYaw": 15.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED",
   "distance": 1
  },
  {
   "yaw": -135.87,
   "backwardYaw": -103.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797",
   "distance": 1
  }
 ],
 "hfov": 360,
 "id": "panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD",
 "thumbnailUrl": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_t.jpg",
 "label": "consultorio",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5F9F3009_4D23_C5C9_41C5_19060CFC0802",
  "this.overlay_9344439E_84F2_42EB_41CB_71E1738EC04E",
  "this.overlay_9282F342_84F3_C25B_41CE_19B88D9A3670",
  "this.overlay_92389D0D_8492_C7E9_41DE_1484636A2064",
  "this.overlay_9F5FE3E1_849E_4258_41D8_712CA6C1A3B1",
  "this.popup_9234ECED_8492_C628_41B3_E35534CE356E"
 ]
},
{
 "id": "ImageResource_9D414B12_858E_43FB_41DB_EFDA019CBF08",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_96672FF4_84F2_4238_41A1_1EEA73043B86_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_96672FF4_84F2_4238_41A1_1EEA73043B86_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_96672FF4_84F2_4238_41A1_1EEA73043B86_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "rotationY": 0,
 "yaw": 3.11,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupDistance": 100,
 "hfov": 42.82,
 "id": "popup_96672FF4_84F2_4238_41A1_1EEA73043B86",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 33.44,
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_96672FF4_84F2_4238_41A1_1EEA73043B86_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hideDuration": 500
},
{
 "adjacentPanoramas": [
  {
   "yaw": -89.61,
   "backwardYaw": -92.97,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E",
   "distance": 1
  },
  {
   "yaw": -91.25,
   "backwardYaw": 25.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700",
   "distance": 1
  }
 ],
 "hfov": 360,
 "id": "panorama_5C24119B_4D67_C6C8_41CD_667B11333044",
 "thumbnailUrl": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_t.jpg",
 "label": "laboratorio",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5EF278F1_4D22_C659_41A0_7476F2B86A95",
  "this.popup_96672FF4_84F2_4238_41A1_1EEA73043B86",
  "this.overlay_92BCDBA3_84F1_C2D8_41CB_73AD48A85EE1",
  "this.overlay_93321A3A_84F6_4228_418B_3BEC29EE523C",
  "this.overlay_921058B2_8492_4E3B_4180_FF287C3D14EE",
  "this.overlay_9DE96CB2_8496_4638_41D4_D95E7ECCD5DA"
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_96857289_84F6_42E8_41C6_2329D76B6063.mp3",
  "oggUrl": "media/audio_96857289_84F6_42E8_41C6_2329D76B6063.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_96857289_84F6_42E8_41C6_2329D76B6063",
 "data": {
  "label": "notificacion"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_camera",
 "initialPosition": {
  "hfov": 130,
  "yaw": -93.53,
  "class": "PanoramaCameraPosition",
  "pitch": -7.3
 }
},
{
 "rotationY": 0,
 "yaw": -97.32,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupDistance": 100,
 "hfov": 40.61,
 "id": "popup_961A396E_84F2_CE28_41E0_601CE9992E6B",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 20.4,
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_961A396E_84F2_CE28_41E0_601CE9992E6B_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hideDuration": 500
},
{
 "adjacentPanoramas": [
  {
   "yaw": -92.35,
   "backwardYaw": -104.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797",
   "distance": 1
  },
  {
   "yaw": -92.97,
   "backwardYaw": -89.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C24119B_4D67_C6C8_41CD_667B11333044",
   "distance": 1
  }
 ],
 "hfov": 360,
 "id": "panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E",
 "thumbnailUrl": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_t.jpg",
 "label": "sala-ecografia",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5F927886_4D22_C6BB_418F_E7CD5BC3B70E",
  "this.popup_96D56CA0_84F2_C6D8_416C_E34E8D9ACA10",
  "this.overlay_934B357E_84F2_C62B_41D3_E0EB5EDB9B25",
  "this.overlay_9294FEF2_84F2_4238_41DD_74B134C84B16",
  "this.overlay_92112DD9_8492_4668_41D0_565E467C685B",
  "this.overlay_9DEC1341_8496_4259_41C7_A3F3AADEDB82"
 ]
},
{
 "id": "ImageResource_9D425B12_858E_43FB_41D3_CBDBF73F4806",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_960840FF_84F2_5E28_41D4_B7036C92AB64_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_960840FF_84F2_5E28_41D4_B7036C92AB64_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_960840FF_84F2_5E28_41D4_B7036C92AB64_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.media_90417FC4_85F2_C258_41DB_03118653787A"
  }
 ],
 "hfov": 360,
 "id": "panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A",
 "thumbnailUrl": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_t.jpg",
 "label": "inicio",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_840ACC2F_89CE_9677_41B5_FB1A515220F1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_camera",
 "initialPosition": {
  "hfov": 130,
  "yaw": -148.29,
  "class": "PanoramaCameraPosition",
  "pitch": 4.53
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 172.24,
   "backwardYaw": -29.62,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700"
  }
 ],
 "hfov": 360,
 "id": "panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A",
 "thumbnailUrl": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_t.jpg",
 "label": "quirofano",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5427D129_43D1_6F16_41B9_BC441DB50F01",
  "this.overlay_5B8E9B02_43D7_B31A_41A8_7D27784E0673",
  "this.overlay_5A9392EB_43D0_92EA_41CF_29E09766A959",
  "this.overlay_59236EDB_43D0_952A_41B2_BB15B4537BB4",
  "this.overlay_55A4441D_43D1_752E_41B1_312C1D0F7B5A",
  "this.overlay_54CABBEF_43D1_92EA_4189_52E6BABD74A0",
  "this.overlay_5B3E7531_43D0_9776_41CA_0A0CEA39DA84",
  "this.overlay_5585D93C_43D0_9F6E_41D0_BCC995553AF4",
  "this.overlay_5430EDD3_43D3_973A_41BE_A545552568DF",
  "this.overlay_54AEC84D_43D3_FD2E_41BC_77F2CB39F1F6",
  "this.overlay_5FEF78DF_4D26_4649_41CB_10A70C4EFAC4",
  "this.popup_961A396E_84F2_CE28_41E0_601CE9992E6B",
  "this.overlay_9872FD77_87B7_C638_416B_B372705B092A",
  "this.overlay_986EF3AF_87B6_4228_41D5_AA55C6A5A6E3",
  "this.overlay_98676F46_87B6_C258_41D8_D72138FA2162",
  "this.overlay_98938FA2_87B6_42D8_41BE_E2635132B83A"
 ]
},
{
 "rotationY": 0,
 "yaw": -79.68,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupDistance": 100,
 "hfov": 52.58,
 "id": "popup_9234ECED_8492_C628_41B3_E35534CE356E",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.08,
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_9234ECED_8492_C628_41B3_E35534CE356E_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hideDuration": 500
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_camera",
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "yaw": 87.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9E7C9A74_8A57_B2E9_41B7_A30C990B4C52",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_9D406B12_858E_43FB_41CB_809ABC55C928",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_96D56CA0_84F2_C6D8_416C_E34E8D9ACA10_0_0.png",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_96D56CA0_84F2_C6D8_416C_E34E8D9ACA10_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_96D56CA0_84F2_C6D8_416C_E34E8D9ACA10_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED"
  }
 ],
 "hfovMin": 130,
 "hfov": 360,
 "partial": false,
 "id": "media_90417FC4_85F2_C258_41DB_03118653787A",
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "label": "frente de clinica solopatas",
 "loop": true,
 "thumbnailUrl": "media/media_90417FC4_85F2_C258_41DB_03118653787A_t.jpg",
 "pitch": 0,
 "class": "Video360",
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_908EC157_85F2_5E78_41C9_2B03A52123EC"
 ],
 "video": [
  {
   "width": 2160,
   "posterURL": "media/media_90417FC4_85F2_C258_41DB_03118653787A_poster.jpg",
   "class": "Video360Resource",
   "framerate": 30,
   "bitrate": 5248,
   "type": "video/mp4",
   "url": "media/media_90417FC4_85F2_C258_41DB_03118653787A.mp4",
   "height": 1080
  }
 ]
},
{
 "items": [
  {
   "media": "this.video_9B7FFBC3_879E_4258_41D5_2DB1E04C717D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_9E214A55_8A57_B22B_41AA_6BD65F7801DA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9E214A55_8A57_B22B_41AA_6BD65F7801DA, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_9E214A55_8A57_B22B_41AA_6BD65F7801DA",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "yaw": -4.33,
  "class": "PanoramaCameraPosition",
  "pitch": -12.31
 },
 "id": "panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.media_90417FC4_85F2_C258_41DB_03118653787A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD"
  }
 ],
 "hfov": 360,
 "id": "panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE",
 "thumbnailUrl": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_t.jpg",
 "label": "titulo del tour",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_9E271A55_8A57_B22B_41D7_76493C948239",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_54EEBA9F_43D0_FD2A_41B4_09AB2B0A4495",
  "this.overlay_9EB28BFF_8473_C228_41DD_AF0A0DD5A9B9",
  "this.overlay_993FD199_8472_DEE9_41CB_29C82D4470EA",
  "this.overlay_9E4BE287_8476_C2D8_41DA_9DABD5B2EBE5"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "yaw": 87.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9EB44AA3_8A57_B26F_41DF_7DECD4683054",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#CC0000",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 0.5,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "bold",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "High Tower Text",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "transparent",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "layout": "absolute",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "minWidth": 1,
 "bottom": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": 118,
 "paddingTop": 0,
 "backgroundOpacity": 0.64,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "class": "UIComponent",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent7657"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "class": "ZoomImage",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage7658"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton7659"
 },
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "horizontalAlign": "center",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 10,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "minWidth": 0,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "label": "",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "cursor": "hand",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": 30,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 49,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "maxHeight": 37,
 "bottom": 8,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 75,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 44.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0_HS_1_0.png",
      "width": 888,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ]
   },
   "pitch": 31.97,
   "yaw": 79.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_97A2D240_84FE_4258_419F_FACF6E903332, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_9D7F1B12_858E_43FB_41D7_0FED36D1061F, null, null, null, this.audio_96857289_84F6_42E8_41C6_2329D76B6063, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_969DA65D_84FF_C268_41D5_522E92022F53",
 "data": {
  "label": "SALA - RAYOS X"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 44.62,
   "yaw": 79.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 31.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0_HS_1_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.28,
   "image": "this.AnimatedImageResource_A61DE5CD_879E_4669_41DF_26C69F2DEAD2",
   "pitch": 2.69,
   "yaw": -104.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E, this.camera_9EB44AA3_8A57_B26F_41DF_7DECD4683054); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9353E5C7_84F2_4659_41E0_043C4AD0ED1C",
 "data": {
  "label": "Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.28,
   "yaw": -104.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.91,
   "image": "this.AnimatedImageResource_A61D65CD_879E_4669_41CE_EF3103AF3988",
   "pitch": -15.7,
   "yaw": -103.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD, this.camera_9EA29AB3_8A57_B26F_41CB_ECDD93D9BE52); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_92EB5948_84F2_CE57_41CA_05AEE10B8963",
 "data": {
  "label": "Arrow 01 Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.91,
   "yaw": -103.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Volver"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0_HS_4_0.png",
      "width": 240,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -9.01,
   "yaw": -103.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9DE86785_849E_42D9_41D5_4323284E1045",
 "maps": [
  {
   "hfov": 14.08,
   "yaw": -103.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0_HS_4_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Sig."
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0_HS_5_0.png",
      "width": 155,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": 10.53,
   "yaw": -103.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9DBD0455_8492_4678_4198_AF2843DB31F6",
 "maps": [
  {
   "hfov": 9.08,
   "yaw": -103.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0_HS_5_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 59.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0_HS_0_0.png",
      "width": 1111,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ]
   },
   "pitch": 24.67,
   "yaw": -142.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_960840FF_84F2_5E28_41D4_B7036C92AB64, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_9D425B12_858E_43FB_41D3_CBDBF73F4806, null, null, null, this.audio_96857289_84F6_42E8_41C6_2329D76B6063, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5F82F711_4D27_CBD9_41A6_7907A09201F7",
 "data": {
  "label": "HOSPITALIZACI\u00d3N"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 59.8,
   "yaw": -142.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 24.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0_HS_0_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.97,
   "image": "this.AnimatedImageResource_A61185CD_879E_4669_41D9_99AAA131D14E",
   "pitch": -0.11,
   "yaw": 25.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C24119B_4D67_C6C8_41CD_667B11333044, this.camera_9E59EA84_8A57_B229_41C0_AE5DAE4EEEF2); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_921B1226_84F6_5DD8_41A5_367DF62A9D62",
 "data": {
  "label": "Arrow 01 Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.97,
   "yaw": 25.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.57,
   "image": "this.AnimatedImageResource_A611C5CD_879E_4669_417A_E1A61C23982B",
   "pitch": 12.57,
   "yaw": 25.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_92D27C11_84F6_C5F8_41DC_7DEF0274E8A0",
 "data": {
  "label": "Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.57,
   "yaw": 25.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Sig."
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0_HS_3_0.png",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": 18.15,
   "yaw": 26.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_922B2C15_8492_45F8_41DB_D623793F9D22",
 "maps": [
  {
   "hfov": 8.79,
   "yaw": 26.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 18.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0_HS_3_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Volver"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0_HS_4_0.png",
      "width": 241,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": 5.8,
   "yaw": 27.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9DEF10B7_8497_DE38_41B2_3527813C8473",
 "maps": [
  {
   "hfov": 14.21,
   "yaw": 27.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0_HS_4_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 51.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0_HS_2_0.png",
      "width": 896,
      "class": "ImageResourceLevel",
      "height": 341
     }
    ]
   },
   "pitch": 15.84,
   "yaw": 15.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD, this.camera_9E560A93_8A57_B22F_41C7_541B7F9B3DB6); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_95B18CD1_8493_C678_41DC_2A32C5485C2B",
 "data": {
  "label": "VISITA"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 51.08,
   "yaw": 15.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0_HS_2_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "O"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0_HS_3_0.png",
      "width": 256,
      "class": "ImageResourceLevel",
      "height": 341
     }
    ]
   },
   "pitch": -4.07,
   "yaw": 13.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_97422D3A_8491_C628_41D9_F89EF1A4D04C",
 "maps": [
  {
   "hfov": 15.15,
   "yaw": 13.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 68.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0_HS_4_0.png",
      "width": 1264,
      "class": "ImageResourceLevel",
      "height": 341
     }
    ]
   },
   "pitch": -23.29,
   "yaw": 15.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_96D208CA_8496_4E68_41CF_63733BA3F414",
 "data": {
  "label": "CIRUG\u00cdA"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 68.78,
   "yaw": 15.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED_0_HS_4_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 57.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_1_HS_0_0.png",
      "width": 980,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ]
   },
   "pitch": 6.67,
   "yaw": -86.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_984CB5EA_87B2_462B_41BC_63CE81AFFF40, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_9B6E95C0_89D7_9629_41BF_73BE524F9C28, null, null, null, this.audio_96857289_84F6_42E8_41C6_2329D76B6063, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5F9EA555_4D25_CE59_41C8_58B060BD6970",
 "data": {
  "label": "SALA - TERAPIA"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 57.66,
   "yaw": -86.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_1_HS_0_0_map.gif",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "hfov": 10.3,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.5,
   "yaw": -29.62
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A, this.camera_9E0F7A74_8A57_B2E9_41CD_C28614119737); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9F7E1BDD_8476_4269_41CF_87D54BC82AC3",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.3,
   "yaw": -29.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Sig."
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0_HS_1_0.png",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": 9.44,
   "yaw": -134.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5F9F3009_4D23_C5C9_41C5_19060CFC0802",
 "maps": [
  {
   "hfov": 9.13,
   "yaw": -134.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0_HS_1_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.75,
   "image": "this.AnimatedImageResource_A61B65CD_879E_4669_41C5_DB287443DD29",
   "pitch": -18.79,
   "yaw": -135.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57C66C8E_42D0_F52A_41C4_2B655C41BEED, this.camera_9EFE4AF2_8A57_B3E8_41B9_A3DF7C62948A); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9344439E_84F2_42EB_41CB_71E1738EC04E",
 "data": {
  "label": "Arrow 01 Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.75,
   "yaw": -135.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.29,
   "image": "this.AnimatedImageResource_A61CB5CD_879E_4669_41BD_E9CBC07E5AF5",
   "pitch": 0.98,
   "yaw": -135.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797, this.camera_9EEE0B14_8A57_B229_41DA_E143ACEEABDC); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9282F342_84F3_C25B_41CE_19B88D9A3670",
 "data": {
  "label": "Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.29,
   "yaw": -135.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 52.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0_HS_4_0.png",
      "width": 887,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ]
   },
   "pitch": 1.08,
   "yaw": -79.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_9234ECED_8492_C628_41B3_E35534CE356E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_9234FCED_8492_C628_41C9_CB82426AF535, null, null, null, this.audio_96857289_84F6_42E8_41C6_2329D76B6063, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_92389D0D_8492_C7E9_41DE_1484636A2064",
 "data": {
  "label": "CONSULTORIO"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 52.58,
   "yaw": -79.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0_HS_4_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Volver"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0_HS_5_0.png",
      "width": 241,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -10.7,
   "yaw": -134.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9F5FE3E1_849E_4258_41D8_712CA6C1A3B1",
 "maps": [
  {
   "hfov": 14.03,
   "yaw": -134.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0_HS_5_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 42.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_1_HS_0_0.png",
      "width": 866,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ]
   },
   "pitch": 33.44,
   "yaw": 3.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_96672FF4_84F2_4238_41A1_1EEA73043B86, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_9D414B12_858E_43FB_41DB_EFDA019CBF08, null, null, null, this.audio_96857289_84F6_42E8_41C6_2329D76B6063, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5EF278F1_4D22_C659_41A0_7476F2B86A95",
 "data": {
  "label": "LABORATORIO"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 42.82,
   "yaw": 3.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 33.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_1_HS_0_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.29,
   "image": "this.AnimatedImageResource_A61F45CD_879E_4669_417E_0E74D9518A3B",
   "pitch": -1.08,
   "yaw": -91.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700, this.camera_9E6B4A84_8A57_B229_41DC_64DB7043C266); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_92BCDBA3_84F1_C2D8_41CB_73AD48A85EE1",
 "data": {
  "label": "Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.29,
   "yaw": -91.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.67,
   "image": "this.AnimatedImageResource_A610E5CD_879E_4669_41BA_DA3A696AC759",
   "pitch": -20.02,
   "yaw": -89.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E, this.camera_9E7C9A74_8A57_B2E9_41B7_A30C990B4C52); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_93321A3A_84F6_4228_418B_3BEC29EE523C",
 "data": {
  "label": "Arrow 01 Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.67,
   "yaw": -89.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Sig."
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0_HS_3_0.png",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": 5.34,
   "yaw": -90.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_921058B2_8492_4E3B_4180_FF287C3D14EE",
 "maps": [
  {
   "hfov": 9.21,
   "yaw": -90.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0_HS_3_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Volver"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0_HS_4_0.png",
      "width": 241,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -12.4,
   "yaw": -90.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9DE96CB2_8496_4638_41D4_D95E7ECCD5DA",
 "maps": [
  {
   "hfov": 13.94,
   "yaw": -90.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0_HS_4_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 61.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_1_HS_0_0.png",
      "width": 1111,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ]
   },
   "pitch": 21.78,
   "yaw": 94.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_96D56CA0_84F2_C6D8_416C_E34E8D9ACA10, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_9D406B12_858E_43FB_41CB_809ABC55C928, null, null, null, this.audio_96857289_84F6_42E8_41C6_2329D76B6063, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5F927886_4D22_C6BB_418F_E7CD5BC3B70E",
 "data": {
  "label": "SALA - ECOGRAF\u00cdA"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 61.14,
   "yaw": 94.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 21.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_1_HS_0_0_map.gif",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.48,
   "image": "this.AnimatedImageResource_A61E05CD_879E_4669_41DE_2F9892F30090",
   "pitch": -22.91,
   "yaw": -92.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797, this.camera_9E931AC3_8A57_B228_41D8_435AD5B5FD19); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_934B357E_84F2_C62B_41D3_E0EB5EDB9B25",
 "data": {
  "label": "Arrow 01 Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.48,
   "yaw": -92.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.27,
   "image": "this.AnimatedImageResource_A61E55CD_879E_4669_41CF_07A5B3D55E0D",
   "pitch": -4.17,
   "yaw": -92.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C24119B_4D67_C6C8_41CD_667B11333044, this.camera_9E819AE2_8A57_B3E9_41DE_C3342A901F58); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9294FEF2_84F2_4238_41DD_74B134C84B16",
 "data": {
  "label": "Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.27,
   "yaw": -92.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Sig."
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0_HS_3_0.png",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": 3.28,
   "yaw": -91.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_92112DD9_8492_4668_41D0_565E467C685B",
 "maps": [
  {
   "hfov": 9.23,
   "yaw": -91.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0_HS_3_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Volver"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0_HS_4_0.png",
      "width": 241,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -16.17,
   "yaw": -91.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9DEC1341_8496_4259_41C7_A3F3AADEDB82",
 "maps": [
  {
   "hfov": 13.71,
   "yaw": -91.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0_HS_4_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_1_HS_0_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 383
     }
    ]
   },
   "hfov": 34.5,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.34,
   "yaw": 20.06
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10); this.MainViewerPanoramaPlayer.play()",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_840ACC2F_89CE_9677_41B5_FB1A515220F1",
 "data": {
  "label": "Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 34.5,
   "yaw": 20.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840AFC2F_89CE_9677_41DA_736C8C472E9A_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Poligon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_0_0.png",
      "width": 263,
      "class": "ImageResourceLevel",
      "height": 204
     }
    ]
   },
   "hfov": 15.52,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.78,
   "roll": 0,
   "yaw": -70.33
  }
 ],
 "id": "overlay_5427D129_43D1_6F16_41B9_BC441DB50F01",
 "maps": [
  {
   "hfov": 15.52,
   "yaw": -70.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_0_1_0_map.gif",
      "width": 131,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Poligon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_1_0.png",
      "width": 235,
      "class": "ImageResourceLevel",
      "height": 660
     }
    ]
   },
   "hfov": 13.86,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.72,
   "roll": 0,
   "yaw": 74.1
  }
 ],
 "id": "overlay_5B8E9B02_43D7_B31A_41A8_7D27784E0673",
 "maps": [
  {
   "hfov": 13.86,
   "yaw": 74.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_1_1_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Poligon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_2_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ]
   },
   "hfov": 24.72,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 17.89,
   "roll": 0,
   "yaw": 95.72
  }
 ],
 "id": "overlay_5A9392EB_43D0_92EA_41CF_29E09766A959",
 "maps": [
  {
   "hfov": 24.72,
   "yaw": 95.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 17.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Poligon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_3_0.png",
      "width": 355,
      "class": "ImageResourceLevel",
      "height": 364
     }
    ]
   },
   "hfov": 20.8,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.88,
   "roll": 0,
   "yaw": 95.5
  }
 ],
 "id": "overlay_59236EDB_43D0_952A_41B2_BB15B4537BB4",
 "maps": [
  {
   "hfov": 20.8,
   "yaw": 95.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_3_1_0_map.gif",
      "width": 177,
      "class": "ImageResourceLevel",
      "height": 182
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Poligon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_4_0.png",
      "width": 267,
      "class": "ImageResourceLevel",
      "height": 273
     }
    ]
   },
   "hfov": 15.73,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 9.12,
   "roll": 0,
   "yaw": 119.19
  }
 ],
 "id": "overlay_55A4441D_43D1_752E_41B1_312C1D0F7B5A",
 "maps": [
  {
   "hfov": 15.73,
   "yaw": 119.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_4_1_0_map.gif",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Poligon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_5_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 194
     }
    ]
   },
   "hfov": 10.22,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 10.56,
   "roll": 0,
   "yaw": 136.8
  }
 ],
 "id": "overlay_54CABBEF_43D1_92EA_4189_52E6BABD74A0",
 "maps": [
  {
   "hfov": 10.22,
   "yaw": 136.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_5_1_0_map.gif",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Poligon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0_HS_6_0.png",
      "width": 1557,
      "class": "ImageResourceLevel",
      "height": 1149
     }
    ]
   },
   "hfov": 77.65,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.49,
   "roll": 0,
   "yaw": 140.88
  }
 ],
 "id": "overlay_5B3E7531_43D0_9776_41CA_0A0CEA39DA84",
 "maps": [
  {
   "hfov": 77.65,
   "yaw": 140.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0_HS_6_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 147
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Poligon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_7_0.png",
      "width": 1638,
      "class": "ImageResourceLevel",
      "height": 1162
     }
    ]
   },
   "hfov": 80.52,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.87,
   "roll": 0,
   "yaw": -138.13
  }
 ],
 "id": "overlay_5585D93C_43D0_9F6E_41D0_BCC995553AF4",
 "maps": [
  {
   "hfov": 80.52,
   "yaw": -138.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_7_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Poligon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_8_0.png",
      "width": 546,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ]
   },
   "hfov": 31.54,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.9,
   "roll": 0,
   "yaw": -102.27
  }
 ],
 "id": "overlay_5430EDD3_43D3_973A_41BE_A545552568DF",
 "maps": [
  {
   "hfov": 31.54,
   "yaw": -102.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_8_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_9_0.png",
      "width": 990,
      "class": "ImageResourceLevel",
      "height": 628
     }
    ]
   },
   "hfov": 58.66,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.36,
   "yaw": 3.03
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.openLink('https://www.youtube.com/watch?v=k6PQAMuy4vg&t=449s&ab_channel=NomaddiS.A.S', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_54AEC84D_43D3_FD2E_41BC_77F2CB39F1F6",
 "data": {
  "label": "Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 58.66,
   "yaw": 3.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_9_0_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 40.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_10_0.png",
      "width": 731,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ]
   },
   "pitch": 20.4,
   "yaw": -97.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_961A396E_84F2_CE28_41E0_601CE9992E6B, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_9D44CB12_858E_43FB_41DE_AB1E3691C98C, null, null, null, this.audio_96857289_84F6_42E8_41C6_2329D76B6063, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5FEF78DF_4D26_4649_41CB_10A70C4EFAC4",
 "data": {
  "label": "QUIROFANO"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 40.61,
   "yaw": -97.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 20.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_1_HS_10_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Sig."
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0_HS_12_0.png",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": 18.38,
   "yaw": 170.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9872FD77_87B7_C638_416B_B372705B092A",
 "maps": [
  {
   "hfov": 8.78,
   "yaw": 170.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 18.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0_HS_12_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.06,
   "image": "this.AnimatedImageResource_9B4F45A2_89D7_9669_41D9_F9C1EFCEDC79",
   "pitch": 12.3,
   "yaw": 169.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_986EF3AF_87B6_4228_41D5_AA55C6A5A6E3",
 "data": {
  "label": "Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.06,
   "yaw": 169.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Volver"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0_HS_14_0.png",
      "width": 241,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": 2.7,
   "yaw": 171.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_98676F46_87B6_C258_41D8_D72138FA2162",
 "maps": [
  {
   "hfov": 14.26,
   "yaw": 171.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0_HS_14_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.26,
   "image": "this.AnimatedImageResource_9B4FC5A2_89D7_9669_41DC_B4C6ADD5DB2F",
   "pitch": -4.92,
   "yaw": 172.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C1297C5_4D67_CAB9_41B1_9AAF6FD49548, this.camera_9E44EAA3_8A57_B26F_41D1_143B04963B8B); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_98938FA2_87B6_42D8_41BE_E2635132B83A",
 "data": {
  "label": "Arrow 01 Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.26,
   "yaw": 172.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "playbackPositions": [
    {
     "roll": 0,
     "timestamp": 0,
     "class": "PanoramaOverlayPlaybackPosition",
     "pitch": -15.81,
     "opacity": 1,
     "hfov": 18.11,
     "yaw": -7.97
    }
   ],
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0,
   "yaw": 0,
   "image": "this.AnimatedImageResource_90B166A2_85F6_42D8_41D4_108AA2D58875",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_908EC157_85F2_5E78_41C9_2B03A52123EC",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/media_90417FC4_85F2_C258_41DB_03118653787A_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "playbackPositions": [
    {
     "roll": 0,
     "timestamp": 0,
     "class": "PanoramaOverlayPlaybackPosition",
     "pitch": -15.81,
     "opacity": 1,
     "hfov": 18.11,
     "yaw": -7.97
    }
   ],
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_1_HS_0_0.png",
      "width": 357,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ]
   },
   "hfov": 24.32,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.36,
   "yaw": 78.5
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_54EEBA9F_43D0_FD2A_41B4_09AB2B0A4495",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 24.32,
   "yaw": 78.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 27.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0_HS_1_0.png",
      "width": 365,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ]
   },
   "pitch": -2.21,
   "yaw": -56.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10); this.MainViewerPanoramaPlayer.play()",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9EB28BFF_8473_C228_41DD_AF0A0DD5A9B9",
 "data": {
  "label": "Inicio"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 27.01,
   "yaw": -56.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0_HS_1_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 25.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0_HS_2_0.png",
      "width": 345,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": 9.04,
   "yaw": -55.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_993FD199_8472_DEE9_41CB_29C82D4470EA",
 "data": {
  "label": "Volver a:"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 25.23,
   "yaw": -55.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0_HS_2_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 50.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0_HS_3_0.png",
      "width": 704,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ]
   },
   "pitch": -13.88,
   "yaw": -54.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9E4BE287_8476_C2D8_41DA_9DABD5B2EBE5",
 "data": {
  "label": "Quirofano"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 50.61,
   "yaw": -54.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_53CCEE2E_42F3_756A_41C9_69723D3236FE_0_HS_3_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_A61DE5CD_879E_4669_41DF_26C69F2DEAD2",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_A61D65CD_879E_4669_41CE_EF3103AF3988",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5C12E8EC_4D67_C64F_41C4_3EFB8EC7F797_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_A61185CD_879E_4669_41D9_99AAA131D14E",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_A611C5CD_879E_4669_417A_E1A61C23982B",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5C12DA3C_4D67_C5C8_41D1_1D6062DFC700_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_A61B65CD_879E_4669_41C5_DB287443DD29",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_A61CB5CD_879E_4669_41BD_E9CBC07E5AF5",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5FDC17A8_4D66_4AF7_41CB_07FF608518DD_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_A61F45CD_879E_4669_417E_0E74D9518A3B",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_A610E5CD_879E_4669_41BA_DA3A696AC759",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5C24119B_4D67_C6C8_41CD_667B11333044_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_A61E05CD_879E_4669_41DE_2F9892F30090",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_A61E55CD_879E_4669_41CF_07A5B3D55E0D",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5C1D0FF7_4D67_FA58_4173_FC709CCA4B1E_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_9B4F45A2_89D7_9669_41D9_F9C1EFCEDC79",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0_HS_13_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_9B4FC5A2_89D7_9669_41DC_B4C6ADD5DB2F",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5464F080_43CF_AD16_41B6_9740BFE7B96A_0_HS_15_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_90B166A2_85F6_42D8_41D4_108AA2D58875",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/media_90417FC4_85F2_C258_41DB_03118653787A_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
}],
 "start": "this.playAudioList([this.audio_9BFEADD5_8A7B_B62B_41D6_BBD246CA4F23]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270], 'cardboardAvailable')",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Player",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "backgroundPreloadEnabled": false,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
