const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";

const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");

// Upload file
uploadFile.addEventListener("change", () => {
    // Getting the file
    const file = document.getElementById("upload-file").files[0];

    // Init FileReader
    const reader = new FileReader();

    // Check for file
    if (file) {
        fileName = file.name;
        reader.readAsDataURL(file);
    }

    // Add image to canvas
    reader.addEventListener("load", () => {
        // Create image
        img = new Image();

        // Set image src
        img.src = reader.result;

        // On image load add to canvas
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
        };
    }, false);
});

// EDITING
const minusFactor = 50;

applySlider = (val, id) => {
    if (id == "rangeForBrightness") {
        Caman("#canvas", img, function () {
            this.revert(false);
            this.brightness(val - minusFactor).render();
        });
    } else if (id == "rangeForSaturation") {
        Caman("#canvas", img, function () {
            this.revert(false);
            this.saturation(val - minusFactor).render();
        });
    } else if (id == "rangeForContrast") {
        Caman("#canvas", img, function () {
            this.revert(false);
            this.contrast(val - minusFactor).render();
        });
    } else if (id == "rangeForVibrance") {
        Caman("#canvas", img, function () {
            this.revert(false);
            this.vibrance(val - minusFactor).render();
        });
    }
}

// For Filters

applyFilter = (id) => {
    if (id == "vintage") {
        Caman("#canvas", img, function () {
            this.vintage().render();
        });
    } else if (id == "lomo") {
        Caman("#canvas", img, function () {
            this.lomo().render();
        });
    } else if (id == "clarity") {
        Caman("#canvas", img, function () {
            this.clarity().render();
        });
    } else if (id == "sin city") {
        Caman("#canvas", img, function () {
            this.sinCity().render();
        });
    } else if (id == "cross process") {
        Caman("#canvas", img, function () {
            this.crossProcess().render();
        });
    } else if (id == "pinhole") {
        Caman("#canvas", img, function () {
            this.pinhole().render();
        });
    } else if (id == "nostalgia") {
        Caman("#canvas", img, function () {
            this.nostalgia().render();
        });
    } else if (id == "her majesty") {
        Caman("#canvas", img, function () {
            this.herMajesty().render();
        });
    }
};

// Revert Filters
revertBtn.addEventListener("click", e => {
    Caman("#canvas", img, function () {
        this.revert();
    });
});

// Download Event
downloadBtn.addEventListener("click", () => {
    // Get ext
    const fileExtension = fileName.slice(-4);

    // Init new filename
    let newFilename;

    // Check image type
    if (fileExtension === ".jpg" || fileExtension === ".png") {
        // new filename
        newFilename = fileName.substring(0, fileName.length - 4) + "-edited-by-Imazzz.jpg";
    }

    // Call download
    download(canvas, newFilename);
});

// Download
function download(canvas, filename) {
    // Init event
    let e;
    // Create link
    const link = document.createElement("a");

    // Set props
    link.download = filename;
    link.href = canvas.toDataURL("image/jpeg", 0.8);
    // New mouse event
    e = new MouseEvent("click");
    // Dispatch event
    link.dispatchEvent(e);
}



// // Testing
// setData = (val, id) => {
//     switch (id) {
//         case "rangeForBrightness":
//             Caman("#canvas", img, function () {
//                 this.revert(false);
//                 this.brightness(val - minusFactor).render();
//                 console.log(val, id);

//             });

//         case "rangeForContrast":
//             Caman("#canvas", img, function () {
//                 this.revert(false);
//                 this.contrast(val - minusFactor).render();
//             });

//         case "rangeForSaturation":
//             Caman("#canvas", img, function () {
//                 this.revert(false);
//                 this.saturation(val - minusFactor).render();
//             });

//         case "rangeForVibrance":
//             Caman("#canvas", img, function () {
//                 this.revert(false);
//                 this.vibrance(val - minusFactor).render();
//             });

//     }
// }


// // brightness
// let sliderForBrightness = document.getElementById("rangeForBrightness");
// sliderForBrightness.addEventListener("change", () => {
//     Caman("#canvas", img, function () {
//         this.revert(false);
//         this.brightness(sliderForBrightness.value - minusFactor).render();
//     });
// });

// // Saturation
// let sliderForSaturation = document.getElementById("rangeForSaturation");
// sliderForSaturation.addEventListener("change", () => {
//     Caman("#canvas", img, function () {
//         this.revert(false);
//         this.saturation(sliderForSaturation.value - minusFactor).render();
//     });
// });

// // Contrast
// let sliderForContrast = document.getElementById("rangeForContrast");
// sliderForContrast.addEventListener("change", () => {
//     Caman("#canvas", img, function () {
//         this.revert(false);
//         this.contrast(sliderForContrast.value - minusFactor).render();
//     });
// });

// // Vibrance
// let sliderForVibrance = document.getElementById("rangeForVibrance");
// sliderForVibrance.addEventListener("change", () => {
//     Caman("#canvas", img, function () {
//         this.revert(false);
//         this.vibrance(sliderForVibrance.value - minusFactor).render();
//     });
// });