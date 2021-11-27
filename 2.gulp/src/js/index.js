window.addEventListener(
    'load',
    function(){
        var div = document.querySelector('div');
        div.addEventListener(
            'click',
            function(){
                alert('被点击了');
            }
        )
    }
)