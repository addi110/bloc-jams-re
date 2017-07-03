var collectionItemTemplate =
     'This text will not be parse as HTML'
+    '<div class="collection-album-container column fourth">'
+ '     <img src="assets/images/album_covers/01.png"/>'
+ '     <div class="collection-album-info caption">'
+ '          <p>'
+ '              <a class="album-name" href="album.html">The Colors</a>'
+ '              <br/>'
+ '              <a href="album.html">Pablo Picasso</a>'
+ '              <br/>'
+ '              X Songs'
+ '              <br/>'
+ '          </p>'
+ '     </div>'
+ '  </div>'
;



window.onload = function () {

    var collectionContainer = document.getElementsByClassName('album-covers')[0];

    collectionContainer.textContent= '';

    for (var i =0; i < 6; i++){
        collectionContainer.textContent += collectionItemTemplate;
    }
}
