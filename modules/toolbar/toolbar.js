(function(a){Drupal.toolbar=Drupal.toolbar||{};Drupal.behaviors.toolbar={attach:function(b){a("#toolbar",b).once("toolbar",Drupal.toolbar.init);a("#toolbar a.toggle",b).once("toolbar-toggle").click(function(c){Drupal.toolbar.toggle();a(window).triggerHandler("resize");return false})}};Drupal.toolbar.init=function(){var b=a.cookie("Drupal.toolbar.collapsed");if(b==1){Drupal.toolbar.collapse()}else{Drupal.toolbar.expand()}};Drupal.toolbar.collapse=function(){var b=Drupal.t("Show shortcuts");a("#toolbar div.toolbar-drawer").addClass("collapsed");a("#toolbar a.toggle").removeClass("toggle-active").attr("title",b).html(b);a("body").removeClass("toolbar-drawer").css("paddingTop",Drupal.toolbar.height());a.cookie("Drupal.toolbar.collapsed",1,{path:Drupal.settings.basePath,expires:36500})};Drupal.toolbar.expand=function(){var b=Drupal.t("Hide shortcuts");a("#toolbar div.toolbar-drawer").removeClass("collapsed");a("#toolbar a.toggle").addClass("toggle-active").attr("title",b).html(b);a("body").addClass("toolbar-drawer").css("paddingTop",Drupal.toolbar.height());a.cookie("Drupal.toolbar.collapsed",0,{path:Drupal.settings.basePath,expires:36500})};Drupal.toolbar.toggle=function(){if(a("#toolbar div.toolbar-drawer").hasClass("collapsed")){Drupal.toolbar.expand()}else{Drupal.toolbar.collapse()}};Drupal.toolbar.height=function(){var c=a("#toolbar");var b=c.outerHeight();var e=c.css("box-shadow");var d=(typeof e!=="undefined"&&e!=="none");if(!d&&/DXImageTransform\.Microsoft\.Shadow/.test(c.css("filter"))){b-=c[0].filters.item("DXImageTransform.Microsoft.Shadow").strength}return b}})(jQuery);