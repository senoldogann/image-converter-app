var app = angular.module('imageConverterApp', []);

app.controller('ImageConverterController', function($scope) {
    // Metinler (Dil desteği için)
    $scope.texts = {
        title: 'Image Converter',
        uploadImage: 'Upload an Image',
        selectFormat: 'Select a format to convert',
        convertButton: 'Convert Image',
        preview: 'Converted Image Preview',
        downloadButton: 'Download Converted Image'
    };

    $scope.imageFile = null;
    $scope.imageLoaded = false;
    $scope.selectedFormat = 'image/jpeg'; // Varsayılan format JPEG
    $scope.convertedImage = null;

    // Görüntü yükleme
    $scope.loadImage = function(files) {
        var file = files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(event) {
                var img = new Image();
                img.onload = function() {
                    $scope.$apply(function() {
                        $scope.imageLoaded = true;
                        $scope.originalImage = img;
                    });
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    // Resim dönüştürme
    $scope.convertImage = function() {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = $scope.originalImage.width;
        canvas.height = $scope.originalImage.height;
        ctx.drawImage($scope.originalImage, 0, 0);

        // Seçilen formata göre görüntüyü dönüştür
        $scope.convertedImage = canvas.toDataURL($scope.selectedFormat);

        // İndirilebilir hale getir
        document.getElementById('downloadLink').href = $scope.convertedImage;
        document.getElementById('downloadLink').download = 'converted_image.' + ($scope.selectedFormat === 'image/jpeg' ? 'jpg' : 'png');
    };
});
