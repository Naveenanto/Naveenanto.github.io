/**
 * Created by Naveen Anto on 16/10/14.
 */


angular.module('myAppDirectives', [])
    .directive('myRepeatDirective', function() {
        console.log("Directive");
        return function(scope, element, attrs) {
            if(scope.$last) {
                var self = new mlPushMenu(document.getElementById('mp-menu'), document.getElementById('trigger'));

                self._openMenu();

                console.log(self.level);

              //  if(new TiltSlider)
                  // var slider = new TiltSlider( document.getElementById( 'slideshow' ) );

                $(document).on('click','body',function(){
                    self._resetMenu();
                })
                var wheight = window.innerHeight - ($(".headerContainer").outerHeight()+$(".updates").outerHeight()+10);
                $(".slides").css({'height':(wheight-30)+'px'});

              //  debugger;
            }
        };
    })
    .directive('myMainDirective', function() {
        return function(scope, element, attrs) {
            angular.element(element).css('border','5px solid red');
        };
    })

.directive('compile', ['$compile', function ($compile) {
    return function(scope, element, attrs) {
        var ensureCompileRunsOnce = scope.$watch(
            function(scope) {
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
            },
            function(value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);

                // Use un-watch feature to ensure compilation happens only once.
                ensureCompileRunsOnce();
            }
        );
    };
}]);